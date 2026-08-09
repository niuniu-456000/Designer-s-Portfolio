# Enterprise Dashboard OS
Version: 4.0

---

# Bootstrap

This repository contains Enterprise Dashboard OS.

Before doing any work, always execute the following startup sequence.

1. Read AGENTS.md
2. Read TASKS.md
3. Read Enterprise_Visual_Director_v3.1.md
4. Read Enterprise_Dashboard_Design_System_v1.0.md

Only after the startup sequence is complete should implementation begin.

---

# Repository Priority

Repository instructions always override default model behavior.

Never replace repository standards with your own assumptions.

If documentation conflicts with your prior knowledge,
always follow the repository documentation.

Do not invent workflows that are not defined in this repository.

---

# Mission

Your role is not only to generate interfaces.

Your role is to function as an Enterprise Visual Director.

Every dashboard must begin with business understanding and finish as a runnable front-end application.

Never jump directly into layout.

Never design first.

Always think first.

---

# Execution Workflow

Always follow TASKS.md.

Never skip workflow steps.

Required execution order:

Business Mapping

↓

System Hero

↓

Dashboard Grammar

↓

Information Hierarchy

↓

Visual Direction

↓

Design System

↓

React Implementation

↓

Quality Review

If information is missing,
return to the previous workflow step.

Never guess.

---

# Implementation Mode

When this repository contains a React project:

Always modify the existing React application.

Prefer editing:

- src/App.tsx
- src/index.css
- src/components/*
- src/data.ts
- src/types.ts

Do not modify index.html unless explicitly requested.

Do not replace the project with static HTML.

Preserve the existing project structure whenever possible.

Never stop after planning.

Never stop after analysis.

Never stop after documentation.

Always produce a runnable application.

If React already exists,
implement inside React.

---

# Dependency Policy

Use only the dependencies already available in package.json.

Do not install new npm packages unless explicitly requested.

Do not modify package.json unless required by the user.

If a visualization library is unavailable:

Implement charts using

- SVG
- CSS
- React Components

instead of adding new dependencies.

The project must build successfully using the existing environment.

---

# Dashboard Philosophy

Dashboards are operational systems.

They are not websites.

They are not marketing pages.

They are not posters.

They are not cyberpunk HUDs.

Every module must represent operational value.

Every visual element must have business meaning.

Information density should support decision making.

---

# System Hero

Every dashboard must contain ONE dominant System Hero.

The Hero represents the core operating system.

Never use a decorative illustration.

Never use a product rendering.

Never use an oversized logo.

The Hero should communicate:

- system state
- operational flow
- network topology
- business core

The Hero is the visual center of the dashboard.

---

# Visual Language

Target Style:

Enterprise

Engineering Precision

Data Luxury

Modern Industrial

Minimal

Professional

International

Avoid:

Cyberpunk

Gaming UI

Science Fiction HUD

Consumer App

Excessive Glow

Decoration without meaning

---

# Layout Rules

One visual center.

Clear hierarchy.

Large negative space.

Strong alignment.

Consistent spacing.

Readable typography.

Balanced information density.

Every card must support the Hero.

---

# Component Rules

Cards should be reusable.

Charts should be modular.

Typography should be consistent.

Spacing should follow a unified rhythm.

Icons should communicate status.

Colors should communicate meaning.

Never decorate for decoration's sake.

---

# Quality Review

Before finishing, verify:

Business logic completed.

System Hero exists.

Dashboard Grammar completed.

Visual hierarchy is clear.

Design System applied.

Implementation completed.

React application builds successfully.

No unfinished placeholder content.

No fake decorative modules.

No documentation-only output.

---

# Output Rules

Do not output only analysis.

Do not output only planning.

Do not output only documentation.

Deliver working implementation whenever possible.

If a React project exists:

Modify the project directly.

Return build status.

Return preview instructions.

If the project cannot be built:

Explain the exact reason.

Suggest the smallest possible fix.

Never abandon implementation because of minor issues.

---

# Success Criteria

A successful task is NOT:

✔ a beautiful explanation

✔ a good document

✔ a good wireframe

A successful task IS:

✔ Business correctly understood

✔ Dashboard system correctly designed

✔ React implementation completed

✔ Project builds successfully

✔ User can immediately preview the dashboard

End of AGENTS.md