---
sidebar_position: 1.3
title: "08.3 Appendix 3 – Equipment Maintenance and Fault Log"
description: Template for recording preventive maintenance, repairs, faults, and out-of-service periods for laboratory equipment.
---

# Appendix 3 — Equipment Maintenance and Fault Log

**Parent procedure:** [08 – Equipment Maintenance, Calibration and Verification](./)

## Purpose

To document all maintenance activities (preventive and corrective), equipment faults, repairs, and out-of-service periods. This log provides the historical record needed for trend analysis, root cause investigation, and decisions about calibration intervals, equipment replacement, and resource planning.

## Instructions

1. **Analysts** record routine preventive maintenance activities as they are performed (Part A).
2. When a fault occurs, the analyst or **Technical Manager** completes a fault and repair record (Part B).
3. Out-of-tolerance findings and their impact assessments are recorded in Part C.
4. The **Quality Manager** reviews the log periodically and prepares an annual summary (Part D) for management review.
5. One log is maintained per major item of equipment. Supporting items (pipettes, loggers) may be grouped.

---

## Equipment identification

| Field | Entry |
|---|---|
| **Equipment ID** | *[e.g., AI-001]* |
| **Description** | *[e.g., ICP-OES spectrometer]* |
| **Manufacturer / Model** | *[Enter]* |
| **Serial number** | *[Enter]* |
| **Location** | *[Enter]* |

---

## Part A — Preventive Maintenance Record

| Date | Maintenance activity performed | Performed by | Next scheduled | Notes |
|---|---|---|---|---|
| *[Date]* | *[e.g., Cleaned torch, replaced peristaltic pump tubing, inspected nebulizer]* | *[Name / initials]* | *[Date]* | *[e.g., Tubing showed wear; replaced ahead of schedule]* |
| *[Date]* | *[e.g., Annual manufacturer preventive maintenance — service report attached]* | *[Service engineer name / company]* | *[Date]* | *[Service report ref.: SR-YYYY-###]* |
| | | | | |
| | | | | |
| | | | | |

---

## Part B — Fault and Repair Record

Complete one record per fault event.

### Fault report

| Field | Entry |
|---|---|
| **Fault ID** | *[FLT-YYYY-###]* |
| **Date fault detected** | *[Date]* |
| **Detected by** | *[Name]* |
| **Description of fault** | *[What was observed — e.g., ICP-OES plasma would not ignite; error code displayed; unstable signal on Mn 257.610 nm line]* |
| **Equipment placed out of service** | ☐ Yes — Date: *[Date]* · ☐ No — Justification: *[Enter]* |
| **Samples / batches in progress at time of fault** | *[List sample IDs or batch numbers, or "None"]* |

### Diagnosis and repair

| Field | Entry |
|---|---|
| **Root cause (if determined)** | *[e.g., Worn peristaltic pump tubing causing unstable sample uptake; nebulizer partially blocked]* |
| **Repair action taken** | *[e.g., Replaced pump tubing, ultrasonically cleaned nebulizer, ran torch alignment]* |
| **Repaired by** | *[Name / company]* |
| **Date repair completed** | *[Date]* |
| **Spare parts used** | *[e.g., Peristaltic pump tubing P/N xxxx, qty 1]* |
| **External service report reference** | *[If applicable — report number, attach copy]* |

### Post-repair verification

| Field | Entry |
|---|---|
| **Verification performed** | *[e.g., Full wavelength calibration, QC check standard recovery, sensitivity check]* |
| **Verification results** | *[e.g., All elements within ±3% of certified values; sensitivity restored to specification]* |
| **Meets acceptance criteria?** | ☐ Yes · ☐ No — Action: *[Enter]* |
| **Authorized for return to service by** | *[Technical Manager name]* |
| **Date returned to service** | *[Date]* |
| **Total out-of-service time** | *[e.g., 2 days]* |

### Impact assessment (if equipment was in use at time of fault)

| Field | Entry |
|---|---|
| **Period potentially affected** | *[From last satisfactory QC check to fault detection — e.g., 2026-03-15 to 2026-03-17]* |
| **Results produced during affected period** | *[List report / sample IDs, or "None — fault detected before sample runs"]* |
| **Assessment of impact on results** | *[e.g., QC check standards from 2026-03-15 and 2026-03-16 were within acceptance criteria, indicating the fault developed after sample runs on 2026-03-16. No impact on reported results.]* |
| **Decision** | ☐ No impact — no further action · ☐ Re-analysis required (samples: *[list]*) · ☐ Customer notification required (reports: *[list]*) · ☐ Nonconformity raised (NCR ref.: *[ref.]*) |
| **Assessed by** | *[Technical Manager name]* — *[Date]* |
| **Reviewed by** | *[Quality Manager name]* — *[Date]* |

---

## Part C — Out-of-Tolerance Record

Complete when calibration or verification results exceed acceptance criteria ("as found" out of tolerance).

| Field | Entry |
|---|---|
| **Event ID** | *[OOT-YYYY-###]* |
| **Date of finding** | *[Date]* |
| **Calibration / verification type** | *[e.g., Annual external balance calibration, monthly internal weight check]* |
| **Parameter out of tolerance** | *[e.g., Balance reading at 100 g test point]* |
| **Acceptance criterion** | *[e.g., ≤ ±0.2 mg]* |
| **As-found result** | *[e.g., +0.4 mg deviation at 100 g]* |
| **As-left result** (after adjustment) | *[e.g., +0.05 mg deviation at 100 g]* |
| **Affected period** | *[From last satisfactory calibration/check to this finding]* |
| **Results produced during affected period** | *[List or summary]* |
| **Impact assessment** | *[e.g., 0.4 mg error on typical 0.5 g sample = 0.08% mass error, within method uncertainty of ±0.5%. No impact on reported results.]* |
| **Decision** | ☐ No impact on results · ☐ Re-analysis required · ☐ Customer notification required · ☐ Nonconformity raised |
| **Corrective action** | *[e.g., Calibration interval shortened from 12 to 6 months; monthly verification frequency increased to weekly]* |
| **Assessed by** | *[Technical Manager]* — *[Date]* |
| **Reviewed by** | *[Quality Manager]* — *[Date]* |

---

## Part D — Annual Equipment Performance Summary

Completed annually for management review input. Summarizes maintenance, faults, and calibration performance for this item of equipment.

| Metric | Period: *[Year]* |
|---|---|
| **Total faults reported** | *[Count]* |
| **Total out-of-service days** | *[Days]* |
| **Out-of-tolerance findings** | *[Count]* |
| **Results affected by OOT findings** | *[Count, or "None"]* |
| **Customer notifications issued** | *[Count, or "None"]* |
| **Preventive maintenance completed on schedule?** | ☐ Yes · ☐ No — Details: *[Enter]* |
| **Calibration interval changes** | *[Any changes made and justification]* |
| **Recommended actions for next period** | *[e.g., Schedule manufacturer service, plan replacement, adjust interval]* |
| **Overall equipment status assessment** | ☐ Satisfactory · ☐ Monitor · ☐ Replacement recommended |

**Prepared by:** *[Quality Manager]* — **Date:** *[Date]*

**Reviewed by:** *[Technical Manager]* — **Date:** *[Date]*

:::tip Adapt this template
Maintain one log per major instrument. For groups of similar items (e.g., all pipettes, all data loggers), a combined log is acceptable as long as each item is individually identified. If you use a LIMS or CMMS (Computerized Maintenance Management System), these records can be generated from that system — but ensure controlled, reviewable versions are available for audit.
:::
