---
sidebar_position: 1.2
title: "10.2 Appendix 2 – Method Validation Report"
description: Template for documenting a method validation study including all required performance parameters.
---

# Appendix 2 — Method Validation Report

**Parent procedure:** [10 – Test and Calibration Methods](./)

## Purpose

To provide a standardized template for documenting the results of a method validation study. The completed report serves as the authoritative record that a method has been demonstrated to be fit for its intended purpose, and defines the validated scope, range, and performance characteristics of the method.

## Instructions

1. Complete one report per method validation study. For partial re-validations (e.g., extension to a new matrix), complete a new report covering only the parameters being re-validated, and cross-reference the original report.
2. All acceptance criteria must be entered in Section 4 **before** the experimental work begins. Do not fill in criteria retrospectively.
3. Attach all raw data, instrument output files, and calculations as annexes to this report.
4. The report is reviewed and authorized by the **Technical Manager** before the method is released for routine use.
5. File as a controlled document per [Procedure 00](../00-document-record-control/index.md).

---

## Section 1 — Method Identification

| Field | Entry |
|---|---|
| **Validation report number** | VAL-*[NNN]* |
| **Method name** | *[e.g., ICP-OES multi-element analysis of cathode active materials]* |
| **Method ID** | *[e.g., M-001, as listed in the Method Register]* |
| **SOP number** | *[e.g., SOP-10-001]* |
| **Type of validation** | ☐ Full validation (new in-house method) · ☐ Full validation (modified standard) · ☐ Partial re-validation (specify parameters) · ☐ Extension to new matrix |
| **Intended scope** | *[Analytes, matrices, and concentration range covered by this validation]* |
| **Validation conducted by** | *[Analyst name(s) and role]* |
| **Validation period** | *[Start date]* — *[End date]* |
| **Validation plan reference** | *[Reference to the pre-approved validation plan, if documented separately]* |

---

## Section 2 — Equipment and Materials Used

| Item | Description | Equipment ID / Lot number | Calibration status |
|---|---|---|---|
| *[Instrument]* | *[e.g., ICP-OES spectrometer]* | *[e.g., AI-001]* | *[Calibrated — cert. ref.]* |
| *[Balance]* | *[e.g., Analytical balance, 0.1 mg]* | *[e.g., BA-001]* | *[Calibrated — cert. ref.]* |
| *[CRM 1]* | *[e.g., NIST SRM 2841 — cathode material]* | Lot: *[number]* · Exp: *[date]* | — |
| *[CRM 2]* | | | |
| *[Spike standard]* | *[e.g., Multi-element ICP standard, 1000 mg/L]* | Lot: *[number]* · Exp: *[date]* | *[Traceable to: NIST/equivalent]* |
| *[Reagents]* | *[e.g., HNO₃ 65%, trace metal grade]* | Lot: *[number]* | — |
| *[Add rows as needed]* | | | |

---

## Section 3 — Validation Plan Summary

State the parameters to be validated, the experimental design for each, and the justification for any parameters excluded from the study.

| Parameter | Included? | Experimental design | Justification if excluded |
|---|---|---|---|
| Selectivity / Specificity | ☐ Yes · ☐ No | *[e.g., Blank matrix analysis; interferent spike study]* | |
| Calibration linearity | ☐ Yes · ☐ No | *[e.g., 7-point curve from LOQ to 10× working level]* | |
| Measurement range | ☐ Yes · ☐ No | *[e.g., Confirmed by trueness and precision at range limits]* | |
| Trueness | ☐ Yes · ☐ No | *[e.g., CRM analysis + spike recovery at 3 levels × 3 replicates]* | |
| Repeatability | ☐ Yes · ☐ No | *[e.g., 10 replicates of same sample, same analyst, same day]* | |
| Intermediate precision | ☐ Yes · ☐ No | *[e.g., 2 analysts × 3 days × 3 replicates]* | |
| LOD | ☐ Yes · ☐ No | *[e.g., 10 blank replicates; LOD = 3σ/slope]* | |
| LOQ | ☐ Yes · ☐ No | *[e.g., LOQ = 10σ/slope; confirmed at LOQ level]* | |
| Robustness | ☐ Yes · ☐ No | *[e.g., OFAT variation of key parameters]* | |
| Measurement uncertainty | ☐ Yes · ☐ No | *[e.g., Estimated from validation data per Procedure 15]* | |

---

## Section 4 — Acceptance Criteria (completed before experiments begin)

*Enter all criteria before beginning experimental work. Do not modify after data collection has started.*

