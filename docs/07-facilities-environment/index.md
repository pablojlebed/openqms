---
title: "07 – Facilities and Environmental Conditions"
description: Procedure for controlling laboratory facilities and environmental conditions per ISO/IEC 17025 clause 6.3.
---

# Facilities and Environmental Conditions Procedure

| | |
|---|---|
| **Procedure number** | 07 |
| **ISO/IEC 17025 reference** | Clause 6.3 |
| **Revision** | 00 |
| **Effective date** | *[Enter date]* |
| **Approved by** | *[Quality Manager / Laboratory Director]* |

## 1. Purpose

To ensure that laboratory facilities and environmental conditions are suitable for the activities performed and do not invalidate results or adversely affect the required quality of measurements.

## 2. Scope

This procedure applies to all areas where laboratory activities are performed, including:

- **Sample preparation areas** — Acid digestion suites, fume hoods, laminar flow benches, grinding and milling stations for cathode and anode materials
- **Instrument rooms** — ICP-OES, HPLC, BET surface area analyzer, XRD, Karl Fischer titrator, laser diffraction particle sizer
- **Balance rooms** — Analytical and micro-balances for gravimetric work
- **Chemical storage areas** — Acid cabinets, solvent storage, reference material storage (ambient, refrigerated, desiccated)
- **Sample receipt and storage areas** — Incoming sample logging, quarantine, and environmentally controlled storage
- **Gas cylinder storage** — Argon, nitrogen, helium cylinders and manifold systems
- **Data processing and reporting areas** — Workstations used for data reduction, uncertainty calculation, and report generation

This procedure also covers temporary conditions that affect laboratory activities, such as construction, renovation, or equipment installation.

## 3. References

- ISO/IEC 17025:2017, Clause 6.3 — Facilities and environmental conditions
- ISO/IEC 17025:2017, Clause 7.7 — Ensuring the validity of results
- [Procedure 00 — Document and Record Control](../00-document-record-control/index.md)
- [Procedure 05 — Addressing Risks and Opportunities](../05-risks-opportunities/index.md)
- [Procedure 08 — Equipment Maintenance, Calibration and Verification](../08-equipment-calibration/index.md)

## 4. Definitions

| Term | Definition |
|---|---|
| **Environmental condition** | A physical parameter of the laboratory environment that could influence the quality of measurements. Includes temperature, humidity, lighting, vibration, dust, electromagnetic interference, and air quality. |
| **Critical environmental parameter** | An environmental condition for which defined limits exist because deviation would affect result validity. Limits are determined by method requirements, equipment specifications, or standard operating procedures. |
| **Monitoring** | The systematic measurement and recording of environmental parameters at defined intervals. |
| **Excursion** | A measured value of an environmental parameter that falls outside its defined acceptable range. |
| **Controlled area** | A laboratory space where one or more environmental parameters are actively controlled (e.g., temperature-controlled instrument room, clean room, humidity-controlled balance room). |
| **Housekeeping** | Routine activities to maintain cleanliness, order, and safety in the laboratory — cleaning, waste disposal, organization of work areas. |
| **Incompatible activities** | Laboratory activities that, if performed in proximity, could affect each other's results — for example, acid digestion near sensitive analytical balances, or sample grinding near open instruments. |

## 5. Responsibilities

| Role | Responsibility |
|---|---|
| **Laboratory Director** | Ensure adequate facilities and resources for environmental control. Approve facility modifications that affect laboratory operations. |
| **Quality Manager** | Maintain environmental monitoring records. Coordinate response to excursions. Ensure monitoring equipment is calibrated and functioning. |
| **Technical Manager** | Define critical environmental parameters and acceptable ranges for each method and instrument. Assess the impact of environmental conditions on result validity. |
| **Analysts** | Record environmental conditions as required by SOPs. Report any observed environmental anomalies. Maintain housekeeping standards in their work areas. |
| **Facility/Safety Officer** | Manage building systems (HVAC, lighting, power). Coordinate maintenance of facility infrastructure. Ensure compliance with safety regulations. |

## 6. Procedure — Facility Requirements

### 6.1 Laboratory layout and separation

