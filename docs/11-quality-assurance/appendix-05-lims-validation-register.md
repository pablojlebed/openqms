---
title: "Appendix 11-App-05 — LIMS Validation Register"
description: Register of all software systems subject to validation, with their current validation status.
---

# LIMS Validation Register

**Appendix number:** 11-App-05  
**Parent procedure:** [Procedure 11 — Quality Assurance](./index.md)

## Instructions

List every software system that captures, processes, transfers, calculates, stores, or reports laboratory data. Maintain the register as a controlled document per [Procedure 00](../00-document-record-control/index.md). Review at least annually and update whenever a new system is introduced, a system is upgraded, or a system is decommissioned.

## Register

| Entry | Software system | Version | Vendor / developer | Risk category | Functions affecting result validity | Validation record ref. | Validation date | Validated by | Next periodic verification | Status |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | *[e.g., LabWare LIMS]* | *[e.g., 7.4.2]* | *[e.g., LabWare Inc.]* | *[High]* | *[Sample registration, result entry, calculations, report generation, audit trail, data storage]* | *[e.g., VR-LIMS-001]* | *[Date]* | *[Technical Manager]* | *[Date + 1 year]* | *[Validated / Pending / Re-validation required]* |
| 2 | *[e.g., Agilent ICP Expert]* | *[e.g., 7.4]* | *[e.g., Agilent Technologies]* | *[High]* | *[Calibration curve fitting, concentration calculation, internal standard correction, QC evaluation]* | *[e.g., VR-ICP-001]* | *[Date]* | *[Technical Manager]* | *[Date + 1 year]* | |
| 3 | *[e.g., Metrohm Tiamo]* | *[e.g., 2.5]* | *[e.g., Metrohm AG]* | *[High]* | *[Karl Fischer endpoint detection, moisture calculation, drift compensation]* | *[e.g., VR-KF-001]* | | | | |
| 4 | *[e.g., Malvern Mastersizer software]* | *[e.g., 3.82]* | *[e.g., Malvern Panalytical]* | *[High]* | *[Particle size distribution calculation, optical model application, result statistics (D10, D50, D90)]* | *[e.g., VR-PSD-001]* | | | | |
| 5 | *[e.g., Micromeritics SmartVacPrep / ASAP software]* | *[e.g., 5.03]* | *[e.g., Micromeritics]* | *[High]* | *[BET isotherm fitting, surface area calculation, degas monitoring]* | *[e.g., VR-BET-001]* | | | | |
| 6 | *[e.g., Agilent OpenLab CDS]* | *[e.g., 2.7]* | *[e.g., Agilent Technologies]* | *[High]* | *[Chromatographic integration, calibration, quantification, system suitability]* | *[e.g., VR-HPLC-001]* | | | | |
| 7 | *[e.g., MU Budget spreadsheet — ICP-OES]* | *[e.g., Rev 01]* | *[In-house]* | *[Medium]* | *[Measurement uncertainty calculation for ICP-OES results]* | *[e.g., VR-SS-001]* | | | | |
| 8 | *[e.g., Calibration curve checker — Excel]* | *[e.g., Rev 00]* | *[In-house]* | *[Medium]* | *[Independent verification of LIMS calibration curve calculations]* | *[e.g., VR-SS-002]* | | | | |

## Change Log

| Date | Entry | Change description | Impact assessment | Re-validation required? | Re-validation record ref. | Approved by |
|---|---|---|---|---|---|---|
| *[Date]* | *[e.g., 1]* | *[e.g., LIMS updated from v7.4.1 to v7.4.2 — vendor patch for report formatting]* | *[e.g., Report output affected; calculations unchanged]* | *[e.g., Partial — report format test cases only]* | *[e.g., VR-LIMS-001-R1]* | *[Technical Manager]* |

## Decommissioned Systems

| Software system | Final version | Date decommissioned | Reason | Validation records retained until |
|---|---|---|---|---|
| *[e.g., Legacy LIMS X]* | *[e.g., 3.2]* | *[Date]* | *[e.g., Replaced by LabWare LIMS]* | *[Date + 5 years]* |
