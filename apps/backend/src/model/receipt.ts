import { DataTypes } from "sequelize";
import { sequelize } from "../dbConnect";

export const Receipt = sequelize.define(
  "receipts",
  {
    receiptId: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    paymentDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.TIME,
    },
  },
  {
    timestamps: false,
    updatedAt: false,
    underscored: true,
  }
);
