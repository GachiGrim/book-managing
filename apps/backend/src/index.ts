import Koa from "koa";
import Router from "koa-router";
import bodyParser from "koa-bodyparser";
import { dbConnect } from "./dbConnect";
import { Receipt } from "./model/receipt";

const app = new Koa();
const router = new Router();

// 미들웨어
app.use(bodyParser());
dbConnect();

// 라우트
router.get("/", async (ctx) => {
  ctx.body = { message: "Hello from Koa Backend!" };
});

router.get("/receipt", async (ctx) => {
  try {
    const receipts = await Receipt.findAll();
    ctx.body = receipts;
  } catch (err) {
    console.log(err);
    ctx.status = 400;
    ctx.body = { error: "에러" };
  }
});

// 라우터 설정
app.use(router.routes()).use(router.allowedMethods());

// 서버 시작
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
