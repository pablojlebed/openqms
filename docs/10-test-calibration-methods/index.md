---
title: "10 – Test and Calibration Methods"
description: Procedure for selecting, verifying, validating, and controlling test and calibration methods per ISO/IEC 17025 clause 7.2.
---

# Test and Calibration Method Procedure

| | |
|---|---|
| **Procedure number** | 10 |
| **ISO/IEC 17025 reference** | Clause 7.2 |
| **Revision** | 00 |
| **Effective date** | *[Enter date]* |
| **Approved by** | *[Quality Manager / Laboratory Director]* |

## 1. Purpose

To define the requirements for selecting, verifying, validating, documenting, and controlling the methods used for all testing and calibration activities, ensuring that results are fit for their intended purpose and that any limitations or uncertainties are understood and communicated.

## 2. Scope

This procedure applies to all test and calibration methods used by the laboratory, including:

- **Standard methods** — Published methods from recognized international, regional, or national standards bodies (e.g., ISO, ASTM, IEC, EN) or technical organizations, used within their defined scope of application
- **Laboratory-developed (in-house) methods** — Methods developed by the laboratory for which no adequate published method exists
- **Modified standard methods** — Published methods that have been adapted, extended, or otherwise modified beyond their original scope
- **Customer-specified methods** — Methods nominated by the customer rather than selected by the laboratory

The procedure covers the full method lifecycle: selection, verification or validation before first use, ongoing control during routine use, handling of deviations, and management of changes.

For the battery materials characterization laboratory, methods in scope include elemental composition analysis by ICP-OES, moisture determination by Karl Fischer coulometric titration, particle size distribution by laser diffraction, specific surface area by BET nitrogen adsorption, and organic impurity analysis by HPLC-UV.

## 3. References

- ISO/IEC 17025:2017, Clause 7.2 — Selection, verification and validation of methods
- ISO/IEC 17025:2017, Clause 7.6 — Evaluation of measurement uncertainty
- ISO/IEC 17025:2017, Clause 7.8 — Reporting of results
- EURACHEM/CITAC Guide CG 4 — Quantifying Uncertainty in Analytical Measurement
- EURACHEM Guide — The Fitness for Purpose of Analytical Methods
- ISO 5725-1 through 5725-6 — Accuracy (trueness and precision) of measurement methods and results
- [Procedure 00 — Document and Record Control](../00-document-record-control/index.md)
- [Procedure 04 — Competence, Training and Awareness](../04-competence-training/index.md)
- [Procedure 08 — Equipment Maintenance, Calibration and Verification](../08-equipment-calibration/index.md)
- [Procedure 14 — Complaints, Nonconformity and Corrective Action](../14-complaints-nonconformity/index.md)
- [Procedure 15 — Evaluation of Measurement Uncertainty](../15-measurement-uncertainty/index.md)

## 4. Definitions

| Term | Definition |
|---|---|
| **Method** | A defined, documented procedure for performing a specific measurement, test, or calibration. Includes all steps from sample preparation through calculation and reporting. |
| **Standard method** | A method published by a recognized standards body or technical organization (e.g., ISO, ASTM, EN) and used within its defined scope of application. |
| **In-house method** | A method developed by the laboratory itself, for which no published standard method exists or is suitable. Also called a laboratory-developed method. |
| **Modified method** | A standard method altered beyond the permitted variations in the original document — for example, applied to a matrix or analyte not covered by the original scope, or with a significant change to sample preparation or measurement conditions. |
| **Verification** | Confirmation, by examination of objective evidence, that a standard method can be performed by the laboratory with the required performance characteristics. Verification does not redesign the method — it confirms the laboratory can execute it as intended. |
| **Validation** | The process of determining that the performance characteristics of a method are fit for the intended use. Applies to in-house and modified methods, and results in a defined performance profile. |
| **Fitness for purpose** | The degree to which the method's performance characteristics are suitable for the measurement task and meet the customer's requirements. |
| **Trueness** | Closeness of agreement between the average of replicate measured values and a reference value. Commonly assessed by recovery from certified reference materials or spike recovery experiments. |
| **Precision** | Closeness of agreement between independent measurement results obtained under stipulated conditions. Expressed as repeatability (within-run) and intermediate precision (between-run). |
| **Repeatability** | Precision under repeatability conditions: same method, sample, analyst, equipment, laboratory, and short time interval. |
| **Intermediate precision** | Precision under conditions that vary within the laboratory (different analysts, days, or equipment). |
| **Linearity** | The ability of the method to produce results proportional to the concentration or quantity of analyte over a defined range. |
| **Limit of detection (LOD)** | The lowest quantity of analyte that can be detected with a defined level of confidence, but not necessarily quantified with acceptable precision. |
| **Limit of quantification (LOQ)** | The lowest quantity of analyte that can be measured with acceptable precision and trueness under the defined method conditions. |
| **Selectivity / Specificity** | The ability of the method to measure only the analyte of interest without interference from other sample components. |
| **Robustness** | The capacity of the method to produce acceptable results when small, deliberate variations in method parameters are made. |
| **Standard Operating Procedure (SOP)** | A controlled document describing the method in sufficient detail for a competent analyst to perform it consistently and reproducibly. |
| **Method deviation** | A temporary, authorized departure from the documented method for a specific sample or batch. |
| **Method amendment** | A permanent, authorized change to a documented method. |

