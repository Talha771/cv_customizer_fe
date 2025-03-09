import React from "react";
import styles from "./About.module.scss";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.About}>
      <div className={styles.pfp}>
        <Image
          src={"/tj_image.jpg"}
          alt="Profile Picture"
          width={150}
          height={150}
        />
      </div>
      <div className={styles.Introduction}>
        <h2>
          Hello, I'm TJ. I'm a full-stack developer (wanna be). I enjoy building
          sites & apps. My focus is React (Next.js).
        </h2>
      </div>
      <div className={styles.reachOutdivs}>
        <div className={styles.rectangleDiv}>
          <p>Contact Me</p>
        </div>
        <a
          href="https://github.com/Talha771/Resume/raw/US/main.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.noUnderline}
          id="CV"
        >
          <div className={styles.rectangleDiv}>
            <p>Download CV</p>
          </div>
        </a>
        <div className={styles.icon}>
          <a href="https://github.com/Talha771" target="_blank">
            <Image
              src={"/github.svg"}
              alt="github_svg"
              width={35}
              height={35}
            />
          </a>
        </div>
        <div className={styles.icon}>
          <a href="https://linkedin.com/in/tjbravo">
            <Image
              src={"/linkedin.svg"}
              alt="linkedin_svg"
              width={35}
              height={35}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
