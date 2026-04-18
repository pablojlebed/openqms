---
title: "08 – Equipment Maintenance, Calibration and Verification"
description: Procedure for managing laboratory equipment including maintenance, calibration, and verification per ISO/IEC 17025 clause 6.4.
---

# Equipment Maintenance, Calibration and Verification Procedure

| | |
|---|---|
| **Procedure number** | 08 |
| **ISO/IEC 17025 reference** | Clause 6.4 |
| **Revision** | 00 |
| **Effective date** | *[Enter date]* |
| **Approved by** | *[Quality Manager / Laboratory Director]* |

## 1. Purpose

To ensure that all equipment contributing to the validity of laboratory results is suitable for its intended use, properly maintained, calibrated or verified at defined intervals, and that its status is known and documented at all times.

## 2. Scope

This procedure applies to all equipment that can influence the result of a measurement, directly or indirectly, including:

- **Analytical instruments** — ICP-OES, HPLC-UV, Karl Fischer coulometric titrator, laser diffraction particle size analyzer, BET surface area analyzer, X-ray diffractometer (XRD)
- **Measurement standards and reference equipment** — Certified reference weights, calibrated thermometers, calibrated volumetric glassware
- **Sample preparation equipment** — Analytical balances, microbalances, microwave digestion systems, hotplates, muffle furnaces, ultrasonic baths
- **Volumetric delivery devices** — Calibrated pipettes (fixed and variable volume), burettes
- **Environmental monitoring equipment** — Temperature and humidity data loggers, thermometers in storage areas
- **Supporting equipment** — Fume hoods (airflow verification), centrifuges, ovens, desiccators, water purification systems

This procedure does not apply to general-purpose equipment that has no influence on measurement results (e.g., office printers, non-analytical refrigerators).

## 3. References

- ISO/IEC 17025:2017, Clause 6.4 — Equipment
- ISO/IEC 17025:2017, Clause 6.5 — Metrological traceability
- ISO/IEC 17025:2017, Clause 7.7 — Ensuring the validity of results
- ILAC P10 — ILAC Policy on Metrological Traceability of Measurement Results
- [Procedure 00 — Document and Record Control](../00-document-record-control/index.md)
- [Procedure 05 — Addressing Risks and Opportunities](../05-risks-opportunities/index.md)
- [Procedure 06 — Externally Provided Products and Services](../06-externally-provided-services/index.md)
- [Procedure 07 — Facilities and Environmental Conditions](../07-facilities-environment/index.md)
- [Procedure 14 — Complaints, Nonconformity and Corrective Action](../14-complaints-nonconformity/index.md)

## 4. Definitions

| Term | Definition |
|---|---|
| **Equipment** | Any measuring instrument, software, measurement standard, reference material, auxiliary apparatus, reagent, or combination thereof necessary to perform laboratory activities. |
| **Calibration** | An operation that, under specified conditions, establishes a relation between the quantity values provided by measurement standards and the corresponding indications of the measuring system, including the associated measurement uncertainty. Calibration does not include adjustment. |
| **Verification** | Provision of objective evidence that a given item fulfils specified requirements. For equipment, this means confirming that the instrument meets its performance specification or the laboratory's acceptance criteria. |
| **Intermediate check** | A check performed between scheduled calibrations to maintain confidence in the calibration status of the equipment. Does not replace calibration. |
| **Adjustment** | A set of operations carried out on a measuring system so that it provides prescribed indications corresponding to given values of a quantity to be measured. Adjustment may follow calibration but is a separate operation. |
| **Metrological traceability** | The property of a measurement result whereby the result can be related to a reference through a documented unbroken chain of calibrations, each contributing to the measurement uncertainty. |
| **Out of tolerance** | A condition where the equipment's performance, as determined by calibration or verification, exceeds the acceptable limits defined by the laboratory. |
| **Equipment register** | A maintained list of all equipment subject to this procedure, including unique identification, calibration status, and location. |
| **Preventive maintenance** | Planned activities performed at defined intervals to maintain equipment in proper working condition and reduce the likelihood of failure. |

## 5. Responsibilities

