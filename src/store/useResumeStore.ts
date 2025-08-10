import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Resume } from "@/lib/types";

function emptyResume(): Resume {
  return {
    id: crypto.randomUUID(),
    templateId: "classic-ats",
    profile: { fullName: "" },
    summary: "",
    experience: [],
    education: [],
    skills: [],
    projects: [],
    certifications: [],
    hobbies: []
  };
}

type State = {
  resume: Resume;
  setResume: (r: Partial<Resume>) => void;
  reset: () => void;
};

export const useResumeStore = create<State>()(
  persist(
    (set, get) => ({
      resume: emptyResume(),
      setResume: (r) => set({ resume: { ...get().resume, ...r } as Resume }),
      reset: () => set({ resume: emptyResume() })
    }),
    { name: "cv-resume" }
  )
);
