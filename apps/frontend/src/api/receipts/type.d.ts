import { Book } from "../books/type";

interface Receipt {
  receiptId: number;
  paymentDate: string;
  title: string;
  createdAt: string;
  imagePath: string;
}

export interface AllReceiptsResponse {
  content: Receipt[];
}

export type ReceiptDetailResponse = Receipt & {
  books: Book[];
};
