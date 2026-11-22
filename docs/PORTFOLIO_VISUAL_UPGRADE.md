# Portfolio Visual Upgrade — Agent Implementation Brief

**Repository:** `ai-tanzil811/PORTFOLIO2`  
**Live site:** https://aitanzil.me  
**Framework:** Next.js 15, React 19, TypeScript, Tailwind CSS, static export  
**Design accent:** `#0F766E` (retain the existing teal identity)  
**Branch:** `docs/portfolio-visual-upgrade-plan`

## Mission

Upgrade the existing portfolio into an evidence-led engineering and research portfolio. Do not create a second website, replace the current design wholesale, or turn the site into a generic AI-generated template.

The goal is to improve the presentation of real work through authentic project screenshots, diagrams, hardware photographs, research figures, and well-written case studies. Keep the current visual identity and existing routes unless a change is clearly justified.

This file is an implementation brief. The agent must inspect the current codebase before editing and must not assume that suggested paths, components, or asset files already exist.

---

## 1. Repository facts already inspected

The repository README documents:

- Next.js 15 static export using `output: "export"`.
- Static output is written to `out/`.
- Node.js 20+ and npm 10+.
- Typed portfolio content under `src/data/`.
- Project cards in `src/data/projects.ts`.
- Case-study content in `src/data/research.ts`.
- Profile data in `src/data/profile.ts`.
- Links in `src/data/links.ts`.
- Case-study route presentation in `src/app/work/[slug]/page.tsx`.
- Static images/documents belong in `public/` and should be referenced with root-relative paths.
- `npm run build` generates the CV and static export.
- Existing checks: `npm run typecheck`, `npm run lint`, `npm test`, and `npm run build`.

The existing project data already includes COHERE, Medical Imaging, Nirapod, GreenPEFT, SecureVoice, and MediVault. The existing case-study data includes GreenPEFT, COHERE, and SPRINT & Spatial Verification. Extend these structures rather than duplicating them.

**Important:** preserve the existing static-export compatibility. Do not introduce server-only features, runtime image optimization dependencies, or a hosting change.

---

## 2. Required project coverage

Add or improve portfolio entries/case studies for the following work. Do not invent project outcomes, metrics, ownership, deployment status, or technologies.

### A. COHERE — Cross-Cohort Harmonization and Representation Transfer

- Team research project on spatial-proteomics cell-type annotation.
- Public project repository: https://github.com/Tabassum-Sumaiya13/transferable-celltype-representation
- A methodology diagram has been supplied in the conversation. Use that diagram as a genuine project artifact after the owner places the original image in the local asset folder.
- The supplied diagram depicts seven public cancer cohorts: CRC, UPMC, Phillips, Keren, Danenberg, Sorin, and Ferguson; approximately 6.06 million cells; molecular harmonization; label-space construction; representation learning; 7-fold leave-one-cohort-out evaluation; performance/reproducibility; and final cell-type output.
- The diagram names CODEX, IMC, and MIBI-TOF and shows a 109-marker vocabulary with an ABSENT token.
- Do not alter scientific labels or redraw the diagram in a way that changes the method.
- The current site already has a COHERE case study and a team repository link. Preserve and improve it.
- Do not publish a macro-F1 score unless the exact evaluation setting and final metric are verified from project records.

### B. GreenPEFT — Sustainability-Aware PEFT Decision Support

- Existing project page/data and live application: https://green-peft.vercel.app/
- Repository: https://github.com/ai-tanzil811/Green-AI-Decision-Support-Frameworks
- Existing public artifacts include a Hugging Face model/dataset and a PyPI package; retain the current source links.
- Visuals should explain the decision-support pipeline and quality/resource trade-offs, not imply that one PEFT method is universally best.
- Good visual candidates: experiment pipeline, resource measurement panel, energy/carbon measurement explanation, Pareto-frontier plot, and recommendation output.
- Use actual benchmark plots/data supplied by the owner. Do not fabricate charts, results, model scores, carbon numbers, or hardware measurements.

### C. ML-Based Fall Detection Wearable Device

- This is a separate machine-learning + embedded-hardware project, not just a generic health dashboard.
- Repository supplied by the owner: https://github.com/ihmorol/Fall_Detection_Wearable_Device
- The owner confirmed that the previously referenced `Group_6_Team_Paradox.pdf` is the documentation for this ML-based fall-detection project.
- Inspect the PDF and repository before writing detailed component lists or claims. Extract genuine system/block diagrams, circuit diagrams, hardware photos, model workflow, and screenshots where available.
- Previously discussed hardware details include ESP32/ESP32-S3, MPU6050, MAX30102, OLED, DS3231, TinyML/Edge Impulse, vibration/buzzer alert, Li-Po/TP4056, and cloud/dashboard integration. Treat this list as a lead for source verification, not as permission to publish every item as a confirmed final design.
- Any cost figure (including a previously discussed approximate BDT 4,000) must be checked against the PDF's bill of materials before publication.
- Explain the ML inference path and embedded sensing path separately if the sources support it.
- Avoid claiming clinical validation or medical-device certification.

