---
sidebar_position: 0.5
title: Understanding the System
description: What a Quality Management System is really for, how ISO/IEC 17025 thinks, and how to read OpenQMS documents.
keywords: [QMS, quality management system, ISO 17025, laboratory quality, measurement traceability]
---

# Understanding the System

## What a QMS is really for

A laboratory that produces measurements has one fundamental obligation: the results it reports must mean something. A concentration of 2.3 µg/L reported today must be comparable to 2.3 µg/L reported six months ago, by a different analyst, on a different instrument, after a service visit. If it isn't, the number is just a number — it carries no information about the world.

This is harder than it sounds. Instruments drift. Analysts develop habits. Reagents degrade. Methods that worked on one matrix fail on another. Calibration standards expire. People leave and take their knowledge with them.

A Quality Management System is the structure that holds all of this together. It is not a bureaucratic requirement, and it is not a filing system. It is the organised answer to a single question: **how do we know that our results are trustworthy?**

ISO/IEC 17025 is the international standard that defines what that answer must contain for testing and calibration laboratories. It doesn't tell you how to run your laboratory — it tells you what you need to be able to demonstrate. The QMS is the demonstration.

## How ISO 17025 thinks

The standard is built on a simple but powerful idea: **every failure mode in a laboratory has a corresponding defence.** The sections of ISO 17025 are not arbitrary — each one exists because something specific can go wrong, and the section is the system's protection against that failure.

Understanding this causal logic changes how the QMS feels. Instead of a set of obligations imposed from outside, it becomes a coherent map of everything that could undermine your results — and what you have decided to do about each one.

Here is how to read the major sections through that lens:

### Section 04 — Competence, Training and Awareness

**Failure mode:** a person performs a task they are not qualified to perform.

The laboratory must demonstrate that everyone who does analytical work has the knowledge, skills, and demonstrated competence to do it correctly. Training records, competence assessments, and authorisation registers are not paperwork — they are the evidence that the right person did the right thing.

### Section 05 — Addressing Risks and Opportunities

**Failure mode:** the laboratory is surprised by a problem it could have anticipated.

Risk assessment is the practice of identifying what could go wrong before it does, and deciding in advance how to respond. A laboratory that has thought through its failure modes is more resilient than one that reacts to them after the fact.

### Section 06 — Externally Provided Products and Services

**Failure mode:** a supplier delivers something that undermines result quality.

Reference standards, reagents, calibration services, subcontracted analyses — everything that enters the laboratory from outside can introduce error. The section requires that external providers are evaluated and monitored, not just trusted.

### Section 07 — Facilities and Environmental Conditions

**Failure mode:** the physical environment affects results without anyone noticing.

Temperature, humidity, vibration, contamination, electromagnetic interference — laboratories are sensitive environments. This section requires that conditions are monitored, controlled, and documented wherever they affect measurement quality.

### Section 08 — Equipment Maintenance, Calibration and Verification

**Failure mode:** an instrument produces results that are wrong, and no one knows.

Every instrument has a performance envelope. Outside that envelope, results are unreliable. This section requires that equipment is maintained, calibrated, and verified — and that the evidence of this is preserved so that historical results can be defended.

### Section 10 — Method Validation and Verification

**Failure mode:** a method is used for a purpose it was never shown to be fit for.

A method validated for clean water matrices may fail on complex environmental samples. This section requires that the laboratory demonstrates, with data, that its methods work for the specific conditions under which they are used.

### Section 14 — Complaint, Nonconformity and Corrective Action

**Failure mode:** something goes wrong and the laboratory learns nothing from it.

Nonconformities — deviations from procedure, instrument failures, missed calibrations, analyst errors — are inevitable. This section requires that they are recorded, investigated, and acted upon. A laboratory that documents its failures and improves from them is more trustworthy than one that pretends failures don't occur.

### Section 15 — Evaluation of Measurement Uncertainty

**Failure mode:** a result is reported without any indication of how reliable it is.

