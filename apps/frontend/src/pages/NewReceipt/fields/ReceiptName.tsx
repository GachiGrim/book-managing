import { useHandleReceiptName } from "@hooks/NewReceipt/useHandleReceiptName";
import Input from "../base/Input";

const ReceiptName = () => {
  const { value, handleChange } = useHandleReceiptName();
  return (
    <div className="mb-4">
      <Input
        label="영수증 이름"
        placeholder="예: 교보문고 광화문점 4월 22일 16만원 구매"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default ReceiptName;
