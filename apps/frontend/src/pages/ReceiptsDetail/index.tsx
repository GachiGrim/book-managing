import Layout from "@components/Layout";
import PageTitle from "@components/PageTitle";
import Book from "../Books/Book";

export default function ReceiptDetail() {
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
      <PageTitle>영수증 상세</PageTitle>
      <div className="bg-white rounded-xl p-4 shadow mb-6">
        <h3 className="font-medium text-lg mb-2">receipt.store</h3>
        <div className="text-sm text-gray-500 mb-4">receipt.date</div>
      </div>
      <h3 className="font-medium text-lg mb-4">구매 도서 목록</h3>
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
