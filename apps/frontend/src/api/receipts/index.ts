import { instance } from "../shared/instance";
import { AllReceiptsResponse, ReceiptDetailResponse } from "./type";

export function fetchAllReceipts() {
  return instance.get<AllReceiptsResponse>("/receipts");
}

export function fetReceiptDetail(receiptId: string) {
  return instance.get<ReceiptDetailResponse>(`/receipts/${receiptId}`);
}
