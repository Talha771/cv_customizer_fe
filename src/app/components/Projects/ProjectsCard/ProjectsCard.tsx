'use client'
import React, { useEffect, useRef } from "react";
import styles from "./ProjectsCard.module.scss";
import { ProjectsData } from "@/app/lib/types";
import Image from "next/image";

const ProjectsCard = ({ Title, Description, Tools, Link }: ProjectsData) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            element.style.transform = "scale(1)";
            element.style.opacity = "1";
          } else {
            element.style.transform = "scale(0.8)";
            element.style.opacity = "0";
          }
        });
      },
      {
        threshold: 0.5,
      }
    );
  
    if (cardRef.current) {
      cardRef.current.style.transform = "scale(0.8)";
      cardRef.current.style.opacity = "0";
      cardRef.current.style.transition = "transform 0.6s ease-out, opacity 0.6s ease-out";
      observer.observe(cardRef.current);
    }
  
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
}, []);
  return (
    <div className={styles.cardWrapper} ref={cardRef}>
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
