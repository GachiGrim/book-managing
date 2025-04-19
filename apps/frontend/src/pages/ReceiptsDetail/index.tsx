import Layout from "@components/Layout";
import PageTitle from "@components/PageTitle";
import { useReceiptDetailQuery } from "@hooks/queries/receiptQuries";
import { getStaticImagePath } from "@utils/getStaticImage";
import Book from "../Books/Book";

export default function ReceiptDetail() {
  const { data: receiptDetail } = useReceiptDetailQuery();

  return (
    <Layout>
      <PageTitle>영수증 상세</PageTitle>
      {receiptDetail && (
        <div className="bg-white rounded-xl p-4 shadow mb-6">
          <h3 className="font-medium text-lg mb-2">{receiptDetail.title}</h3>
          <div className="text-sm text-gray-500 mb-4">{receiptDetail.date}</div>
          <img src={getStaticImagePath(receiptDetail.imagePath)} />
        </div>
      )}

      <h3 className="font-medium text-lg mb-4">구매 도서 목록</h3>
      <div className="grid grid-cols-1 gap-4">
        {receiptDetail?.books?.map((book) => (
          <Book
            id={book.id}
            key={book.id}
            purchaseDate={book.purchaseDate}
            title={book.title}
          />
        ))}
      </div>
    </Layout>
  );
}