## 5. Responsibilities

| Role | Responsibility |
|---|---|
| **Laboratory Director** | Authorize adoption of new methods that significantly expand laboratory scope. Approve capital investment required for method development or validation. |
| **Technical Manager** | Select methods appropriate for their intended use. Authorize verifications and validations. Review and approve validation reports. Authorize deviations and amendments. Maintain the Method Register. |
| **Quality Manager** | Ensure method documents are controlled per Procedure 00. Monitor document currency and coordinate the review schedule. |
| **Analysts** | Perform methods according to documented SOPs. Report deviations. Participate in verification and validation studies. |
| **Customers** | Specify method requirements or preferred methods as part of contract or request review. |

## 6. Procedure — Method Selection

### 6.1 Selection hierarchy

When a new test is required, the **Technical Manager** selects the method following this preference order:

1. **International or regional standard methods** — ISO, IEC, EN, ASTM, or equivalent. Use the most current published revision.
2. **National standard methods** — Published by national standards bodies where no international standard applies.
3. **Methods from recognized technical organizations** — AOAC International, USP, EP, IUPAC, or peer-reviewed literature with broad acceptance.
4. **Manufacturer-recommended methods** — Where no standard method exists and the manufacturer has validated the method for the relevant application.
5. **In-house methods** — Developed by the laboratory when no published method is adequate.

The selection is documented in the Method Register ([Appendix 10-App-01](./appendix-01-method-register)), including the reason for selection and alternatives considered.

### 6.2 Suitability assessment before adoption

Before adopting any method, the **Technical Manager** confirms:

- **Scope** — The method covers the analyte(s), matrix, and concentration range required
- **Performance** — The method can achieve the precision, trueness, detection limits, and uncertainty needed
- **Resources** — The required instruments, reagents, and reference materials are available or obtainable
- **Competence** — Trained analysts are available or can be developed per Procedure 04

Any gaps identified are resolved before the method enters routine use.

### 6.3 Customer-specified methods

When a customer nominates a method, the **Technical Manager** reviews it for technical soundness and suitability. Standard methods are verified per Section 8; in-house or customer-developed methods are validated or verified per Sections 8–9. If the specified method appears unlikely to meet the customer's own stated needs, the customer is informed before testing begins.

### 6.4 When no published method exists

If no published standard method is available, the laboratory informs the customer in advance, develops and validates an in-house method per Section 9, and ensures validation is completed before any results are issued.

### 6.5 Methods used outside their defined scope

A standard method may not be used outside its defined scope — different matrix, extended range, modified procedure — without formal validation (Section 9) and reclassification as a modified method.

## 7. Procedure — Method Documentation

### 7.1 Standard Operating Procedures (SOPs)

Every method used in routine testing or calibration must be documented in an SOP controlled per [Procedure 00](../00-document-record-control/index.md). The SOP translates the published standard or validation report into the specific instructions an analyst follows in this laboratory, with this equipment, using these reagents.

