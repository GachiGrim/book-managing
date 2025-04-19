import Layout from "@components/Layout";
import PageTitle from "@components/PageTitle";
import { useState } from "react";
import SearchInput from "./SearchInput";
import Book from "./Book";
import { useBookQueries } from "@hooks/queries/bookQuries";

export default function Books() {
  const [searchInput, setSearchInput] = useState("");

  const { data } = useBookQueries();
  console.log("data", data);

  console.log(data);

  const books = [
    {
      id: 1,
      title: "해리 포터와 마법사의 돌",
      author: "J.K. 롤링",
      price: 15000,
      purchaseDate: "2025-03-15",
    },
    {
      id: 2,
      title: "아몬드",
      author: "손원평",
      price: 12000,
      purchaseDate: "2025-03-20",
    },
    {
      id: 3,
      title: "소나기",
      author: "황순원",
      price: 8000,
      purchaseDate: "2025-03-25",
    },
    {
      id: 4,
      title: "데미안",
      author: "헤르만 헤세",
      price: 13000,
      purchaseDate: "2025-03-30",
    },
    {
      id: 5,
      title: "사피엔스",
      author: "유발 하라리",
      price: 19800,
      purchaseDate: "2025-04-05",
    },
    {
      id: 6,
      title: "코스모스",
      author: "칼 세이건",
      price: 18000,
      purchaseDate: "2025-04-10",
    },
  ];

  return (
    <Layout>
      <PageTitle>전체 책 목록</PageTitle>
      <SearchInput value={searchInput} onChange={setSearchInput} />
      <div className="grid grid-cols-1 gap-4">
        {books.map((book) => (
          <Book
            key={book.id}
            purchaseDate={book.purchaseDate}
            title={book.title}
          />
        ))}
      </div>
    </Layout>
  );
}