| Parameter | Acceptance criterion | Defined by |
|---|---|---|
| Selectivity | *[e.g., Blank signal < LOD; interference effect < 5% on analyte signal]* | *[Technical Manager / Method standard / Customer spec]* |
| Linearity (r²) | *[e.g., r² ≥ 0.9990 for each element; residuals randomly distributed]* | |
| Trueness — CRM recovery | *[e.g., 95–105% for major elements; 90–110% for minor elements]* | |
| Trueness — Spike recovery | *[e.g., 95–105% at all three spike levels]* | |
| Repeatability (RSD) | *[e.g., RSD ≤ 1.0% for major elements; ≤ 2.5% for minor elements]* | |
| Intermediate precision (RSD) | *[e.g., RSD ≤ 2.0% for major elements; ≤ 5.0% for minor elements]* | |
| LOD | *[e.g., ≤ 0.001% w/w for each element]* | |
| LOQ precision at LOQ level | *[e.g., RSD ≤ 10%]* | |
| LOQ recovery at LOQ level | *[e.g., 80–120%]* | |
| Robustness | *[e.g., Results within ±5% of unmodified method result under all perturbations]* | |

**Technical Manager pre-approval of criteria:** *[Name]* — **Date:** *[Date]*

---

## Section 5 — Results

### 5.1 Selectivity

*Describe the selectivity study. Attach raw data as an annex.*

**Blank matrix:** *[Results — signal at each analyte wavelength in blank digest; comparison to LOD]*

**Interferent study:** *[Results — effect of potential interferents on each analyte; identification of significant interferences and corrective measures adopted (e.g., alternative emission line, mathematical interference correction)]*

**Conclusion:** ☐ Pass · ☐ Fail — *[Brief narrative]*

---

### 5.2 Calibration Linearity

*Complete one sub-table per analyte (or group of analytes with similar results). Attach calibration data and residual plots as annexes.*

**Analyte:** *[e.g., Nickel (Ni)]*

| Concentration level | Nominal concentration (mg/L) | Measured signal (counts or AU) | Predicted from regression | Residual (%) |
|---|---|---|---|---|
| 1 (LOQ) | *[Value]* | *[Value]* | *[Value]* | *[Value]* |
| 2 | *[Value]* | *[Value]* | *[Value]* | *[Value]* |
| 3 | *[Value]* | *[Value]* | *[Value]* | *[Value]* |
| 4 | *[Value]* | *[Value]* | *[Value]* | *[Value]* |
| 5 | *[Value]* | *[Value]* | *[Value]* | *[Value]* |
| 6 | *[Value]* | *[Value]* | *[Value]* | *[Value]* |
| 7 (upper range) | *[Value]* | *[Value]* | *[Value]* | *[Value]* |

**Regression equation:** *y = [slope]x + [intercept]* · **r²:** *[Value]*

**Conclusion:** ☐ Pass · ☐ Fail

*[Repeat for each analyte or attach consolidated table as annex]*

---

### 5.3 Trueness

#### CRM analysis

| CRM reference | Analyte | Certified value (% w/w) | Certified uncertainty (k=2) | Measured value (mean of n replicates) | Recovery (%) | Within acceptance criterion? |
|---|---|---|---|---|---|---|
| *[CRM name/lot]* | Ni | *[Value ± U]* | | *[Value]* | *[Value]* | ☐ Yes · ☐ No |
| | Co | *[Value ± U]* | | *[Value]* | *[Value]* | ☐ Yes · ☐ No |
| | Mn | *[Value ± U]* | | *[Value]* | *[Value]* | ☐ Yes · ☐ No |
| | Li | *[Value ± U]* | | *[Value]* | *[Value]* | ☐ Yes · ☐ No |
| | Al | *[Value ± U]* | | *[Value]* | *[Value]* | ☐ Yes · ☐ No |
| | Fe | *[Value ± U]* | | *[Value]* | *[Value]* | ☐ Yes · ☐ No |
| *[Add CRM rows]* | | | | | | |

#### Spike recovery

| Analyte | Spike level | Native level (mg/L) | Spike added (mg/L) | Expected total (mg/L) | Measured (mg/L) | Recovery (%) | Within criterion? |
|---|---|---|---|---|---|---|---|
| *[Analyte]* | Low | *[Value]* | *[Value]* | *[Value]* | *[Value]* | *[Value]* | ☐ Yes · ☐ No |
| | Mid | *[Value]* | *[Value]* | *[Value]* | *[Value]* | *[Value]* | ☐ Yes · ☐ No |
| | High | *[Value]* | *[Value]* | *[Value]* | *[Value]* | *[Value]* | ☐ Yes · ☐ No |
| *[Add rows]* | | | | | | | |