| Role | Responsibility |
|---|---|
| **Laboratory Director** | Approve capital equipment purchases. Ensure adequate budget for calibration and maintenance programs. Authorize equipment disposal. |
| **Quality Manager** | Maintain the Equipment Register ([08-App-01](./appendix-01-equipment-register)). Track calibration and verification schedules. Ensure overdue items are escalated. Coordinate external calibration services. |
| **Technical Manager** | Define calibration intervals, acceptance criteria, and intermediate check procedures for each item. Evaluate the impact of out-of-tolerance findings. Approve equipment for return to service after repair or calibration. |
| **Analysts** | Perform intermediate checks and routine maintenance as defined in SOPs. Record equipment use. Report faults or suspected malfunctions immediately. Do not use equipment that is overdue for calibration or labeled out of service. |
| **External calibration providers** | Perform calibrations within their accredited scope and provide certificates meeting the requirements of [Procedure 06](../06-externally-provided-services/index.md). |

## 6. Procedure — Equipment Identification and Registration

### 6.1 Unique identification

Every item of equipment subject to this procedure is assigned a unique identification code. The code follows the format:

**`[Category]-[Sequential number]`**

Categories:

| Code | Category | Examples |
|---|---|---|
| **AI** | Analytical instrument | ICP-OES, HPLC, XRD, BET, Karl Fischer, laser diffraction |
| **BA** | Balance | Analytical balances, microbalances |
| **VD** | Volumetric delivery device | Pipettes, burettes |
| **SP** | Sample preparation equipment | Microwave digestion, hotplates, muffle furnaces |
| **RS** | Reference standard | Certified reference weights, calibrated thermometers |
| **EM** | Environmental monitoring | Temperature loggers, hygrometers |
| **SE** | Supporting equipment | Fume hoods, ovens, centrifuges, water purifiers |

Example: `AI-001` (ICP-OES spectrometer), `BA-003` (analytical balance in balance room 2), `VD-012` (100 µL variable pipette).

The identification code is physically affixed to the equipment by label, engraving, or tag. Where labeling is impractical (e.g., small items, glassware sets), the identification is linked to the storage location.

### 6.2 Equipment register

All equipment is recorded in the **Equipment Register** ([Appendix 08-App-01](./appendix-01-equipment-register)). The register includes:

- Unique identification code
- Equipment description, manufacturer, model, serial number
- Date of acquisition, date placed into service
- Current location
- Calibration status (calibrated / verified / due / overdue / out of service)
- Calibration interval and next due date
- Condition (in service / out of service / decommissioned)

The register is maintained by the **Quality Manager** and reviewed at least annually.

### 6.3 New equipment — commissioning

Before new equipment is placed into service:

1. **Receipt inspection** — Verify the equipment against the purchase order, check for damage, confirm all components and documentation are present.
2. **Installation** — Install according to manufacturer instructions. Verify utilities (power, gas, water, ventilation) meet requirements per [Procedure 07](../07-facilities-environment/index.md).
3. **Initial calibration or verification** — Perform calibration or verification before use. For analytical instruments, this typically includes the manufacturer's installation qualification (IQ) and operational qualification (OQ) where applicable.
4. **Performance confirmation** — Demonstrate that the equipment meets the laboratory's performance requirements using reference materials or known samples. This may overlap with method validation if the equipment is for a new method.
5. **Registration** — Add the equipment to the Equipment Register and the Calibration and Verification Schedule ([Appendix 08-App-02](./appendix-02-calibration-schedule)).
6. **Training** — Confirm that all analysts who will use the equipment have been trained per [Procedure 04](../04-competence-training/index.md).
7. **Authorization** — The **Technical Manager** authorizes the equipment for routine use by signing the commissioning record.

### 6.4 Equipment out of direct control

When equipment is used outside the laboratory's permanent facilities (e.g., portable instruments for field work) or has been outside the laboratory's direct control (e.g., returned from external repair), the laboratory verifies its calibration status and functional performance before returning it to service.

## 7. Procedure — Calibration

### 7.1 Calibration strategy

The **Technical Manager** determines, for each item of equipment, whether calibration is:

- **Required** — The equipment measures a quantity that directly enters the measurement result and requires metrological traceability. Examples: analytical balances (mass), ICP-OES (elemental concentration via calibration curves), pipettes (volume).
- **Not required but verification is needed** — The equipment contributes to result quality but is not calibrated in the metrological sense. Instead, its performance is verified against defined criteria. Examples: muffle furnaces (temperature verified with a calibrated thermometer), centrifuges (speed verified), fume hoods (face velocity verified).