### 7.2 Required SOP content

Each SOP shall include, as relevant to the method:

| Section | Content |
|---|---|
| **Identification** | SOP number, title, revision, effective date, approved by |
| **Purpose and scope** | What the method measures, for what matrices, and over what range |
| **Reference method** | Standard document number and year, or validation report reference |
| **Health and safety** | Hazards, PPE, waste disposal, emergency procedures |
| **Equipment** | Instruments required, with equipment IDs per Procedure 08 |
| **Reagents and materials** | Specification, purity, supplier, preparation, storage, expiry |
| **Calibration standards** | Preparation, traceability, concentration range, stability |
| **Sample preparation** | Sub-sampling, dissolution, digestion, dilution, extraction — with specific parameters |
| **Analytical procedure** | Step-by-step instructions in sufficient detail for a trained analyst |
| **Instrument setup and calibration** | Parameters, calibration procedure, acceptance criteria |
| **Quality control** | Required QC checks, frequency, acceptance criteria, action on failure |
| **Calculations** | All formulas for converting raw data to reported results |
| **Measurement uncertainty** | Reference to the applicable uncertainty budget (see Procedure 15) |
| **Reporting** | Significant figures, units, rounding, results below LOD or LOQ |
| **Records** | Which records are generated, storage location, retention period |

### 7.3 Accessibility and currency

SOPs must be available at the point of use, current (only the approved revision in circulation), and legible. The **Quality Manager** maintains a master revision list and ensures superseded copies are promptly removed.

### 7.4 Standard method edition tracking

When a new edition of a referenced standard is published, the **Technical Manager** assesses whether changes are minor (editorial — SOP updated to reference the new edition, no re-verification required) or technical (procedure or performance affected — re-verification or re-validation required before adoption). The outcome is documented; if the laboratory chooses not to adopt the new edition, the reason is recorded.

## 8. Procedure — Method Verification

### 8.1 When verification is required

Verification is required:

- Before a standard method is used for the first time in the laboratory
- After a significant instrument change (e.g., replacement of the ICP-OES)
- After a period of method inactivity (12 months or more)
- When a new edition of the referenced standard introduces procedural or performance changes

Verification is not repeated for each routine use. Ongoing QC provides continuing confidence between verifications.

### 8.2 What verification confirms

Verification confirms the laboratory can achieve the performance characteristics stated in the method — or, where the method states none, the performance needed to meet customer requirements. It does not redesign or re-validate the method.

### 8.3 Verification parameters

At minimum, the following are assessed:

| Parameter | Approach | Criterion |
|---|---|---|
| **Trueness** | CRM analysis or spike recovery in representative matrix | Recovery within ±X% of certified/spiked value (defined before study begins) |
| **Repeatability** | Minimum 6–10 replicates, same analyst, same day | RSD ≤ criterion from method or Technical Manager |
| **Measurement range** | Results at low and high ends of the claimed range | Within acceptance criteria at both limits |
| **LOQ (where relevant)** | Spiked samples at or near the claimed LOQ | Recovery and precision meet defined criteria |

### 8.4 Battery materials laboratory — typical verification studies

| Method | Key parameters | Typical study |
|---|---|---|
| **ICP-OES elemental analysis** | Trueness, repeatability, interference check | 6–10 replicate measurements of cathode/anode CRM; spike recovery in acid digest; spectral interference check for key analyte pairs |
| **Karl Fischer moisture** | Trueness, repeatability, blank | 10 replicate measurements of certified water standard; blank titration; CRM powder at low moisture level |
| **Laser diffraction particle size** | Repeatability, size standard recovery | 6 repeat measurements of certified size reference material; dispersion protocol check for the specific powder type |
| **BET specific surface area** | Trueness, repeatability | 6 repeat measurements of certified BET reference material; comparison to certified value |
| **HPLC-UV organic impurity analysis** | Trueness, repeatability, linearity, LOQ | 6–10 replicate injections of calibration standard; spike recovery in matrix extract; linearity across working range |

### 8.5 Acceptance criteria

