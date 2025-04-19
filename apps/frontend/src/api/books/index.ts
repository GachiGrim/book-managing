import { instance } from "../shared/instance";
import { AllBooksResponse } from "./type";

export function fetchAllBooks(): Promise<AllBooksResponse> {
  return instance.get("/books");
}
