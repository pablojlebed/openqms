---
title: "11 – Quality Assurance"
description: Procedure for monitoring the validity of results through quality assurance activities per ISO/IEC 17025 clause 7.7.
---

# Quality Assurance Procedure

| | |
|---|---|
| **Procedure number** | 11 |
| **ISO/IEC 17025 reference** | Clause 7.7 |
| **Revision** | 00 |
| **Effective date** | *[Enter date]* |
| **Approved by** | *[Quality Manager / Laboratory Director]* |

## 1. Purpose

To define the quality assurance activities — including internal quality control, proficiency testing, and interlaboratory comparisons — used to monitor and demonstrate the ongoing validity of results produced by the laboratory.

## 2. Scope

This procedure applies to all test and calibration activities performed by the laboratory. It covers:

- **Internal quality control (IQC)** — Routine checks built into every analytical run to confirm that the measurement system is operating within defined limits: blanks, calibration verification standards, certified reference materials (CRMs), duplicate measurements, spike recoveries, and control charts
- **Proficiency testing (PT)** — Participation in external schemes where the laboratory analyses samples of unknown composition and its results are compared against reference values and peer laboratory results
- **Interlaboratory comparisons (ILC)** — Bilateral or multilateral comparisons with other laboratories, arranged outside formal PT schemes, to provide additional evidence of competence
- **Data integrity monitoring** — Systematic review of QC data trends, PT outcomes, and ILC results to detect performance drift before it affects reported results

For the battery materials characterization laboratory, these activities cover ICP-OES elemental analysis, Karl Fischer coulometric moisture determination, laser diffraction particle size distribution, BET nitrogen adsorption specific surface area, and HPLC-UV organic impurity analysis.

## 3. References

- ISO/IEC 17025:2017, Clause 7.7 — Ensuring the validity of results
- ISO/IEC 17043:2023 — Conformity assessment — General requirements for proficiency testing
- ISO 13528:2022 — Statistical methods for use in proficiency testing by interlaboratory comparison
- IUPAC Harmonized Guidelines for Internal Quality Control in Analytical Chemistry Laboratories
- EURACHEM/CITAC Guide — Use of uncertainty information in compliance assessment
- Westgard JO, *Basic QC Practices* — Westgard rules for internal quality control
- [Procedure 00 — Document and Record Control](../00-document-record-control/index.md)
- [Procedure 04 — Competence, Training and Awareness](../04-competence-training/index.md)
- [Procedure 06 — Externally Provided Products and Services](../06-externally-provided-services/index.md)
- [Procedure 08 — Equipment Maintenance, Calibration and Verification](../08-equipment-calibration/index.md)
- [Procedure 10 — Test and Calibration Methods](../10-test-calibration-methods/index.md)
- [Procedure 14 — Complaints, Nonconformity and Corrective Action](../14-complaints-nonconformity/index.md)
- [Procedure 15 — Evaluation of Measurement Uncertainty](../15-measurement-uncertainty/index.md)

## 4. Definitions

| Term | Definition |
|---|---|
| **Internal quality control (IQC)** | Checks carried out within and alongside routine analytical runs to verify that the measurement system is functioning correctly and that results are reliable. IQC detects problems as they happen. |
| **Proficiency testing (PT)** | Evaluation of participant performance against pre-established criteria by means of interlaboratory comparisons organized by an external provider operating in accordance with ISO/IEC 17043. |
| **Interlaboratory comparison (ILC)** | Organization, performance, and evaluation of measurements on the same or similar items by two or more laboratories in accordance with predetermined conditions. PT is a specific form of ILC. |
| **Certified reference material (CRM)** | Reference material characterized by a metrologically valid procedure for one or more specified properties, accompanied by a certificate that provides the value, its associated uncertainty, and a statement of metrological traceability. |
| **Control chart** | A graphical tool for monitoring the stability of a process over time. Results of QC measurements are plotted sequentially against a centre line (mean) and control limits (typically ±2σ for warning and ±3σ for action). |
| **Centre line** | The mean value of a set of historical QC measurements, representing the expected value under stable operating conditions. |
| **Warning limit** | The boundary at ±2 standard deviations from the centre line. A single result beyond a warning limit is not necessarily a failure but requires investigation. |
| **Action limit** | The boundary at ±3 standard deviations from the centre line. A result beyond an action limit requires the analytical run to be stopped and investigated before results are released. |
| **Blank** | A sample containing no analyte of interest, processed through the entire analytical procedure. Detects contamination in reagents, glassware, or the laboratory environment. |
| **Calibration verification standard (CVS)** | A standard solution of known concentration, prepared independently from calibration standards, analysed during the run to verify that the calibration remains valid. |
| **Duplicate** | A second, independent measurement on the same sample or on a separate portion of the same sample, used to assess measurement precision within a run. |
| **Spike recovery** | The analysis of a sample to which a known quantity of analyte has been added, used to assess trueness and to detect matrix effects. Recovery is expressed as a percentage of the known addition. |
| **z-score** | A performance statistic used in proficiency testing: z = (x − X) / σ, where x is the participant's result, X is the assigned value, and σ is the standard deviation for proficiency assessment. \|z\| ≤ 2.0 is satisfactory; 2.0 < \|z\| < 3.0 is questionable; \|z\| ≥ 3.0 is unsatisfactory. |
| **Westgard rules** | A set of multi-rule QC criteria applied to control chart data to detect systematic and random errors with defined false rejection and error detection probabilities. |
| **Run** | A defined set of sample measurements performed together under the same conditions, bracketed by the QC checks specified in the method's QC plan. |