This determination is documented in the Calibration and Verification Schedule ([Appendix 08-App-02](./appendix-02-calibration-schedule)).

### 7.2 Metrological traceability

All calibrations must be traceable to the International System of Units (SI) through an unbroken chain of calibrations, each with stated measurement uncertainty.

For the battery materials laboratory, traceability chains include:

| Measurand | Traceability chain |
|---|---|
| **Mass** | Certified reference weights → national mass standards (via accredited calibration laboratory) → BIPM |
| **Elemental concentration** (ICP-OES) | Certified reference materials (CRMs) → ISO 17034 producer → national metrology institute → SI |
| **Volume** (pipettes, glassware) | Gravimetric verification using calibrated balance and calibrated thermometer → SI (mass, temperature) |
| **Temperature** | Calibrated reference thermometers → accredited calibration laboratory → national standards → ITS-90 |
| **Moisture** (Karl Fischer) | Certified water standards → ISO 17034 producer → SI |
| **Particle size** (laser diffraction) | Certified size standard reference materials → national metrology institute |
| **Specific surface area** (BET) | Certified BET reference materials (e.g., alumina, carbon black) → ISO 17034 producer |
| **Wavelength / 2θ** (XRD) | Certified standard reference material (e.g., NIST SRM 660 LaB₆) → national metrology institute |

Where SI traceability is not technically possible, the laboratory uses other recognized references (e.g., certified reference materials, agreed method-defined standards) and documents the traceability basis.

### 7.3 External calibration

Equipment calibrated by external service providers must meet the requirements of [Procedure 06 — Externally Provided Products and Services](../06-externally-provided-services/index.md). The external provider must:

- Be accredited to ISO/IEC 17025 for the relevant calibration scope
- Issue calibration certificates that include: equipment identification, calibration date, environmental conditions, reference standards used with traceability statements, measurement results with associated uncertainty, and a statement of conformity to specification (if requested)

Upon receipt of an external calibration certificate, the **Technical Manager**:

1. Reviews the certificate for completeness
2. Verifies that results are within the laboratory's acceptance criteria
3. Updates the Equipment Register and Calibration Schedule
4. Affixes or updates the calibration status label on the equipment

### 7.4 Applying correction factors

When calibration results include correction factors or reference values (e.g., balance correction at a specific load point, thermometer offset), the laboratory shall:

- Record the correction factor or reference value and its associated uncertainty
- Implement the correction in calculations or data systems where it materially affects results
- Update correction factors each time the equipment is recalibrated
- Verify that corrections have been correctly applied (e.g., by checking a calculation with and without the correction)

Where a correction factor is small relative to the method's required uncertainty and does not materially affect results, the **Technical Manager** may document the decision not to apply it, with justification.

### 7.5 Internal calibration

For equipment calibrated in-house, the laboratory documents the calibration procedure in the relevant SOP. Internal calibrations must:

- Use reference standards that are themselves calibrated with valid traceability
- Follow a documented procedure that specifies the method, reference standards, environmental conditions, number of measurements, and acceptance criteria
- Include measurement uncertainty estimation
- Be performed by trained and authorized personnel
- Be recorded in full, with raw data retained

Common internal calibrations in the battery materials laboratory:

| Equipment | Internal calibration method |
|---|---|
| **Analytical balances** | Verification with certified reference weights at multiple points across the range. External calibration by accredited provider annually; internal verification monthly or as defined. |
| **Pipettes** | Gravimetric method — dispensed water weighed on calibrated balance, corrected for temperature and air buoyancy. Performed annually or per manufacturer recommendation. |
| **ICP-OES** | Daily calibration using multi-element calibration standards prepared from certified stock solutions. Linearity and sensitivity verified. |
| **HPLC-UV** | Wavelength accuracy verified with reference standard solutions. Flow rate verified gravimetrically. |
| **Karl Fischer titrator** | Calibrated using certified water standard before each batch. |
| **Laser diffraction** | Verified using certified particle size reference material (e.g., glass beads, latex spheres). |
| **BET analyzer** | Verified using certified BET surface area reference material (e.g., NIST SRM or equivalent). |
| **XRD** | 2θ alignment verified using certified peak position standard (e.g., NIST SRM 660c LaB₆). |

