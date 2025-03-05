import styles from "./projects.module.scss";
import React from "react";
import ProjectsCard from "./ProjectsCard/ProjectsCard";
import { projects_arr } from "@/app/lib/data";

const Projects = () => {
  return (
    <div className={styles.Projects}>
      <div className={styles.title}>
        <h1>My Projects</h1>
      </div>
      <div className={styles.cards}>
      {projects_arr.map((project, index) => (
        <ProjectsCard key={index} {...project} />
      ))}
      </div>
    </div>
  );
};

export default Projects;
