import Koa from "koa";
import Router from "koa-router";
import bodyParser from "koa-bodyparser";

const app = new Koa();
const router = new Router();

// 미들웨어
app.use(bodyParser());

// 라우트
router.get("/", async (ctx) => {
  ctx.body = { message: "Hello from Koa Backend!" };
});

// 라우터 설정
app.use(router.routes()).use(router.allowedMethods());

// 서버 시작
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
