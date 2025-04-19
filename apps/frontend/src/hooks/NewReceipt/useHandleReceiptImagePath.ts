import { useController, useFormContext } from "react-hook-form";
import { FormTypes } from "src/pages/NewReceipt/type";

export const useHandleReceiptImagePath = () => {
  const { control } = useFormContext<FormTypes>();
  const { field } = useController({ control, name: "receiptImagePath" });

  return {
    value: field.value,
    handleChange: field.onChange,
  };
};
