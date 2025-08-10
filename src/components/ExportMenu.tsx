"use client";
import { useResumeStore } from "@/store/useResumeStore";
import { Document, Page, Text, View, StyleSheet, pdf } from "@react-pdf/renderer";
import { saveAs } from "./saveAs";
import { generateDocx } from "@/lib/generateDocx";

export default function ExportMenu() {
  const { resume } = useResumeStore();

  async function exportPDF() {
    const styles = StyleSheet.create({
      page: { padding: 24, fontSize: 10, fontFamily: 'Helvetica' },
      h1: { fontSize: 18, marginBottom: 4 },
      h2: { fontSize: 10, marginTop: 10, textTransform: "uppercase" },
      row: { display: "flex", flexDirection: "row", justifyContent: "space-between" },
      bullet: { marginLeft: 8 }
    });

    const Doc = () => (
      <Document>
        <Page size="A4" style={styles.page}>
          <Text style={styles.h1}>{resume.profile.fullName || "Your Name"}</Text>
          <Text>{[resume.profile.email, resume.profile.phone, resume.profile.location].filter(Boolean).join(" · ")}</Text>
          {resume.summary ? (<><Text style={styles.h2}>Summary</Text><Text>{resume.summary}</Text></>) : null}
          <Text style={styles.h2}>Experience</Text>
          {resume.experience.map((e, i) => (
            <View key={i}>
              <View style={styles.row}><Text>{e.role} — {e.company}</Text><Text>{e.start} – {e.end || "Present"}</Text></View>
              {e.highlights.map((h, j) => <Text key={j} style={styles.bullet}>• {h}</Text>)}
            </View>
          ))}
          <Text style={styles.h2}>Education</Text>
          {resume.education.map((e, i) => (
            <View key={i} style={styles.row}><Text>{e.degree}, {e.school}</Text><Text>{e.start} – {e.end || "Present"}</Text></View>
          ))}
          {resume.skills.length ? (<><Text style={styles.h2}>Skills</Text><Text>{resume.skills.join(", ")}</Text></>) : null}
        </Page>
      </Document>
    );

    const blob = await pdf(<Doc />).toBlob();
    saveAs(blob, "resume.pdf");
  }

  async function exportDocx() {
    const blob = await generateDocx(resume);
    saveAs(blob, "resume.docx");
  }

  return (
    <div className="flex gap-2">
      <button onClick={exportPDF} className="px-3 py-2 rounded-lg bg-brand text-white">Download PDF</button>
      <button onClick={exportDocx} className="px-3 py-2 rounded-lg border">Download Word</button>
    </div>
  );
}