## 5. Responsibilities

| Role | Responsibility |
|---|---|
| **Laboratory Director** | Approve the annual PT participation plan. Ensure adequate resources for QA activities. Review QA performance as part of management review. |
| **Technical Manager** | Define IQC requirements for each method (QC plan). Establish control chart limits. Evaluate PT and ILC results. Investigate unsatisfactory outcomes and authorize corrective action. Select PT providers and ILC partners. |
| **Quality Manager** | Coordinate PT registrations and sample logistics. Maintain the PT/ILC schedule and records. Monitor that IQC is performed as required. Report QA performance trends to management review. |
| **Analysts** | Perform IQC checks as specified in the QC plan for each method. Record all QC data. Apply control chart rules. Stop work and notify the Technical Manager when action limits are exceeded or Westgard rules are violated. |

## 6. Procedure — Internal Quality Control

### 6.1 QC plan

Each test method shall have a documented QC plan, maintained as part of the method's SOP (see [Procedure 10](../10-test-calibration-methods/index.md)), specifying the IQC checks required, their frequency within a run, and the acceptance criteria for each. The QC plan template is provided in [Appendix 11-App-01](./appendix-01-qc-plan-template).

### 6.2 Minimum IQC requirements

The following IQC elements are required for all quantitative test methods, unless the Technical Manager documents a justified exception in the QC plan:

| IQC element | Minimum frequency | Purpose |
|---|---|---|
| **Reagent/method blank** | Beginning of each run | Detect contamination in reagents, glassware, or sample preparation process |
| **Calibration verification standard** | After calibration, then every 10 samples or at the end of the run, whichever comes first | Confirm calibration stability throughout the run |
| **Certified reference material** | At least once per run | Assess trueness — ability to recover a known value in a characterized matrix |
| **Duplicate sample** | At least 1 in every 10 samples, or at least 1 per run if fewer than 10 samples | Assess within-run precision |
| **Spike recovery** | At least 1 per run for methods where matrix effects are expected | Detect matrix interference and assess trueness in the actual sample matrix |

### 6.3 Battery materials laboratory — method-specific IQC

| Method | Key IQC checks | Notes |
|---|---|---|
| **ICP-OES elemental analysis** | Acid blank; multi-element CVS at mid-range; cathode CRM (e.g., certified NMC powder); duplicate digest; matrix spike for minor elements (Al, Fe) | Internal standard (e.g., Sc or Y) monitored for signal drift; recalibration triggered if CVS recovery drifts beyond ±5% |
| **Karl Fischer moisture** | Blank titration (empty cell); certified water standard (e.g., Hydranal™ water standard 1.0); duplicate determination | Blank drift monitored — elevated blank indicates cell or reagent contamination |
| **Laser diffraction particle size** | Certified size reference material (e.g., NIST SRM 1003c); duplicate measurement with fresh dispersion; optical model consistency check | Obscuration and residual monitored for each measurement as additional QC indicators |
| **BET specific surface area** | Certified BET reference material (e.g., alumina or carbon black CRM); duplicate analysis | Degas conditions verified through mass loss consistency |
| **HPLC-UV organic impurity** | Mobile phase blank; system suitability (resolution, tailing factor, plate count); calibration check standard; matrix spike at LOQ level; duplicate injection | System suitability must pass before any sample results are reported |

### 6.4 Control charts

#### 6.4.1 Establishment

For each IQC element that is measured on a continuous scale (CRM recovery, CVS recovery, blank level, duplicate RPD), the Technical Manager establishes a control chart. Initial limits are calculated from at least 20 data points collected under routine operating conditions. The centre line is set at the mean; warning limits at ±2σ; action limits at ±3σ.

#### 6.4.2 Review and recalculation

Control chart limits are reviewed and recalculated at least annually, or when a significant change occurs (new instrument, new reagent lot, method amendment). Outliers excluded during recalculation are documented with justification. The control chart template is provided in [Appendix 11-App-02](./appendix-02-control-chart-template).

#### 6.4.3 Interpretation rules

The following rules are applied to control chart data. Violation of any rule requires the analyst to stop reporting results and notify the Technical Manager:

