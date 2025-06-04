// "use client";
// import { use, useEffect, useState } from "react";
// import styles from "./page.module.scss";
// import { convertToJson, validateForm } from "../utils/cvCustomizerUtils";
// import { Education, Experience } from "../types/formTypes";
// import exp from "constants";

// export default function Page() {
//   const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;
//   const personalInfo = ["name", "email", "Phone Number", "Linkedin", "Github"];
//   const educationInfo = ["institution", "Education period", "degree"];
//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const [formData, setFormData] = useState<Record<string, any>>({
//     "Experience Bullets": [], // Initializing bullets as empty array
//     "Project Bullets": [],
//   });
//   const [sidebar, setSidebar] = useState<boolean>(() => {
//     return sessionStorage.getItem("sidebar") === "open"; // Convert to boolean
//   });
//   const [experienceArr, setExperienceArr] = useState<Education[]>([
//     {
//       institution: "",
//       period: "",
//       degree: "",
//     },
//   ]);
//   const experienceInfo = [
//     "company",
//     "position",
//     "Experience Period",
//     "Experience Bullets",
//   ];
//   const projectsInfo = [
//     "Project Name",
//     "technologies",
//     "Project Period",
//     "Project Bullets",
//   ];
//   useEffect(() => {
//     sessionStorage.setItem("sidebar", sidebar ? "open" : "closed");
//   }, [sidebar]);

//   const allSection = {
//     "Personal Information": personalInfo,
//     Education: educationInfo,
//     Experience: experienceInfo,
//     Projects: projectsInfo,
//   };

//   const handleBulletChange = (
//     section: string,
//     index: number,
//     value: string
//   ) => {
//     setFormData((prev) => {
//       const updatedBullets = [...prev[section]];
//       updatedBullets[index] = value;
//       return { ...prev, [section]: updatedBullets };
//     });
//   };
//   function createExperienceSection(arr: Education[]) {
//     return (
//       <>
//         <h1>Experience</h1>
//         {arr.map((education, index) => {
//           return <div>{education.institution}</div>;
//         })}
//       </>
//     );
//   }
//   const createBullets = (section: string) => {
//     const bullets = formData[section] || [];
//     return (
//       <>
//         <button
//           onClick={() =>
//             setFormData((prev) => ({
//               ...prev,
//               [section]: [...prev[section], ""], // Add a new empty bullet
//             }))
//           }
//         >
//           Add new bullet
//         </button>
//         {bullets.map((entry: string, index: number) => (
//           <div key={index}>
//             <input
//               placeholder={`Bullet ${index + 1}`}
//               value={entry}
//               onChange={(e) =>
//                 handleBulletChange(section, index, e.target.value)
//               }
//             />
//             <button
//               onClick={() =>
//                 setFormData((prev) => ({
//                   ...prev,
//                   [section]: prev[section].filter(
//                     (_: string, i: number) => i !== index
//                   ), // Remove bullet
//                 }))
//               }
//             >
//               Remove
//             </button>
//           </div>
//         ))}
//       </>
//     );
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value, // Dynamically update state
//     }));
//   };

//   const createSection = (name: string, array: string[]) => {
//     return (
//       <div className={styles.sectionName} key={name}>
//         <h1>{name}</h1>
//         <div className={styles.sectionForm} id={name}>
//           {array.map((entry: string) => {
//             if (entry.includes("Bullets")) {
//               return (
//                 <div key={entry}>
//                   <label>{entry}</label>
//                   {createBullets(entry)}{" "}
//                 </div>
//               );
//             }
//             return (
//               <div key={entry} className={styles.inputWrapper}>
//                 <label className={styles.name}>{entry}</label>
//                 <input
//                   placeholder={entry}
//                   name={entry}
//                   value={formData[entry] || ""}
//                   onChange={handleChange}
//                   className={styles.input}
//                 />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     );
//   };

//   return (
//     <main className={styles.main}>
//       <div
//         onClick={() => {
//           setSidebar((prev) => !prev);
//         }}
//       >
//         {sidebar ? "<" : ">"}
//         {sidebar ? (
//           <div className={styles.sidebar}>
//             {Object.entries(allSection).map(([sectionName, fields]) => {
//               return (
//                 <a href={`#${sectionName}`} key={sectionName}>
//                   <div>{sectionName}</div>
//                 </a>
//               );
//             })}
//           </div>
//         ) : (
//           ""
//         )}
//       </div>
//       <div className={styles.mainContent}>
//         {Object.entries(allSection).map(([sectionName, fields]) => {
//           if (sectionName.includes("Experience")) {
//             return createExperienceSection(experienceArr);
//           }
//           return <div>{createSection(sectionName, fields)}</div>;
//         })}
//         <button
//           onClick={async () => {
//             console.log(convertToJson(formData));
//             if (!validateForm(formData, errors, setErrors)) {
//               alert("fix the errors dumbasss");
//               console.error("Form validation failed.");
//               return;
//             }
//             try {
//               const response = await fetch(`${API_BASE}/getCV`, {
//                 method: "POST",
//                 headers: {
//                   "Content-Type": "application/pdf", // Ensuring JSON content type in request
//                 },
//                 body: JSON.stringify(convertToJson(formData)), // Serialize formData to JSON
//               });

//               if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//               }

//               // Handle PDF Response
//               const blob = await response.blob();
//               const url = URL.createObjectURL(blob);
//               const link = document.createElement("a");
//               link.href = url;
//               link.download = "cv.pdf"; // Customize your filename if needed
//               link.click();
//               console.log("PDF file downloaded");
//             } catch (error) {
//               console.error("Error submitting form:", error);
//             }
//           }}
//         >
//           Submit
//         </button>
//       </div>
//     </main>
//   );
// }
