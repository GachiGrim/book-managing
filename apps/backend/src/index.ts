import Koa from "koa";
import path from "path";
import Router from "koa-router";
import bodyParser from "koa-bodyparser";
import serve from "koa-static";
import mount from "koa-mount";
import { dbConnect } from "./dbConnect";
import BookRouter from "./routes/books";
import ReceiptRouter from "./routes/receipts";
import UploadRouter from "./routes/upload";
import { koaSwagger } from "koa2-swagger-ui";
import swaggerJsdoc from "swagger-jsdoc";
import { cwd } from "process";

const app = new Koa();
const router = new Router();

// 미들웨어
app.use(bodyParser());
app.use(mount("/static/uploads", serve(path.join(cwd(), "uploads"))));
dbConnect();

// Swagger 문서 옵션 설정
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "도서-영수증 API 문서",
      version: "1.0.0",
      description: "도서-영수증 API 문서",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "개발 서버",
      },
    ],
  },
  // API 경로 지정 (JSDoc 주석이 있는 파일들)
  apis: ["src/api-docs/*.yaml"],
};

// 라우트
router.get("/", async (ctx) => {
  ctx.body = { message: "Hello from Koa Backend!" };
});

// Swagger 스펙 생성
const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Swagger UI 설정
router.get("/swagger.json", async (ctx) => {
  ctx.body = swaggerSpec;
});

// Swagger UI 경로 설정
router.get(
  "/api-docs",
  koaSwagger({
    routePrefix: false,
    swaggerOptions: {
      url: "/swagger.json",
    },
  })
);

router.use(BookRouter.routes()).use(BookRouter.allowedMethods());
router.use(ReceiptRouter.routes()).use(ReceiptRouter.allowedMethods());
router.use(UploadRouter.routes()).use(UploadRouter.allowedMethods());

// 라우터 설정
app.use(router.routes()).use(router.allowedMethods());

// 서버 시작
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
