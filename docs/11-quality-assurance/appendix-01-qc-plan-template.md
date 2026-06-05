---
title: "Appendix 11-App-01 — QC Plan Template"
description: Template for defining internal quality control requirements for each test or calibration method.
---

# QC Plan Template

**Appendix number:** 11-App-01  
**Parent procedure:** [Procedure 11 — Quality Assurance](./index.md)

## Instructions

Complete one QC plan per test or calibration method. The QC plan is maintained as a controlled annex to the method's SOP. The Technical Manager approves the plan before the method enters routine use and reviews it annually or after any significant method change.

## QC Plan

| Field | Entry |
|---|---|
| **Method / SOP number** | *[e.g., SOP-10-001 — ICP-OES multi-element analysis]* |
| **Analyte(s)** | *[e.g., Ni, Co, Mn, Li, Al, Fe]* |
| **Matrix** | *[e.g., NMC cathode powder acid digest]* |
| **Prepared by** | *[Name, date]* |
| **Approved by** | *[Technical Manager, date]* |
| **Revision** | *[00]* |

### IQC Elements

| IQC element | Material / description | Frequency | Acceptance criteria | Action on failure |
|---|---|---|---|---|
| **Reagent blank** | *[e.g., Acid blank — same acid mixture and digestion as samples, no powder]* | *[e.g., Start of each run]* | *[e.g., All analytes < LOD]* | *[e.g., Investigate contamination source; do not proceed until blank is clean]* |
| **Calibration verification standard** | *[e.g., Independent multi-element standard at mid-range concentration]* | *[e.g., After calibration, then every 10 samples, and at end of run]* | *[e.g., Recovery 95–105% for all elements]* | *[e.g., Recalibrate and re-measure all samples since last satisfactory CVS]* |
| **Certified reference material** | *[e.g., NIST SRM xxxx or equivalent cathode CRM; certified values for Ni, Co, Mn, Li]* | *[e.g., Once per run]* | *[e.g., Recovery within certified value ± 2× uncertainty]* | *[e.g., Investigate; do not release results until resolved]* |
| **Duplicate** | *[e.g., Independent duplicate digest of one sample per run]* | *[e.g., 1 per 10 samples, minimum 1 per run]* | *[e.g., RPD ≤ 5% for major elements; RPD ≤ 10% for minor elements]* | *[e.g., Investigate; re-digest if RPD exceeded]* |
| **Spike recovery** | *[e.g., Known addition of Al and Fe to sample digest]* | *[e.g., 1 per run for matrices where interference is expected]* | *[e.g., Recovery 90–110%]* | *[e.g., Investigate matrix effect; consider alternative preparation]* |
| **Other** | *[e.g., Internal standard signal stability (Sc or Y)]* | *[e.g., Continuous — monitored for every sample]* | *[e.g., Signal within ±20% of initial value]* | *[e.g., Recalibrate; investigate if persistent]* |

### Control Charts

| QC parameter | Chart type | Centre line basis | Warning limits (±2σ) | Action limits (±3σ) | Minimum data points for initial limits |
|---|---|---|---|---|---|
| *[e.g., CRM Ni recovery %]* | *[e.g., Shewhart individuals chart]* | *[e.g., Mean of first 20 routine results]* | *[e.g., ±2σ from mean]* | *[e.g., ±3σ from mean]* | *[e.g., 20]* |
| *[e.g., CVS recovery %]* | | | | | |
| *[e.g., Blank level]* | | | | | |
| *[e.g., Duplicate RPD]* | *[e.g., Range chart]* | | | | |

### Notes

*[Record any method-specific QC considerations, e.g., "For LFP matrix samples, spike recovery for Fe is not meaningful due to high native Fe content — substitute a second CRM analysis from a different lot." or "Blank level is expected to be non-zero for Al due to digestion vessel contribution — action limit set at ≤ 0.005% w/w based on historical data."]*
