import React from 'react'
import styles from "./header.module.scss"
const Header = () => {
    const headerMenu = ["Home","CVCustomizer"]
    return (
    <div className={styles.header}>
        {headerMenu.map((item)=>(   <div key={item} className={`${styles.menu} ${styles[item] || ''}`}>
          <h1>{item}</h1>
        </div>))}
    </div>
  )
}

export default Header   