The laboratory is organized to separate incompatible activities and minimize cross-contamination risk:

**Sample preparation zone:**
- Acid digestion is performed in a dedicated fume hood area, separated from instrument rooms to prevent acid vapor exposure to sensitive electronics
- Grinding and milling of cathode/anode materials is performed in a separate area or with local exhaust ventilation to prevent particulate contamination
- Weighing of fine powders is done in a draft-free balance room or enclosure

**Analytical instrument zone:**
- ICP-OES is located in a temperature-controlled room with stable power supply, away from vibration sources
- HPLC instruments are on vibration-damped benches, away from doors and high-traffic areas
- XRD is located on a ground-level, vibration-isolated platform where possible
- BET analyzer is located with adequate ventilation for gas discharge and away from temperature fluctuations

**Storage zones:**
- Chemical storage follows safety segregation (acids separated from bases, oxidizers from flammables)
- Reference materials are stored according to certificate conditions (ambient, refrigerated, or desiccated as specified)
- Samples awaiting analysis are stored under conditions that prevent degradation or contamination

### 6.2 Access control

Access to the laboratory is restricted to authorized personnel. Visitors and unauthorized staff are accompanied at all times. Specific controls include:

- Laboratory entry requires authorization from the **Laboratory Director** or **Technical Manager**
- A visitor log is maintained at the laboratory entrance
- Areas with specific environmental requirements (e.g., clean areas, controlled-temperature rooms) may have additional access restrictions
- Emergency access procedures are documented and communicated to building management

### 6.3 Utilities and infrastructure

The laboratory maintains the following infrastructure to support its operations:

| Utility | Requirement | Notes |
|---|---|---|
| **Electrical power** | Stable supply with surge protection for sensitive instruments. UPS for critical instruments where required. | ICP-OES and HPLC benefit from UPS or voltage regulation |
| **Water supply** | Deionized water (Type I or II per ASTM D1193) for sample preparation and glassware rinsing | Water quality is monitored; resistivity recorded |
| **Gas supply** | Piped or cylinder supply of argon (ICP-OES), nitrogen (BET), helium (BET) | Gas purity grades per instrument requirements |
| **Ventilation** | Fume hoods for acid digestion, general laboratory ventilation for air exchange | Fume hood face velocity checked annually |
| **Drainage** | Chemical-resistant drainage in sample preparation areas | Acid-neutralization trap where required |
| **Lighting** | Adequate for safe work and visual inspection of samples and equipment | |

## 7. Procedure — Environmental Parameters

### 7.1 Identifying critical parameters

The **Technical Manager** identifies which environmental parameters are critical for each method and instrument. For the battery materials laboratory, the primary parameters are:

| Parameter | Why it matters | Affected activities |
|---|---|---|
| **Temperature** | Affects balance readings (air buoyancy), ICP-OES plasma stability, HPLC column performance, XRD peak positions, BET adsorption isotherms | All analytical methods |
| **Relative humidity** | Affects hygroscopic sample mass stability, Karl Fischer titration background, balance drift | Gravimetric work, Karl Fischer, weighing |
| **Vibration** | Affects analytical balance sensitivity, XRD alignment, HPLC baseline noise | Balances, XRD, HPLC |
| **Dust and particulates** | Contamination risk for trace analysis, especially ICP-OES at low concentrations | Sample preparation, ICP-OES |
| **Air currents** | Affect balance stability and can transport contaminants | Balance room, open sample handling |
| **Electromagnetic interference** | Can affect sensitive electronic detectors | ICP-OES detector, HPLC UV detector |

### 7.2 Defining acceptable ranges

For each critical parameter and each controlled area, the **Technical Manager** defines acceptable operating ranges. These are based on:

- Equipment manufacturer specifications
- Method requirements (from SOPs or published standards)
- Demonstrated performance data (from method validation)
- Reference material storage requirements (from certificates)

Typical ranges for the battery materials laboratory:

