"use client";
import React, { useState } from "react";
import styles from "./page.module.scss";
import { pdfViewer } from "../components/PDFViewer/pdfViewer";
export default function Page() {
    console.log(process.env.BACKEND_BASE_URL)
    const [pdfAvailable,setPdfAvailable]= useState(0)
  return (
    <div className={styles.body}>
      <div className={styles.descriptionEntry}>
        <div>
          <input placeholder="Enter Job Description or Drag .txt or pdf file here" />
        </div>
        <div>OR</div>
        <div>
          <input placeholder="Enter list of languages, comma seperated" />
          <input placeholder="Enter list of TOOLS, comma seperated" />
        </div>
        <div>
            <button type="button" onClick={()=>{
                console.log("Generate CV Pressed")
                setPdfAvailable(1)
            }}>
                Generate CV
            </button>
        </div>
      </div>
      {pdfAvailable ? <div className={styles.pdfViewer}>{pdfViewer()}</div>:""}
    </div>
  );
}
