import { DataTypes, Model } from "sequelize";
import { sequelize } from "../dbConnect";
import { Book } from "./book";

export class Receipt extends Model {
  declare receiptId: number;
  declare paymentDate: Date;
  declare title: string;
  declare createdAt: Date;
  declare books: Book[] | null;
}

Receipt.init(
  {
    receiptId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    paymentDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW, // 현재 시간으로 기본값 설정
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    underscored: true,
  }
);

Receipt.hasMany(Book, {
  foreignKey: "receiptId",
  as: "books",
});
