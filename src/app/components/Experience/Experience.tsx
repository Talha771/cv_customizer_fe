'use client'
import React, { useEffect } from "react";
import styles from "./Experience.module.scss";
import Image from "next/image";
import { ExperienceCardData } from "@/app/lib/types";
import { ExperienceData } from "@/app/lib/data";

const ExperienceCard = (data: ExperienceCardData, isRight: boolean) => {
  return (
    <div className={`${styles.experienceCard} ${isRight ? styles.rightCard : styles.leftCard}`}>
      <div className={styles.circle}>
        <span>
          <Image src={data.logo} width={25} height={25} alt="svg" />
        </span>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.Title}>
          <h3>{data.Title}</h3>
        </div>
        <div className={styles.designation}>
          <p>{data.designation}</p>
        </div>
        <div className={styles.cardDescription}>
          <p>{data.description}</p>
        </div>
        {data.button && 
        <a href="mailto:talha.j771@gmail.com">
          <div className={styles.contactButton}>
            <Image src={"./email - white.svg"} height={25} width={25} alt="email" />
            <p>talha.j771@gmail.com</p>
          </div>
        </a>
        }
      </div>
    </div>
  );
};

const Experience = () => {
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
    let thingsObserved = document.querySelector(`.${styles.experienceWrapper}`);
    if (thingsObserved) {
      observer.observe(thingsObserved);
    }
  };
  useEffect(useEffectCB, []);
  return (
    <div className={styles.experienceWrapper}>
      <div className={styles.title}>
        <h1>Experience</h1>
      </div>
      <div className={styles.experience}>
        {ExperienceData.map((experience, index) => {
          return ExperienceCard(experience, index % 2 === 1);
        })}
      </div>
    </div>
  );
};

export default Experience;
