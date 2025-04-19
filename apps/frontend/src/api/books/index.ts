import { instance } from "../shared/instance";
import { AllBooksResponse } from "./type";

export function fetchAllBooks() {
  return instance.get<AllBooksResponse>("/books");
}
