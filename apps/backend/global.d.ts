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
