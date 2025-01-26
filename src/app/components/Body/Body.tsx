'use client'
import React from 'react'
import styles from "./body.module.scss"
export const Body = () => {
  return (
    <div className={styles.body}>
        <div className={styles.descriptionEntry}> 
        <div>
        <input placeholder='Enter Job Description or Drag .txt or pdf file here'>Enter your </input>
        </div>
        <div>
            OR 
        </div>
        <div>
            <input placeholder='Enter list of languages, comma seperated'> </input>
            <input placeholder='Enter list of TOOLS, comma seperated'> </input>
        </div>
        </div>
        <div className={styles.pdfViewer}>
            {/* only shows conditionally */}
            <div className={styles.pdfViewer}>
          <h3>PDF Viewer</h3>
        </div>
        </div>
    </div>
  )
}
