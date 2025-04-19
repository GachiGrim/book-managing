// 전체 책 목록 화면
const BookList = () => (
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
      <h2 className="text-xl font-bold">전체 책 목록</h2>
    </div>

    <div className="bg-gray-100 rounded-lg p-2 mb-4 flex">
      <input
        className="flex-grow bg-transparent outline-none"
        placeholder="책 제목, 저자 검색"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>

    <div className="grid grid-cols-1 gap-4">
      {/* {[].map((book) => (
        <div key={book.id} className="bg-white rounded-xl p-4 shadow flex">
          <div className="w-16 h-24 bg-gray-200 rounded flex items-center justify-center mr-4">
            <span className="text-gray-500 text-xs">
              도서
              <br />
              이미지
            </span>
          </div>
          <div className="flex-1">
            <h3 className="font-medium">{book.title}</h3>
            <p className="text-sm text-gray-500">{book.author}</p>
            <div className="mt-2 flex justify-between">
              <p className="text-sm text-gray-500">{book.purchaseDate} 구매</p>
              <p className="font-medium">{book.price.toLocaleString()}원</p>
            </div>
          </div>
        </div>
      ))} */}
    </div>
  </div>
);
