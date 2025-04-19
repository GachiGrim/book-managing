import Layout from "@components/Layout";
import PageTitle from "@components/PageTitle";

import MoveLink from "./MoveLink";
import BookIcon from "./icons/BookIcon";
import ReceiptIcon from "./icons/ReceiptIcon";
import SaveIcon from "./icons/SaveIcon";

const Home = () => {
  return (
    <Layout>
      <PageTitle>내 도서구매 기록</PageTitle>
      <div className="grid grid-cols-1 gap-4">
        <MoveLink to="/books" icon={<BookIcon />} title="전체 책 목록" />
        <MoveLink to="/receipts" icon={<ReceiptIcon />} title="영수증 목록" />
        <MoveLink to="/new-receipt" icon={<SaveIcon />} title="영수증 등록" />
      </div>
    </Layout>
  );
};

export default Home;