Every measurement has uncertainty — variability arising from the instrument, the method, the analyst, the environment, the sample itself. This section requires that uncertainty is evaluated and reported, so that the person receiving the result knows what it actually means.

## The anatomy of a document cluster

The sections of ISO 17025 do not operate in isolation. A single laboratory activity — even a routine one — can touch four or five sections simultaneously. Understanding how they connect is the key to building a QMS that is coherent rather than just complete.

Consider the preparation and analysis of ICP-OES calibration standards for elemental composition of cathode materials. This is a routine task performed every time a batch of NMC or LFP samples is analysed. It is not a glamorous step. But if it goes wrong — a dilution error, a contaminated flask, an expired stock standard — every elemental result in that batch is invalid, and the laboratory may not know until a customer challenges the data.

Here is what the QMS needs to say about this one task — and why:

The **risk assessment** (section 05 / 07) identifies what could go wrong: pipetting errors in serial dilutions, contamination from glassware or the laboratory environment, use of expired or degraded stock standards, matrix mismatch between standards and samples, transcription errors when recording concentrations. It evaluates each hazard before anyone prepares a standard. Without it, the controls that follow have no documented basis.

The **SOP** (section 08 / 10) translates the risk assessment into action. It tells the analyst exactly which stock standards to use, what dilution scheme to follow, which grade of acid and water to use, and how to label and store the prepared standards. The SOP does not repeat the risk reasoning — it assumes the risk assessment exists and builds on it. If the SOP changes, it is because the risk assessment was updated first.

The **preparation log** (section 08) is the record that the SOP was followed. Date, analyst, stock standard lot numbers, balance readings, volumetric flask IDs, final concentrations. Without the log, the SOP is an intention, not a fact. The log is what makes the preparation auditable and traceable to the reported results.

The **calibration and maintenance schedule** (section 08) ensures the instruments that support this task — the analytical balance, the pipettes, the ICP-OES itself — are within their calibration intervals. A standard prepared on a balance that was due for calibration last month is a standard whose concentration cannot be defended.

The **training material, assessment form, and training record** (section 04) answer a different question: is the person assigned to this task actually qualified to do it? The training material conveys the knowledge — dilution theory, contamination control, traceability requirements. The assessment form verifies it was understood. The training record proves the pathway was completed. Together they make the analyst's competence defensible.

The **competence register** (section 04) is the authoritative answer to who is currently authorised to prepare calibration standards. It is the single source of truth that connects training records to operational permissions.

**Section 14** sits in the background, waiting. It is not part of the routine — it activates only when something deviates. A calibration curve that fails linearity checks. A QC sample that falls outside acceptance limits. A stock standard found to be past its expiry date. When that happens, section 14 captures what occurred, traces it back to its cause, and drives the improvement that prevents recurrence. The link from the preparation log to section 14 is the most important connection in the cluster — it is what transforms a record of what happened into a system that learns.

This is what a document cluster looks like. Not a pile of documents about the same topic, but a set of documents that each answer a specific question, in a specific section, that no other document answers — and that together make the activity fully traceable from policy to practice to proof.

## The section map

OpenQMS organises its 22 procedures (00–21) into five functional groups. These do not follow the ISO 17025 clause numbering directly — instead, they reflect the practical structure of how a laboratory builds and operates its QMS.

### QMS foundation (Procedures 00–03)

These procedures establish the infrastructure of the quality management system itself — how documents and records are controlled, how the implementation project is planned, what the laboratory commits to in its quality policy, and how the QMS is described in the Quality Manual. Everything else depends on these being in place first.

| Procedure | Title | ISO 17025 clauses |
|---|---|---|
| 00 | Document and Record Control | 7.5, 7.11, 8.3, 8.4 |
| 01 | Project Plan | 5, 8.1, 8.2 |
| 02 | Quality Policy | 8.2 |
| 03 | Quality Manual | 8.2 |

### People, resources, and environment (Procedures 04–09)