**Overall trueness conclusion:** ☐ Pass · ☐ Fail — *[Brief narrative]*

---

### 5.4 Precision — Repeatability

*Ten replicate measurements of the same sample preparation, same analyst, same day.*

**Sample used:** *[Description]* · **Date:** *[Date]* · **Analyst:** *[Name]*

| Replicate | Ni (% w/w) | Co (% w/w) | Mn (% w/w) | Li (% w/w) | *[Add analyte columns]* |
|---|---|---|---|---|---|
| 1 | | | | | |
| 2 | | | | | |
| 3 | | | | | |
| 4 | | | | | |
| 5 | | | | | |
| 6 | | | | | |
| 7 | | | | | |
| 8 | | | | | |
| 9 | | | | | |
| 10 | | | | | |
| **Mean** | | | | | |
| **SD** | | | | | |
| **RSD (%)** | | | | | |
| **Within criterion?** | ☐ Yes · ☐ No | ☐ Yes · ☐ No | ☐ Yes · ☐ No | ☐ Yes · ☐ No | |

**Repeatability conclusion:** ☐ Pass · ☐ Fail

---

### 5.5 Precision — Intermediate Precision

*Study design: 2 analysts × 3 days × 3 replicates = 18 measurements per analyte.*

| Analyte | Analyst A Day 1 (mean, n=3) | Analyst A Day 2 (mean, n=3) | Analyst A Day 3 (mean, n=3) | Analyst B Day 1 (mean, n=3) | Analyst B Day 2 (mean, n=3) | Analyst B Day 3 (mean, n=3) | Overall mean | Overall SD | RSD (%) | Within criterion? |
|---|---|---|---|---|---|---|---|---|---|---|
| Ni | | | | | | | | | | ☐ Yes · ☐ No |
| Co | | | | | | | | | | ☐ Yes · ☐ No |
| Mn | | | | | | | | | | ☐ Yes · ☐ No |
| Li | | | | | | | | | | ☐ Yes · ☐ No |
| *[Add rows]* | | | | | | | | | | |

**Intermediate precision conclusion:** ☐ Pass · ☐ Fail

---

### 5.6 Limits of Detection and Quantification

*Based on 10 replicate blank digestions (reagent blank, no sample matrix).*

| Analyte | Blank signal mean | Blank SD (σ) | Calibration slope | LOD = 3σ/slope (mg/L) | LOD (% w/w) | LOQ = 10σ/slope (mg/L) | LOQ (% w/w) | Meets criterion? |
|---|---|---|---|---|---|---|---|---|
| Ni | | | | | | | | ☐ Yes · ☐ No |
| Co | | | | | | | | ☐ Yes · ☐ No |
| Mn | | | | | | | | ☐ Yes · ☐ No |
| Li | | | | | | | | ☐ Yes · ☐ No |
| *[Add rows]* | | | | | | | | |

**LOQ confirmation:** *[Results of precision and recovery experiment at LOQ level — attach data as annex]*

**LOD/LOQ conclusion:** ☐ Pass · ☐ Fail

---

### 5.7 Robustness

| Parameter varied | Nominal value | Perturbed value | Effect on result (%) | Within ±5%? |
|---|---|---|---|---|
| Digestion time | *[e.g., 30 min]* | *[e.g., 28 min]* | *[Value]* | ☐ Yes · ☐ No |
| Digestion time | | *[e.g., 32 min]* | *[Value]* | ☐ Yes · ☐ No |
| Acid volume | *[e.g., 5 mL]* | *[e.g., 4.5 mL]* | *[Value]* | ☐ Yes · ☐ No |
| Acid volume | | *[e.g., 5.5 mL]* | *[Value]* | ☐ Yes · ☐ No |
| Dilution factor | *[e.g., 1:1000]* | *[e.g., 1:950]* | *[Value]* | ☐ Yes · ☐ No |
| Dilution factor | | *[e.g., 1:1050]* | *[Value]* | ☐ Yes · ☐ No |
| *[Add rows]* | | | | |

**Robustness conclusion:** ☐ Pass · ☐ Fail — *[Note any parameters where the method is sensitive, and document corresponding control requirements in the SOP]*

---

## Section 6 — Measurement Uncertainty Estimate

*Provide a summary of the estimated measurement uncertainty for the validated method. Full uncertainty budget is documented in the relevant Procedure 15 record.*