### 7.6 Calibration intervals

Calibration intervals are set by the **Technical Manager** based on:

- Equipment manufacturer recommendations
- Stability of the equipment demonstrated by historical calibration data
- Frequency and severity of use
- Environmental conditions
- Required measurement accuracy
- Accreditation body requirements or guidelines

Initial intervals for new equipment are based on manufacturer recommendations. Intervals may be adjusted based on accumulated performance data:

- **Extended** — If consecutive calibrations show the equipment is well within tolerance, the interval may be lengthened. The decision and justification are documented.
- **Shortened** — If a calibration reveals drift approaching tolerance limits, or if the equipment is subjected to heavy use or harsh conditions, the interval is shortened.

Typical intervals for the battery materials laboratory:

| Equipment | Calibration type | Typical interval |
|---|---|---|
| Analytical balances | External accredited calibration | Annually |
| Analytical balances | Internal verification (reference weights) | Monthly |
| Pipettes | Gravimetric calibration | Annually |
| Reference weights | External accredited calibration | Every 5 years |
| Temperature data loggers | External accredited calibration | Annually |
| Reference thermometers | External accredited calibration | Every 2 years |
| ICP-OES | Daily calibration (standard curves) | Each analytical run |
| ICP-OES | Performance verification (QC check standards) | Each analytical run |
| HPLC | System suitability check | Each analytical run |
| Karl Fischer | Certified water standard check | Each batch |
| Laser diffraction | Reference material check | Monthly or per SOP |
| BET | Reference material check | Quarterly or per SOP |
| XRD | Alignment standard check | Monthly or per SOP |

:::tip Adapt these intervals
The intervals above are starting points. Your actual intervals must be justified by your equipment's demonstrated stability, your measurement requirements, and any accreditation body guidance. Document the rationale for each interval.
:::

### 7.7 Acceptance criteria

For each calibration or verification, the **Technical Manager** defines acceptance criteria — the maximum permissible deviation from the reference value or specification. Criteria are based on:

- The measurement uncertainty required by the test method
- Equipment manufacturer specifications
- Regulatory or accreditation requirements
- A general principle: calibration uncertainty should be small relative to the method's required uncertainty (commonly, calibration uncertainty contributes no more than one-third of the total method uncertainty)

Examples:

| Equipment | Parameter | Typical acceptance criterion |
|---|---|---|
| Analytical balance (0.1 mg) | Accuracy at test loads | ≤ ±0.2 mg at each test point |
| Pipette (100 µL) | Accuracy | ≤ ±1.0% of nominal volume |
| Pipette (100 µL) | Precision (CV) | ≤ 0.5% |
| Reference thermometer | Deviation from standard | ≤ ±0.1 °C |
| ICP-OES calibration | Correlation coefficient (r²) | ≥ 0.9995 |
| ICP-OES QC check standard | Recovery | Within ±5% of certified value |
| Karl Fischer water standard | Recovery | Within ±3% of certified value |
| XRD peak position standard | 2θ deviation | ≤ ±0.02° 2θ |

## 8. Procedure — Intermediate Checks

### 8.1 Purpose of intermediate checks

Intermediate checks are performed between scheduled calibrations to maintain confidence that the equipment continues to perform within its specifications. They are not a substitute for calibration — they are a monitoring tool that provides early warning of drift or malfunction.

### 8.2 Intermediate check methods

The **Technical Manager** defines the intermediate check method, frequency, and acceptance criteria for each item of equipment that requires them. Common approaches:

| Equipment | Intermediate check method | Frequency |
|---|---|---|
| Analytical balances | Check with one or two reference weights (not the full calibration set) | Daily before use or weekly |
| Pipettes | Gravimetric check at one nominal volume | Quarterly |
| ICP-OES | Independent QC check standard (different lot from calibration standards) | Every analytical run |
| HPLC | System suitability test (resolution, tailing factor, retention time) | Every analytical run |
| Karl Fischer | Certified water standard recovery | Every batch |
| Temperature loggers | Comparison against reference thermometer | Quarterly |
| Laser diffraction | Certified size standard | Monthly |
| XRD | Peak position standard scan | Monthly |

### 8.3 Recording and acting on intermediate check results

