"use client";
import { useResumeStore } from "@/store/useResumeStore";
import { renderTemplate } from "@/lib/templates";

export default function ResumePreview() {
  const { resume } = useResumeStore();
  return (
    <div className="sticky top-4">
      <div className="bg-slate-100 p-3 rounded-lg border">
        <div className="bg-white">
          {renderTemplate(resume.templateId, resume)}
        </div>
      </div>
    </div>
  );
}
