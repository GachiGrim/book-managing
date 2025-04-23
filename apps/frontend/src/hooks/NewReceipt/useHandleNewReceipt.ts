import { useCreateReceipt } from "@hooks/queries/receiptQuries";
import { toastUtil } from "@utils/toast";
import { useFieldArray, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FormTypes } from "src/pages/NewReceipt/type";

export const useHandleNewReceipt = () => {
  const navigate = useNavigate();
  const methods = useForm<FormTypes>({
    defaultValues: {
      receiptName: "",
      receiptImagePath: "",
      books: [{ title: "" }],
    },
  });
  const { control } = methods;
  const { fields, append } = useFieldArray({ control, name: "books" });

  const { handleCreateReceipt } = useCreateReceipt();

  function handleAddBookClick() {
    append({ title: "" });
  }

  async function submit(data: FormTypes) {
    if (!data.receiptName) {
      toastUtil.alert.error("영수증 이름을 입력해주세요.");
      return;
    }
    await handleCreateReceipt({
      title: data.receiptName,
      imagePath: data.receiptImagePath,
      books: data.books
        .filter((item) => Boolean(item.title))
        .map((item) => ({ ...item, isbn: "" })),
    });
    toastUtil.alert.success("영수증 등록에 성공했습니다.");
    navigate("/");
  }

  return {
    methods,
    handleAddBookClick,
    books: fields,
    handleSubmit: methods.handleSubmit(submit),
  };
};
