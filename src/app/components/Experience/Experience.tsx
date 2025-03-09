import React from "react";
import styles from "./Experience.module.scss";
import Image from "next/image";
import { ExperienceCardData } from "@/app/lib/types";
import { ExperienceData } from "@/app/lib/data";

const ExperienceCard = (data: ExperienceCardData) => {
  return (
    <div className={styles.experienceCard}>
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
  return (
    <div className={styles.experienceWrapper}>
      <div className={styles.title}>
        <h1>Experience</h1>
      </div>
      <div className={styles.experience}>
        {ExperienceData.map((experience) => {
          return ExperienceCard(experience);
        })}
      </div>
    </div>
  );
};

export default Experience;
