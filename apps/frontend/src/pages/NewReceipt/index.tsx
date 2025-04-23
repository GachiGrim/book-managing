import { FormProvider } from "react-hook-form";
import Layout from "@components/Layout";
import PageTitle from "@components/PageTitle";
import { useHandleNewReceipt } from "@hooks/NewReceipt/useHandleNewReceipt";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef } from "react";

import ReceiptName from "./fields/ReceiptName";
import PurchaseBook from "./fields/PurchaseBook";
import ReceiptImageUploader from "./fields/ReceiptImageUploader";

export default function NewReceipt() {
  const { books, handleAddBookClick, methods, handleSubmit } =
    useHandleNewReceipt();
  const lastBookRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lastBookRef.current) {
      const input = lastBookRef.current.querySelector("input");
      if (input) {
        input.focus();
      }
    }
  }, [books.length]);

  return (
    <Layout>
      <PageTitle>영수증 등록</PageTitle>
      <div className="p-4">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit}>
            {/* 영수증 기본 정보 */}
            <div className="bg-white rounded-xl p-4 shadow mb-6">
              <ReceiptName />
              <ReceiptImageUploader />
            </div>
            {/* 책 검색 및 추가 */}
            <div className="bg-white rounded-xl p-4 shadow mb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium text-lg">구매한 도서</h3>
                <button
                  type="button"
                  className="flex items-center gap-1 bg-green-400 hover:bg-green-500 text-white font-medium py-2 px-3 rounded-md transition duration-200"
                  onClick={handleAddBookClick}
                >
                  <PlusIcon className="h-5 w-5" />
                  <span>추가</span>
                </button>
              </div>
              {books.map((book, index) => (
                <div
                  key={book.id}
                  ref={index === books.length - 1 ? lastBookRef : null}
                >
                  <PurchaseBook index={index} />
                </div>
              ))}
            </div>
            {/* 제출 버튼 */}
            <div className="grid grid-cols-1 gap-1">
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