Criteria are defined by the **Technical Manager** before the study begins — from the method document, customer specification, or laboratory requirements. They are not set retrospectively. If a study fails, the Technical Manager investigates the cause and either resolves the problem and repeats the verification, or concludes the method is not currently feasible.

### 8.6 Verification records

Documented in a Method Verification Record ([Appendix 10-App-03](./appendix-03-method-verification-record)), including method identification, date, analyst, equipment and reference materials used, raw data, results vs. criteria, pass/fail conclusion, and Technical Manager authorization. Retained for the life of the method plus five years.

## 9. Procedure — Method Validation

### 9.1 When validation is required

Validation is required for:

- **In-house methods** — No adequate standard method exists
- **Modified standard methods** — Extended to new matrices, analytes outside the original scope, or with significant procedural changes
- **Standard methods used outside their stated scope**

Re-validation (full or partial) is required when a validated method is modified in a way that could affect performance, or applied to a new matrix or extended range.

### 9.2 Validation parameters

The **Technical Manager** selects parameters appropriate to the method. For quantitative chemical methods:

| Parameter | Typical approach |
|---|---|
| **Selectivity** | Blank matrix analysis; interferent spike study; chromatographic resolution check |
| **Calibration linearity** | Minimum 5 concentration levels; regression analysis; residual assessment |
| **Measurement range** | Confirmed by trueness and precision at range limits |
| **Trueness** | CRM analysis; spike recovery at minimum 3 levels × 3 replicates |
| **Repeatability** | Minimum 6 replicates at 2–3 concentration levels |
| **Intermediate precision** | Minimum 2 analysts × 2 days × 3 replicates |
| **LOD** | 3.3 × (SD of blank replicates) / calibration slope; confirmed experimentally |
| **LOQ** | 10 × (SD of blank replicates) / calibration slope; confirmed by precision and recovery at LOQ level |
| **Robustness** | Deliberate variation of key parameters (temperature, time, reagent volume, pH) |
| **Measurement uncertainty** | Estimated from validation data per Procedure 15 |

Not all parameters apply to every method — a gravimetric method needs no linearity study; a qualitative method needs no LOQ. Omissions are justified in the validation plan.

### 9.3 Validation plan

Before any experimental work begins, the **Technical Manager** prepares a validation plan stating the intended scope, parameters to assess, experimental design, acceptance criteria, and required resources. All acceptance criteria are defined prospectively.

### 9.4 Worked examples — battery materials laboratory

#### ICP-OES multi-element method for cathode active materials

The laboratory's in-house method for simultaneous determination of Ni, Co, Mn, Li, Al, and Fe in NMC/NCA/LCO cathode materials by ICP-OES following microwave acid digestion requires full validation. No single published standard covers this exact matrix and element combination.

| Parameter | Study design | Acceptance criterion |
|---|---|---|
| Selectivity | Digest blank; spectral interference assessment for Mn/Co and Fe/Ni pairs | No significant blank; interference corrections applied where needed |
| Linearity | 7-point curve, LOQ to 10× working concentration, per element | r² ≥ 0.9990; residuals randomly distributed |
| Trueness | ISO 17034-certified cathode CRM; spike recovery at 3 levels × 3 replicates | Recovery 95–105% (major elements); 90–110% (minor elements) |
| Repeatability | 10 replicate digestions and measurements | RSD ≤ 1.0% (major); ≤ 2.5% (minor) |
| Intermediate precision | 2 analysts × 3 days × 3 replicates | RSD ≤ 2.0% (major); ≤ 5.0% (minor) |
| LOD | 10 blank digestion replicates; LOD = 3σ/slope | ≤ 0.001% w/w per element |
| LOQ | 10σ/slope; confirmed at LOQ level | RSD ≤ 10%; recovery 80–120% at LOQ |
| Robustness | ±2 min digestion time; ±10% acid volume; ±5% dilution factor | Results within ±5% of unmodified method |

#### HPLC-UV organic impurity method for anode materials

In-house method for organic impurity profiling (binder residues, solvent impurities) in anode material extracts.