| Area | Parameter | Acceptable range | Basis |
|---|---|---|---|
| ICP-OES room | Temperature | 20 ± 3 °C | Instrument specification, plasma stability |
| ICP-OES room | Relative humidity | 30–60% RH | Instrument specification |
| HPLC room | Temperature | 20 ± 3 °C | Column performance, retention time stability |
| XRD room | Temperature | 20 ± 2 °C | Peak position accuracy |
| Balance room | Temperature | 20 ± 2 °C | Air buoyancy correction, balance stability |
| Balance room | Relative humidity | 30–60% RH | Hygroscopic sample stability |
| Balance room | Vibration | Manufacturer spec | Balance sensitivity |
| Sample preparation | Temperature | 18–28 °C | General suitability |
| Reference material storage (ambient) | Temperature | 15–25 °C | CRM certificate conditions |
| Reference material storage (refrigerated) | Temperature | 2–8 °C | CRM certificate conditions |

These ranges are documented in the **Record of Laboratory Environmental Controls** ([Appendix 07-App-01](./appendix-01-environmental-controls)).

:::tip Adapt these ranges
The ranges above are representative. Your actual ranges must reflect your specific instruments, methods, and reference material requirements. Always check equipment manuals and CRM certificates for the applicable conditions.
:::

## 8. Procedure — Environmental Monitoring

### 8.1 Monitoring equipment

Environmental parameters are measured using calibrated monitoring equipment:

| Parameter | Equipment | Calibration interval |
|---|---|---|
| Temperature | Digital thermometers, data loggers with temperature probes | Annually |
| Relative humidity | Hygrometers, combined temperature/humidity data loggers | Annually |
| Vibration | Accelerometers (where required by method or instrument specification) | Per manufacturer recommendation |

Calibration of monitoring equipment follows [Procedure 08 — Equipment Maintenance, Calibration and Verification](../08-equipment-calibration/index.md).

### 8.2 Monitoring frequency

| Area | Parameter | Monitoring method | Frequency |
|---|---|---|---|
| ICP-OES room | Temperature, humidity | Continuous data logger | Continuous, reviewed daily |
| HPLC room | Temperature | Continuous data logger | Continuous, reviewed daily |
| XRD room | Temperature | Continuous data logger | Continuous, reviewed daily |
| Balance room | Temperature, humidity | Continuous data logger | Continuous, reviewed daily |
| Sample preparation | Temperature | Manual reading or data logger | Daily (at start of work) |
| Refrigerated storage | Temperature | Continuous data logger with alarm | Continuous, alarm if out of range |
| Ambient storage | Temperature | Data logger | Continuous, reviewed weekly |

### 8.3 Recording

Environmental monitoring data is recorded in the **Record of Laboratory Environmental Controls** ([Appendix 07-App-01](./appendix-01-environmental-controls)).

For continuous data loggers:
- Data is downloaded at defined intervals (weekly or monthly)
- Summary records (min, max, mean) are maintained for each monitoring period
- Raw data files are retained as quality records

For manual readings:
- The analyst records the value, date, time, and their initials
- Readings are taken at consistent times (e.g., at the start of each working day)

## 9. Procedure — Excursions and Corrective Action

### 9.1 Identifying an excursion

An excursion occurs when a monitored environmental parameter falls outside its defined acceptable range. Excursions are identified through:

- Data logger alarms (real-time notification for critical areas like refrigerated storage)
- Review of data logger records (at download or daily review)
- Manual readings outside acceptable range
- Analyst observation (e.g., noticeably warm room, visible condensation)

### 9.2 Responding to an excursion

When an excursion is detected:

1. **Immediate action** — The analyst or **Quality Manager** takes immediate steps to restore conditions where possible (e.g., adjust thermostat, close windows, report HVAC failure to facilities).
2. **Impact assessment** — The **Technical Manager** evaluates whether any results produced during the excursion period may have been affected. This assessment considers:
   - Which instruments and methods were in use during the excursion
   - The magnitude and duration of the excursion
   - The sensitivity of the affected methods to the parameter that deviated
   - Whether quality control data (e.g., check standards, blanks) from the period shows anomalies
3. **Decision** — Based on the assessment:
   - If results are unaffected: document the excursion and assessment, no further action
   - If results may be affected: quarantine results, re-analyze affected samples if possible, notify customers if results were already reported
   - If the cause is systemic: initiate corrective action per [Procedure 14](../14-complaints-nonconformity/index.md)
