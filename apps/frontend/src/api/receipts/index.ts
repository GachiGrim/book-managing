import { instance } from "../shared/instance";
import {
  AllReceiptsResponse,
  CreateReceiptParams,
  ReceiptDetailResponse,
} from "./type";

export function fetchAllReceipts(): Promise<AllReceiptsResponse> {
  return instance.get("/receipts");
}

export function fetReceiptDetail(
  receiptId: string
): Promise<ReceiptDetailResponse> {
  return instance.get(`/receipts/${receiptId}`);
}

export function createNewReceipt(params: CreateReceiptParams) {
  return instance.post("/receipts", params);
}
