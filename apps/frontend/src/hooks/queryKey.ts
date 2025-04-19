import { createQueryKeys } from "@lukemorales/query-key-factory";

export const bookQueryKey = createQueryKeys("books", {
  all: null,
});

export const receiptQueryKey = createQueryKeys("receipts", {
  all: null,
  detail: (id: string) => [id],
});
