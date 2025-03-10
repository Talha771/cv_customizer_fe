import { ExperienceCardData, ProjectsData } from "./types";

export const projects_arr: ProjectsData[] = [
  {
    Title: "BomberMan Clone",
    Description:"Recreated the famous bomberman game in C++ using SDL2 including sprite animations, and custom game mechanics.Implemented OOP design patterns, polymorphism",
    Tools: ["Polymorphism", "SDL2", "C++","Sprite Animations","OOP"],
    Link: "https://github.com/Talha771/BomberMan-Clone",
  },
  {
    Title: "E-Commerce Platform",
    Description:
      "Developed a fully functional e-commerce platform with user authentication, payment integration, and an admin dashboard.",
    Tools: ["Next.js", "TailwindCSS", "MongoDB"],
  },
  {
    Title: "AI Resume Builder",
    Description:
      "Built a resume builder that uses AI to suggest content and improve formatting based on industry standards.",
    Tools: ["FastAPI", "React", "PostgreSQL"],
  },
];


export const ExperienceData: ExperienceCardData[] = [
  {
    logo: "./github.svg",
    Title: "Jacqueline Construction",
    description: "Developed a full-stack job tracking application, reducing reporting time by 30 minutes daily.\n• Improved user adoption by 40% through collaboration with management and stakeholders.",
    designation: "Full Stack Developer",
  },
  {
    logo: "./github.svg",
    Title: "QLU.ai",
    description: "Increased data retrieval speed by 50% with a custom search algorithm in Cassandra.\n• Deployed a document management system processing 10,000+ files daily for clients.",
    designation: "Full Stack Developer",
  },
  {
    logo: "./github.svg",
    Title: "Your Company",
    description: "Excited for new opportunities! Open to offers and impactful leadership roles.\nLet's connect and explore how we can drive innovation together.",
    designation: "Open to Offers",
    button:"mailto:talha.j771@gmail.com"
  }

]

export const navItems = [
  { id: "About", icon: "/about.svg" },
  { id: "Projects", icon: "/projects.svg" },
  { id: "Experience", icon: "/experience.svg" },
];