import * as React from "react";

export default function useDocumentTitle(title) {
  React.useEffect(() => {
    document.title = title;
  }, [title]);
}