### D. Shwapno Data Leakage / Cybersecurity Simulation Lab

- The owner supplied an actual screenshot of a local ransomware/data-exfiltration simulation dashboard.
- The screenshot visibly includes a Shwapno admin database portal, a local attacker terminal, a closed-environment simulation label, and Wazuh SIEM / MyDLP agent status indicators.
- Present this accurately as a controlled case-study replication / closed-environment lab simulation.
- Do not describe it as a real Shwapno production breach, real customer-data compromise, or a deployed ransomware operation.
- Use the actual screenshot, not a generated fake dashboard. Crop or frame it responsively without hiding important context.

### E. SecureVoice

- The owner supplied an actual screenshot of a Bangladesh map-based crime/incident reporting interface with map markers and controls such as anonymous report, find my location, reset view, crime heatmap, and division markers.
- Repository previously referenced: https://github.com/ai-tanzil811/DBMS-Project-Spring-25
- Use the supplied screenshot as authentic evidence. Preserve map attribution if present in the source screenshot or project.
- Do not claim that reports are verified or that the system is deployed nationally unless the source code/project documentation proves it.

### F. Nirapod

- Existing project entry and live prototype link are already in the portfolio data.
- Project concept: universal personal safety app; the design direction includes SOS and multiple emergency triggers, distress modes, emergency contacts, and an accidental-trigger cancellation window.
- Use actual Figma screens if available. Do not fabricate app screens and present them as the implemented product.
- Keep it clear whether each visual is a Figma prototype, research concept, or working feature.

### G. Figma Community and EarnNLearn

- Figma Community contribution supplied by owner: https://www.figma.com/community/file/1623757181053559103
- EarnNLearn system-design repository supplied by owner: https://github.com/pawpaw64/EarnNLearn-System-Design
- Review the public Figma file and repository to establish what can be shown and what the owner's specific contribution was.
- Do not infer authorship of every screen/diagram in a collaborative file. Use careful wording such as “design contribution” or “system design work” unless individual ownership is clear.
- Link to the public Figma Community file and EarnNLearn repository.

### H. Personal portrait

- The owner supplied a real portrait photograph in the conversation: wearing a dark suit, white shirt, and blue tie, standing in a modern university building.
- Use this genuine photograph for the portfolio hero/about area if the owner places the original file into the local asset directory.
- Do not substitute an AI-generated person or stock headshot for the owner's identity.
- Crop responsively and preserve the subject's appearance. Do not apply face-altering filters.

---

## 3. Asset structure

First inspect `public/` and reuse existing suitable assets. Do not overwrite or delete assets.

Suggested organization (adapt to existing conventions):

```text
public/
  images/
    profile/
      tanzil-portrait.jpg
    projects/
      cohere/
        methodology-pipeline.png
        cohort-visualization.png
        cell-embedding.png
      greenpeft/
        pipeline.png
        pareto-frontier.png
        resource-monitoring.png
      fall-detection/
        system-architecture.png
        circuit-diagram.png
        prototype.jpg
        model-workflow.png
      cybersecurity/
        shwapno-lab-dashboard.png
      securevoice/
        map-interface.png
      nirapod/
        prototype-screens.png
      figma/
        community-design-cover.png
      earnednlearn/
        system-architecture.png
```

The owner must supply the original image/PDF/Figma exports in the local workspace. If an asset is missing, create a clearly named placeholder only if the current design requires one, or omit the image. Never create a fake “actual screenshot”.

Add descriptive alt text. Prefer optimized local raster images (WebP/AVIF only if the build pipeline supports them safely); keep the original source assets outside the public directory if needed. Do not add large raw PDFs or source datasets to the public website unless there is a deliberate download feature.

---

## 4. UX and visual design requirements

- Preserve the existing brand and teal accent `#0F766E`.
- Keep a restrained, editorial, technical aesthetic: generous whitespace, clear typography, subtle borders, consistent spacing, and purposeful image treatment.
- Avoid neon gradients, excessive glassmorphism, floating decorative blobs, generic AI illustrations, fake browser chrome, and unnecessary animation.
- Use project-specific color only inside scientific figures or source screenshots; keep the surrounding site system consistent.
- Make the project cards more visual with real thumbnails, but do not let images overwhelm the project title, summary, contribution, and links.
- Case-study pages should support responsive image galleries or a small set of figure blocks with captions.
- Each figure should have a clear caption and, where useful, a note explaining whether it is a screenshot, diagram, research visualization, or Figma prototype.
- Use accessible color contrast, keyboard focus states, semantic headings, and descriptive links.
- Ensure mobile layout works on narrow screens.
- Do not use image backgrounds for important text.

