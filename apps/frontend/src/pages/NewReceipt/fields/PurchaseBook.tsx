import { FC } from "react";
import Input from "../base/Input";
import { useHandlePurchaseBook } from "@hooks/NewReceipt/useHandlePurchaseBook";

interface Props {
  index: number;
}
const PurchaseBook: FC<Props> = ({ index }) => {
  const { handleTitleChange, title } = useHandlePurchaseBook(index);
  return (
    <div className="grid grid-cols-1 gap-4">
      <Input
        label="도서 이름"
        placeholder="책 제목"
        value={title}
        onChange={handleTitleChange}
      />
    </div>
  );
};

export default PurchaseBook;
