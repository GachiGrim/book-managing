import { Link } from "react-router-dom";

interface Props {
  id: number;
  title: string;
  date: string;
}

export default function Receipt({ id, date, title }: Props) {
  return (
    <Link to={`/receipts/${id}`}>
      <div className="bg-white rounded-xl p-4 shadow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-medium">{title}</h3>
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
        <div className="text-sm text-gray-500 mb-2">{date}</div>
      </div>
    </Link>
  );
}