These procedures define what the laboratory needs to operate — competent people, managed risks, qualified suppliers, controlled facilities, calibrated equipment, and a clear relationship with customers. If the foundation is the commitment, these are the means.

| Procedure | Title | ISO 17025 clauses |
|---|---|---|
| 04 | Competence, Training and Awareness | 6.2 |
| 05 | Addressing Risks and Opportunities | 8.5 |
| 06 | Externally Provided Products and Services | 6.6 |
| 07 | Facilities and Environmental Conditions | 6.3 |
| 08 | Equipment Maintenance, Calibration and Verification | 6.4, 6.5 |
| 09 | Customer Service | 7.1 |

### Analytical process (Procedures 10–13)

These procedures define how the laboratory actually does its analytical work — validating and using methods, assuring the quality of results, sampling, and handling items received for testing. This is where the measurement science lives in the QMS.

| Procedure | Title | ISO 17025 clauses |
|---|---|---|
| 10 | Test and Calibration Methods | 7.2 |
| 11 | Quality Assurance | 7.7 |
| 12 | Sampling | 7.3 |
| 13 | Handling of Items Received for Testing | 7.4 |

### Results and reporting (Procedures 14–17)

These procedures govern what happens with results — how nonconformities and complaints are managed, how measurement uncertainty is evaluated, and how test reports and calibration certificates are issued. They ensure that the output of the laboratory is defensible and complete.

| Procedure | Title | ISO 17025 clauses |
|---|---|---|
| 14 | Complaints, Nonconformity and Corrective Action | 7.9, 7.10, 8.7 |
| 15 | Evaluation of Measurement Uncertainty | 7.6 |
| 16 | Testing Reports | 7.8 |
| 17 | Calibration Certificates | 7.8 |

### Continual improvement (Procedures 18–21)

These procedures define how the laboratory manages itself over time — internal audits, management reviews, research governance, and the improvement cycle. They are the mechanism by which the QMS evolves rather than stagnates.

| Procedure | Title | ISO 17025 clauses |
|---|---|---|
| 18 | Internal Audit | 8.8 |
| 19 | Management Review | 8.9 |
| 20 | Research Projects | — |
| 21 | Continuous Improvement | 8.6 |

## How to read an OpenQMS document

Every document in OpenQMS follows a consistent structure. Understanding what each element is for — not just what it contains — makes the system easier to navigate and easier to adapt to your own laboratory.

The **document header** carries the essential identity of the document — its ID, version, status, owning QMS section, and review date. This is the first thing an auditor looks at, and the first thing you should check when deciding whether a document is current and applicable to your situation.

The **document ID** is the stable identifier that survives title changes and version updates. When documents reference each other, they do so by ID — this ensures that connections remain meaningful even when content evolves.

The **related documents list** is the explicit map of the document cluster the document belongs to. It tells you what this document depends on and what depends on it. Before adapting any document for your laboratory, read its related documents — a change that seems local often has downstream consequences across the cluster.

The **version and revision history** is the audit trail of the document itself. It answers the question: what was the procedure on a specific date, and why did it change? For laboratories with historical results to defend, this history is not optional.

The **review date** is the commitment that the document will not be forgotten. A procedure that is never reviewed drifts away from reality. The review date makes drift visible — a document past its review date is a known gap, not an unknown one.

The **warning and caution blocks** are the document's safety layer. They mark the points where the consequences of deviation are severe enough to warrant explicit emphasis. They are not decoration. If a warning exists, it exists because a specific failure mode was identified and named.

The **GitHub link** at the bottom of every page is the contribution mechanism. If you find an error, a gap, or a better way to express something, the repository is where improvements begin. OpenQMS is built on the principle that quality systems improve through use — your real-world experience with these documents is the most valuable input the project receives.

---

*This section of OpenQMS is a living document. As the QMS develops clause by clause, the conceptual connections described here will deepen. Contributions, corrections, and challenges are welcome via the [GitHub repository](https://github.com/pablojlebed/openqms).*
