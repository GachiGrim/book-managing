// 전체 영수증 목록 화면
const ReceiptList = () => (
  <div className="p-4">
    <div className="flex items-center mb-6">
      <button className="mr-4" onClick={() => {}}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </button>
      <h2 className="text-xl font-bold">전체 영수증 목록</h2>
    </div>

    <div className="grid grid-cols-1 gap-4">
      {/* {[].map((receipt) => (
        <div
          key={receipt.id}
          className="bg-white rounded-xl p-4 shadow"
          onClick={() => {}}
        >
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-medium">{receipt.store}</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="text-sm text-gray-500 mb-2">{receipt.date}</div>
          <div className="flex justify-between">
            <div className="text-sm">
              <span className="text-gray-500">구매 도서: </span>
              <span>{receipt.books.length}권</span>
            </div>
            <div className="font-medium">
              {receipt.totalAmount.toLocaleString()}원
            </div>
          </div>
        </div>
      ))} */}
    </div>
  </div>
);
