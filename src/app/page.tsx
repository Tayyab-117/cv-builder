
import Link from "next/link";
import TemplateCardGrid from "../components/TemplateCard";
import Reviews from "../components/Reviews";
import Brands from "../components/Brands";

export default function Home() {
  return (
    <main className="">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-sky-50" />
        <div className="relative max-w-6xl mx-auto px-4 pb-12 pt-8">
          <header className="flex items-center justify-between py-2">
            <Link href="/" className="font-semibold text-slate-800">CVCraft</Link>
            <nav className="hidden md:flex gap-6 text-sm text-slate-600">
              <Link href="/templates">Templates</Link>
              <a href="#reviews">Reviews</a>
              <a href="#brands">Brands</a>
            </nav>
            <div className="flex gap-2">
              <Link href="/builder/classic-ats" className="px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800">Create new CV</Link>
              <Link href="/templates" className="px-4 py-2 rounded-xl border hover:bg-white">See templates</Link>
            </div>
          </header>

          <div className="grid md:grid-cols-2 gap-10 items-center mt-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
                Create a job‑ready CV in minutes
              </h1>
              <p className="mt-4 text-slate-600">
                Super clean, ATS‑friendly designs inspired by the best on Dribbble and Wix.
                Export to <strong>PDF</strong> or <strong>Word</strong>. Always free.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/builder/classic-ats" className="px-5 py-3 rounded-2xl bg-indigo-600 text-white hover:bg-indigo-700">Create new CV</Link>
                <Link href="/templates" className="px-5 py-3 rounded-2xl border hover:bg-white">See templates</Link>
              </div>
              <div className="mt-4 text-xs text-slate-500 flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-white border rounded-full">ATS friendly</span>
                <span className="px-2 py-1 bg-white border rounded-full">100% free</span>
                <span className="px-2 py-1 bg-white border rounded-full">No signup needed</span>
              </div>
            </div>
            <div className="rounded-3xl border bg-white/60 p-4 shadow-sm backdrop-blur">
              <div className="h-[420px] grid place-items-center text-slate-400">Live preview appears in builder</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED TEMPLATES */}
      <section className="max-w-6xl mx-auto px-4 py-12 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Featured templates</h2>
          <Link href="/templates" className="text-indigo-600 hover:text-indigo-700 text-sm">View all</Link>
        </div>
        <TemplateCardGrid />
      </section>

      {/* BRANDS */}
      <div id="brands">
        <Brands />
      </div>

      {/* REVIEWS */}
      <div id="reviews">
        <Reviews />
      </div>
    </main>
  );
}
