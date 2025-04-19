import { useState } from "react";
import Layout from "@components/Layout";
import PageTitle from "@components/PageTitle";
import { useAllBooksQuery } from "@hooks/queries/bookQuries";

import SearchInput from "./SearchInput";
import Book from "./Book";

export default function Books() {
  const [searchInput, setSearchInput] = useState("");
  const { data: books } = useAllBooksQuery({ searchInput });

  return (
    <Layout>
      <PageTitle>전체 책 목록</PageTitle>
      <SearchInput value={searchInput} onChange={setSearchInput} />
      <div className="grid grid-cols-1 gap-4">
        {books?.map(({ id, purchaseDate, title }) => (
          <Book key={id} id={id} purchaseDate={purchaseDate} title={title} />
        ))}
      </div>
    </Layout>
  );
}
