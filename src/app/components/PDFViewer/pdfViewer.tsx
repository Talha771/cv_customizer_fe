import React from "react";
import styles from "./pdfViewer.module.scss";

export const pdfViewer = (src: string) => {
  console.log(src);
  return (
    <div className={styles.pdfViewer}>
      <iframe
        width="100%"
        height="600" 
        src={src}
        title="Custom Resume PDF"
      ></iframe>

    </div>
  );
};
