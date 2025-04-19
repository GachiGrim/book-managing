export type FileUploadResponse = {
  success: boolean;
  message: string;
  data: {
    filename: string;
    originalName: string;
    mimetype: string;
    size: number;
    path: string;
  };
};
