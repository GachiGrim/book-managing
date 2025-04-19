import Router from "koa-router";
import { Receipt } from "../model/receipt";
import { Book } from "../model/book";

const router = new Router({
  prefix: "/receipts",
});

router.get("/", async (ctx) => {
  const receipts = await Receipt.findAll();
  ctx.body = { content: receipts };
});

router.get("/:id", async (ctx) => {
  try {
    const receipt = await Receipt.findOne({
      where: {
        id: ctx.params.id,
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

    ctx.body = { receipt, books: (receipt as any)?.books || [] };
  } catch (err) {
    ctx.status = 400;
    ctx.body = { error: "err" };
  }
});

export default router;
