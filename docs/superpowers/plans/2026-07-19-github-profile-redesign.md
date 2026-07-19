# Snowfox GitHub Profile Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the current GitHub profile README with the approved Snowfox editorial design that represents Bùi Minh Quân's current Zalo/Fiza role and AI-driven SDLC focus.

**Architecture:** This is a single-file, content-only redesign. `README.md` remains standard GitHub Markdown with minimal HTML for centered images; the existing Snowfox banner, profile links, and contribution-calendar asset are reused without modifying or deleting repository assets.

**Tech Stack:** GitHub Flavored Markdown, minimal HTML, shell-based static validation with `rg` and `git diff`.

## Global Constraints

- Use English throughout `README.md`.
- Do not mention passing probation.
- Do not add performance metrics, percentages, team sizes, or project counts.
- Do not imply current people-management responsibility.
- Do not expose Fiza partner names, internal architecture, infrastructure, or unreleased product details.
- Keep `banner_top.png` as the only banner referenced by the README; do not generate or modify artwork.
- Do not modify or delete `banner_top.png`, `banner.png`, `svg/*.svg`, or `update_svg.js`.
- Keep only the contribution calendar among GitHub metrics shown in the README.
- Do not use emoji headings, large social badges, wide tables, or a technology badge wall.
- Preserve the existing LinkedIn, Digital Garden, LLM Wiki, TikTok, email, banner, and contribution-calendar URLs.

---

## File map

- Modify: `README.md` — the complete GitHub profile page.
- Reference only: `docs/superpowers/specs/2026-07-19-github-profile-redesign-design.md` — approved requirements and copy.
- Reference only: `banner_top.png` — retained Snowfox visual identity.
- Reference only: `svg/metrics.plugin.isocalendar.svg` — retained contribution calendar.

### Task 1: Replace the profile with the Snowfox editorial design

**Files:**
- Modify: `README.md:1`
- Verify unchanged: `banner_top.png`
- Verify unchanged: `banner.png`
- Verify unchanged: `svg/metrics.plugin.reactions.svg`
- Verify unchanged: `svg/metrics.plugin.languages.indepth.svg`
- Verify unchanged: `svg/metrics.plugin.isocalendar.svg`
- Verify unchanged: `update_svg.js`

**Interfaces:**
- Consumes: Existing public profile URLs and asset paths from `README.md`.
- Produces: A self-contained GitHub profile README with the approved section hierarchy and copy.

- [ ] **Step 1: Replace `README.md` with the approved content**

Use this exact content:

```markdown
<!-- BANNER -->
<p align="center">
  <img src="https://raw.githubusercontent.com/minhquan2904/minhquan2904/main/banner_top.png" alt="Snowfox banner for Bùi Minh Quân" />
</p>

# Bùi Minh Quân

**Lead Software Engineer at Zalo · Fiza**

Hands-on technical lead building financial services for BFSI partners through Zalo Mini Apps and admin portals. I work with Spring Boot and ReactJS, apply AI across the full software development lifecycle, and help product and engineering teams turn those practices into reusable workflows.

[LinkedIn](https://www.linkedin.com/in/quanbmspk/) · [Digital Garden](https://minhquan2904.github.io/) · [Second Brain](https://github.com/minhquan2904/llm-wiki) · [TikTok](https://tiktok.com/@motbannamgiauten71) · [Email](mailto:minhquan2904@outlook.com)

## Current focus

- **Product engineering:** Java, Spring Boot, ReactJS
- **AI-driven SDLC:** Requirements through production
- **Cross-functional enablement:** Product and engineering workflows
- **Automation and tooling:** n8n

## Experience

### Lead Software Engineer · Zalo — Fiza

_May 2026 – Present_

- Build and ship end-to-end features for BFSI partners across Zalo Mini Apps and admin portals using Spring Boot and ReactJS.
- Apply AI throughout the SDLC—from requirements and design through implementation, testing, code review, documentation, and production delivery.
- Advance AI-assisted engineering by reviewing usage, refining workflows, guiding new adopters, and improving codebases.
- Support product and engineering teams in operationalizing AI workflows, including brief and PRD creation for live projects.

### .NET Team Leader · VNPAY

_Apr 2022 – Apr 2026_

- Led a hands-on full-stack team delivering digital-banking platforms with .NET Core, Angular, and Oracle.
- Designed back-office systems for mobile-banking and omnichannel products, including Eximbank eDigi, VietCredit, and Vietbank SME.
- Modernized legacy applications and introduced AI-assisted development practices and n8n workflow automation.

### .NET Developer · VNPAY

_May 2019 – Apr 2022_

- Built and maintained banking back-office systems and landing pages using .NET Core/MVC, AngularJS, and Oracle.

### C++ Developer · Shinhan DS

_Aug 2018 – Mar 2019_

- Trained in and contributed to core-banking development using C++ and Oracle.

## Knowledge & experiments

- [**Digital Garden**](https://minhquan2904.github.io/) — Notes on software engineering, system architecture, and applied AI.
- [**LLM Wiki**](https://github.com/minhquan2904/llm-wiki) — A personal second brain maintained with AI-assisted knowledge workflows.
- [**Tech Content**](https://tiktok.com/@motbannamgiauten71) — Practical programming lessons and experiments in AI-assisted content creation.

## GitHub activity

<div align="center">
  <img src="https://raw.githubusercontent.com/minhquan2904/minhquan2904/main/svg/metrics.plugin.isocalendar.svg" width="100%" alt="GitHub contribution calendar" />
</div>

## Education

**B.S. in Software Engineering** · Ho Chi Minh City University of Technology and Education (HCMUTE)
```

