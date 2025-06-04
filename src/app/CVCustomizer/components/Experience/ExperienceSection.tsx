import { Experience } from "@/app/types/formTypes";
import React, { Dispatch, SetStateAction } from "react";
import { ExperienceSingle } from "./ExperienceSingle";
import styles from "./section.module.scss";

type ExperienceSectionProps = {
  experienceArr: Experience[];
  setExperienceArr: Dispatch<SetStateAction<Experience[]>>;
};
export const ExperienceSection = ({
  experienceArr,
  setExperienceArr,
}: ExperienceSectionProps) => {
  const addExperience = () => {
    setExperienceArr((prev) => {
      return [
        ...prev,
        { company: "", period: "", position: "", bullets: [""] },
      ];
    });
  };
  return (
    <div id="Experience">
      <div className={styles.headingTitle}>
        <h1>Experience</h1>
        <button onClick={addExperience}>+</button>
      </div>
      <div>
        {experienceArr.map((experience, index) => {
          return (
            <div key={index}>
              <ExperienceSingle
                key={index}
                experience={experience}
                index={index}
                setExperience={setExperienceArr}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
