import Router from "koa-router";
import { Receipt } from "../model/receipt";
import { Book } from "../model/book";
import { CreateReceiptDTO } from "../dto/CreateReceiptDTO";
import { sequelize } from "../dbConnect";

const router = new Router({
  prefix: "/receipts",
});

router.get("/", async (ctx) => {
  const receipts = await Receipt.findAll();
  ctx.body = { content: receipts };
});

router.post("/", async (ctx) => {
  try {
    const body = ctx.request.body as CreateReceiptDTO;

    const books = body.books;
    const receiptTitle = body.title;
    const imagePath = body.imagePath;

    // 트랜잭션을 사용하여 모든 작업이 함께 성공하거나 실패하도록 보장
    const result = await sequelize.transaction(async (transaction) => {
      // 1. 영수증 먼저 생성
      const receipt = await Receipt.create(
        { title: receiptTitle, imagePath },
        { transaction }
      );

      // 2. 책들을 생성하고 영수증 ID를 외래 키로 설정
      const booksToCreate = books.map((bookDTO) => {
        return {
          title: bookDTO.title,
          isbn: bookDTO.isbn,
          receiptId: receipt.receiptId, // 외래 키 설정
        };
      });

      const createdBooks = await Book.bulkCreate(booksToCreate, {
        transaction,
        fields: ["title", "isbn", "receiptId"],
      });
      return { receipt, books: createdBooks };
    });
    ctx.body = result;
    ctx.status = 200;
  } catch (err) {
    ctx.status = 400;
    ctx.body = {
      errorMessage: "생성실패",
    };
  }
});

router.get("/:id", async (ctx) => {
  try {
    const receipt = await Receipt.findOne({
      where: {
        receipt_id: ctx.params.id,
      },
      include: [
        {
          model: Book,
          as: "books",
          where: {
            receipt_id: ctx.params.id,
          },
          required: false,
        },
      ],
    });

    if (!receipt) {
      ctx.status = 404;
      ctx.body = { error: "존재하지 않는 영수증번호입니다." };
      return;
    }

    ctx.body = receipt;
  } catch (err) {
    ctx.status = 400;
    ctx.body = { error: "요청이 잘못되었습니다." };
  }
});

router.delete("/:id", async (ctx) => {
  try {
    const receiptId = ctx.params.id;

    // 트랜잭션을 사용하여 영수증과 관련된 책들을 함께 삭제
    await sequelize.transaction(async (transaction) => {
      // 1. 관련된 책들 먼저 삭제
      await Book.destroy({
        where: { receiptId },
        transaction,
      });

      // 2. 영수증 삭제
      const deletedCount = await Receipt.destroy({
        where: { receiptId },
        transaction,
      });

      if (deletedCount === 0) {
        ctx.status = 404;
        ctx.body = { error: "존재하지 않는 영수증번호입니다." };
        return;
      }
    });

    ctx.status = 200;
    ctx.body = { message: "영수증이 성공적으로 삭제되었습니다." };
  } catch (err) {
    ctx.status = 400;
    ctx.body = { error: "요청이 잘못되었습니다." };
  }
});

export default router;
