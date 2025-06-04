import { Education } from "@/app/types/formTypes";
import React, { Dispatch, SetStateAction, useState } from "react";
import { EducationSingle } from "./EducationSingle";
import styles from "./section.module.scss"

export type EducationSectionProps = {
  educationArr: Education[];
  setEducationArr: Dispatch<SetStateAction<Education[]>>;
};
export const EducationSection = ({
  educationArr,
  setEducationArr,
}: EducationSectionProps) => {
  const addEducation = () => {
    setEducationArr((prev) => {
      return [
        ...prev,
        {
          institution: "",
          period: "",
          degree: "",
        },
      ];
    });
  };
  return (
    <div id="Education">
      <div className={styles.headingTitle}>
        <h1>Education</h1>
        <button onClick={addEducation}>+</button>
      </div>
      {educationArr.map((education, index) => {
        return (
          <EducationSingle
            key={index}
            education={education}
            index={index}
            setEducationArr={setEducationArr}
          />
        );
      })}
    </div>
  );
};
