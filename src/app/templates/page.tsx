import TemplateCardGrid from "@/components/TemplateCard";

export default function TemplatesPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10 space-y-6">
      <h1 className="text-3xl font-bold">Templates</h1>
      <TemplateCardGrid />
    </main>
  );
}
