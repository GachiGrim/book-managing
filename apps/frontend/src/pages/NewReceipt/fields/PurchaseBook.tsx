import { FC } from "react";
import Input from "../base/Input";
import { useHandlePurchaseBook } from "@hooks/NewReceipt/useHandlePurchaseBook";

interface Props {
  index: number;
}
const PurchaseBook: FC<Props> = ({ index }) => {
  const { handleIsbnChange, handleTitleChange, isbn, title } =
    useHandlePurchaseBook(index);
  return (
    <div className="grid grid-cols-2 gap-4">
      <Input
        label="도서 이름"
        placeholder="책 제목"
        value={title}
        onChange={handleTitleChange}
      />
      <Input
        label="ISBN코드"
        placeholder="9788932024639"
        value={isbn}
        onChange={handleIsbnChange}
      />
    </div>
  );
};

export default PurchaseBook;
