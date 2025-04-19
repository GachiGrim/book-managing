import Router from "koa-router";
import { Book } from "../model/book";
const router = new Router({
  prefix: "/books",
});

router.get("/", async (ctx) => {
  const books = await Book.findAll();
  ctx.body = { content: books };
});

export default router;
