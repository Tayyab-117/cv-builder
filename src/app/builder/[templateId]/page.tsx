"use client";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useResumeStore } from "@/store/useResumeStore";
import ResumeForm from "@/components/ResumeForm";
import ResumePreview from "@/components/ResumePreview";
import ExportMenu from "@/components/ExportMenu";

export default function BuilderPage() {
  const params = useParams<{ templateId: string }>();
  const templateId = params.templateId;
  const { resume, setResume } = useResumeStore();

  useEffect(() => {
    if (templateId && resume.templateId !== templateId) {
      setResume({ templateId });
    }
  }, [templateId]);

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">CV Builder</h1>
        <ExportMenu />
      </div>
      <div className="grid lg:grid-cols-[1fr_820px] gap-6">
        <div className="space-y-6">
          <ResumeForm />
        </div>
        <ResumePreview />
      </div>
    </main>
  );
}
