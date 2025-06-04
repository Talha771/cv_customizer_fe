"use client";

import { useState } from "react";
import {
  Education,
  Experience,
  PersonalInfo,
  Projects,
} from "../types/formTypes";
import { convertToJson } from "../utils/cvCustomizerUtils";
import styles from "./page.module.scss";
import { EducationSection } from "./components/Education/EducationSection";
import { ExperienceSection } from "./components/Experience/ExperienceSection";
import { PersonalSection } from "./components/PersonalInformation/PersonalSection";
import { ProjectSection } from "./components/Project/ProjectSection";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { useSearchParams } from "next/navigation";
import { Loader } from "../components/Loader/Loader";

export default function Page() {
  const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [showSidebar, setShowSidebar] = useState(false);
  const [loading, setLoading ]= useState(false)
  const [educationArr, setEducationArr] = useState<Education[]>([
    {
      institution: "",
      period: "",
      degree: "",
    },
  ]);
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    name: "",
    github_link: "",
    email: "",
    linkedin_link: "",
    phone: "",
  });
  const [experienceArr, setExperienceArr] = useState<Experience[]>([
    {
      company: "",
      period: "",
      position: "",
      bullets: [""],
    },
  ]);
  const [projectsArr, setProjectsArr] = useState<Projects[]>([
    {
      name: "",
      technologies: [""],
      period: "",
      bullets: [""],
    },
  ]);
  const handleSubmitButton = async () => {
    const json_request = JSON.stringify(
      convertToJson(personalInfo, experienceArr, projectsArr, educationArr)
    );
    setLoading(true)
    try {
      const response = await fetch(`${API_BASE}/getCV`, {
        method: "POST",
        headers: { "Content-Type": "application/json" }, // Ensure proper header for JSON
        body: json_request,
      });
      if (!response.ok) {
        console.error(response.statusText);
        alert(response.statusText)
        setLoading(false)
        return 
      }
      if (response.status === 200) {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "cv.pdf"; // Customize your filename if needed
        link.click();
        console.log("PDF file downloaded");
        setLoading(false)
      }
    } catch (e) {
      console.error(e);
      setLoading(false)
    }
  };

  return (
    <main className={styles.main}>
      <Loader loading={loading}/>
      <div
        className={styles.sidebarWrapper}
        onClick={() => {
          setShowSidebar((prev) => !prev);
        }}
      >
        {">"}
        {showSidebar && <Sidebar />}
      </div>
      <div className={styles.mainContent}>
        <div>
          <PersonalSection
            personalInfo={personalInfo}
            setPersonalInfo={setPersonalInfo}
          />
        </div>
        <EducationSection
          educationArr={educationArr}
          setEducationArr={setEducationArr}
        />
        <ExperienceSection
          experienceArr={experienceArr}
          setExperienceArr={setExperienceArr}
        />
        <ProjectSection
          projectArr={projectsArr}
          setProjectArr={setProjectsArr}
        />
        <button onClick={handleSubmitButton}>Submit</button>
      </div>
    </main>
  );
}
