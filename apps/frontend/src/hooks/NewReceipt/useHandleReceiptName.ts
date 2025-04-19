import { useController, useFormContext } from "react-hook-form";
import { FormTypes } from "src/pages/NewReceipt/type";

export const useHandleReceiptName = () => {
  const { control } = useFormContext<FormTypes>();

  const { field } = useController({ control, name: "receiptName" });

  return {
    value: field.value,
    handleChange: field.onChange,
  };
};