Intermediate check results are recorded in the equipment logbook or electronic record. If an intermediate check fails (result outside acceptance criteria):

1. The equipment is taken out of service immediately
2. The **Technical Manager** is notified
3. The cause is investigated — the failure may indicate drift, malfunction, or a problem with the check standard itself
4. A full calibration or verification is performed before the equipment is returned to service
5. If drift is confirmed, the impact on results produced since the last satisfactory check is assessed (see section 11)

## 9. Procedure — Maintenance

### 9.1 Preventive maintenance

Each item of equipment has a preventive maintenance schedule defined by the **Technical Manager**, based on manufacturer recommendations and the laboratory's experience. Maintenance activities are recorded in the **Equipment Maintenance and Fault Log** ([Appendix 08-App-03](./appendix-03-maintenance-log)).

Typical preventive maintenance for the battery materials laboratory:

| Equipment | Maintenance activity | Frequency |
|---|---|---|
| **ICP-OES** | Clean torch assembly, inspect nebulizer, check peristaltic pump tubing, clean spray chamber, inspect sample introduction system | Weekly / as needed |
| **ICP-OES** | Full preventive maintenance by manufacturer service engineer | Annually |
| **HPLC** | Replace pump seals, inspect check valves, flush system, replace in-line filters, lamp replacement (UV detector) | Per manufacturer schedule or usage hours |
| **Karl Fischer** | Replace desiccant, clean titration cell, replace diaphragm, check electrode | Per manufacturer schedule |
| **Laser diffraction** | Clean optical windows, verify alignment, check dispersion unit | Per manufacturer schedule |
| **BET analyzer** | Leak check, replace seals, verify dewar fill system, clean manifold | Per manufacturer schedule |
| **XRD** | Check X-ray tube hours, inspect cooling system, clean optics, verify goniometer alignment | Per manufacturer schedule |
| **Balances** | Clean weighing pan, check level, inspect draft shield | Before each use |
| **Pipettes** | Inspect tips, check seals, lubricate piston | At each calibration |
| **Microwave digestion** | Inspect vessels for damage, check seals, clean temperature probes | After each use / monthly |
| **Water purification system** | Replace filters and cartridges, sanitize, check resistivity | Per manufacturer schedule |

### 9.2 Corrective maintenance (fault response)

When equipment malfunctions or is suspected to be faulty:

1. **Stop using the equipment immediately.** Remove it from service.
2. **Label the equipment** with an "OUT OF SERVICE" tag indicating the date and reason.
3. **Report** the fault to the **Technical Manager** and record it in the Equipment Maintenance and Fault Log ([Appendix 08-App-03](./appendix-03-maintenance-log)).
4. **Assess impact** — The **Technical Manager** determines whether results produced since the last satisfactory performance check may have been affected (see section 11).
5. **Repair** — Arrange repair by qualified personnel (in-house or external service provider per [Procedure 06](../06-externally-provided-services/index.md)).
6. **Post-repair verification** — After repair, perform a calibration or verification to confirm the equipment meets specifications before returning it to service.
7. **Authorization** — The **Technical Manager** authorizes the return to service, documented in the maintenance log.

### 9.3 Software and firmware

When instrument software or firmware is updated:

1. The update is evaluated for potential impact on measurement results
2. A backup of the current configuration is made where possible
3. After the update, the instrument's performance is verified using reference materials or check standards
4. The update is recorded in the equipment record, including the previous and new version numbers

## 10. Procedure — Equipment Labeling and Status

### 10.1 Calibration status labels

Each item of calibrated or verified equipment bears a label or tag showing:

- Equipment ID
- Date of last calibration or verification
- Next calibration or verification due date
- Performed by (initials or name)
- Status: **IN SERVICE** / **OUT OF SERVICE** / **FOR REFERENCE ONLY**

Where a physical label is impractical, the calibration status is maintained in the Equipment Register and is accessible to all analysts.

### 10.2 Status categories

| Label | Meaning |
|---|---|
| **IN SERVICE** (green) | Equipment is calibrated, verified, maintained, and authorized for use. |
| **OUT OF SERVICE** (red) | Equipment is not to be used — awaiting calibration, repair, or investigation. |
| **FOR REFERENCE ONLY** (yellow) | Equipment may be used for indication purposes but not for measurements that contribute to reported results. |
| **DECOMMISSIONED** | Equipment has been permanently withdrawn from service. |

