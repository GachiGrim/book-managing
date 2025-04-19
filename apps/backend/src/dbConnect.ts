import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DB_USER,
  process.env.PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    timezone: "+09:00", // 한국 시간(KST),
    dialect: "mariadb",
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

/** 
   * 
  테이블 생성: 정의된 모델에 해당하는 테이블이 데이터베이스에 없으면 새로 생성합니다.
  스키마 동기화: 모델의 속성(필드)과 옵션에 따라 데이터베이스 테이블의 구조를 맞춥니다.
  테이블 수정 옵션: force 옵션을 통해 테이블의 재생성 여부를 결정합니다.
  
  sync({ force: false }) 옵션의 의미:
  
  force: false (기본값): 테이블이 이미 존재하면 그대로 유지하고, 없으면 새로 생성합니다. 기존 데이터는 보존됩니다.
  force: true: 테이블이 이미 존재하더라도 삭제(DROP)하고 새로 생성합니다. 모든 기존 데이터가 삭제되므로 주의해야 합니다.
  
  sync() 메서드는 개발 환경에서는 유용하지만, 프로덕션 환경에서는 데이터 손실 위험이 있으므로 마이그레이션 도구(Sequelize CLI의 migrations)를 사용하는 것이 좋습니다.
   */
// sequelize
//   .sync({ force: true })
//   .then(() => console.log("데이터베이스 테이블이 동기화되었습니다."))
//   .catch((err) => console.error("테이블 동기화 오류:", err));

// 연결 테스트

function dbConnect() {
  sequelize
    .authenticate()
    .then(() => console.log("MariaDB 연결 성공"))
    .catch((err) => console.error("MariaDB 연결 실패:", err));
}

export { dbConnect, sequelize };
