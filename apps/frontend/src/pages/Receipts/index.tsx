import Layout from "@components/Layout";
import PageTitle from "@components/PageTitle";
import Receipt from "./Receipt";

export default function Receipts() {
  const receipts = [
    {
      id: 1,
      store: "교보문고 광화문점",
      date: "2025-03-15",
    },
    {
      id: 2,
      store: "영풍문고 종로점",
      date: "2025-03-25",
    },
    {
      id: 3,
      store: "알라딘 중고서점",
      date: "2025-04-10",
    },
  ];

  return (
    <Layout>
      <PageTitle>전체 영수증 목록</PageTitle>
      <div className="grid grid-cols-1 gap-4">
        {receipts.map((receipt) => (
          <Receipt
            id={receipt.id}
            key={receipt.id}
            date={receipt.date}
            title={receipt.store}
          />
        ))}
      </div>
    </Layout>
  );
}