| Rule | Signal | Interpretation |
|---|---|---|
| **1s — Warning** | One QC result exceeds a warning limit (±2σ) | Investigate; may continue if investigation finds no assignable cause and the next QC result is within ±2σ |
| **1s — Action** | One QC result exceeds an action limit (±3σ) | Stop the run. Investigate. Do not release results until the cause is identified and resolved. |
| **2-of-3s** | Two of three consecutive QC results exceed the same warning limit | Systematic error likely. Stop and investigate. |
| **R4s** | The range between two QC results within a run exceeds 4σ | Random error detected. Stop and investigate. |
| **Trend** | Six or more consecutive QC results moving in the same direction (increasing or decreasing) | Drift — investigate instrument, reagent, or standard degradation. |
| **Shift** | Eight or more consecutive QC results on the same side of the centre line | Bias — investigate calibration, reference material, or procedural change. |

#### 6.4.4 Response to QC failure

When a QC failure is confirmed:

1. The analyst stops reporting results from that run.
2. The Technical Manager investigates the root cause — equipment, reagent, standard, analyst technique, or environmental factor.
3. All sample results obtained since the last satisfactory QC check are assessed for impact.
4. Affected samples are re-analysed after the root cause is resolved.
5. If results already reported to customers may be affected, the situation is managed per [Procedure 14](../14-complaints-nonconformity/index.md) and customers are notified as appropriate.
6. The investigation and outcome are documented.

## 7. Procedure — Proficiency Testing

### 7.1 PT participation plan

The Technical Manager, in consultation with the Quality Manager, prepares an annual PT participation plan covering all accredited methods and, where practicable, other methods in routine use. The plan is approved by the Laboratory Director.

The plan ensures that:

- Each accredited method participates in at least one PT round per year, where a suitable scheme exists
- Where no suitable PT scheme is available, an alternative activity is planned (see Section 8)
- Participation covers the range of matrices and analytes relevant to routine work
- PT providers are evaluated and approved per [Procedure 06](../06-externally-provided-services/index.md) and operate in accordance with ISO/IEC 17043

The PT/ILC participation schedule is maintained in [Appendix 11-App-03](./appendix-03-pt-ilc-schedule).

### 7.2 Battery materials laboratory — typical PT participation

| Method | PT scheme (examples) | Typical frequency |
|---|---|---|
| **ICP-OES elemental analysis** | GeoPT (geochemistry), industrial minerals PT schemes, or battery-specific schemes as they become available | 2 rounds/year |
| **Karl Fischer moisture** | Moisture-in-solids PT schemes (e.g., LGC, WEPAL) | 1 round/year |
| **Laser diffraction particle size** | Particle characterization PT schemes (e.g., AIDIC, NIST) | 1 round/year |
| **BET specific surface area** | Surface area PT schemes (where available) or bilateral ILC | 1 round/year |
| **HPLC-UV organic impurity** | Organic analysis PT schemes; bilateral ILC with customer or peer laboratory if no dedicated scheme exists | 1 round/year |

### 7.3 Sample handling

PT samples are treated as routine samples. They are registered, prepared, and analysed using the same methods, equipment, analysts, and QC procedures as customer samples. No special treatment, additional replicates, or extra care is applied to PT samples that would not be applied to routine work.

### 7.4 Reporting PT results

PT results are reported to the PT provider by the deadline using the provider's prescribed format. The analyst who performed the measurement is recorded. Results are reported before the laboratory receives the assigned values or peer results.

### 7.5 Evaluation of PT results

#### 7.5.1 Initial evaluation

On receipt of the PT report, the Technical Manager evaluates the laboratory's performance using the z-score (or equivalent statistic provided by the scheme):

| z-score | Classification | Action |
|---|---|---|
| \|z\| ≤ 2.0 | Satisfactory | Record result. No further action required. |
| 2.0 < \|z\| < 3.0 | Questionable | Investigate potential causes. Document investigation and conclusion. Consider whether results issued to customers in the same period may be affected. |
| \|z\| ≥ 3.0 | Unsatisfactory | Mandatory investigation. Identify root cause. Assess impact on customer results. Initiate corrective action per [Procedure 14](../14-complaints-nonconformity/index.md). Re-analyse retained PT sample if available. |

#### 7.5.2 Root cause investigation for unsatisfactory results

The Technical Manager investigates systematically, considering:

- Transcription or calculation errors
- Sample preparation errors (digestion, dilution, weighing)
- Calibration or standard preparation issues
- Instrument malfunction or drift
- Matrix effects or interferences
- Analyst technique
- Environmental conditions at the time of analysis
- Whether IQC data from the same period showed any anomalies

The investigation, root cause, corrective action taken, and effectiveness verification are documented in a Proficiency Testing Record ([Appendix 11-App-04](./appendix-04-pt-record)).

#### 7.5.3 Trend analysis

The Quality Manager maintains a record of PT performance across all methods and rounds. At least annually, cumulative PT performance is reviewed as part of management review (see [Procedure 19](../19-management-review/index.md)) to identify patterns — for example, consistent negative bias on a particular analyte, or a method that repeatedly produces questionable results.

