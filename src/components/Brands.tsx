
export default function Brands() {
  const brands = ["CareerHub", "TalentFlow", "Hirely", "JobSpring", "SkillWorks", "NextHire"];
  return (
    <section className="bg-slate-50 border-t">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="text-xs uppercase tracking-wide text-slate-500 mb-4">Trusted by candidates from</div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {brands.map((b) => (
            <div key={b} className="h-10 rounded-lg grid place-items-center bg-white border text-slate-500 text-sm">{b}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