| Parameter | Approach |
|---|---|
| Selectivity | Chromatographic resolution ≥ 1.5 between target peaks; unspiked matrix extract analyzed for background |
| Linearity | 6-point curve per compound; r² ≥ 0.999 |
| Trueness | Spike recovery at 3 levels in matrix extract; 70–130% at all levels |
| Repeatability | 6 replicate injections; RSD ≤ 2% retention time, ≤ 5% peak area |
| LOQ | S/N ≥ 10 at LOQ; RSD ≤ 10%; recovery 70–130% |
| Robustness | Mobile phase ±2%, flow rate ±0.05 mL/min, column temperature ±5°C |

### 9.5 Validation report

Documented in a Method Validation Report ([Appendix 10-App-02](./appendix-02-method-validation-report)), including the validation plan, all raw data, calculations, statistical analysis, pass/fail for each parameter, the validated scope (analytes, matrices, range, LOD, LOQ, uncertainty), any limitations, and Technical Manager authorization. Retained for the life of the method plus five years.

## 10. Procedure — Method Deviations

### 10.1 Authorization

A deviation is a temporary, authorized departure from the documented method for a specific sample or batch. The analyst requests authorization from the **Technical Manager** before proceeding. The Technical Manager assesses the technical justification and potential impact on results.

### 10.2 Recording and disclosure

All authorized deviations are recorded in the batch record (nature of deviation, justification, authorizing person, date). Deviations are noted on the test report unless the customer was informed in advance and agreed that notation is not required.

### 10.3 Unauthorized deviations

Deviations discovered after the fact without authorization are reported immediately to the **Technical Manager** and treated as a nonconformity per [Procedure 14](../14-complaints-nonconformity/index.md). Impact on results is assessed and customer notification considered.

## 11. Procedure — Method Changes and Amendments

### 11.1 Classification of changes

| Change type | Examples | Process |
|---|---|---|
| **Minor** | Typographical correction, updated reagent supplier, new equipment model number | Technical Manager review and approval; SOP updated to new revision; no re-verification or re-validation |
| **Significant** | Change of detection wavelength, change of digestion acid, extended concentration range, new instrument type | Re-verification (standard methods) or re-validation (in-house/modified methods) for affected parameters before adoption |

### 11.2 Amendment process

The proposed change is documented and classified by the **Technical Manager**. For significant changes, a verification or validation study is completed first. On approval, the SOP is updated to a new revision, superseded copies are archived, affected analysts are informed (and trained if needed per Procedure 04), and the Method Register is updated. If the change affects the uncertainty budget, it is updated per [Procedure 15](../15-measurement-uncertainty/index.md).

Where the amendment affects a customer-specified method or an accredited method, the customer and/or accreditation body are notified as required.

## 12. Procedure — Ongoing Method Performance Monitoring

### 12.1 Quality control data

Routine QC results — blanks, check standards, CRM recoveries, duplicates, and spikes — provide continuous evidence of method performance. The **Technical Manager** reviews QC trends at least quarterly using control charts or equivalent analysis.

| QC observation | Action |
|---|---|
| Single result outside warning limits | Investigate; repeat; document |
| Trend toward control limits | Investigate cause — check reagents, standards, instrument status |
| Result outside action limits | Stop analysis; assess impact on results since last satisfactory QC; initiate nonconformity per Procedure 14 if results may be affected |
| Systematic shift in CRM recovery | Investigate method, equipment, or reference material change; consider re-verification |

### 12.2 Annual method review

At least annually, the **Technical Manager** reviews each routine method against accumulated QC data, recorded deviations, customer feedback, standard edition changes, and proficiency testing outcomes. If performance has degraded, corrective action is initiated per [Procedure 14](../14-complaints-nonconformity/index.md).

## 13. Related Documents

