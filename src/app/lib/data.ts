import { ExperienceCardData, ProjectsData } from "./types";

export const projects_arr: ProjectsData[] = [
  {
    Title: "Yohsin Connect",
    Description: "Developed an AI chatbot that instantly responds to prospective students’ questions, reducing inquiry response time by 80%. Integrated TensorFlow and PyTorch LLM models to generate human-like answers, improving response accuracy by 35%. Leveraged LangChain and FAISS for optimized information retrieval from large university document databases.",
    Tools: ["Python", "LangChain", "FAISS", "PyTorch", "TensorFlow"],
},
  {
    Title: "BomberMan Clone",
    Description:"Recreated the famous bomberman game in C++ using SDL2 including sprite animations, and custom game mechanics.Implemented OOP design patterns, polymorphism",
    Tools: ["Polymorphism", "SDL2", "C++","Sprite Animations","OOP"],
    Link: "https://github.com/Talha771/BomberMan-Clone",
  },
{
  Title: "Smart Home Services Setup",
  Description: "Set up and managed multiple smart home services like Jellyfin for media streaming, Home Assistant for automation, and Transmission Daemon for file sharing. Used Docker to efficiently organize and deploy these services, ensuring smooth operation with minimal effort.",
  Tools: ["Docker", "Jellyfin", "Home Assistant", "Transmission Daemon"],
},
];


export const ExperienceData: ExperienceCardData[] = [

  {
    logo:  "/experience.svg",
    Title: "QLU.ai (June 2024 - August 2024)" , 
    description: "Increased data retrieval speed by 50% with a custom search algorithm in Cassandra.\n• Deployed a document management system processing 10,000+ files daily for clients.",
    designation: "Full Stack Developer",
  },
  {
    logo:  "/experience.svg",
    Title: "Jacqueline Construction (October 2024 - Current)" , 
    description: "Developed a full-stack job tracking application, reducing reporting time by 30 minutes daily.\n• Improved user adoption by 40% through collaboration with management and stakeholders.",
    designation: "Full Stack Developer",
  },
  {
    logo:  "/experience.svg",
    Title: "Your Company" , 
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