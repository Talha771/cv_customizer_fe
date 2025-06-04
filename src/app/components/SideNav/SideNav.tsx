"use client";

import React, { useEffect } from "react";
import styles from "./sideNav.module.scss";
import Image from "next/image";

const SideNav = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const { id } = entry.target;
          // When a section is in view, log and add an active class to the respective sideNav link
          if (entry.isIntersecting) {
            console.log(`Section ${id} is in view`);
            document.querySelector(`.${id}`)?.classList.add(styles.active);
          } else {
            // Remove active class when it's out of view
            document.querySelector(`.${id}`)?.classList.remove(styles.active);
          }
        });
      },
      { threshold: 0.5 } // Set the threshold to 50% visibility for triggering the callback
    );

    // Start observing the sections by their IDs
    const sections = ["About", "Projects", "Experience", "Blog"];
    sections.forEach((sectionId) => {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        observer.observe(sectionElement);
      }
    });

    return () => {
      sections.forEach((sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
          observer.unobserve(sectionElement);
        }
      });
    };
  }, []);

  const clickHandler = (key: string) => {
    window.location.hash = key;
    const section = document.getElementById(key);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={styles.sideNav}>
      {["About", "Projects", "Experience"].map((section) => (
        <li
          key={section}
          className={`${styles.section} ${section}`} // Class to match the section IDs for styling
          onClick={() => clickHandler(section)}
        >
          <Image
            src={`/${section.toLowerCase()}.svg`}
            width={50}
            height={50}
            alt={`${section}_Icon`}
          />
        </li>
      ))}
    </nav>
  );
};

export default SideNav;
