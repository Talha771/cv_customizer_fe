"use client";
import React, { useEffect } from "react";
import styles from "./About.module.scss";
import Image from "next/image";
import { useIntersectionObserver } from "@/app/lib/hooks/useIntersectionObserver";

const About = () => {
  const intersectionObserverFunc = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      let element = entry.target as HTMLElement;
      element.style.transition = "transform 0.5s ease, opacity 0.5s ease";

      if (entry.isIntersecting) {
        element.style.transform = "scale(1)";
        element.style.opacity = "1";
      } else {
        element.style.transform = "scale(0.8)";
        element.style.opacity = "0";
      }
    });
  };
  const useEffectCB = () => {
    // create an intersection observer in here, and then use it to return the class of the div intersection
    console.log("I have been called");
    const observer = new IntersectionObserver(intersectionObserverFunc, {
      threshold: 0.5,
    });
    let thingsObserved = document.querySelector(`.${styles.About}`);
    if (thingsObserved) {
      observer.observe(thingsObserved);
    }
  };
  useEffect(useEffectCB, []);
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
