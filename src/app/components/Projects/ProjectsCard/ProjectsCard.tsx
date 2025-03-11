'use client'
import React from "react";
import styles from "./ProjectsCard.module.scss";
import { ProjectsData } from "@/app/lib/types";
import Image from "next/image";
import { useIntersectionObserver } from "@/app/lib/hooks/useIntersectionObserver";

const ProjectsCard = ({ Title, Description, Tools, Link }: ProjectsData) => {
  const handleIntersect = (entry: IntersectionObserverEntry) => {
    const element = entry.target as HTMLElement;
    element.style.transform = "scale(1)";
    element.style.opacity = "1";
  };

  const handleUnintersect = (entry: IntersectionObserverEntry) => {
    const element = entry.target as HTMLElement;
    element.style.transform = "scale(0.8)";
    element.style.opacity = "0";
  };

  const cardRef = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.5,
    onIntersect: handleIntersect,
    onUnintersect: handleUnintersect,
  });

  return (
    <div 
      className={styles.cardWrapper} 
      ref={cardRef}
      style={{
        transform: "scale(0.8)",
        opacity: "0",
        transition: "transform 0.6s ease-out, opacity 0.6s ease-out"
      }}
    >
      <div className={styles.content}>
        <div className={styles.title}>
          <h2>{Title}</h2>
        </div>
        <div className={styles.description}>
          <p>{Description}</p>
        </div>
        <div className={styles.toolsWrapper}>
          {Tools.map((tools, index) => (
            <span key={index} className={styles.tool}>
              {tools}
            </span>
          ))}
          {Link && (
            <span className={styles.githubLink}>
              <a href={Link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={"/github.svg"}
                  alt="git_link"
                  width={30}
                  height={30}
                  className={styles.githubIcon}
                />
              </a>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
