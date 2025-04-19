import { FormProvider } from "react-hook-form";
import Layout from "@components/Layout";
import PageTitle from "@components/PageTitle";
import { useHandleNewReceipt } from "@hooks/NewReceipt/useHandleNewReceipt";

import ImageUploader from "./base/ImageUploader";
import ReceiptName from "./fields/ReceiptName";
import PurchaseBook from "./fields/PurchaseBook";

export default function NewReceipt() {
  const { books, handleAddBookClick, methods } = useHandleNewReceipt();

  return (
    <Layout>
      <PageTitle>영수증 등록</PageTitle>
      <div className="p-4">
        <FormProvider {...methods}>
          <form onSubmit={() => {}}>
            {/* 영수증 기본 정보 */}
            <div className="bg-white rounded-xl p-4 shadow mb-6">
              <ReceiptName />
              <div className="mb-4">
                <ImageUploader />
              </div>
            </div>
            {/* 책 검색 및 추가 */}
            <div className="bg-white rounded-xl p-4 shadow mb-6">
              <h3 className="font-medium text-lg mb-4">구매한 도서</h3>
              {books.map((book, index) => (
                <PurchaseBook key={book.id} index={index} />
              ))}
            </div>
            {/* 제출 버튼 */}
            <div className="grid grid-cols-1 gap-1">
              <button
                type="button"
                className="w-full bg-green-400 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-md transition duration-200"
                onClick={handleAddBookClick}
              >
                도서 목록 추가하기
              </button>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-md transition duration-200"
              >
                영수증 등록하기
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </Layout>
  );
}
