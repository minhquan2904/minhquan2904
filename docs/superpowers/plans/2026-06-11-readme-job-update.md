# README Job Update (Zalo / Fiza) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update the GitHub profile `README.md` to reflect the job change from VNPAY to Zalo (Fiza) per the spec at `docs/superpowers/specs/2026-06-11-readme-job-update-design.md`.

**Architecture:** Markdown-only edits to a single file (`README.md`). Three localized changes: About Me paragraph, Core Competencies list items, and a new Experience entry. No code, no tests — verification is reading the rendered diff.

**Tech Stack:** Markdown (GitHub profile README).

---

### Task 1: Update About Me headline

**Files:**
- Modify: `README.md:30`

- [ ] **Step 1: Replace the About Me paragraph**

Replace this exact line (line 30):

```markdown
**Bùi Minh Quân** — Results-oriented **Full-Stack .NET Team Leader** with over 6 years of experience architecting and delivering scalable back-office systems for the banking sector. I am passionate about driving engineering efficiency by pioneering **AI-driven development workflows**, leveraging OpenSpec and Antigravity Kit to orchestrate autonomous agents.
```

with:

```markdown
**Bùi Minh Quân** — **Lead Software Engineer** at **Zalo (Fiza)** with over 7 years of experience building scalable systems for the banking & fintech sector. Previously led a full-stack .NET team delivering digital banking platforms at VNPAY; now working with **Java & ReactJS**. Passionate about driving engineering efficiency by pioneering **AI-driven development workflows**, leveraging OpenSpec and Antigravity Kit to orchestrate autonomous agents.
```

- [ ] **Step 2: Verify**

Run: `git diff README.md`
Expected: one paragraph replaced under `## 👋 About Me`, no other hunks.

### Task 2: Update Core Competencies

**Files:**
- Modify: `README.md:37-38`

- [ ] **Step 1: Update Backend line**

Replace:

```markdown
        <li><b>Backend:</b> .NET Core, .NET Framework, EF Core</li>
```

with:

```markdown
        <li><b>Backend:</b> Java, .NET Core, .NET Framework, EF Core</li>
```

- [ ] **Step 2: Update Frontend line**

Replace:

```markdown
        <li><b>Frontend:</b> Angular, TypeScript, JavaScript</li>
```

with:

```markdown
        <li><b>Frontend:</b> ReactJS, Angular, TypeScript, JavaScript</li>
```

- [ ] **Step 3: Verify**

Run: `git diff README.md`
Expected: Backend and Frontend `<li>` lines updated; Database, DevOps & Infra, AI & Automation lines untouched.

### Task 3: Add new Experience entry

**Files:**
- Modify: `README.md:68-70` (top of `## 💼 Experience` section)

- [ ] **Step 1: Insert new entry directly under the `## 💼 Experience` heading, above the VNPAY Team Leader entry**

```markdown
### **Lead Software Engineer** @ **Zalo (Fiza)** _(05/2026 – Present)_

- Building and scaling fintech products on the Zalo ecosystem with **Java & ReactJS**.
```

The VNPAY entry below it stays exactly as-is, including the `_(04/2022 – 04/2026)_` end date.

- [ ] **Step 2: Verify**

Run: `git diff README.md`
Expected: new H3 entry inserted at the top of Experience; VNPAY and Shinhan DS entries unchanged.

### Task 4: Final review and commit

**Files:**
- Modify: `README.md`

- [ ] **Step 1: Read the full diff one last time**

Run: `git diff README.md`
Expected: exactly three change areas (About Me, two competency lines, new Experience entry). Banner, badges, GitHub Analytics, Featured Projects untouched.

- [ ] **Step 2: Commit**

```bash
git add README.md
git commit -m "Update README for new role: Lead Software Engineer @ Zalo (Fiza)"
```
