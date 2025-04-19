import Layout from "@components/Layout";
import MoveLink from "./MoveLink";
import BookIcon from "./icons/BookIcon";
import ReceiptIcon from "./icons/ReceiptIcon";

const Home = () => {
  return (
    <Layout>
      <h2 className="text-xl font-bold mb-6">내 도서구매 기록</h2>
      <div className="grid grid-cols-1 gap-4">
        <MoveLink to="/books" icon={<BookIcon />} title="전체 책 목록" />
        <MoveLink to="/receipts" icon={<ReceiptIcon />} title="영수증 목록" />
      </div>
    </Layout>
  );
};

export default Home;
