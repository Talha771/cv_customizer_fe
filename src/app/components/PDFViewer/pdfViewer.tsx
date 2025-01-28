import React from "react";
import styles from "./pdfViewer.module.scss";

export const pdfViewer = () => {
  return (
    <div className={styles.pdfViewer}>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/tmg6d3T_T6Q"
        title="GeeksforGeeks"
      ></iframe>
    </div>
  );
};
