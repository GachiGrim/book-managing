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
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isbn: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imagePath: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.TIME,
    },
    updatedAt: {
      type: DataTypes.TIME,
    },
    receiptId: {
      type: DataTypes.INTEGER,
      references: {
        model: "receipts",
        key: "receiptId",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    },
  },
  {
    sequelize,
    timestamps: false,
    updatedAt: false,
    underscored: true,
  }
);
