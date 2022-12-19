import { useEffect } from "react";

export const useDocumentTitle = (title = "Saimon | Web Agency") => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};
