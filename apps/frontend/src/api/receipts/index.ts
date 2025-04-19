import { instance } from "../shared/instance";
import { AllReceiptsResponse, ReceiptDetailResponse } from "./type";

export function fetchAllReceipts(): Promise<AllReceiptsResponse> {
  return instance.get("/receipts");
}

export function fetReceiptDetail(
  receiptId: string
): Promise<ReceiptDetailResponse> {
  return instance.get(`/receipts/${receiptId}`);
}
