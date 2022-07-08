import { useEffect, useState } from "react";

const useDocumentTitle = (title) => {
  const [documentTitle, setDocumentTitle] = useState(title);

  useEffect(() => {
    document.title = documentTitle;
  }, [documentTitle]);

  return setDocumentTitle;
};

export { useDocumentTitle };
