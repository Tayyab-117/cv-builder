import { Resume } from "./types";
import React from "react";

export type TemplateMeta = {
  id: string;
  name: string;
  badges?: string[];
  previewHint?: string;
};

export const templates: TemplateMeta[] = [
  { id: "classic-ats", name: "Classic ATS", badges: ["ATS", "One-page"] },
  { id: "modern-clean", name: "Modern Clean", badges: ["Grid", "Professional"] },
];

export function renderTemplate(id: string, data: Resume) {
  switch (id) {
    case "modern-clean":
      return <ModernClean data={data} />;
    default:
      return <ClassicATS data={data} />;
  }
}

// --- TEMPLATE 1: Classic ATS ---
function ClassicATS({ data }: { data: Resume }) {
  return (
    <div className="w-[794px] min-h-[1123px] p-8 mx-auto bg-white text-slate-900 leading-relaxed">
      <header className="border-b pb-3 mb-4">
        <h1 className="text-3xl font-semibold">{data.profile.fullName || "Your Name"}</h1>
        <div className="text-sm text-slate-600">
          {[data.profile.location, data.profile.email, data.profile.phone]
            .filter(Boolean)
            .join(" · ")}
        </div>
        {data.profile.links?.length ? (
          <div className="text-xs text-slate-600 mt-1 space-x-2">
            {data.profile.links.map((l, i) => (
              <span key={i}>
                {l.label}: {l.url}
              </span>
            ))}
          </div>
        ) : null}
      </header>

      {data.summary && (
        <section className="mb-4">
          <h2 className="uppercase tracking-wide text-xs text-slate-600 font-semibold mb-1">Summary</h2>
          <p className="text-sm">{data.summary}</p>
        </section>
      )}

      <section className="mb-4">
        <h2 className="uppercase tracking-wide text-xs text-slate-600 font-semibold mb-1">Experience</h2>
        <div className="space-y-3">
          {data.experience.map((e, idx) => (
            <div key={idx}>
              <div className="flex justify-between text-sm font-medium">
                <span>{e.role} — {e.company}</span>
                <span className="text-slate-600">{e.start} – {e.end || "Present"}</span>
              </div>
              {e.location && <div className="text-xs text-slate-600">{e.location}</div>}
              <ul className="list-disc pl-5 text-sm mt-1 space-y-1">
                {e.highlights.map((h, i) => <li key={i}>{h}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-4">
        <h2 className="uppercase tracking-wide text-xs text-slate-600 font-semibold mb-1">Education</h2>
        <div className="space-y-2 text-sm">
          {data.education.map((e, i) => (
            <div key={i} className="flex justify-between">
              <span>{e.degree}, {e.school}</span>
              <span className="text-slate-600">{e.start} – {e.end || "Present"}</span>
            </div>
          ))}
        </div>
      </section>

      {data.skills?.length ? (
        <section className="mb-2">
          <h2 className="uppercase tracking-wide text-xs text-slate-600 font-semibold mb-1">Skills</h2>
          <div className="text-sm">{data.skills.join(" · ")}</div>
        </section>
      ) : null}
    </div>
  );
}

// --- TEMPLATE 2: Modern Clean ---
function ModernClean({ data }: { data: Resume }) {
  return (
    <div className="w-[794px] min-h-[1123px] p-10 mx-auto bg-white text-slate-900 leading-relaxed">
      <header className="mb-6">
        <h1 className="text-4xl font-bold">{data.profile.fullName || "Your Name"}</h1>
        <div className="text-slate-600">{data.profile.headline || "Your Title"}</div>
        <div className="mt-2 text-sm">
          {[data.profile.email, data.profile.phone, data.profile.location].filter(Boolean).join(" · ")}
        </div>
      </header>
      <div className="grid grid-cols-3 gap-6">
        <aside className="col-span-1 space-y-4">
          {data.skills?.length ? (
            <section>
              <h2 className="text-xs uppercase font-semibold text-slate-600 mb-2">Skills</h2>
              <ul className="text-sm space-y-1">
                {data.skills.map((s, i) => <li key={i} className="rounded bg-slate-100 px-2 py-1">{s}</li>)}
              </ul>
            </section>
          ) : null}
          {data.education?.length ? (
            <section>
              <h2 className="text-xs uppercase font-semibold text-slate-600 mb-2">Education</h2>
              <ul className="text-sm space-y-2">
                {data.education.map((e, i) => (
                  <li key={i}>
                    <div className="font-medium">{e.degree}</div>
                    <div className="text-slate-600">{e.school}</div>
                    <div className="text-xs text-slate-500">{e.start} – {e.end || "Present"}</div>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </aside>
        <main className="col-span-2 space-y-6">
          {data.summary && (
            <section>
              <h2 className="text-xs uppercase font-semibold text-slate-600 mb-2">Summary</h2>
              <p className="text-sm">{data.summary}</p>
            </section>
          )}
          <section>
            <h2 className="text-xs uppercase font-semibold text-slate-600 mb-2">Experience</h2>
            <div className="space-y-4">
              {data.experience.map((e, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm">
                    <div className="font-medium">{e.role} — {e.company}</div>
                    <div className="text-slate-500">{e.start} – {e.end || "Present"}</div>
                  </div>
                  <ul className="list-disc pl-5 text-sm mt-1 space-y-1">
                    {e.highlights.map((h, j) => <li key={j}>{h}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
