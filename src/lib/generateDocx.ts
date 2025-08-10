import { Document, Packer, Paragraph, TextRun } from "docx";
import { Resume } from "./types";

export async function generateDocx(resume: Resume): Promise<Blob> {
  const doc = new Document({
    sections: [{
      children: [
        new Paragraph({ children: [new TextRun({ text: resume.profile.fullName || "Your Name", bold: true, size: 32 })] }),
        new Paragraph({ children: [new TextRun([resume.profile.email, resume.profile.phone, resume.profile.location].filter(Boolean).join(" · "))] }),
        ...(resume.summary ? [new Paragraph({ children: [new TextRun({ text: "Summary", bold: true })] }), new Paragraph(resume.summary)] : []),
        new Paragraph({ children: [new TextRun({ text: "Experience", bold: true })] }),
        ...resume.experience.flatMap(e => [
          new Paragraph({ children: [new TextRun({ text: `${e.role} — ${e.company}` , bold: true})] }),
          new Paragraph({ children: [new TextRun({ text: `${e.start} – ${e.end || "Present"}`})] }),
          ...e.highlights.map(h => new Paragraph({ text: `• ${h}` }))
        ]),
        new Paragraph({ children: [new TextRun({ text: "Education", bold: true })] }),
        ...resume.education.flatMap(ed => [
          new Paragraph({ children: [new TextRun({ text: `${ed.degree}, ${ed.school}` })] }),
          new Paragraph({ children: [new TextRun({ text: `${ed.start} – ${ed.end || "Present"}` })] }),
        ]),
        ...(resume.skills.length ? [new Paragraph({ children: [new TextRun({ text: "Skills", bold: true })] }), new Paragraph(resume.skills.join(", "))] : [])
      ]
    }]
  });

  const blob = await Packer.toBlob(doc);
  return blob;
}
