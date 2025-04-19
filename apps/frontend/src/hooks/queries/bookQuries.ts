import { useQuery } from "@tanstack/react-query";
import { bookQueryKey } from "../queryKey";
import { fetchAllBooks } from "@api/books";

export const useBookQueries = () => {
  return useQuery({
    queryKey: bookQueryKey.all.queryKey,
    queryFn: () => fetchAllBooks(),
  });
};
