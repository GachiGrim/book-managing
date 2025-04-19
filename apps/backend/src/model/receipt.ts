import { DataTypes, Model } from "sequelize";
import { sequelize } from "../dbConnect";
import { Book } from "./book";

export class Receipt extends Model {
  declare receiptId: string;
  declare paymentDate: Date;
  declare title: string;
  declare createdAt: Date;
  declare books: Book[] | null;
}

Receipt.init(
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
    sequelize,
    timestamps: false,
    updatedAt: false,
    underscored: true,
  }
);

Receipt.hasMany(Book, {
  foreignKey: "receiptId",
  as: "books",
});
