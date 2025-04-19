import { uploadImageFile } from "@api/upload";
import { getStaticImagePath } from "@utils/getStaticImage";
import { ChangeEvent, FC } from "react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const ImageUploader: FC<Props> = ({ onChange, value }) => {
  const handleImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const { data } = await uploadImageFile(file);
      onChange(data.path);
    }
  };

  const resetImage = () => {
    onChange("");
  };

  return (
    <label className="block text-gray-700 text-sm font-medium mb-2">
      영수증 이미지
      <div className="flex flex-col items-center w-full max-w-md mx-auto">
        <div
          className={`w-full h-64 border-2 border-dashed rounded-lg flex flex-col items-center justify-center p-4 mt-4 transition-colors ${"border-gray-300"}`}
        >
          {!value ? (
            <>
              <svg
                className="w-12 h-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
              <p className="mt-2 text-sm text-gray-500">
                이미지를 선택해주세요.
              </p>
              <label className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 cursor-pointer">
                파일 선택하기
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </label>
            </>
          ) : (
            <div className="relative w-full h-full">
              <img
                src={getStaticImagePath(value)}
                alt="이미지 미리보기"
                className="w-full h-full object-contain"
              />
              <button
                onClick={resetImage}
                className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </label>
  );
};

export default ImageUploader;
