'use client'
import React from 'react'
import styles from "./body.module.scss"
export const Body = () => {
  return (
    <div className={styles.body}>
        <div className={styles.descriptionEntry}> 
        <div>
            TextBox
        </div>
        <div>
            OR 
        </div>
        <div>
            Enter Stuff 
            Languages
            Skills 
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
