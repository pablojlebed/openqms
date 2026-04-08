---
sidebar_position: 0
title: Introduction to OpenQMS 17025
description: OpenQMS 17025 is a free, open-source Quality Management System for laboratories seeking ISO/IEC 17025 accreditation. Learn how to use and adapt it for your lab.
keywords: [ISO 17025, QMS, laboratory accreditation, quality management system, open source]
---

# Introduction to OpenQMS 17025

**OpenQMS 17025** is a free, open-source Quality Management System (QMS) built step by step around the requirements of **ISO/IEC 17025:2017** — the international standard for the competence of testing and calibration laboratories.

## What is ISO/IEC 17025?

ISO/IEC 17025 specifies the general requirements for the competence, impartiality, and consistent operation of laboratories. Accreditation to this standard is recognized worldwide and demonstrates that a laboratory produces technically valid results.

## Why OpenQMS?

Most laboratories building a QMS from scratch face the same challenges:

- The standard is comprehensive but provides no templates.
- Commercial QMS solutions are expensive and often opaque.
- Internal documents are rarely shared between organizations.

OpenQMS 17025 addresses this by developing a complete, practical QMS in the open — step by step, clause by clause — so any laboratory can adopt, adapt, and contribute to it.

## How it's organized

Rather than rigidly following the standard clause by clause, OpenQMS is structured around **practical laboratory procedures and processes**. 

Each numbered section in the sidebar represents a core operational area of your lab (e.g., Sampling, Internal Audits, Equipment Calibration). Within each section, you will find procedures, appendices, and the templates used to generate records.

### Key concepts

| Concept | What it is | Example |
|---|---|---|
| **Procedure** | Describes *how* to do something | Procedure 08 — Equipment Maintenance, Calibration and Verification |
| **Appendix** | The blank tool used to *do* it (a form, template, checklist, or register that supports a procedure) | 08-App-02 — Calibrated Equipment Record (blank form) |
| **Record** | The evidence that it *was done* — frozen in time, never revised | A completed calibration certificate for a specific instrument on a specific date |
| **Register** | A type of appendix that accumulates entries over time — a living document | 08-App-01 — List of Laboratory Equipment (updated when instruments are purchased or decommissioned) |

Appendices are **controlled documents** — they get revised when the template changes. When someone fills in an appendix, the result is a **record** that is retained as-is.

This process-based approach makes it much easier to implement and manage on a day-to-day basis while still ensuring complete compliance with the underlying ISO/IEC 17025:2017 clauses.

:::tip Read this first
Before diving into individual procedures, we recommend reading **[Understanding the System](./understanding-the-system)**. It explains *why* the QMS exists, how ISO 17025 thinks in terms of failure modes and defences, and how the procedures connect to each other. The map it provides makes everything that follows easier to navigate.
:::

### A note on roles

Throughout these procedures you will see references to the **Laboratory Director**, **Quality Manager**, **Technical Manager**, and other roles. These are **functions**, not necessarily separate people. In smaller laboratories, one person may fulfil multiple roles. What matters is that every responsibility is explicitly assigned and that impartiality is maintained — for example, the same person should not both author and approve the same document.

## Getting started

Browse the documentation in the sidebar to explore each clause. Each section includes:

- A plain-language explanation of the requirement
- A ready-to-adapt policy or procedure template
- Implementation guidance

## About AI-assisted development

OpenQMS is developed with the assistance of artificial intelligence. We use AI as a drafting and research tool to accelerate the creation of procedures, templates, and guidance — but every piece of content is directed, reviewed, and validated by professionals with domain expertise in laboratory quality management.

We believe in transparency: AI helps us produce more detailed, consistent, and accessible documentation faster than traditional methods. The domain knowledge, editorial judgment, and final responsibility remain human.

You can read more about our approach in the blog post [Why we develop OpenQMS with AI](/blog/ai-assisted-development).

> **Contributing:** OpenQMS is a community project. If you spot an error, have a better template, or want to add guidance for a specific lab type, open an issue or pull request on [GitHub](https://github.com/pablojlebed/openqms).
