interface Book {
  id: number;
  title: string;
  isbn: string;
  createdAt: string;
  updatedAt: string;
  receiptId: number;
}

export interface AllBooksResponse {
  content: Book[];
}
