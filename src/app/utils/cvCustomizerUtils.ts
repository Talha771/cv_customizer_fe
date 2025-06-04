import {
  Dispatch,
  SetStateAction,
} from "react";
import {
  Education,
  emptyEducationObj,
  emptyExperienceObj,
  emptyProjectsObj,
  Experience,
  PersonalInfo,
  Projects,
} from "../types/formTypes";

// export function convertToJson(formData: Record<string, string>) {
//   const personalInfo = {
//     name: formData["name"],
//     github_link: formData["Github"],
//     linkedin_link: formData["Linkedin"],
//     email: formData["email"],
//     phone: formData["Phone Number"],
//   };

//   const education = {
//     Education: [
//       {
//         institution: formData["institution"],
//         period: formData["Education period"],
//         degree: formData["degree"],
//       },
//     ],
//   };

//   const experience = {
//     Experience: [
//       {
//         company: formData["company"],
//         position: formData["position"],
//         period: formData["Experience Period"],
//         bullets: formData["Experience Bullets"] || [], // Serialize bullets
//       },
//     ],
//   };

//   const projects = {
//     Projects: [
//       {
//         name: formData["Project Name"],
//         technologies: formData["technologies"]?.split(",") || [],
//         period: formData["Project Period"],
//         bullets: formData["Project Bullets"] || [], // Serialize bullets
//       },
//     ],
//   };

//   const skills = {
//     languages: formData["languages"]?.split(",") || [],
//     skills: formData["skills"]?.split(",") || [],
//   };

//   return {
//     personalInfo,
//     education,
//     experience,
//     projects,
//     skills,
//   };
// }
export function convertToJson(
  personalInfo: PersonalInfo,
  experience: Experience[],
  projects: Projects[],
  education: Education[],
) {
  return {
    personalInfo: personalInfo,
    education: education.length>0 ? { Education: education } : {Education:[emptyEducationObj]},
    experience: experience.length>0 ? { Experience: experience } : {Experience:[emptyExperienceObj]},
    projects: projects.length > 0 ? {Projects: projects } : {Projects:[emptyProjectsObj]}, 
    skills: {
      languages: [""],
      skills: [""],
    },
  };
}
export function validateForm(
  formData: Record<string, string>,
  errors: Record<string, string>,
  setErrors: Dispatch<SetStateAction<Record<string, string>>>
) {
  let newErrors: Record<string, string> = {};

  // Required Fields Validation
  const requiredFields = [
    "name",
    "email",
    "Phone Number",
    "institution",
    "degree",
  ];
  requiredFields.forEach((field) => {
    if (!formData[field]?.trim()) {
      newErrors[field] = `${field} is required`;
    }
  });

  // Email Validation
  if (
    formData["email"] &&
    !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData["email"])
  ) {
    newErrors["email"] = "Invalid email format";
  }

  // Phone Number Validation (Only digits and length check)
  if (
    formData["Phone Number"] &&
    !/^\d{10,15}$/.test(formData["Phone Number"])
  ) {
    newErrors["Phone Number"] = "Invalid phone number (must be 10-15 digits)";
  }

  if (formData["Experience Bullets"]?.length < 1) {
    newErrors["Experience Bullets"] = "You need atleast one bullet";
  }
  if (formData["Project Bullets"]?.length < 1) {
    newErrors["Project Bullets"] = "You need atleast one bullet";
  }
  if (formData["skills"]?.length === 0) {
    newErrors["skills"] = "At least one skill is required";
  }
  if (formData["languages"]?.length === 0) {
    newErrors["languages"] = "At least one programming language is required";
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0; // Returns true if no errors
}
