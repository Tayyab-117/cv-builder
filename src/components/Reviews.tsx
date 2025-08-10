
export default function Reviews() {
  const items = [
    { name: "Sara K.", title: "Marketing Manager", text: "Got 3 interviews in a week. The templates look premium and export perfectly.", rating: 5 },
    { name: "James R.", title: "Software Engineer", text: "Clean, ATS-safe, and fast. Love the live preview.", rating: 5 },
    { name: "Amina H.", title: "Data Analyst", text: "Best free CV builder I’ve tried. Word export is super handy.", rating: 5 },
  ] as const;

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 space-y-6">
      <h2 className="text-2xl font-semibold">Loved by job seekers</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((r, i) => (
          <div key={i} className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-1 text-amber-500" aria-label={`${r.rating} out of 5 stars`}>
              {"★★★★★".slice(0, r.rating)}
            </div>
            <p className="mt-2 text-slate-700">{r.text}</p>
            <div className="mt-4 text-sm text-slate-500">{r.name} • {r.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
