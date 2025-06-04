import { Errors, Projects } from "@/app/types/formTypes";
import React, { Dispatch, SetStateAction } from "react";
import { ProjectSingle } from "./ProjectSingle";
import styles from "./section.module.scss"

type ProjectSectionType = {
  projectArr: Projects[];
  setProjectArr: Dispatch<SetStateAction<Projects[]>>;
  errors: Errors[]
      setErrors
};
export const ProjectSection = ({
  projectArr,
  setProjectArr,
}: ProjectSectionType) => {
  const addProject = () => {
    setProjectArr((prev) => {
      return [
        ...prev,
        {
          name: "",
          technologies: [""],
          bullets: [""],
          period: "",
        },
      ];
    });
  };
  return (
    <div id="Projects">
      <div className={styles.headingTitle}>
        <h1>Projects</h1>
        <button onClick={addProject}>+</button>
      </div>
      {projectArr.map((project, index) => {
        return (
          <div key={index}>
            <ProjectSingle
              project={project}
              setProjectArr={setProjectArr}
              index={index}
            />
          </div>
        );
      })}
    </div>
  );
};
