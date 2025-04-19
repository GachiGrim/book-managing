import { BookUIType } from "@ui-types/books";

export type ReceiptUIType = {
  id: number;
  title: string;
  date: string;
  imagePath: string;
  books?: BookUIType[];
};
