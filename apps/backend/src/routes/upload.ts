import Router from "koa-router";
import multer from "@koa/multer";
import path from "path";
import fs from "fs";
import { cwd } from "process";

// 이미지 저장 경로 설정
const uploadDir = path.join(cwd(), "uploads");

// 폴더가 없으면 생성
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer 스토리지 설정
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    // 고유한 파일명 생성 (타임스탬프 + 원본 확장자)
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, uniqueSuffix + ext);
  },
});

// Multer 업로드 설정
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB 제한
  },
});

const router = new Router({
  prefix: "/upload",
});

router.post("/", upload.single("image"), async (ctx) => {
  try {
    // 업로드 성공 응답
    ctx.body = {
      success: true,
      message: "이미지 업로드 성공",
      data: {
        filename: (ctx as any).file.filename,
        originalName: (ctx as any).file.originalname,
        mimetype: (ctx as any).file.mimetype,
        size: (ctx as any).file.size,
        path: `/uploads/${(ctx as any).file.filename}`, // 클라이언트에서 접근 가능한 경로
      },
    };
  } catch (error) {
    ctx.status = 500;
    ctx.body = { success: false, message: `업로드 실패` };
  }
});

export default router;