### 7.6 Confidentiality

PT results are not shared with other participants outside the formal PT scheme process. The laboratory's own results are available internally for review and improvement.

## 8. Procedure — Interlaboratory Comparisons

### 8.1 When ILC is used

Interlaboratory comparisons outside formal PT schemes are used when:

- No PT scheme exists for a particular method, matrix, or analyte
- The laboratory wants additional evidence of competence between PT rounds
- A customer requests or requires bilateral comparison as a condition of contract
- A new method or instrument has been introduced and independent confirmation is sought
- An unsatisfactory PT result requires external verification of corrective action effectiveness

### 8.2 Planning and execution

ILC activities are planned by the Technical Manager and documented in the PT/ILC schedule ([Appendix 11-App-03](./appendix-03-pt-ilc-schedule)). The plan defines the comparison material, participating laboratories, measurands, method of evaluation, and timeline.

Comparison samples are homogeneous, stable, and representative of routine work. Where the laboratory initiates the comparison, it is responsible for sample preparation and distribution. Where a customer or partner laboratory initiates the comparison, the laboratory confirms the material is suitable.

Results are exchanged only after all participants have completed their analyses (to prevent bias). Evaluation follows the principles of ISO 13528 where applicable — typically using the En number (normalized error) for bilateral comparisons:

En = (x₁ − x₂) / √(U₁² + U₂²)

where x₁ and x₂ are the results from the two laboratories and U₁ and U₂ are their expanded uncertainties. |En| ≤ 1.0 indicates satisfactory agreement.

### 8.3 Evaluation and follow-up

Unsatisfactory ILC outcomes (|En| > 1.0 or equivalent criterion exceeded) are investigated with the same rigour as unsatisfactory PT results (Section 7.5). The investigation considers whether the disagreement arises from the laboratory's measurement, the comparison laboratory's measurement, or the comparison material itself.

## 9. Procedure — When No PT or ILC is Available

For methods where neither PT nor ILC is practicable (e.g., a highly specialized in-house method for a unique matrix), the laboratory shall employ alternative monitoring approaches. The Technical Manager selects from the following, documenting the rationale:

| Alternative | Application |
|---|---|
| **Analysis of independently prepared CRMs** | CRMs from a different supplier or lot than those used for routine IQC, analysed blind by the routine analyst |
| **Re-testing of retained samples** | Comparison of new results against original results on retained customer samples (after confirming stability) |
| **Correlation of results by different methods** | Comparison of results obtained by two independent methods (e.g., ICP-OES vs. ICP-MS for elemental analysis) |
| **Analyst comparison** | Two analysts independently measure the same sample; results compared against method precision |
| **Split-sample with customer** | Customer analyses the same sample in their own laboratory and results are compared |

These alternatives are documented in the PT/ILC schedule with the justification for why PT or ILC was not feasible.

## 10. Procedure — Data Integrity and Trend Monitoring

### 10.1 QC data review

The Technical Manager reviews IQC data at least monthly to confirm that:

- All required QC checks were performed for every analytical run
- Control chart rules were applied correctly
- QC failures were investigated and documented
- Corrective actions from QC failures were effective

### 10.2 Quarterly trend review

At least quarterly, the Technical Manager conducts a broader trend review across all methods, examining:

- Control chart trends for systematic drift or increasing variability
- CRM recovery trends — shift in mean or widening spread
- Blank levels — upward trends indicating contamination
- Duplicate precision — widening RPD indicating degrading repeatability
- Frequency of QC failures and repeat analyses

Findings are documented and, where trends indicate emerging problems, preventive action is initiated before results are affected.

### 10.3 Annual QA summary

The Quality Manager prepares an annual QA summary for management review, consolidating:

- IQC performance by method (percentage of runs meeting all QC criteria)
- PT participation and outcomes (percentage satisfactory, percentage unsatisfactory, actions taken)
- ILC outcomes
- QC-related nonconformities raised during the year
- Effectiveness of corrective actions from QA-related investigations
- Recommendations for the coming year (additional PT participation, method improvements, training needs)

## 11. Procedure — LIMS Validation and Data Integrity

### 11.1 Scope

This section applies to every software system that captures, processes, transfers, calculates, stores, or reports laboratory data — including the Laboratory Information Management System (LIMS), instrument data systems, spreadsheets used for calculations, and any middleware that transfers data between instruments and the LIMS.

A LIMS that silently truncates a decimal place, misassigns a sample identifier, or applies the wrong calculation formula compromises every result that passes through it. LIMS validation is therefore a quality assurance activity: it provides evidence that the data pipeline itself is trustworthy.

### 11.2 Validation before first use

Before any software system is used for routine laboratory work, the **Technical Manager** ensures it is validated. Validation confirms that the software performs its intended functions correctly and consistently under the conditions in which it will be used.

The validation scope and depth are proportionate to the risk the software poses to result validity:

