import { ImMenu } from "react-icons/im";
import { RiComputerLine } from "react-icons/ri";
import {
  ICert,
  IEducation,
  IExperience,
  IInterest,
  ILang,
  IService,
  ISkill,
  ISSkills,
} from "./types";
import { FaDatabase, FaRegCheckSquare, FaWarehouse } from "react-icons/fa";
import {
  SiExpress,
  SiGit,
  SiHtml5,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPurescript,
  SiNetflix,
  SiCounterstrike,
  SiYourtraveldottv,
  SiCodingninjas,
} from "react-icons/si";
import { FaUniversity } from "react-icons/fa";
import { IoMdCodeWorking } from "react-icons/io";
import { FaNetworkWired } from "react-icons/fa";
import { GrLanguage, GrUserWorker } from "react-icons/gr";
import { GiCricketBat } from "react-icons/gi";

import {
  SiUdemy,
  SiFreecodecamp,
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiSass,
  SiMaterialui,
} from "react-icons/si";
import { MdLanguage, MdSportsSoccer } from "react-icons/md";

export const services: IService[] = [
  {
    title: "Frontend Developer",
    about:
      "I can make user friendly, attractive and scalable frontend using technologies like React, CSS & HTML. *Learning NextJS now a days*",
    Icon: RiComputerLine,
  },
  {
    title: "Backend Developer",
    about:
      " I have Experience working with backend services like Express & Nodejs ",
    Icon: ImMenu,
  },
  {
    title: "Programming Languages",
    about: "I can code with Typescript & Javascript",
    Icon: SiPurescript,
  },
  {
    title: "Databases",
    about: " Experience working with mongodb & postgresql",
    Icon: FaDatabase,
  },
];

export const Languages: ISkill[] = [
  {
    Icon: SiJavascript,
    name: "Javascript",
    level: "80%",
  },
  {
    Icon: SiTypescript,
    name: "Typescript",
    level: "60%",
  },
];

export const Frontend: ISkill[] = [
  {
    Icon: SiJavascript,
    name: "React",
    level: "80%",
  },
  {
    Icon: SiNextdotjs,
    name: "Next JS",
    level: "60%",
  },
  {
    Icon: SiHtml5,
    name: "HTML & CSS",
    level: "60%",
  },
  {
    Icon: SiSass,
    name: "SCSS",
    level: "60%",
  },
  {
    Icon: SiMaterialui,
    name: "Material UI",
    level: "60%",
  },
  {
    Icon: SiTypescript,
    name: "tailwindcss",
    level: "60%",
  },
];

export const Backend: ISkill[] = [
  {
    Icon: SiNodedotjs,
    name: "Node JS",
    level: "80%",
  },
  {
    Icon: SiExpress,
    name: "Express JS",
    level: "60%",
  },
];

export const Database: ISkill[] = [
  {
    Icon: SiMongodb,
    name: "Mongodb",
    level: "80%",
  },
  {
    Icon: SiPostgresql,
    name: "Postgresql",
    level: "60%",
  },
];

export const Others: ISkill[] = [
  {
    Icon: SiGit,
    name: "GIT",
    level: "80%",
  },
  {
    Icon: SiPostman,
    name: "Postman",
    level: "60%",
  },
];

export const EducationDetail: IEducation[] = [
  {
    Icon: FaUniversity,
    Degree: "Ms. Computer Engineering (AI)",
    University: "Dalarna University.",
    Location: "Sweden",
    Year: 2010,
  },
  {
    Icon: FaUniversity,
    Degree: "Bs Computer Science",
    University: "AIOU University.",
    Location: "Pakistan",
    Year: 2008,
  },
];

export const ExpDetail: IExperience[] = [
  {
    Icon: IoMdCodeWorking,
    JobTitle: "FULL STACK DEVELOPER (Trainee, Remote)",
    Company: "Integrigy.io",
    Location: "Helsinki",
    Responsibilities: "",
    Duration: "Jan 2022 - Untill Now",
  },
  {
    Icon: FaNetworkWired,
    JobTitle: "Snr. System Support Eng.",
    Company: "TMN Group",
    Location: "Islamabad",
    Responsibilities: "",
    Duration: "Feb. 2007 - Feb. 2009 ",
  },
  {
    Icon: FaWarehouse,
    JobTitle: "Stock Associate",
    Company: "Nemlig.com",
    Location: "Denmark",
    Responsibilities: "",
    Duration: "Dec 2012 - Dec 2021",
  },
];

export const CertInfo: ICert[] = [
  {
    Icon: SiUdemy,
    CourseTitle: "FullStack Bootcamp",
    Company: "Udemy.com",
    CourseDetail: "",
    Duration: "April 2021 - June 2021",
  },

  {
    Icon: SiFreecodecamp,
    CourseTitle: "Responsive Web Design cert.",
    Company: "FreeCodeCamp.com",
    CourseDetail: "",
    Duration: "Aug 2021 - Oct 2021",
  },
  {
    Icon: SiFreecodecamp,
    CourseTitle: "JS Algorithms & Data Structure",
    Company: "FreeCodeCamp.com",
    CourseDetail: "",
    Duration: "Oct 2021 - Dec 2021",
  },
  {
    Icon: SiFreecodecamp,
    CourseTitle: "Front End Development Libraries Cert.",
    Company: "FreeCodeCamp.com",
    CourseDetail: "",
    Duration: "June 2021 - Aug 2021",
  },
];

export const SoftSkills: ISSkills[] = [
  {
    Icon: FaRegCheckSquare,
    sskil: "Team Player",
  },
  {
    Icon: FaRegCheckSquare,
    sskil: "Flexible",
  },
  {
    Icon: FaRegCheckSquare,
    sskil: "Creative",
  },
  {
    Icon: FaRegCheckSquare,
    sskil: "Quick Adaptor",
  },
  {
    Icon: FaRegCheckSquare,
    sskil: "Problem Solver",
  },
  {
    Icon: FaRegCheckSquare,
    sskil: "Quick Learner",
  },
];

export const Lang: ILang[] = [
  {
    Icon: MdLanguage,
    name: "English",
  },
  {
    Icon: MdLanguage,
    name: "Dansk",
  },
  {
    Icon: MdLanguage,
    name: "Urdu",
  },
];

export const Interest: IInterest[] = [
  {
    Icon: SiCodingninjas,
    name: "Coding",
  },
  {
    Icon: SiYourtraveldottv,
    name: "Travelling",
  },
  {
    Icon: MdSportsSoccer,
    name: "Sports",
  },
  {
    Icon: SiCounterstrike,
    name: "Gaming",
  },
  {
    Icon: SiNetflix,
    name: "Netflix",
  },
  {
    Icon: GiCricketBat,
    name: "Cricket",
  },
];
