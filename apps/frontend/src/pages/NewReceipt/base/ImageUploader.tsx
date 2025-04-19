import { FC } from "react";

interface Props {
  a?: number;
}

const ImageUploader: FC<Props> = () => {
  return (
    <label className="block text-gray-700 text-sm font-medium mb-2">
      영수증 이미지
      <input
        type="file"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </label>
  );
};

export default ImageUploader;
