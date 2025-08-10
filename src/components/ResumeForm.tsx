"use client";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useResumeStore } from "@/store/useResumeStore";
import { Resume } from "@/lib/types";
import { useEffect } from "react";

const schema = z.object({
  profile: z.object({
    fullName: z.string().min(1),
    headline: z.string().optional(),
    email: z.string().email().optional(),
    phone: z.string().optional(),
    location: z.string().optional(),
  }),
  summary: z.string().optional(),
  skills: z.array(z.string()).default([]),
  experience: z.array(z.object({
    company: z.string(),
    role: z.string(),
    start: z.string(),
    end: z.string().optional(),
    location: z.string().optional(),
    highlights: z.array(z.string()).default([]),
  })).default([]),
  education: z.array(z.object({
    school: z.string(),
    degree: z.string(),
    start: z.string(),
    end: z.string().optional(),
    extras: z.array(z.string()).optional(),
  })).default([]),
});

export default function ResumeForm() {
  const { resume, setResume } = useResumeStore();
  const form = useForm<Resume>({
    resolver: zodResolver(schema as any),
    defaultValues: resume,
    values: resume,
    mode: "onChange",
  });

  // sync to store on change
  useEffect(() => {
    const sub = form.watch((v) => {
      setResume(v as Partial<Resume>);
    });
    return () => sub.unsubscribe();
  }, [form, setResume]);

  const exp = useFieldArray({ control: form.control, name: "experience" as const });
  const edu = useFieldArray({ control: form.control, name: "education" as const });
  const skills = useFieldArray({ control: form.control, name: "skills" as const });

  return (
    <form className="space-y-8">
      <section className="grid md:grid-cols-2 gap-4">
        <h2 className="md:col-span-2 text-sm font-semibold text-slate-700">Profile</h2>
        <Input label="Full name" {...form.register("profile.fullName")} />
        <Input label="Headline" {...form.register("profile.headline")} />
        <Input label="Email" {...form.register("profile.email")} />
        <Input label="Phone" {...form.register("profile.phone")} />
        <Input label="Location" {...form.register("profile.location")} />
      </section>

      <section>
        <h2 className="text-sm font-semibold text-slate-700">Summary</h2>
        <textarea className="mt-2 w-full rounded-lg border p-3" rows={4} {...form.register("summary")} placeholder="Brief 2–3 line professional summary with results..." />
      </section>

      <section>
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-slate-700">Experience</h2>
          <button type="button" onClick={() => exp.append({ company: "", role: "", start: "", end: "", highlights: [] })} className="text-brand">+ Add role</button>
        </div>
        <div className="space-y-6 mt-2">
          {exp.fields.map((f, i) => (
            <div key={f.id} className="rounded-xl border p-4">
              <div className="grid md:grid-cols-2 gap-3">
                <Input label="Company" {...form.register(`experience.${i}.company` as const)} />
                <Input label="Role" {...form.register(`experience.${i}.role` as const)} />
                <Input label="Start (e.g., 2023-01)" {...form.register(`experience.${i}.start` as const)} />
                <Input label="End (or leave blank)" {...form.register(`experience.${i}.end` as const)} />
                <Input label="Location" {...form.register(`experience.${i}.location` as const)} />
              </div>
              <div className="mt-2">
                <label className="text-xs text-slate-600">Highlights (one per line)</label>
                <textarea className="mt-1 w-full rounded-lg border p-3" rows={3}
                  value={(form.getValues(`experience.${i}.highlights`) as string[]).join("\n")}
                  onChange={(e) => form.setValue(`experience.${i}.highlights`, e.target.value.split("\n"))} />
              </div>
              <div className="text-right mt-2">
                <button type="button" onClick={() => exp.remove(i)} className="text-red-600 text-sm">Remove</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-slate-700">Education</h2>
          <button type="button" onClick={() => edu.append({ school: "", degree: "", start: "", end: "" })} className="text-brand">+ Add entry</button>
        </div>
        <div className="space-y-6 mt-2">
          {edu.fields.map((f, i) => (
            <div key={f.id} className="rounded-xl border p-4 grid md:grid-cols-2 gap-3">
              <Input label="School" {...form.register(`education.${i}.school` as const)} />
              <Input label="Degree" {...form.register(`education.${i}.degree` as const)} />
              <Input label="Start (e.g., 2020-09)" {...form.register(`education.${i}.start` as const)} />
              <Input label="End (or leave blank)" {...form.register(`education.${i}.end` as const)} />
              <div className="md:col-span-2">
                <label className="text-xs text-slate-600">Extras (one per line)</label>
                <textarea className="mt-1 w-full rounded-lg border p-3" rows={2}
                  onChange={(e) => form.setValue(`education.${i}.extras`, e.target.value.split("\n"))} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-slate-700">Skills</h2>
          <button type="button" onClick={() => skills.append("")} className="text-brand">+ Add skill</button>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 mt-2">
          {skills.fields.map((f, i) => (
            <input key={f.id} className="rounded-lg border p-2" placeholder="e.g., Python" {...form.register(`skills.${i}` as const)} />
          ))}
        </div>
      </section>
    </form>
  );
}

function Input(props: React.ComponentProps<"input"> & { label: string }) {
  const { label, ...rest } = props;
  return (
    <label className="text-sm">
      <div className="text-xs text-slate-600">{label}</div>
      <input className="mt-1 w-full rounded-lg border p-2" {...rest} />
    </label>
  );
}
