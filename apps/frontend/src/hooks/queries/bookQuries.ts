import { useQuery } from "@tanstack/react-query";
import { BookUIType } from "@ui-types/books";
import { fetchAllBooks } from "@api/books";
import { bookQueryKey } from "../queryKey";

import dayjs from "dayjs";

interface Props {
  searchInput: string;
}

export const useAllBooksQuery = ({ searchInput }: Props) => {
  return useQuery({
    queryKey: bookQueryKey.all.queryKey,
    queryFn: fetchAllBooks,
    select: (response): BookUIType[] =>
      response.content
        .filter((item) => item.title.includes(searchInput))
        .map((item) => {
          return {
            id: item.id,
            purchaseDate: dayjs(item.createdAt).format("YYYY-MM-DD"),
            title: item.title,
          } satisfies BookUIType;
        }),
  });
};