### 10.3 Safeguarding against unauthorized adjustments

The laboratory takes practical measures to prevent adjustments to equipment that would invalidate results:

- **Password or access protection** — Instrument software calibration parameters and method settings are protected by user-level access controls where the instrument supports this (e.g., ICP-OES method parameters, HPLC acquisition settings, XRD goniometer alignment). Only authorized personnel (Technical Manager or designated analysts) may modify calibration settings.
- **Physical seals** — Where applicable, calibration adjustment points are sealed or protected (e.g., balance internal adjustment mechanism, reference thermometer). Broken seals are reported to the Technical Manager immediately.
- **Configuration records** — Key instrument settings and calibration parameters are documented. Any change to these settings is recorded, including the previous value, new value, reason, and the person who made the change.
- **Audit trail** — For instruments with electronic data systems, audit trail functionality is enabled where available, recording all changes to methods, calibrations, and settings with timestamps and user identification.

### 10.4 Overdue calibration

Equipment that has passed its calibration due date without being recalibrated is immediately placed **OUT OF SERVICE**. It must not be used until calibration or verification is completed and the **Technical Manager** authorizes its return to service.

The **Quality Manager** monitors calibration due dates and issues reminders at least 30 days before the due date.

## 11. Procedure — Handling Out-of-Tolerance and Nonconforming Equipment

### 11.1 Identifying the problem

An out-of-tolerance condition is identified when:

- Calibration results exceed the defined acceptance criteria
- An intermediate check fails
- An analyst observes abnormal instrument behavior
- QC data (check standards, blanks, duplicates) shows unacceptable deviation
- External audit or proficiency testing reveals equipment-related problems

### 11.2 Impact assessment

When equipment is found to be out of tolerance or malfunctioning, the **Technical Manager** conducts a retrospective impact assessment:

1. **Determine the affected period** — From the current finding back to the last satisfactory calibration, verification, or intermediate check.
2. **Identify affected results** — Review laboratory records to identify all samples and reports produced using the equipment during the affected period.
3. **Assess the magnitude** — Determine whether the out-of-tolerance condition could have caused results to exceed the method's stated uncertainty or the customer's required accuracy. Consider:
   - The magnitude and direction of the drift or error
   - The sensitivity of the affected methods to the parameter in question
   - Whether QC data from the affected period showed any anomalies
   - Whether the error would have been detectable by other quality controls in place
4. **Decision** — Based on the assessment:
   - **No impact:** The deviation is within the method's uncertainty and does not affect reported results. Document the assessment and justification.
   - **Potential impact:** Results may be affected. Re-analyze affected samples where possible. Where re-analysis is not possible (sample consumed, time-critical), assess whether the deviation materially changes the reported result.
   - **Confirmed impact on reported results:** Notify affected customers. Issue amended reports. Record as a nonconformity per [Procedure 14](../14-complaints-nonconformity/index.md).

### 11.3 Corrective action

Following an out-of-tolerance finding:

1. The equipment is recalibrated, repaired, or adjusted as appropriate
2. Post-correction verification confirms the equipment is within tolerance
3. The root cause is investigated (e.g., environmental change, component wear, usage beyond capability)
4. If a systemic cause is identified, corrective action is initiated per [Procedure 14](../14-complaints-nonconformity/index.md) — this may include shortening calibration intervals, increasing intermediate checks, or replacing the equipment
5. All actions are documented in the Equipment Maintenance and Fault Log

## 12. Procedure — Equipment Records

### 12.1 Records to be maintained

For each item of equipment, the laboratory maintains the following records:

| Record | Content | Retention |
|---|---|---|
| **Equipment Register** ([08-App-01](./appendix-01-equipment-register)) | Identification, description, status, location | Life of equipment + 5 years |
| **Calibration certificates** (external) | Issued by calibration provider | Calibration interval + 5 years |
| **Internal calibration records** | Raw data, calculations, results, uncertainty, pass/fail | Calibration interval + 5 years |
| **Intermediate check records** | Check results, pass/fail | 5 years |
| **Calibration and Verification Schedule** ([08-App-02](./appendix-02-calibration-schedule)) | Intervals, due dates, responsibilities | Current + previous versions |
| **Maintenance and Fault Log** ([08-App-03](./appendix-03-maintenance-log)) | Maintenance activities, faults, repairs, return-to-service | Life of equipment + 5 years |
| **Manufacturer manuals and documentation** | Operating instructions, specifications, service manuals | Life of equipment |
| **Out-of-tolerance impact assessments** | Assessment, decision, corrective action | 5 years |
| **Equipment commissioning records** | Receipt inspection, IQ/OQ, initial calibration, authorization | Life of equipment |