| Risk category | Examples | Validation approach |
|---|---|---|
| **High** | LIMS (sample registration, result entry, report generation, data storage); instrument software that performs automated calculations (e.g., ICP-OES quantification, Karl Fischer endpoint detection) | Full validation: requirements specification, installation qualification (IQ), operational qualification (OQ), performance qualification (PQ), documented test cases with expected vs. actual results |
| **Medium** | Spreadsheets used for routine calculations (e.g., dilution factors, unit conversions, uncertainty budgets); middleware transferring data between instruments and LIMS | Verification: documented test cases using known inputs and expected outputs; cell protection and formula locking for spreadsheets |
| **Low** | Word processors, email, scheduling tools — no direct influence on measurement results | No formal validation required |

### 11.3 Validation activities

#### 11.3.1 Requirements specification

Before testing begins, the **Technical Manager** documents what the software must do — the functional requirements against which it will be tested. For a LIMS, this typically includes:

- Sample registration and unique identification
- Linking of results to correct sample, method, analyst, and equipment
- Calculation accuracy (formulas, rounding, unit conversions, significant figures)
- Data transfer integrity (instrument → LIMS, LIMS → report)
- Audit trail — every data entry, modification, and deletion recorded with user, timestamp, and reason
- Access controls — role-based permissions preventing unauthorized data modification
- Data retrieval and reporting — correct assembly of results into test reports
- Backup and recovery — data recoverable after system failure

#### 11.3.2 Test cases

Each requirement is tested using documented test cases with pre-defined inputs and expected outputs. Test cases are recorded in the LIMS Validation Record ([Appendix 11-App-06](./appendix-06-lims-validation-record)).

For the battery materials laboratory, critical test cases include:

| Test area | Example test case |
|---|---|
| **Calculation accuracy** | Enter known ICP-OES intensity values; verify that the LIMS calculates concentration, dilution correction, and mass fraction identically to an independent manual calculation |
| **Data transfer** | Export a known calibration data set from the ICP-OES software; verify that every value imported into the LIMS matches the source, including decimal places and units |
| **Rounding** | Enter a result of 33.3549% Ni; verify that the LIMS rounds to the correct number of significant figures per the method SOP and report template |
| **Sample identity** | Register two samples with consecutive IDs; verify that results entered for sample A cannot be inadvertently stored against sample B |
| **Audit trail** | Modify a previously entered result; verify that the original value, new value, user, timestamp, and reason for change are all recorded and cannot be deleted |
| **Access control** | Attempt to approve a report using an analyst-level login; verify that the system rejects the action |

#### 11.3.3 Qualification stages

| Stage | Purpose | Performed by |
|---|---|---|
| **Installation qualification (IQ)** | Confirm software is installed correctly in the intended environment — correct version, operating system, database, network configuration, backup schedule | IT / vendor, verified by Technical Manager |
| **Operational qualification (OQ)** | Confirm software functions correctly under normal operating conditions — all test cases pass with expected results | Technical Manager / designated validator |
| **Performance qualification (PQ)** | Confirm software performs reliably under realistic workload — concurrent users, typical batch sizes, end-to-end workflow from sample registration through report issuance | Technical Manager with analyst participation |

### 11.4 Ongoing monitoring

Validation is not a one-time event. The following activities maintain validated status:

| Activity | Frequency | Responsibility |
|---|---|---|
| **Change control** | Every update, patch, or configuration change | Technical Manager assesses impact; re-validates affected functions before the change enters production |
| **Periodic verification** | At least annually | Technical Manager runs a subset of critical test cases (calculation accuracy, data transfer, audit trail) to confirm continued correct operation |
| **Incident review** | On occurrence | Any data error, unexpected behaviour, or system failure is investigated, documented, and assessed for impact on results already reported |
| **Backup and recovery test** | At least annually | IT performs a test restore from backup; Technical Manager verifies data integrity of restored records |

### 11.5 Spreadsheet controls

Spreadsheets used for laboratory calculations (measurement uncertainty budgets, calibration curve calculations, statistical analyses) are controlled as follows:

- Each spreadsheet is identified with a document number and revision, controlled per [Procedure 00](../00-document-record-control/index.md)
- Formulas are verified against independent manual calculations before first use
- Input cells are clearly distinguished from calculation cells
- Calculation cells and formulas are protected against accidental modification
- The spreadsheet is listed in the LIMS Validation Register ([Appendix 11-App-05](./appendix-05-lims-validation-register)) with its validation status

### 11.6 Records

All LIMS and software validation records are maintained in the LIMS Validation Register ([Appendix 11-App-05](./appendix-05-lims-validation-register)) and individual LIMS Validation Records ([Appendix 11-App-06](./appendix-06-lims-validation-record)). Records are retained for the life of the software plus five years after decommissioning.

## 12. Procedure — Records

All QA records are maintained per [Procedure 00](../00-document-record-control/index.md). Minimum retention is five years or the life of the method, whichever is longer.