---

## 5. Project case-study structure

Where suitable, each detailed project page should follow this order:

1. Project title, category, one-sentence summary, and project status.
2. Hero visual (real screenshot/diagram).
3. Problem and context.
4. System / research approach.
5. Architecture or workflow figure.
6. Owner's contribution — only source-supported responsibilities.
7. Implementation details / tools.
8. Results and limitations — verified values only.
9. Gallery of additional evidence.
10. Links to live demo, repository, paper, dataset, Figma, or other public artifacts.

Use explicit contribution wording for team projects. Distinguish:
- personal work,
- team output,
- upstream/public dataset or model,
- Figma prototype,
- local simulation,
- deployed application.

Do not label a project “production-ready” or “deployed” unless verified.

---

## 6. Technical implementation plan

### Phase 1 — Audit before edits

- Inspect the complete current repository, especially `src/app/`, `src/components/`, `src/data/projects.ts`, `src/data/research.ts`, `src/app/work/[slug]/page.tsx`, global styles, and existing tests.
- Identify current image component conventions and existing image files.
- Check whether a gallery/figure component already exists.
- Identify all routes and current project slugs.
- Do not change unrelated content, typography, navigation, CV generation, SEO, analytics, or deployment configuration.

### Phase 2 — Build an asset manifest

- Add a typed project-asset manifest or extend existing case-study types.
- Each asset entry should contain a stable ID, local `src`, alt text, caption, and optional type label.
- Keep asset references centralized rather than scattering paths throughout JSX.
- Add only assets that exist in the repository.
- If an asset is pending, record it in a separate checklist rather than rendering a broken image.

### Phase 3 — Upgrade the project index

- Add authentic thumbnail images to the relevant project cards.
- Maintain category filtering and current project navigation.
- Ensure cards remain readable and usable without images.
- Do not invent metrics to fill empty visual space.

### Phase 4 — Upgrade case-study pages

- Add responsive figure/gallery presentation.
- Improve case-study hierarchy and contribution clarity.
- Add the fall-detection case study using verified PDF/repository evidence.
- Improve cybersecurity, SecureVoice, Figma, and EarnNLearn evidence sections where reliable source material exists.
- Keep COHERE and GreenPEFT claims consistent with their current source data.

### Phase 5 — Verify

Run all existing checks:

```bash
npm ci
npm run typecheck
npm run lint
npm run test:unit
npm run test:e2e
npm run build
```

If Playwright browsers are not installed, report that explicitly and install only using the repository's existing documented workflow. Do not silently skip failing tests.

Check:
- no broken image paths;
- no missing alt text;
- no horizontal overflow at mobile widths;
- all project links work;
- all case-study routes render under static export;
- no unsupported server components or runtime-only APIs;
- no accidental changes to `CNAME`, deployment workflows, or CV generation;
- no fabricated project claims.

### Phase 6 — Report

At completion, provide:
- summary of files changed;
- new asset paths and which original source each came from;
- case studies added/updated;
- tests and build commands run with results;
- any assets still needed from the owner;
- screenshots of desktop and mobile pages if the agent can capture them;
- a concise list of factual claims that still need owner confirmation.

---

## 7. Owner-supplied source assets checklist

The owner should place these original files in the workspace before asking the coding agent to complete the visual integration:

- [ ] Original personal portrait photograph.
- [ ] COHERE methodology diagram (the supplied seven-stage diagram).
- [ ] `Group_6_Team_Paradox.pdf` (ML-based fall-detection project documentation).
- [ ] Original Shwapno simulation screenshot.
- [ ] Original SecureVoice screenshot.
- [ ] Figma exports/screenshots for Nirapod and the Figma Community contribution.
- [ ] EarnNLearn diagrams/screenshots, with individual contribution confirmed.
- [ ] Actual GreenPEFT charts/screenshots from the final verified run.

The user has already shared several of these in the ChatGPT conversation. A coding agent running in VS Code may not have access to those chat attachments automatically; copy the original files into the repository workspace or attach them to the coding agent session.

---

## 8. Guardrails

- Do not replace the current website with a new template.
- Do not rewrite all copy just for stylistic variation.
- Do not add fake project screenshots, synthetic dashboards, or generated hardware photographs as evidence.
- Do not expose private data, credentials, respondent-level information, or patient/cell-level sensitive source data.
- Do not change public claims or quantitative results without source verification.
- Do not commit directly to `main`; work on a feature branch and provide a reviewable diff or pull request.
- Do not merge or deploy without the owner's approval.

## Definition of done

The live-site source has an improved, consistent visual system for project evidence; the project cards and case studies use authentic assets; the ML fall-detection project is represented as a distinct hardware/ML system; team and individual contributions are clearly distinguished; the site builds as a static export; all available tests pass; and no unverified claims or fabricated visuals have been introduced.