| Document | Reference |
|---|---|
| Appendix 1 — Method Register | [10-App-01](./appendix-01-method-register) |
| Appendix 2 — Method Validation Report | [10-App-02](./appendix-02-method-validation-report) |
| Appendix 3 — Method Verification Record | [10-App-03](./appendix-03-method-verification-record) |
| Procedure 00 — Document and Record Control | [Procedure 00](../00-document-record-control/index.md) |
| Procedure 04 — Competence, Training and Awareness | [Procedure 04](../04-competence-training/index.md) |
| Procedure 08 — Equipment Maintenance, Calibration and Verification | [Procedure 08](../08-equipment-calibration/index.md) |
| Procedure 09 — Customer Service | [Procedure 09](../09-customer-service/index.md) |
| Procedure 14 — Complaints, Nonconformity and Corrective Action | [Procedure 14](../14-complaints-nonconformity/index.md) |
| Procedure 15 — Evaluation of Measurement Uncertainty | [Procedure 15](../15-measurement-uncertainty/index.md) |

## 14. Revision History

| Revision | Date | Description | Approved by |
|---|---|---|---|
| 00 | *[Date]* | Initial issue | *[Name]* |

---

<div className="insight">

## Why this section exists

Section 10 addresses the intellectual core of the laboratory's technical operations: *how it knows that the numbers it produces are meaningful.*

An ICP-OES instrument measures intensity of light at specific wavelengths. A Karl Fischer titrator measures charge. A laser diffraction analyzer measures the angular distribution of scattered light. None of these instruments directly measures what a customer needs to know — the nickel content of a cathode, the moisture level in an electrode, the particle size of a powder. The *method* is the bridge between what the instrument does and what the result means. It defines the sample preparation, the calibration, the calculations, the quality controls, and the conditions under which the instrument output is a valid representation of the physical reality being measured.

This section exists because a laboratory can have excellent instruments, skilled analysts, and rigorous calibrations — and still produce wrong results if its methods are poorly chosen, inadequately validated, or inconsistently applied.

### Verification versus validation: the most important distinction in this section

**Validation** establishes the performance profile of a method. It asks: *what can this method do?* It applies when the laboratory is developing a method from scratch, or when it is extending a standard method beyond its original scope. The validation study produces the evidence that the method is fit for its intended purpose — the trueness, precision, range, detection limits, and robustness under which it was characterized.

**Verification** confirms that an already-validated method works in this laboratory's hands. It asks: *can we reproduce the performance that was established elsewhere?* It applies when the laboratory adopts a published standard method. The standards body that published the method has already done the validation work (typically through a collaborative study across multiple laboratories). The laboratory does not need to repeat that work — it needs to demonstrate, with objective evidence, that it can achieve the performance the method was designed to deliver.

The practical consequence is that verification is less work than validation, but it is not trivial. A verification study consisting of one CRM measurement is inadequate. A proper verification demonstrates trueness and repeatability using enough replicates to support a statistically defensible conclusion.

### Why in-house methods are high-risk

When a laboratory follows ISO 11885 for ICP-OES analysis, it is standing on the shoulders of the many laboratories that participated in the interlaboratory study that produced the standard. The method's performance has been characterized across multiple laboratories, instruments, and conditions.

When a laboratory develops its own method, it has no such foundation. Every performance characteristic must be established from scratch in a single-laboratory study, subject to all the biases and limitations of that setting. Biases consistent across the laboratory's analysts, equipment, and reagents may not be detected internally. This is why in-house methods require more extensive validation, more thorough QC monitoring, and more scrutiny when performance appears to drift. It is also why, wherever a suitable standard method exists, the laboratory should prefer it.

### The traps in method selection

Three traps appear repeatedly when laboratories select methods.

The first is **using an outdated edition**. A laboratory adopts ISO 13320 for particle size in 2019 and is still running the 2009 edition years later. If the update includes a technical change, the laboratory is operating on superseded methodology without having assessed the impact.

The second is **scope creep without re-validation**. A standard method validated for aqueous slurries gets applied to dry powders or materials with different refractive indices because it is the method analysts know. Nobody formally approved the extension and the performance profile was never characterized for the new application.

The third is **relying on the customer to have validated their method**. Many customer-specified methods are adapted from published standards, used beyond their original scope, or developed in-house at the customer's facility. The customer's validation, if it exists, may not cover the laboratory's reagents, equipment, or analysts. The laboratory must satisfy itself that the method is fit for purpose in its hands.

### Control charts: the first sign that something is wrong

