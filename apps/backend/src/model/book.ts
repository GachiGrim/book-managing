import { DataTypes, ForeignKey, Model } from "sequelize";
import { sequelize } from "../dbConnect";

export class Book extends Model {
  declare id: number;
  declare title: string;
  declare isbn: string;
  declare imagePath: string;
  declare createdAt: Date | null;
  declare updatedAt: Date | null;
  declare receiptId: ForeignKey<number> | null;
}

Book.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isbn: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    receiptId: {
      type: DataTypes.INTEGER,
      references: {
        model: "receipts",
        key: "receipt_id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    },
  },
  {
    sequelize,
    underscored: true,
  }
);
