import { SingletonRouter } from "next/router";
import { IconType } from "react-icons";

export interface IService {
  title: string;
  about: string;
  Icon: IconType;
}

export interface ISkill {
  name: string;
  level: string;
  Icon: IconType;
}
export interface IEducation {
  Icon: IconType;
  Degree: string;
  University: string;
  Location: string;
  Year: number;
}
export interface IExperience {
  Icon: IconType;
  JobTitle: string;
  Company: string;
  Location: string;
  Responsibilities: string;
  Duration: string;
}

export interface ICert {
  Icon: IconType;
  CourseTitle: string;
  Company: string;
  CourseDetail: string;
  Duration: string;
}

export interface ISSkills {
  Icon: IconType;
  sskil: string;
}

export interface ILang {
  Icon: IconType;
  name: string;
}

export interface IInterest {
  Icon: IconType;
  name: string;
}