| Record | Responsibility | Location |
|---|---|---|
| IQC raw data and control charts | Analyst / Technical Manager | LIMS / method files |
| QC failure investigation records | Technical Manager | Quality records |
| PT participation plan | Quality Manager | Quality records |
| PT reports (from provider) | Quality Manager | Quality records |
| PT investigation records | Technical Manager | Quality records |
| ILC plans, results, and evaluations | Technical Manager | Quality records |
| LIMS validation register and records | Technical Manager | Quality records |
| Spreadsheet validation records | Technical Manager | Quality records |
| Annual QA summary | Quality Manager | Management review records |

## 13. Related Documents

| Document | Reference |
|---|---|
| Appendix 1 — QC Plan Template | [11-App-01](./appendix-01-qc-plan-template) |
| Appendix 2 — Control Chart Template | [11-App-02](./appendix-02-control-chart-template) |
| Appendix 3 — PT/ILC Participation Schedule | [11-App-03](./appendix-03-pt-ilc-schedule) |
| Appendix 4 — Proficiency Testing Record | [11-App-04](./appendix-04-pt-record) |
| Appendix 5 — LIMS Validation Register | [11-App-05](./appendix-05-lims-validation-register) |
| Appendix 6 — LIMS Validation Record | [11-App-06](./appendix-06-lims-validation-record) |
| Procedure 00 — Document and Record Control | [Procedure 00](../00-document-record-control/index.md) |
| Procedure 06 — Externally Provided Products and Services | [Procedure 06](../06-externally-provided-services/index.md) |
| Procedure 10 — Test and Calibration Methods | [Procedure 10](../10-test-calibration-methods/index.md) |
| Procedure 14 — Complaints, Nonconformity and Corrective Action | [Procedure 14](../14-complaints-nonconformity/index.md) |
| Procedure 15 — Evaluation of Measurement Uncertainty | [Procedure 15](../15-measurement-uncertainty/index.md) |
| Procedure 19 — Management Review | [Procedure 19](../19-management-review/index.md) |

## 14. Revision History

| Revision | Date | Description | Approved by |
|---|---|---|---|
| 00 | *[Date]* | Initial issue | *[Name]* |

---

<div className="insight">

## Why this section exists

Section 11 answers the question that sits behind every result the laboratory issues: *how do you know this number is right?*

A calibrated instrument, a validated method, and a competent analyst are necessary but not sufficient. The instrument was calibrated yesterday — is it still within tolerance today? The method was validated last year — is it still performing to the same standard now, with this lot of reagents, after that pump seal replacement? The analyst passed their competence assessment — are they still executing the method consistently six months later?

Quality assurance provides the evidence that connects past validation to present performance. It operates at three levels, each addressing a different failure mode.

### Level 1: Internal quality control — catching problems in real time

IQC is the laboratory's first line of defence. Every analytical run includes checks — blanks, calibration verification standards, CRMs, duplicates, spikes — that test whether the measurement system is working right now, in this run, with these samples. If a CRM recovery falls outside action limits, the analyst knows before results leave the laboratory. If a blank is elevated, contamination is detected before it corrupts sample data.

The control chart transforms isolated QC measurements into a time series with memory. A single CRM recovery of 97.2% tells you almost nothing — it could be perfectly normal or the beginning of a downward trend. Plotted on a control chart alongside the last 50 results, the same number becomes interpretable. The six rules in Section 6.4.3 encode the statistical signals that distinguish random variation from systematic problems: a single point beyond 3σ is a random outlier or an acute failure; six consecutive rising points are a drift; eight consecutive points on one side of the centre line are a bias.

The discipline of IQC is that it must be applied consistently and honestly. A laboratory that runs QC only when it has time, or that repeats failed QC checks until one passes, or that adjusts control limits to accommodate deteriorating performance, has a QC system in name only. The QC plan in Appendix 11-App-01 exists to prevent this — it defines what must be run and when, before the analyst starts the batch, removing the temptation to skip checks when the workload is heavy.

### Level 2: Proficiency testing — the external reality check

IQC can detect random errors and many systematic errors, but it has a fundamental limitation: it cannot detect biases that are consistent across everything the laboratory does. If every analyst uses the same contaminated stock solution to prepare calibration standards, every CRM recovery will be biased — but the control chart will show a stable, well-controlled process. The numbers will be precise, reproducible, and wrong.

Proficiency testing breaks this blind spot. The assigned value comes from outside the laboratory — from a consensus of peer laboratories or from a gravimetrically prepared reference. The laboratory's result is compared not against its own standards but against an independent truth. A z-score of 3.5 on an ICP-OES PT round, despite months of satisfactory CRM recoveries, is the signal that something the laboratory thought was right is actually wrong.

This is why PT samples must be treated as routine samples. If the laboratory gives PT samples special treatment — running extra replicates, using freshly opened CRMs, having the most senior analyst perform the measurement — the PT result reflects best-case performance, not routine performance. The whole point of PT is to test the system as it operates every day.