4. **Documentation** — Record the excursion, assessment, decision, and any corrective actions in [Appendix 07-App-01](./appendix-01-environmental-controls).

### 9.3 Preventive measures

The laboratory implements preventive measures to reduce the likelihood of excursions:

- HVAC systems are maintained on a scheduled preventive maintenance program
- Backup temperature control (e.g., portable units) is available for critical areas
- Data logger batteries are replaced on schedule
- Seasonal variations are anticipated (e.g., increased cooling demand in summer)
- Building maintenance that may affect environmental conditions is coordinated with the laboratory in advance

## 10. Procedure — Housekeeping and Contamination Control

### 10.1 Housekeeping standards

Each laboratory area has defined housekeeping requirements:

- **Work surfaces** are cleaned after each use and at the end of each working day
- **Fume hoods** are kept clear of unnecessary items; interior surfaces are cleaned regularly
- **Instrument areas** are kept free of sample residues, spills, and unnecessary equipment
- **Chemical storage** is organized and labeled; expired chemicals are removed promptly
- **Waste** is segregated (chemical waste, general waste, sharps) and removed on schedule
- **Floors** are cleaned regularly; spills are cleaned immediately

### 10.2 Contamination control for trace analysis

The battery materials laboratory performs trace-level elemental analysis (ICP-OES) where contamination is a significant risk. Additional controls include:

- All glassware and plasticware for trace analysis is acid-washed (soaked in dilute HNO₃, rinsed with deionized water) before use
- Dedicated glassware sets are used for trace analysis — not shared with other activities
- Sample preparation for trace analysis is performed in a clean area or laminar flow bench
- Powder handling (grinding, sieving of cathode/anode materials) is physically separated from open-vessel trace analysis
- Blank samples are run with every analytical batch to monitor contamination levels

### 10.3 Housekeeping inspections

The **Quality Manager** or designated person conducts periodic housekeeping inspections:

- **Frequency:** Monthly, or more frequently for high-risk areas
- **Scope:** Cleanliness, organization, labeling, waste management, safety compliance
- **Documentation:** Inspection findings are recorded; significant deficiencies are addressed through corrective action

## 11. Procedure — Facility Changes

### 11.1 Planned changes

Before any facility modification that could affect environmental conditions or laboratory activities:

1. The **Laboratory Director** approves the change
2. The **Technical Manager** assesses the potential impact on measurements and identifies any mitigation required
3. A risk assessment is performed per [Procedure 05](../05-risks-opportunities/index.md)
4. If testing must be suspended during the change, customers are notified of potential delays
5. After the change, environmental conditions are verified before testing resumes

Examples of changes requiring this process:
- HVAC system modifications or repairs
- Building construction or renovation near laboratory areas
- Relocation of instruments
- Installation of new equipment that generates heat, vibration, or electromagnetic fields
- Changes to laboratory layout or room assignments

### 11.2 Unplanned events

In the event of unplanned disruption to facilities (power failure, flooding, fire, HVAC breakdown):

1. Testing is suspended immediately in affected areas
2. Samples and reference materials are secured (e.g., transferred to backup storage if refrigeration fails)
3. The **Technical Manager** assesses the impact on any work in progress
4. Conditions are verified before testing resumes
5. The event is documented as an excursion (section 9) and, if significant, as a nonconformity per [Procedure 14](../14-complaints-nonconformity/index.md)

## 12. Related documents

| Document | Reference |
|---|---|
| Appendix 1 — Record of Laboratory Environmental Controls | [07-App-01](./appendix-01-environmental-controls) |
| Procedure 00 — Document and Record Control | [Procedure 00](../00-document-record-control/index.md) |
| Procedure 05 — Addressing Risks and Opportunities | [Procedure 05](../05-risks-opportunities/index.md) |
| Procedure 08 — Equipment Maintenance, Calibration and Verification | [Procedure 08](../08-equipment-calibration/index.md) |
| Procedure 14 — Complaints, Nonconformity and Corrective Action | [Procedure 14](../14-complaints-nonconformity/index.md) |

## 13. Revision history

| Revision | Date | Description | Approved by |
|---|---|---|---|
| 00 | *[Date]* | Initial issue | *[Name]* |

