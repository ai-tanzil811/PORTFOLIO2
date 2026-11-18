import PDFDocument from "pdfkit";
import fs from "node:fs";
import { profile } from "../src/data/profile";
import { education } from "../src/data/education";
import { skillGroups } from "../src/data/skills";
import { links } from "../src/data/links";

fs.mkdirSync("public", { recursive: true });
const doc = new PDFDocument({ size: "A4", margin: 42, info: { Title: `${profile.name} - CV`, Author: profile.name } });
doc.pipe(fs.createWriteStream("public/cv.pdf"));
doc.font("Helvetica-Bold").fontSize(20).text(profile.name);
doc.moveDown(0.2).font("Helvetica").fontSize(10).text("AI & Data Science | Software Engineering");
doc.text(`${profile.location} | ${links.emailAddress}`);
doc.text(`${links.linkedin} | ${links.github}`);
doc.moveDown(0.7).font("Helvetica-Bold").fontSize(11).text("PROFILE");
doc.moveDown(0.2).font("Helvetica").fontSize(9).text(profile.about, { lineGap: 1 });
doc.moveDown(0.7).font("Helvetica-Bold").fontSize(11).text("EDUCATION");
for (const item of education) {
  doc.moveDown(0.25).font("Helvetica-Bold").fontSize(9).text(`${item.credential} - ${item.institution}`);
  doc.font("Helvetica").text(`${item.detail} | ${item.period}`);
}
doc.moveDown(0.7).font("Helvetica-Bold").fontSize(11).text("SELECTED WORK");
const work = [
  ["GreenPEFT", "Green AI decision-support framework for resource-aware PEFT comparison; live app and released package/artifacts."],
  ["COHERE", "Team spatial-proteomics research; my contributions: cohort standardization, representation engineering, leakage controls, and diagrams."],
  ["SPRINT", "Spatial communication inference and reproducible spatial feature verification pipelines."],
  ["ChestX-ray14 Distillation", "Multi-label thoracic pathology classification and knowledge-distillation evaluation."],
  ["Nirapod", "HCI survey portal and emergency-safety interaction prototype."],
];
for (const [title, copy] of work) {
  doc.moveDown(0.25).font("Helvetica-Bold").fontSize(9).text(title, { continued: true }).font("Helvetica").text(` - ${copy}`);
}
doc.moveDown(0.7).font("Helvetica-Bold").fontSize(11).text("SKILLS");
for (const group of skillGroups) {
  doc.moveDown(0.25).font("Helvetica-Bold").fontSize(9).text(`${group.title}: `, { continued: true }).font("Helvetica").text(group.skills.join(", "));
}
doc.end();