| Analyte | Expanded uncertainty U (k=2) | Coverage probability | Dominant uncertainty sources |
|---|---|---|---|
| Ni | *[e.g., ±0.8% relative]* | 95% | *[e.g., CRM calibration, repeatability, sample preparation]* |
| Co | | | |
| Mn | | | |
| *[Add rows]* | | | |

**Uncertainty estimate reference:** *[Procedure 15 record number or uncertainty budget document reference]*

---

## Section 7 — Summary and Conclusion

### 7.1 Parameter summary

| Parameter | Result | Conclusion |
|---|---|---|
| Selectivity | *[Brief result]* | ☐ Pass · ☐ Fail |
| Linearity | *[Brief result]* | ☐ Pass · ☐ Fail |
| Trueness (CRM) | *[Brief result]* | ☐ Pass · ☐ Fail |
| Trueness (spike) | *[Brief result]* | ☐ Pass · ☐ Fail |
| Repeatability | *[Brief result]* | ☐ Pass · ☐ Fail |
| Intermediate precision | *[Brief result]* | ☐ Pass · ☐ Fail |
| LOD / LOQ | *[Brief result]* | ☐ Pass · ☐ Fail |
| Robustness | *[Brief result]* | ☐ Pass · ☐ Fail |

### 7.2 Validated method scope

As a result of this validation study, the method is confirmed as fit for the following scope:

- **Analytes:** *[List]*
- **Matrices:** *[List — e.g., NMC, NCA, and LCO cathode active materials digested by microwave acid digestion]*
- **Concentration range:** *[e.g., LOQ to X% w/w for each analyte]*
- **LOD:** *[Per analyte, as per Section 5.6]*
- **LOQ:** *[Per analyte, as per Section 5.6]*
- **Measurement uncertainty:** *[Per analyte, as per Section 6]*

### 7.3 Limitations and conditions

*[Document any limitations identified during validation, e.g.: "The method has not been validated for materials with Fe content exceeding 20% w/w. Samples suspected to be outside this range should be flagged for Technical Manager review before analysis." or "The method is sensitive to digestion temperature; furnace temperature must be verified before each run as specified in SOP-10-001."]*

### 7.4 Overall conclusion

☐ **Method validated — approved for routine use** within the scope defined in Section 7.2, subject to the conditions in Section 7.3.

☐ **Method not validated** — specify reason and required follow-up actions below.

*[Required follow-up actions, if any:]*

---

## Section 8 — Deviations from Validation Plan

*Record any deviations from the pre-approved validation plan.*

| Deviation | Reason | Impact on conclusions |
|---|---|---|
| *[e.g., Intermediate precision study conducted over 2 days only, not 3, due to instrument downtime]* | *[Reason]* | *[e.g., Conservative — fewer days increases the uncertainty of the precision estimate; considered acceptable given the consistent results obtained]* |
| *[Add rows]* | | |

---

## Section 9 — Annexes

List all raw data, instrument output files, and calculation spreadsheets attached to this report.

| Annex | Description | File name / Location |
|---|---|---|
| A | Calibration linearity data — all elements | *[File name]* |
| B | CRM and spike recovery raw data | *[File name]* |
| C | Repeatability raw data | *[File name]* |
| D | Intermediate precision raw data | *[File name]* |
| E | LOD/LOQ calculation workbook | *[File name]* |
| F | Robustness study data | *[File name]* |
| G | Uncertainty budget | *[File name / Procedure 15 record ref.]* |
| *[Add rows]* | | |

---

## Authorization

| Role | Name | Signature | Date |
|---|---|---|---|
| **Validation conducted by** | *[Analyst]* | | *[Date]* |
| **Reviewed by** | *[Technical Manager]* | | *[Date]* |
| **Approved for routine use** | *[Technical Manager]* | | *[Date]* |

*By approving this report, the Technical Manager confirms that the validation study was conducted as planned, that the data support the conclusions, and that the method is fit for use within the scope defined in Section 7.2.*

---

:::tip Using this template
This template is written for a quantitative multi-analyte method (ICP-OES). For other method types, adapt the parameter sections accordingly:
- **Karl Fischer moisture:** Omit linearity and LOQ tables; add blank titration data; focus on CRM recovery and repeatability.
- **Laser diffraction:** Omit LOD/LOQ; add dispersion protocol study; focus on reference material recovery and repeatability of D10/D50/D90.
- **HPLC-UV:** Add chromatographic system suitability parameters (resolution, tailing factor, retention time reproducibility); include LOQ confirmation at S/N ≥ 10.
:::
