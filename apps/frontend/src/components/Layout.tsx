import { useIsMutating } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import Loading from "./Loading";

export default function Layout({ children }: PropsWithChildren) {
  const isMutating = useIsMutating();

  return (
    <div className="flex items-center justify-center">
      <div className="bg-gray-50 min-h-screen pb-20 w-full md:w-[768px] p-8">
        {children}
      </div>
      {isMutating > 0 && <Loading />}
    </div>
  );
}
