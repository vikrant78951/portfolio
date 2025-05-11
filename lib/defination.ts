export type ContactDetail = {
  type: string;
  value: string;
  icon: string;
};

export type ContactDetails = {
  phone: ContactDetail;
  email: ContactDetail;
  [key: string]: ContactDetail; 
};

export type SocialLink = {
  label: string;
  url: string;
  icon: string;
};

export type Dob = {
  day: number;
  month: number;
  year: number;
};

export type PersonalInfoData = {
  firstName: string;
  lastName: string;
  title: string;
  specialization: string[];
  summary: string;
  location: string;
  age: number;
  dob: Dob;
};

export type Passions = {
  name: string;
  icon: string;
};

export type Education = {
  degree: string;
  institution: string;
  duration: string;
  cgpa: string;
  description : string;
};

export type Project = {
  name: string;
  description?: string;
  link?: string;
  links?: string[];  
};

export type Screenshots = {
  src: string;
  alt: string;
}

export type Experience = {
  role: string;
  company: string;
  duration: string;
  responsibilities: string[];
  projects: Project[];
  technologies : string[],
  screenshots : Screenshots[]
};

export type PersonalProject = {
  name: string;
  description?: string;
  link?: string;
};

export type TechnicalSkills = {
  frontend: string[];
  testing: string[];
  stateManagement: string[];
  cmsAndTools: string[];
  devOps: string[];
  backend: string[];
  others: string[];
};

export type Certification = {
  title: string;
  year: number;
  issuer: string;
  icon: string;
  link?: string;
  highlights : string[]
};

export type Lander =  {
  name: string;
  link: string;
  description: string;
  image: string;
}


export interface UserProfile {
  id: number;
  personalInfo: PersonalInfoData;
  education: Education[];
  experience: Experience[];
  personalProjects: PersonalProject[];
  technicalSkills: TechnicalSkills;
  certifications: Certification[];
  passions: Passions[];
  landers : Lander[]
}

