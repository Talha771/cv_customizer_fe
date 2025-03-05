import React from "react";
import styles from "./ProjectsCard.module.scss";
import { ProjectsData } from "@/app/lib/types";
import Image from "next/image";

const ProjectsCard = ({ Title, Description, Tools, Link }: ProjectsData) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.title}>
        <p>{Title}</p>
      </div>
      <div>
        <p>{Description}</p>
      </div>
      <div className={styles.toolsWrapper}>
        {Tools.map((tools) => {
          return <span className={styles.tool}>{tools}</span>;
        })}
        {Link ? (
          <span>
            <a href={Link} target="_blank">
              <Image
                src={"/github.svg"}
                alt="git_link"
                width={30}
                height={30}
              />
            </a>
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ProjectsCard;
