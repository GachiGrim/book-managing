import { fetchAllReceipts, fetReceiptDetail } from "@api/receipts";
import { receiptQueryKey } from "@hooks/queryKey";
import { ReceiptUIType } from "@ui-types/receipts";
import { useQuery } from "@tanstack/react-query";

import dayjs from "dayjs";
import { useParams } from "@hooks/useParams";

export const useAllReceiptsQuery = () => {
  return useQuery({
    queryKey: receiptQueryKey.all.queryKey,
    queryFn: fetchAllReceipts,
    select: (response): ReceiptUIType[] => {
      return response.content.map((item) => ({
        id: item.receiptId,
        title: item.title,
        date: dayjs(item.paymentDate).format("YYYY-MM-DD"),
        imagePath: item.imagePath,
      }));
    },
  });
};

export const useReceiptDetailQuery = () => {
  const { id: receiptId } = useParams();

  return useQuery({
    queryKey: receiptQueryKey.detail(receiptId).queryKey,
    queryFn: () => fetReceiptDetail(receiptId),
    select: (response): ReceiptUIType => {
      return {
        id: response.receiptId,
        title: response.title,
        date: dayjs(response.paymentDate).format("YYYY-MM-DD"),
        imagePath: response.imagePath,
        books: response.books.map((item) => ({
          id: item.id,
          purchaseDate: dayjs(item.createdAt).format("YYYY-MM-DD"),
          title: item.title,
        })),
      };
    },
  });
};
