import Link from "next/link";
import TemplateCardGrid from "@/components/TemplateCard.tsx";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10 space-y-12">
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Build a professional CV and land your next job</h1>
          <p className="mt-3 text-slate-600">Free, ATS-friendly templates. Guided builder. Export as PDF or Word.</p>
          <div className="mt-6 flex gap-3">
            <Link href="/builder/classic-ats" className="px-4 py-3 rounded-xl bg-brand text-white">Create your CV</Link>
            <Link href="/templates" className="px-4 py-3 rounded-xl border">Browse templates</Link>
          </div>
          <div className="mt-6">
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <span className="px-2 py-1 rounded-full bg-slate-100">ATS friendly</span>
              <span className="px-2 py-1 rounded-full bg-slate-100">100% free</span>
              <span className="px-2 py-1 rounded-full bg-slate-100">No signup required</span>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border p-4 bg-gradient-to-br from-slate-50 to-white">
          {/* Placeholder preview panel */}
          <div className="h-96 grid place-items-center text-slate-400">Live preview on the right in builder</div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Featured CV Templates</h2>
          <Link href="/templates" className="text-brand">See all</Link>
        </div>
        <TemplateCardGrid />
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        {[
          { title: "Choose a template", text: "Pick from professional and modern designs." },
          { title: "Fill in your details", text: "Guided, step-by-step form with autosave." },
          { title: "Download & apply", text: "Export as PDF or Word and start applying." },
        ].map((s) => (
          <div key={s.title} className="rounded-2xl border p-5 bg-white">
            <div className="text-lg font-medium">{s.title}</div>
            <div className="text-sm text-slate-600 mt-2">{s.text}</div>
          </div>
        ))}
      </section>
    </main>
  );
}
