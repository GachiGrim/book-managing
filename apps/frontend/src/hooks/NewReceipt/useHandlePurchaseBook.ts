import { useController, useFormContext } from "react-hook-form";
import { FormTypes } from "src/pages/NewReceipt/type";

export const useHandlePurchaseBook = (index: number) => {
  const { control } = useFormContext<FormTypes>();

  const { field: title } = useController({
    control,
    name: `books.${index}.title`,
  });

  return {
    title: title.value,
    handleTitleChange: title.onChange,
  };
};
