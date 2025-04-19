interface BookDTO {
  title: string;
  isbn: string;
}

export interface CreateReceiptDTO {
  /** 영수증 이름 */
  title: string;
  books: BookDTO[];
}
