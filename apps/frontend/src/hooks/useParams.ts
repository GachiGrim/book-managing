import { useParams as _useParams } from "react-router-dom";

type Params = {
  id: string;
};

export function useParams(): Params {
  const params = _useParams();

  return {
    id: params.id ?? "",
  };
}
