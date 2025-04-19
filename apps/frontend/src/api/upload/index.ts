import { instance } from "@api/shared/instance";
import { FileUploadResponse } from "./type";

export function uploadImageFile(file: File): Promise<FileUploadResponse> {
  const formData = new FormData();
  formData.append("image", file);

  return instance.post("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}
