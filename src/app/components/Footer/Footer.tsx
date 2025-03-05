import React from "react";
import styles from "./footer.module.scss";
import Image from "next/image";

const SOCIAL = {
    "github":{link : "https://github.com/Talha771", logo : "/github.svg"}, 
    "linkedin":{link : "https://linkedin.com/in/tjbravo", logo : "/linkedin.svg"}, 
    "email":{link : "mailto:talha.j771@gmail.com", logo : "/email.svg"}, 
}

function createIcon(link:string,logo:string,alt:string){
    return (
        <a href={link} target="_blank">
            <Image src={logo} alt={alt} width={32} height={32} />
        </a>
    )
}

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.social}>
      {Object.entries(SOCIAL).map(([key, { link, logo }]) => (
          createIcon(link, logo, key)
        ))}
      </div>
      <div className={styles.contactMe}>Contact Me</div>
    </div>
  );
};
