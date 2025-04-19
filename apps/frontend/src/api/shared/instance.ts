import axios from "axios";

// 커스텀 axios 인스턴스 타입 정의

export const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer YOUR_TOKEN",
  },
});

// 응답 인터셉터 설정
instance.interceptors.response.use(
  (response) => {
    // 성공적인 응답일 때 data 속성만 반환
    return response.data;
  },
  (error) => {
    // 에러 발생 시 에러 그대로 반환하여 처리할 수 있게 함
    return Promise.reject(error);
  }
);
