# GitHub profile redesign — Snowfox editorial

**Date:** 2026-07-19  
**Scope:** Redesign the GitHub profile `README.md` after completing probation at Zalo/Fiza.

## Context

The profile already identifies Bùi Minh Quân as a Lead Software Engineer at Zalo/Fiza, but the current role has only one generic bullet. The rest of the page still reflects an earlier, tool-centric identity: it emphasizes OpenSpec and Antigravity Kit, gives VNPAY more visual weight than Fiza, repeats the Snowfox artwork, and devotes substantial space to GitHub metrics.

Passing probation is the trigger for this update, not a public achievement to list. The redesigned profile should represent Quân's current professional identity: a hands-on technical lead building financial services for BFSI partners and applying AI across the full software development lifecycle.

## Goals

- Present the current Zalo/Fiza role with credible, qualitative detail.
- Position AI as an SDLC capability rather than attachment to a particular framework.
- Preserve Snowfox as the personal visual signature.
- Create a concise, English-only profile that feels personal and professional rather than optimized for job hunting.
- Improve hierarchy, scanability, and mobile readability within GitHub Markdown constraints.
- Retain the active knowledge-sharing ecosystem: Digital Garden, LLM Wiki, and tech content.

## Non-goals

- Do not state that probation was passed.
- Do not add performance metrics, percentages, team sizes, or project counts.
- Do not imply people-management responsibility in the current role.
- Do not expose partner names, internal architecture, infrastructure, or unreleased product details from Fiza.
- Do not generate a new banner or redesign the Snowfox artwork.
- Do not turn the README into a recruiter-focused résumé or an exhaustive technology inventory.

## Current-state audit

The redesign addresses these issues in the existing README:

- Two related Snowfox images compete for attention.
- Large social badges dominate the opening section.
- The two-column HTML table is dense and less reliable on mobile.
- The Zalo/Fiza entry is too generic compared with the older VNPAY entry.
- The AI narrative is tied to OpenSpec and Antigravity Kit instead of the broader SDLC.
- Reaction and language metrics take substantial space without clarifying professional identity.
- The featured-project table is wide, and the bank-statement prototype no longer represents the current direction.
- Mixed English and Vietnamese descriptions make the page feel inconsistent.
- GPA and older general certifications make the profile read more like an early-career CV.

## Selected direction

Use a **Snowfox editorial** direction: restrained, text-led, and easy to scan, with the existing Snowfox banner providing the distinctive personality. GitHub controls typography and theme, so the design should rely on information hierarchy, concise writing, spacing, and selective imagery instead of custom CSS or decorative components.

## Information architecture

Use this order:

1. Snowfox banner
2. Name and current title
3. Short positioning paragraph
4. Compact personal links
5. Current focus
6. Experience
7. Knowledge and experiments
8. GitHub activity
9. Education

Remove the inner banner, two-column About layout, reaction metrics, top-language metrics, large badge row, and featured-project table.

## Content design

### Opening identity

Use a direct first-person introduction:

```markdown
# Bùi Minh Quân

**Lead Software Engineer at Zalo · Fiza**

Hands-on technical lead building financial services for BFSI partners through Zalo Mini Apps and admin portals. I work with Spring Boot and ReactJS, apply AI across the full software development lifecycle, and help product and engineering teams turn those practices into reusable workflows.
```

The compact link row should retain all five destinations in this order:

1. LinkedIn
2. Digital Garden
3. Second Brain
4. TikTok
5. Email

Use ordinary text links separated by centered dots. Do not use large image badges.

### Current focus

Use four short bullets instead of an exhaustive competency inventory:

- **Product engineering:** Java, Spring Boot, ReactJS
- **AI-driven SDLC:** Requirements through production
- **Cross-functional enablement:** Product and engineering workflows
- **Automation and tooling:** n8n

Former primary technologies such as .NET, Angular, and Oracle remain discoverable in Experience instead of competing with the current focus.

### Experience

Use consistent role headings and month names.

#### Lead Software Engineer · Zalo — Fiza

_May 2026 – Present_

- Build and ship end-to-end features for BFSI partners across Zalo Mini Apps and admin portals using Spring Boot and ReactJS.
- Apply AI throughout the SDLC—from requirements and design through implementation, testing, code review, documentation, and production delivery.
- Advance AI-assisted engineering by reviewing usage, refining workflows, guiding new adopters, and improving codebases.
- Support product and engineering teams in operationalizing AI workflows, including brief and PRD creation for live projects.

This wording establishes technical-lead scope without implying direct reports or people management.

#### .NET Team Leader · VNPAY

_Apr 2022 – Apr 2026_

- Led a hands-on full-stack team delivering digital-banking platforms with .NET Core, Angular, and Oracle.
- Designed back-office systems for mobile-banking and omnichannel products, including Eximbank eDigi, VietCredit, and Vietbank SME.
- Modernized legacy applications and introduced AI-assisted development practices and n8n workflow automation.

#### .NET Developer · VNPAY

_May 2019 – Apr 2022_

- Built and maintained banking back-office systems and landing pages using .NET Core/MVC, AngularJS, and Oracle.

#### C++ Developer · Shinhan DS

_Aug 2018 – Mar 2019_

- Trained in and contributed to core-banking development using C++ and Oracle.

### Knowledge and experiments

Replace the wide table with a short linked list:

- **Digital Garden** — Notes on software engineering, system architecture, and applied AI.
- **LLM Wiki** — A personal second brain maintained with AI-assisted knowledge workflows.
- **Tech Content** — Practical programming lessons and experiments in AI-assisted content creation.

Remove the AI-Powered Bank Statement Analyzer because it no longer represents the current direction. Preserve the existing URLs for the remaining three entries.

### GitHub activity

Keep only the contribution-calendar SVG in a section near the bottom. Remove reaction and top-language SVGs from the README, but do not delete the generated SVG files as part of this change.

### Education

Use one compact line without GPA or certifications:

```markdown
**B.S. in Software Engineering** · Ho Chi Minh City University of Technology and Education (HCMUTE)
```

## Visual rules

- Keep `banner_top.png` as the only banner and ensure it has descriptive alt text.
- Do not use emoji in section headings.
- Prefer sentence-case headings such as `Current focus` and `Knowledge & experiments`.
- Use standard Markdown wherever possible; retain minimal HTML only where necessary for the banner or contribution image.
- Avoid tables, badge walls, dense cards, and repeated imagery.
- Keep sections short enough to scan on a narrow viewport.
- Preserve a single visual focal point: the Snowfox artwork.

## Files and change boundaries

Primary implementation file:

- `README.md`

Existing asset URLs and target destinations should be reused. The following files remain untouched:

- `banner_top.png`
- `banner.png`
- `svg/*.svg`
- `update_svg.js`

Removing an asset from the README does not authorize deleting it from the repository.

## Verification and acceptance criteria

- The README is entirely in English.
- The opening section clearly communicates the current role, BFSI domain, Zalo Mini Apps, Spring Boot, ReactJS, and AI-driven SDLC.
- The Fiza role contains the four approved qualitative bullets and no metrics.
- The profile does not mention passing probation or current people management.
- OpenSpec and Antigravity Kit are no longer the main profile positioning.
- The inner banner, reaction metrics, top-language metrics, bank-statement project, GPA, certifications, emoji headings, large social badges, and wide content tables are absent from the README.
- Snowfox remains the visual identity through the existing top banner.
- Digital Garden, LLM Wiki, TikTok, LinkedIn, and email links still work.
- The contribution calendar remains visible near the bottom.
- A final Markdown and diff review confirms that no asset or generated SVG file was modified or deleted.
