import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-gray-50 min-h-screen pb-20 w-full md:w-[768px] p-8">
        {children}
      </div>
    </div>
  );
}