### Level 3: Trend analysis — connecting the dots

Individual QC results and PT scores are useful in isolation, but the real insight comes from looking at them together over time. A method that consistently produces questionable (but not unsatisfactory) PT z-scores of 1.8–2.0 has a systematic bias that is not quite large enough to trigger a formal investigation — but it is real, and it will eventually become unsatisfactory. A control chart with a slowly widening spread over 12 months indicates degrading precision that may not violate any single-run rule but represents a genuine loss of measurement capability.

The quarterly and annual reviews in Section 10 are designed to catch these slow-moving problems. They force the Technical Manager to step back from individual data points and look at the trajectory. A laboratory that only reacts to QC failures and unsatisfactory PT results will eventually solve its problems, but it will solve them after they have affected customer results. A laboratory that monitors trends will solve them before.

### The battery materials context

Battery materials present specific QA challenges. Cathode active materials (NMC, NCA, LFP, LCO) contain high concentrations of transition metals in complex oxide matrices that require aggressive acid digestion. Incomplete digestion produces negatively biased results — and the bias may not be detected by a CRM if the CRM matrix dissolves more easily than production samples. This is why the QC plan for ICP-OES includes both CRM analysis (trueness in a well-characterized matrix) and spike recovery in actual sample digests (trueness in the production matrix).

Moisture determination in battery powders is sensitive to ambient humidity — a sample exposed to laboratory air for too long absorbs atmospheric moisture, producing positively biased results. The Karl Fischer blank monitors the reagent and cell, but only careful sample handling and environmental controls (see [Procedure 07](../07-facilities-environment/index.md)) protect against this particular source of error.

Particle size measurements by laser diffraction are sensitive to the dispersion procedure. Inadequate dispersion of agglomerates produces results biased toward larger particle sizes; excessive ultrasonication can fracture primary particles, biasing results toward smaller sizes. The QC duplicate in particle size analysis — performed with a fresh dispersion — tests whether the dispersion procedure is reproducible, which is often the dominant source of measurement variability.

### The invisible layer: LIMS and software validation

Most QA discussions focus on the analytical layer — the chemistry, the instruments, the analysts. But between the instrument producing a signal and the customer receiving a report, data passes through software: instrument data systems calculate concentrations from raw signals, middleware transfers results to the LIMS, the LIMS applies dilution corrections and rounds to the specified number of significant figures, and the report template assembles everything into the final document.

Each step is an opportunity for silent error. A software update that changes a rounding algorithm, a misconfigured dilution factor in a LIMS template, a data transfer that drops the last digit of a six-digit result — these produce wrong numbers that pass every analytical QC check. The CRM recovery will look fine because the same software error applies equally to the CRM and to the customer sample. The control chart will be stable because the error is consistent.

This is why LIMS validation belongs in Quality Assurance rather than in an IT procedure. It is not an administrative formality — it is a direct test of whether the data pipeline preserves the integrity of results from measurement to report. The validation test cases in Section 11.3.2 are QA activities in exactly the same sense as running a CRM: they ask "does this system produce the right answer when I give it a known input?"

The ongoing monitoring is equally important. Software, unlike a calibrated balance, does not drift gradually — it either works correctly or it doesn't, and the transition typically happens at a discrete event: an update, a configuration change, a database migration. Change control for software is the equivalent of recalibration after instrument maintenance. Skip it, and you are operating on an unvalidated system.

### What assessors look for

An accreditation assessor evaluating clause 7.7 will typically ask three questions. First: *show me your QC plan for this method, and show me the QC data from the last 20 runs.* They want to see that QC is defined, performed consistently, and recorded. Second: *show me your PT results for the last two years.* They want to see participation, satisfactory performance, and — crucially — documented investigations when results are questionable or unsatisfactory. Third: *what do you do when QC fails?* They want to see evidence of a systematic response — investigation, root cause analysis, corrective action, and verification — not just a note that says "re-run — passed."

Increasingly, assessors also ask a fourth question: *show me how you validated your LIMS and your calculation spreadsheets.* They want to see a validation register, test cases with expected vs. actual results, and evidence of change control when software is updated.

</div>

<div className="nonconformity-example">

## Common nonconformities

### <span className="nc-tag nc-major">Major</span> No proficiency testing participation

*"The laboratory has been performing ICP-OES elemental analysis of battery materials for 18 months. When asked about PT participation, the Technical Manager stated that no suitable PT scheme had been identified. No alternative monitoring activities (interlaboratory comparisons, independent CRM analyses, or split samples) had been arranged."*

Clause 7.7.2 requires the laboratory to monitor its performance by comparison with results of other laboratories "where available." If no PT scheme exists, the standard still requires the laboratory to seek alternatives. Eighteen months without any external comparison provides no evidence that results are accurate. The laboratory cannot demonstrate the validity of any results issued during this period.

### <span className="nc-tag nc-major">Major</span> Unsatisfactory PT result not investigated

