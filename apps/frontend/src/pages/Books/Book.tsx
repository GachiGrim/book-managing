interface Props {
  title: string;
  purchaseDate: string;
}

export default function Book({ purchaseDate, title }: Props) {
  return (
    <div className="bg-white rounded-xl p-4 shadow flex">
      <div className="w-16 h-24 bg-gray-200 rounded flex items-center justify-center mr-4">
        <span className="text-gray-500 text-xs">
          도서
          <br />
          이미지
        </span>
      </div>
      <div className="flex-1">
        <h3 className="font-medium">{title}</h3>
        <div className="mt-2 flex justify-between">
          <p className="text-sm text-gray-500">{purchaseDate} 구매</p>
        </div>
      </div>
    </div>
  );
}