---

<div className="insight">

## Why this section exists

Section 07 addresses a source of error that is invisible in the data: *the environment the measurement was made in.*

A nickel concentration measured by ICP-OES at 22 °C in a stable room is not necessarily the same as the same measurement at 28 °C after the air conditioning failed overnight. The plasma conditions are different, the nebulizer behavior is different, the detector response may have shifted. The instrument does not flag this. The result looks normal. But it may not be comparable to results produced under controlled conditions — and comparability is the entire point of accredited measurement.

### What makes an environmental parameter critical

Not every environmental factor matters for every method. Temperature matters enormously for XRD (thermal expansion shifts peak positions) and for analytical balances (air buoyancy depends on temperature and pressure). Humidity matters for Karl Fischer titration (ambient moisture is the measurand's enemy) and for hygroscopic battery material powders that gain mass if exposed. Vibration matters for balances and for optical alignment in XRD and HPLC detectors.

The key question is not "could this parameter theoretically affect results?" — the answer is almost always yes. The question is "at what magnitude does this parameter begin to affect results beyond acceptable limits?" That is a quantitative question, and it should be answered with data — from method validation, from equipment specifications, or from the laboratory's own experience. The acceptable ranges in this procedure must be grounded in evidence, not convention.

### Monitoring without action is not monitoring

Many laboratories install temperature and humidity loggers, download the data periodically, and file it. This satisfies the letter of the requirement but misses the point entirely.

Monitoring is only useful if someone reviews the data and acts on deviations. A data logger that recorded a 6-hour temperature excursion overnight is valuable — but only if the laboratory then asks: were any results produced during that period affected? If the data is downloaded a month later and no one checks, the monitoring system is decorative.

This is why the procedure specifies not just monitoring frequency but review frequency. Continuous logging with daily review means excursions are caught within 24 hours. Continuous logging with monthly review means a problem could persist for weeks before anyone notices — and by then, results have been reported, customers have acted on them, and the damage is done.

### The contamination gradient

In a battery materials laboratory, the most significant environmental risk is often not temperature or humidity — it is contamination. Cathode materials contain nickel, cobalt, manganese, and lithium at percent levels. ICP-OES measures these same elements at trace levels in other contexts. If powder from a cathode sample preparation contaminates a trace-level measurement, the result is biased — and the bias is in exactly the elements the laboratory is measuring.

This is why physical separation between sample preparation (especially grinding and milling of electrode materials) and trace analytical work is not optional. It is not about keeping the laboratory tidy. It is about preventing a systematic bias that would be invisible in the data because it looks like a normal signal.

The blank test is the laboratory's early warning system. If blanks start showing elevated levels of cathode-relevant elements, contamination has entered the analytical chain. Section 07 ensures the physical controls are in place to prevent this — and section 11 (Quality Assurance) ensures the blanks are run to detect it.

### Seasonal drift and the limits of HVAC

Most laboratories experience seasonal environmental variation that their HVAC systems partially — but not fully — control. Summer heat loads increase room temperatures. Winter low humidity drops below instrument specifications. Transitional seasons bring rapid swings.

The risk is not catastrophic failure. It is gradual drift: a room that runs at 21 °C in winter and 24 °C in summer, both technically within a ±3 °C specification but representing a systematic difference between winter and summer results. For methods that are temperature-sensitive, this seasonal offset can introduce a bias that the laboratory's quality control may not catch because it develops slowly.

Awareness of this pattern — and the discipline to check for it in monitoring data trends — is more valuable than tighter HVAC specifications. The goal is not a perfectly stable environment. The goal is knowing what your environment actually is, and understanding whether it matters.

</div>

<div className="nonconformity-example">

## Common nonconformities

The examples below reflect the kinds of findings auditors raise against Clause 6.3. Environmental conditions are one of the most frequently cited areas in ISO 17025 assessments — partly because the evidence is objective (the data logger either shows compliance or it does not) and partly because laboratories often underestimate how much the environment affects their results.

### <span className="nc-tag nc-major">Major</span> No defined acceptable ranges for critical environmental parameters

*"The ICP-OES instrument room had a temperature data logger installed, but the laboratory had not defined acceptable temperature or humidity ranges for that area. When asked what constituted an excursion, the Technical Manager stated the limits were 'roughly 20 plus or minus a few degrees' but could not point to a documented specification."*

Monitoring without defined limits is not monitoring — it is data collection with no decision criteria. An auditor needs to see documented acceptable ranges (as in Section 7.2 of this procedure) that are traceable to equipment specifications, method requirements, or validated operating conditions. Without them, the laboratory cannot determine whether an excursion has occurred, and therefore cannot assess the impact on results.

### <span className="nc-tag nc-major">Major</span> Environmental excursions with no impact assessment

*"Data logger records for the balance room showed a humidity excursion to 72% RH over a weekend in August. The excursion was visible in the downloaded data, but no assessment of its impact on results produced the following Monday had been documented. Analysts had resumed weighing hygroscopic cathode material samples without verifying that conditions had returned to the acceptable range."*

This is the gap between recording and acting. The data logger did its job — the laboratory did not do theirs. Section 9.2 requires that every excursion triggers an impact assessment: which results might be affected, how significant was the deviation, and what action is needed. When hygroscopic battery materials are weighed in high-humidity conditions, mass readings can be biased high, and the affected results may need to be re-analyzed.

### <span className="nc-tag nc-minor">Minor</span> Environmental monitoring records not reviewed at the defined frequency

*"The procedure specified daily review of continuous data logger records for the HPLC and ICP-OES rooms. Interviews with analysts revealed that data was typically downloaded and reviewed monthly. No excursions had occurred during the period examined, but the laboratory could not have known this in a timely manner."*

No harm was done in this case — but the system was not functioning as designed. A one-month gap between reviews means any excursion during that window would go undetected until it was too late to take corrective action. Auditors treat this as a minor nonconformity if no results were affected, but it signals a weakness in the monitoring system that could become major if an excursion does occur.

### <span className="nc-tag nc-minor">Minor</span> Monitoring equipment not included in calibration schedule

*"Two digital temperature/humidity data loggers used in the instrument rooms were not listed in the laboratory's calibration register and had no record of calibration since their purchase three years earlier."*

If the monitoring equipment is not calibrated, the data it produces is unreliable — and every environmental record based on that data is questionable. This is easy to overlook because data loggers feel like auxiliary equipment rather than measurement instruments, but they are measurement instruments. They must follow the same calibration regime defined in Procedure 08.

### <span className="nc-tag nc-major">Major</span> Incompatible activities not separated

*"Sample grinding of NMC cathode powder was performed on a bench in the same room as open-vessel acid digestions for ICP-OES trace analysis. The laboratory had not assessed the cross-contamination risk, and no physical separation or airflow controls were in place."*

This is a fundamental layout problem. Cathode materials contain the same elements (Ni, Co, Mn) that the ICP-OES measures at trace levels in other sample types. Powder generated during grinding can remain airborne and settle into open digestion vessels, introducing a positive bias that is invisible in the data because it looks like a real signal. Blank results may eventually reveal the problem, but by that point results have been reported. Physical separation of particulate-generating activities from trace analytical work is not optional — it is a design requirement for any laboratory doing both.

### <span className="nc-tag nc-minor">Minor</span> No documented assessment of facility changes

*"A new muffle furnace had been installed in the sample preparation area two months prior. The furnace generated significant heat, raising ambient temperature by approximately 4 °C when in use. No risk assessment or impact evaluation had been performed before installation."*

Section 11.1 requires that facility changes which could affect environmental conditions be assessed before they happen. A heat-generating instrument changes the thermal profile of the room and may push adjacent areas out of their acceptable temperature range. The fix may be simple — relocating the furnace, improving ventilation — but the assessment must be documented regardless.

### How to use these examples

Environmental nonconformities follow a pattern: the laboratory has some controls in place, but the chain from *monitoring → review → decision → action* is broken at one or more points. When assessing your own laboratory, trace that chain for each controlled area. Ask: do we have defined limits? Do we monitor against them? Do we review the data in time to act? Do we assess the impact when something goes wrong? If any link is missing, you have a gap that an auditor will find.

</div>
