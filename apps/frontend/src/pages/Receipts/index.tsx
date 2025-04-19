import Layout from "@components/Layout";
import PageTitle from "@components/PageTitle";
import { useAllReceiptsQuery } from "@hooks/queries/receiptQuries";

import Receipt from "./Receipt";

export default function Receipts() {
  const { data: receipts } = useAllReceiptsQuery();

  return (
    <Layout>
      <PageTitle>전체 영수증 목록</PageTitle>
      <div className="grid grid-cols-1 gap-4">
        {receipts?.map((receipt) => (
          <Receipt
            id={receipt.id}
            key={receipt.id}
            date={receipt.date}
            title={receipt.title}
          />
        ))}
      </div>
    </Layout>
  );
}
