import Projects from "../components/Projects/Projects";
// Type for the Personal Info section of the CV
  export interface PersonalInfo {
    name: string;
    email: string;
    phone: string;
    linkedin_link: string;
    github_link: string;
  }
// Type for the Skills section of the CV
export interface Skills {
  [key: string]: string[];
}
export interface Errors {
  error_code : number 
  error : string 
}
// Type for the Education section of the CV
export interface Education {
  institution: string;
  period: string;
  degree: string;
}

// Type for the Experience section of the CV
export interface Experience {
  company: string;
  position: string;
  period: string;
  bullets:string[]
}

// Type for the Projects section of the CV
export interface Projects {
  name: string;
  technologies: string[];
  period: string;
  bullets:string[]
}

// Type for the CVItem payload (used for the /getCV endpoint)
export interface CVItem {
  personalInfo: PersonalInfo;
  skills: Skills;
  education: Education[];
  experience: Experience[];
  projects: Projects[];
}
export type allTypes = Projects | Experience | Education 

export interface formTypes{
    data : Projects |  Experience | PersonalInfo | Education | Skills    
}
export const emptyExperienceObj:Experience = {
 company:'',
 period:"",
 position:"",
 bullets:["","",""] 
}

export const emptyProjectsObj:Projects = {
  name:"", 
  technologies:[],
  period:"",
  bullets:[""] 
}
export const emptyEducationObj:Education = {
  institution:" ",
  period:"",
  degree:""
}