*"The laboratory's PT report for moisture determination (Karl Fischer) showed a z-score of −3.8. The report was filed in the quality records folder. No investigation record, root cause analysis, or corrective action was documented. The Technical Manager stated the result was 'probably a sample handling issue' but acknowledged no formal investigation had been conducted."*

An unsatisfactory z-score requires a documented investigation. "Probably a sample handling issue" without evidence is not a root cause analysis. All moisture results issued between the PT round and the present must be assessed for potential impact.

### <span className="nc-tag nc-minor">Minor</span> Control chart limits not reviewed

*"Control charts for ICP-OES CRM recovery have been maintained since the laboratory's commissioning 30 months ago. The warning and action limits have never been recalculated. During this period, the ICP-OES torch was replaced and a new lot of CRM was introduced."*

Control chart limits should reflect current operating conditions. After a significant instrument change (torch replacement) or reference material change (new CRM lot), the limits may no longer represent the true variability of the process. The laboratory should assess whether the change affected the QC data distribution and recalculate limits if needed.

### <span className="nc-tag nc-minor">Minor</span> QC checks not performed at required frequency

*"Review of batch records for particle size analysis (laser diffraction) showed that duplicate measurements were performed in 4 of the last 15 runs. The QC plan requires a duplicate in every run. The analyst stated that when the workload was heavy, duplicates were skipped to save time."*

The QC plan defines minimum requirements. Skipping QC under workload pressure is a systemic problem — it indicates either that the QC frequency is unrealistic (in which case it should be formally revised with justification) or that staffing is inadequate to maintain quality while meeting throughput demands. Results from runs without required QC checks cannot be demonstrated to be valid.

### <span className="nc-tag nc-major">Major</span> PT samples given special treatment

*"Investigation of the laboratory's consistently satisfactory PT results versus intermittent QC issues in routine work revealed that PT samples were routinely assigned to the most senior analyst, prepared with freshly opened CRM vials, and measured in triplicate (versus single measurement for routine samples). The SOP required single measurement for all samples."*

PT results must reflect routine performance. Special treatment invalidates the comparison — the laboratory is not testing its system as it operates daily but rather its capability under ideal conditions. All PT results obtained under these conditions must be re-evaluated.

### <span className="nc-tag nc-minor">Minor</span> No trend analysis of QC data

*"Individual QC results were reviewed after each run and control charts were maintained. However, no periodic review of QC trends across runs had been conducted. The Technical Manager could not describe the long-term precision or bias performance of any method."*

Run-by-run QC review catches acute failures. Trend analysis catches slow degradation. Without periodic review, the laboratory has no mechanism for detecting gradual loss of method performance.

### <span className="nc-tag nc-major">Major</span> LIMS not validated

*"The laboratory implemented a new LIMS 14 months ago. When asked for validation records, the Quality Manager stated that the vendor had provided a 'validation package' at installation. On review, this consisted of the vendor's generic IQ/OQ documentation. No laboratory-specific test cases had been executed — no verification of calculation accuracy for the laboratory's methods, no data transfer checks, no audit trail testing."*

Vendor documentation demonstrates that the software was installed correctly; it does not demonstrate that it produces correct results for this laboratory's specific methods, calculations, and workflows. Every laboratory-specific configuration — dilution factor templates, element-specific calibration models, rounding rules, report formats — must be tested with known inputs and verified against expected outputs.

### <span className="nc-tag nc-minor">Minor</span> Spreadsheet calculations not verified

*"The laboratory uses an Excel spreadsheet to calculate measurement uncertainty for ICP-OES results. The spreadsheet was created by a former Technical Manager three years ago. No validation record exists. Formula cells are unprotected, and the assessor identified a cell reference error in one of the intermediate calculation steps that resulted in the combined uncertainty being underestimated by approximately 15%."*

Spreadsheets used for laboratory calculations are software and require validation. Unprotected formulas can be accidentally modified without detection. The underestimated uncertainty means all uncertainty statements on affected reports are incorrect.

### <span className="nc-tag nc-minor">Minor</span> LIMS update applied without change control

*"The LIMS vendor released a software update that was applied to the production system over a weekend. No impact assessment was conducted before the update, and no re-validation of affected functions was performed afterward. Post-update, analysts noticed that the number of decimal places displayed for Karl Fischer results had changed from three to two."*

Software updates — even minor patches — can alter calculation, display, or data handling behaviour. Change control requires impact assessment before the update and verification of affected functions after. The rounding change may have affected results reported since the update.

### How to stress-test your Section 11

Pull the QC records for any method from the last six months and ask: for every analytical run, were all required QC checks performed? Were all results plotted on control charts? Were all control chart rules applied? Were all failures investigated and documented? Then look at the PT record: has the laboratory participated in every planned round? Were all results evaluated on receipt of the PT report? Were all questionable and unsatisfactory results investigated? If the answer to any of these is no, the system has gaps that will be found during assessment.

</div>
