import React from 'react'
import styles from "./accordion.module.scss"
export const Accordion = () => {
  return (
    <div className={styles.accordion}>   
        <div className={styles.TitleWrapper}>
            <div>Title</div>
            <div>Expansion Button</div>
        </div>
        <div>
            Expanded Content
        </div>
    </div>
  )
}
