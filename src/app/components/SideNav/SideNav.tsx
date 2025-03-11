"use client";

import React from "react";
import styles from "./sideNav.module.scss";
import Image from "next/image";
import { useIntersectionObserver } from "@/app/lib/hooks/useIntersectionObserver";

const SideNav = () => {
  const sections = ["About", "Projects", "Experience", "Blog"];

  const handleIntersect = (entry: IntersectionObserverEntry) => {
    const { id } = entry.target;
    document.querySelector(`.${id}`)?.classList.add(styles.active);
  };

  const handleUnintersect = (entry: IntersectionObserverEntry) => {
    const { id } = entry.target;
    document.querySelector(`.${id}`)?.classList.remove(styles.active);
  };

  const clickHandler = (key: string) => {
    const section = document.getElementById(key);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={styles.sideNav}>
      {sections.map((section) => (
        <React.Fragment key={section}>
          <div
            id={section}
            ref={useIntersectionObserver<HTMLDivElement>({
              threshold: 0.5,
              onIntersect: handleIntersect,
              onUnintersect: handleUnintersect,
            })}
          />
          <li
            className={section}
            onClick={() => {
              clickHandler(section);
            }}
          >
            <Image
              src={`/${section.toLowerCase()}.svg`}
              width={50}
              height={50}
              alt={`${section}_Icon`}
            />
          </li>
        </React.Fragment>
      ))}
    </nav>
  );
};

export default SideNav;
