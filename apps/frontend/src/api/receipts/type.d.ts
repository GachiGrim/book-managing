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

export interface CreateReceiptParams {
  title: string;
  imagePath: string;
  books: { title: string; isbn: string }[];
}
