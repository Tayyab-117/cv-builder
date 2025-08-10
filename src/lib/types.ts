export type Link = { label: string; url: string };
export type Experience = {
  company: string;
  role: string;
  start: string;
  end?: string;
  location?: string;
  highlights: string[];
};
export type Education = {
  school: string;
  degree: string;
  start: string;
  end?: string;
  extras?: string[];
};
export type Resume = {
  id: string;
  templateId: string;
  profile: {
    fullName: string;
    headline?: string;
    email?: string;
    phone?: string;
    location?: string;
    links?: Link[];
  };
  summary?: string;
  experience: Experience[];
  education: Education[];
  skills: { name: string }[];
  projects?: { name: string; link?: string; summary?: string }[];
  certifications?: { name: string; issuer?: string; year?: string }[];
  hobbies?: string[];
};
