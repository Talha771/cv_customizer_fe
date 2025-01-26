'use client'
import React from "react" 
import styles from "./page.module.scss"

export default function Page() {
    return (
        <div className={styles.body}>
            <div className={styles.descriptionEntry}> 
                <div>
                    <input placeholder='Enter Job Description or Drag .txt or pdf file here'/>
                </div>
                <div>
                    OR 
                </div>
                <div>
                    <input placeholder='Enter list of languages, comma seperated'/> 
                    <input placeholder='Enter list of TOOLS, comma seperated'/>
                </div>
            </div>
            <div className={styles.pdfViewer}>
              <h3>PDF Viewer</h3>
            </div>
        </div>
      )
}