- [ ] **Step 2: Validate required content and structure**

Run:

```bash
rg -n "^# Bùi Minh Quân$|Lead Software Engineer at Zalo · Fiza|BFSI partners|Zalo Mini Apps|Spring Boot|ReactJS|AI-driven SDLC|brief and PRD creation|Digital Garden|LLM Wiki|Tech Content|metrics.plugin.isocalendar.svg|Ho Chi Minh City University of Technology and Education" README.md
test "$(rg -c 'banner_top.png' README.md)" -eq 1
test "$(rg -c 'metrics.plugin.isocalendar.svg' README.md)" -eq 1
test "$(rg -c '^## ' README.md)" -eq 5
```

Expected: `rg` prints matches for every required identity, role, workflow, knowledge, activity, and education element; all three `test` commands exit `0`.

- [ ] **Step 3: Validate forbidden content and untouched assets**

Run:

```bash
! rg -n "passed probation|OpenSpec|Antigravity|metrics.plugin.reactions|metrics.plugin.languages|vibe-check-scam|GPA|Certifications|style=for-the-badge|<table>|👋|📊|💼|🌟|🚀|🎓" README.md
git diff --check
git diff --name-only
```

Expected: the forbidden-content search prints nothing; `git diff --check` exits `0`; `git diff --name-only` prints only `README.md`.

- [ ] **Step 4: Review the complete diff**

Run:

```bash
git diff -- README.md
```

Expected: the diff replaces the old badge/table/dashboard layout with the approved Snowfox editorial structure. It retains the top Snowfox banner, all five public links, the contribution calendar, the four Fiza bullets, condensed prior experience, three knowledge links, and one-line education entry.

- [ ] **Step 5: Commit the implementation**

Run:

```bash
git add README.md
git commit -m "Redesign GitHub profile around AI-driven SDLC"
```

Expected: a new commit containing only `README.md`.

### Task 2: Verify the committed profile against the acceptance criteria

**Files:**
- Verify: `README.md`
- Verify unchanged: `banner_top.png`
- Verify unchanged: `banner.png`
- Verify unchanged: `svg/metrics.plugin.reactions.svg`
- Verify unchanged: `svg/metrics.plugin.languages.indepth.svg`
- Verify unchanged: `svg/metrics.plugin.isocalendar.svg`
- Verify unchanged: `update_svg.js`

**Interfaces:**
- Consumes: The committed README from Task 1 and the approved design spec.
- Produces: Fresh evidence that the working tree is clean and every static acceptance check passes.

- [ ] **Step 1: Run the post-commit acceptance gate**

Run:

```bash
git diff HEAD^ --check
test "$(git diff-tree --no-commit-id --name-only -r HEAD | wc -l | tr -d ' ')" -eq 1
test "$(git diff-tree --no-commit-id --name-only -r HEAD)" = "README.md"
test "$(rg -c 'banner_top.png' README.md)" -eq 1
test "$(rg -c 'metrics.plugin.isocalendar.svg' README.md)" -eq 1
test "$(rg -c '^## ' README.md)" -eq 5
! rg -n "passed probation|OpenSpec|Antigravity|metrics.plugin.reactions|metrics.plugin.languages|vibe-check-scam|GPA|Certifications|style=for-the-badge|<table>|👋|📊|💼|🌟|🚀|🎓" README.md
git status --short
```

Expected: all checks exit `0`, the forbidden-content search and `git status --short` print nothing, and the latest commit contains only `README.md`.

- [ ] **Step 2: Record verification evidence**

Report this structure using fresh command output:

```json
{
  "status": "pass",
  "checks": {
    "markdownDiff": "clean",
    "changedFilesInImplementationCommit": ["README.md"],
    "requiredSectionCount": 5,
    "snowfoxBannerReferences": 1,
    "contributionCalendarReferences": 1,
    "forbiddenContentMatches": 0,
    "workingTree": "clean"
  }
}
```
