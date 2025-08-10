"use client";
import Link from "next/link";
import { templates } from "@/lib/templates";
import { ArrowRight } from "lucide-react";

export default function TemplateCardGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {templates.map(t => (
        <div key={t.id} className="rounded-2xl border p-4 hover:shadow-md transition bg-white">
          <div className="h-40 bg-slate-100 rounded-xl mb-3 grid place-items-center text-slate-400 text-sm">
            {t.name} preview
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">{t.name}</div>
              <div className="text-xs text-slate-500">{t.badges?.join(" • ")}</div>
            </div>
            <Link href={`/builder/${t.id}`} className="inline-flex items-center gap-1 text-brand hover:text-brand-dark">
              Use <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
