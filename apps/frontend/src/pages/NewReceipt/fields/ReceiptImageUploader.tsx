import ImageUploader from "../base/ImageUploader";
import { useHandleReceiptImagePath } from "@hooks/NewReceipt/useHandleReceiptImagePath";

const ReceiptImageUploader = () => {
  const { handleChange, value } = useHandleReceiptImagePath();

  return (
    <div className="mb-4">
      <ImageUploader value={value} onChange={handleChange} />
    </div>
  );
};

export default ReceiptImageUploader;
