'use client'
import React, { useEffect } from "react";
import styles from "./ProjectsCard.module.scss";
import { ProjectsData } from "@/app/lib/types";
import Image from "next/image";

const ProjectsCard = ({ Title, Description, Tools, Link }: ProjectsData) => {
  useEffect(() => {
    // Step 1: Select the current card element to observe
    const cardElement = document.querySelector(`.${styles.cardWrapper}`);

    // Step 2: Define the observer callback function
    function observerCallback(entries: IntersectionObserverEntry[]) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Step 3: Add 'animate' class when the card is in view
          entry.target.classList.add(styles.animate);
        } else {
          // Step 4: Optionally remove the 'animate' class when the card is out of view
          entry.target.classList.remove(styles.animate);
        }
      });
    }

    // Step 5: Create the IntersectionObserver instance
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.5, // Adjust threshold if necessary
    });

    // Step 6: Start observing the card element
    if (cardElement) observer.observe(cardElement);

    // Cleanup the observer when the component unmounts
    return () => {
      if (cardElement) observer.disconnect();
    };
  }, []); // Empty dependency array to run only once on mount

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.title}>
        <p>{Title}</p>
      </div>
      <div>
        <p>{Description}</p>
      </div>
      <div className={styles.toolsWrapper}>
        {Tools.map((tools, index) => (
          <span key={index} className={styles.tool}>
            {tools}
          </span>
        ))}
        {Link && (
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
        )}
      </div>
    </div>
  );
};

export default ProjectsCard;