The most powerful ongoing QC tool for method performance is the control chart — a plot of QC results over time with warning limits at ±2σ and action limits at ±3σ from the historical mean. Several signals indicate a problem before results fall outside action limits: a trend (six or more consecutive points moving in one direction), a shift (eight or more consecutive points on the same side of the centre line), or instability (two of three consecutive points between warning and action limits). A laboratory that responds to these signals early is managing problems before they reach customer results.

### The SOP as institutional knowledge

An SOP is the repository of the laboratory's accumulated method expertise. Every refinement discovered during development — the optimal microwave digestion ramp rate for NMC cathode materials, the rinse volume that eliminates HPLC carryover, the dilution factor that puts Karl Fischer readings in the optimal cell range — exists either in the SOP or nowhere. If the analyst who discovered it leaves, the SOP is what remains. Laboratories with well-maintained SOPs can introduce a new analyst to a method with confidence; those with thin SOPs rely on tribal knowledge that degrades with each transfer.

</div>

<div className="nonconformity-example">

## Common nonconformities

### <span className="nc-tag nc-major">Major</span> In-house method used without validation

*"The laboratory performs particle size measurements on anode materials using an in-house procedure (SOP-10-004). When asked for the validation report, the Technical Manager stated the method had 'always worked well' and referred to historical data as evidence. No formal validation study had been conducted."*

Historical data is not a validation. The fact that a method has been in use without obvious customer complaints does not demonstrate that its performance has been characterized. Without a validation study, the laboratory cannot make defensible claims about result uncertainty, cannot demonstrate fitness for purpose, and cannot justify the numbers in its test reports.

### <span className="nc-tag nc-major">Major</span> Method used outside its validated scope without re-validation

*"The ICP-OES method (SOP-10-001) was validated for NMC cathode powders. During records review, the assessor found approximately 80 test reports for LFP cathode materials analyzed using the same SOP. The Technical Manager confirmed no additional validation had been conducted for the LFP matrix, which has significantly different dissolution characteristics."*

A method validated for one matrix cannot be assumed to perform equivalently in another. All 80 reports must be reviewed and affected customers may need to be notified.

### <span className="nc-tag nc-minor">Minor</span> Verification records inadequate

*"The laboratory adopted ISO 760:2020 for Karl Fischer moisture. The Technical Manager provided a one-page record showing a single CRM measurement with a recovery of 98.5%. No repeatability study, no blank data, and no pre-defined acceptance criteria were documented."*

A single measurement does not constitute a verification study. The assessor expects pre-defined criteria, a sufficient number of replicates (minimum 6), trueness assessment against certified values, and a formal signed conclusion.

### <span className="nc-tag nc-minor">Minor</span> SOPs not current at point of use

*"SOP-10-002 (BET analysis) was at revision 02 in the document control system. Physical copies at the BET workstation were at revision 00. The analyst confirmed she had been following the physical copy and was unaware of the revisions."*

This is both a document control failure and a potential method compliance failure. The impact of differences between revision 00 and revision 02 must be assessed.

### <span className="nc-tag nc-major">Major</span> Method deviation not disclosed on test report

*"Batch record BR-2025-0342 documented an authorized deviation: the digestion acid mixture was modified for samples showing incomplete dissolution. The deviation was properly authorized but the corresponding test reports made no mention of it and the customer had not been informed."*

ISO/IEC 17025 clause 7.8 requires reports to contain all information needed to interpret results. Corrected reports must be issued and the customer informed.

### <span className="nc-tag nc-minor">Minor</span> No process for reviewing standard method updates

*"The Quality Manager acknowledged there was no formal process for reviewing the impact of new standard editions. SOP-10-003 references ISO 13320:2009; the current version is ISO 13320:2020."*

Without a documented review, the laboratory cannot demonstrate it made an informed decision about whether to adopt the new edition and whether re-verification is required.

### How to stress-test your Section 10

The most practical self-check is the "new analyst test": pick any routine method and ask — could a newly hired analyst with the right technical background perform it correctly tomorrow using only the SOP? Would they know which equipment to use, how to prepare calibration standards, what QC checks to run, what the acceptance criteria are, and what to do if QC fails? If the answer is no to any of these, the SOP is not yet fit for purpose.

</div>
