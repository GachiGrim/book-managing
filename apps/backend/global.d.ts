declare namespace NodeJS {
  interface ProcessEnv {
    PORT: string;
    DATABASE: string;
    DB_USER: string;
    PASSWORD: string;
    DB_HOST: string;
    DB_PORT: number;
  }
}

declare module "@koa/multer" {
  import { Context, Middleware } from "koa";

  namespace multer {
    interface File {
      /** 필드명 */
      fieldname: string;
      /** 원본 파일명 */
      originalname: string;
      /** 인코딩 타입 */
      encoding: string;
      /** 파일 MIME 타입 */
      mimetype: string;
      /** 저장된 디렉토리 경로 */
      destination: string;
      /** 저장된 파일명 */
      filename: string;
      /** 파일 경로 */
      path: string;
      /** 파일 크기 (bytes) */
      size: number;
    }

    interface DiskStorageOptions {
      /** 파일이 저장될 디렉토리를 결정하는 함수 */
      destination?: (
        req: Context["req"],
        file: Express.Multer.File,
        callback: (error: Error | null, destination: string) => void
      ) => void;
      /** 파일명을 결정하는 함수 */
      filename?: (
        req: Context["req"],
        file: Express.Multer.File,
        callback: (error: Error | null, filename: string) => void
      ) => void;
    }

    interface MemoryStorageOptions {}

    interface MulterOptions {
      /** 파일이 저장될 디렉토리 */
      dest?: string;
      /** 저장소 엔진 */
      storage?: any;
      /** 파일 크기 제한 */
      limits?: {
        /** 파일 필드명의 최대 길이 */
        fieldNameSize?: number;
        /** 필드값의 최대 길이 */
        fieldSize?: number;
        /** 필드의 최대 개수 */
        fields?: number;
        /** 파일의 최대 크기 (bytes) */
        fileSize?: number;
        /** 파일의 최대 개수 */
        files?: number;
        /** multipart 폼의 최대 크기 */
        parts?: number;
        /** header의 최대 개수 */
        headerPairs?: number;
      };
      /** 파일 필터링 함수 */
      fileFilter?: (
        req: Context["req"],
        file: Express.Multer.File,
        callback: (error: Error | null, acceptFile: boolean) => void
      ) => void;
      /** 파일 키 이름 */
      keyName?: string;
    }

    interface Instance {
      /** 단일 파일 업로드를 처리하는 미들웨어 */
      single(name: string): Middleware;
      /** 다중 파일 업로드를 처리하는 미들웨어 (같은 필드명) */
      array(name: string, maxCount?: number): Middleware;
      /** 다중 파일 업로드를 처리하는 미들웨어 (다른 필드명) */
      fields(fields: Array<{ name: string; maxCount?: number }>): Middleware;
      /** 파일 없는 필드만 처리하는 미들웨어 */
      none(): Middleware;
      /** 모든 형태의 폼을 처리하는 미들웨어 */
      any(): Middleware;
    }

    interface DiskStorage {
      _handleFile: (
        req: Context["req"],
        file: Express.Multer.File,
        callback: (error: Error | null, info?: Partial<File>) => void
      ) => void;
      _removeFile: (
        req: Context["req"],
        file: File,
        callback: (error: Error | null) => void
      ) => void;
    }

    interface MemoryStorage {
      _handleFile: (
        req: Context["req"],
        file: Express.Multer.File,
        callback: (error: Error | null, info?: Partial<File>) => void
      ) => void;
      _removeFile: (
        req: Context["req"],
        file: File,
        callback: (error: Error | null) => void
      ) => void;
    }
  }

  function multer(options?: multer.MulterOptions): multer.Instance;

  namespace multer {
    function diskStorage(
      options: multer.DiskStorageOptions
    ): multer.DiskStorage;
    function memoryStorage(
      options?: multer.MemoryStorageOptions
    ): multer.MemoryStorage;
  }

  export = multer;
}
