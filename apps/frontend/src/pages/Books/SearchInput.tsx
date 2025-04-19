interface Props {
  value: string;
  onChange: (v: string) => void;
}

export default function SearchInput({ onChange, value }: Props) {
  return (
    <div className="bg-gray-100 rounded-lg p-2 mb-4 flex">
      <input
        className="flex-grow bg-transparent outline-none"
        placeholder="책 제목, 저자 검색"
        value={value}
        onChange={(e) => onChange(e.target.value)}
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
  );
}