Records are managed according to [Procedure 00 — Document and Record Control](../00-document-record-control/index.md).

### 12.2 Equipment logbooks

Each major analytical instrument (ICP-OES, HPLC, XRD, BET, Karl Fischer, laser diffraction) has an equipment logbook (physical or electronic) that records:

- Date and time of use
- Analyst name
- Samples or batches analyzed
- Calibration data for the session (e.g., calibration curve parameters, QC check results)
- Any observations or anomalies
- Maintenance performed

## 13. Procedure — Disposal and Decommissioning

When equipment is permanently removed from service:

1. The **Technical Manager** confirms the equipment is no longer needed
2. The **Laboratory Director** authorizes disposal
3. The equipment is removed from the active Equipment Register (marked as decommissioned with the date)
4. Calibration and maintenance records are retained per section 12.1
5. If the equipment contained hazardous materials (e.g., X-ray tubes, mercury thermometers), disposal follows the laboratory's waste management and safety procedures
6. Data stored on the equipment is archived or transferred before disposal

## 14. Related documents

| Document | Reference |
|---|---|
| Appendix 1 — Equipment Register | [08-App-01](./appendix-01-equipment-register) |
| Appendix 2 — Calibration and Verification Schedule | [08-App-02](./appendix-02-calibration-schedule) |
| Appendix 3 — Equipment Maintenance and Fault Log | [08-App-03](./appendix-03-maintenance-log) |
| Procedure 00 — Document and Record Control | [Procedure 00](../00-document-record-control/index.md) |
| Procedure 04 — Competence, Training and Awareness | [Procedure 04](../04-competence-training/index.md) |
| Procedure 05 — Addressing Risks and Opportunities | [Procedure 05](../05-risks-opportunities/index.md) |
| Procedure 06 — Externally Provided Products and Services | [Procedure 06](../06-externally-provided-services/index.md) |
| Procedure 07 — Facilities and Environmental Conditions | [Procedure 07](../07-facilities-environment/index.md) |
| Procedure 14 — Complaints, Nonconformity and Corrective Action | [Procedure 14](../14-complaints-nonconformity/index.md) |

## 15. Revision history

| Revision | Date | Description | Approved by |
|---|---|---|---|
| 00 | *[Date]* | Initial issue | *[Name]* |

---

<div className="insight">

## Why this section exists

Section 08 addresses the physical foundation that every measurement rests on: *the instruments and standards the laboratory uses to produce numbers.*

A measurement result is only as reliable as the chain of comparisons that connects it to a recognized reference. When a laboratory reports that a cathode material contains 58.2% nickel, that number derives from a calibration curve, which derives from calibration standards, which derive from certified reference materials, which derive from a national metrology institute's primary standards, which derive from the SI definition of the mole. If any link in that chain is broken — an uncalibrated balance, an expired reference material, a drifting detector — the number the customer receives may be precise, reproducible, and wrong.

### Calibration is not adjustment

One of the most common misunderstandings in laboratory practice is confusing calibration with adjustment. Calibration determines the relationship between what an instrument reads and what the true value is. Adjustment changes the instrument so that it reads closer to the true value. These are separate operations, and the distinction matters.

When a balance is calibrated, the laboratory places certified reference weights on the pan and records what the balance displays. If the balance reads 99.9998 g for a 100.0000 g weight, the balance has been calibrated — the relationship between the indication (99.9998 g) and the reference value (100.0000 g) is now known. The laboratory can apply a correction, or it can determine that the deviation is negligible for its purposes.

If the laboratory then adjusts the balance so that it reads 100.0000 g, it has changed the instrument. The pre-adjustment calibration data is now historical. A new calibration after adjustment establishes the new relationship. Both the "as found" (pre-adjustment) and "as left" (post-adjustment) data are important — the "as found" data tells the laboratory what the balance was actually doing while it was in use, and the "as left" data confirms the adjustment was successful.

