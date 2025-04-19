import { DataTypes } from "sequelize";
import { sequelize } from "../dbConnect";

export const Book = sequelize.define("books", {
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
      key: "receipt_id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
});
