import { PropsWithChildren } from "react";

export default function PageTitle({ children }: PropsWithChildren) {
  return <h2 className="text-xl font-bold mb-6">{children}</h2>;
}