### The intermediate check as early warning

The calibration interval defines how long the laboratory trusts an instrument between formal calibrations. A balance calibrated every 12 months is assumed to be in tolerance for those 12 months. But what if it drifts out of tolerance in month 3? Without intermediate checks, the laboratory discovers this at the next annual calibration — and then faces a 9-month window of potentially affected results.

Intermediate checks reduce this risk. A monthly weight check on the balance means the maximum affected window is one month, not twelve. The check does not replace calibration — it does not establish full traceability or determine measurement uncertainty. But it confirms, at a defined confidence level, that the instrument has not drifted beyond acceptable limits.

The design of intermediate checks is important. An intermediate check should use a reference that is independent of the equipment's own calibration. For ICP-OES, this means running a QC check standard from a different supplier or lot than the calibration standards. If both the calibration standards and the QC check come from the same stock solution, the check is circular — it would not detect a preparation error in that stock solution.

### Equipment records tell a story

An equipment maintenance and calibration file is not just a compliance artifact. Over time, it becomes the history of the instrument — showing patterns of drift, recurring faults, the effect of environmental changes, and how the instrument's performance evolves as it ages. This history is the basis for intelligent decisions about calibration intervals, replacement timing, and root cause analysis when things go wrong.

A laboratory that keeps meticulous calibration records can demonstrate, with data, that a balance is stable enough to extend its calibration interval from 12 to 18 months. A laboratory with sketchy records cannot make that argument — and an assessor will not accept it.

### The out-of-tolerance cascade

The most consequential event in equipment management is discovering that an instrument was out of tolerance. The instrument itself is easily fixed — recalibrate, adjust, or repair. The difficult part is what happened before the problem was found.

Every result produced by that instrument since the last satisfactory calibration or intermediate check is now in question. The laboratory must identify those results, assess whether the out-of-tolerance condition actually affected them, and decide whether to inform customers. This is the retrospective impact assessment — and it is often the most time-consuming and uncomfortable activity in the entire quality management system.

The practical lesson is that the investment in intermediate checks, daily QC checks, and prompt investigation of anomalies is not bureaucratic overhead. It is insurance against the out-of-tolerance cascade. The sooner drift is detected, the smaller the window of affected results, the fewer customers need to be notified, and the less damage is done to the laboratory's credibility.

### The ICP-OES calibration paradox

ICP-OES presents an interesting case because it is calibrated with every analytical run. The analyst prepares calibration standards, runs them, builds a calibration curve, and then measures samples against that curve. In one sense, the instrument is calibrated every day — more frequently than any other instrument in the laboratory.

But the calibration curve is only as good as the standards used to build it. If the stock solution used to prepare calibration standards has degraded, or was prepared incorrectly, or has been contaminated, the calibration curve will be biased — and every sample measured against it will carry that bias. The instrument passes its daily calibration because the calibration is self-referential.

This is why the independent QC check standard is critical. It breaks the circularity. A check standard prepared from a different stock solution, ideally from a different supplier, provides an independent reference point. If the calibration curve says the QC check standard should read 10.0 mg/L and it actually reads 10.3 mg/L, something is wrong — either with the calibration standards, the QC standard, or the instrument. The investigation begins, but at least the problem has been detected before customer samples are reported.

### What "fit for purpose" actually means

ISO/IEC 17025 does not require the most accurate equipment available. It requires equipment that is adequate for the intended measurements. A laboratory measuring nickel at 50–60% in cathode materials does not need a balance readable to 0.001 mg — a balance readable to 0.1 mg is more than sufficient. But a laboratory performing trace impurity analysis at the µg/g level in the same materials may need exactly that precision for weighing small samples.

"Fit for purpose" means the equipment's measurement capability — including its calibration uncertainty — is compatible with the measurement uncertainty the laboratory claims for its results. If the laboratory's reported uncertainty for nickel by ICP-OES is ±0.5%, then every instrument in the measurement chain (balance, volumetric ware, ICP-OES detector) must contribute an uncertainty that is small enough, in combination, to support that claim. Section 08 ensures the equipment is calibrated well enough to make the laboratory's uncertainty budget honest.

</div>
