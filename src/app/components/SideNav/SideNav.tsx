"use client";

import React, { useEffect } from "react";
import styles from "./sideNav.module.scss";
import Image from "next/image";
import { Smooch } from "next/font/google";

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
    const sections = ["About", "Projects", "Experience"];
    sections.forEach((sectionId) => {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        observer.observe(sectionElement);
      }
    });

    // Cleanup observer when component unmounts
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
    const section = document.getElementById(key)
    if (section){
      section.scrollIntoView({behavior:"smooth"})
    }
  };

  return (
    <nav className={styles.sideNav}>
      <li
        className="About"
        onClick={() => {
          clickHandler("About");
        }}
      >
        <Image src="/about.svg" width={50} height={50} alt="About_Icon" />
      </li>
      <li
        className="Projects"
        onClick={() => {
          clickHandler("Projects");
        }}
      >
        <Image src="/projects.svg" width={50} height={50} alt="Projects_Icon" />
      </li>
      <li
        className="Experience"
        onClick={() => {
          clickHandler("Experience");
        }}
      >
        <Image src="/experience.svg" width={50} height={50} alt="Experience_Icon" />
        </li>
    </nav>
  );
};

export default SideNav;
