import { useFieldArray, useForm } from "react-hook-form";
import { FormTypes } from "src/pages/NewReceipt/type";

export const useHandleNewReceipt = () => {
  const methods = useForm<FormTypes>({
    defaultValues: {
      receiptName: "",
      receiptImagePath: "",
      books: [{ title: "", isbn: "" }],
    },
  });

  const { control } = methods;
  const { fields, append } = useFieldArray({ control, name: "books" });

  function handleAddBookClick() {
    append({ isbn: "", title: "" });
  }

  return {
    methods,
    handleAddBookClick,
    books: fields,
  };
};
