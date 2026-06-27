---
title: "12 – Sampling"
description: Procedure for sampling plans, sample collection, transport, and documentation when the laboratory performs sampling as part of its testing activities per ISO/IEC 17025 clause 7.3.
---

# Sampling Procedure

| | |
|---|---|
| **Procedure number** | 12 |
| **ISO/IEC 17025 reference** | Clause 7.3 |
| **Revision** | 00 |
| **Effective date** | *[Enter date]* |
| **Approved by** | *[Quality Manager / Laboratory Director]* |

## 1. Purpose

To define how the laboratory plans, performs, and documents sampling when it is responsible for collecting samples that will subsequently be tested. This procedure ensures that samples are representative of the material or lot they are taken from, that the sampling process does not introduce bias or contamination, and that the connection between the sample and its source is fully traceable.

## 2. Scope

This procedure applies when the laboratory itself performs sampling — that is, when sample collection is part of the laboratory's service to the customer. It covers:

- **Sampling plan design** — Determining how many samples to take, from where, and how
- **Sample collection** — Physical collection of samples using appropriate tools and techniques
- **Sample identification and labeling** — Ensuring every sample is uniquely identified and traceable to its source
- **Sample transport and preservation** — Maintaining sample integrity from collection point to the laboratory
- **Sampling records** — Documenting all relevant information about the sampling event

For the battery materials laboratory, sampling activities may include:

- Sub-sampling from bulk lots of cathode powders (NMC, LFP, LCO) received in drums or bags
- Sampling electrode slurries from production batches
- Collecting electrolyte samples from sealed containers
- Taking aliquots from large-volume reference solutions for archival or re-analysis
- Sub-sampling received test portions when the customer provides more material than needed

:::note When this procedure does not apply

When the customer provides pre-collected samples and the laboratory has no involvement in the sampling process, this procedure does not apply. However, the laboratory must still assess whether the sample, as received, is suitable for the requested test — this is covered by [Procedure 13 — Handling of Test and Calibration Items](../13-handling-items/index.md). If the laboratory suspects the sample is not representative or has been compromised, it must inform the customer.

:::

## 3. References

- ISO/IEC 17025:2017, Clause 7.3 — Sampling
- ISO 3082 — Iron ores — Sampling and sample preparation procedures (general principles applicable to bulk mineral sampling)
- ISO 11648-1 — Statistical aspects of sampling from bulk materials — Part 1: General principles
- Pierre Gy — *Sampling for Analytical Purposes* (general theory of sampling)
- [Procedure 00 — Document and Record Control](../00-document-record-control/index.md)
- [Procedure 07 — Facilities and Environmental Conditions](../07-facilities-environment/index.md)
- [Procedure 09 — Customer Service](../09-customer-service/index.md)
- [Procedure 10 — Test and Calibration Methods](../10-test-calibration-methods/index.md)
- [Procedure 13 — Handling of Test and Calibration Items](../13-handling-items/index.md)
- [Procedure 15 — Measurement Uncertainty](../15-measurement-uncertainty/index.md)

## 4. Definitions

| Term | Definition |
|---|---|
| **Sampling** | The process of collecting a portion (sample) from a larger quantity of material (lot, batch, or population) for the purpose of testing. The sample must be representative of the source material. |
| **Sampling plan** | A documented description of the sampling procedure: where samples are taken, how many, what quantity, what tools and containers are used, and how samples are handled after collection. |
| **Lot (batch)** | A defined quantity of material considered to be uniform for sampling purposes. A lot may be a production batch, a delivery, a container, or any other defined unit. |
| **Representative sample** | A sample whose composition or properties reflect, within acceptable limits, those of the lot from which it was taken. Representativeness depends on the sampling strategy, the number of increments, and the homogeneity of the material. |
| **Increment** | A single portion of material collected from the lot in one operation. Multiple increments may be combined to form a composite sample. |
| **Composite sample** | A sample formed by combining and mixing multiple increments taken from different locations within the lot. Compositing reduces the effect of local inhomogeneity. |
| **Sub-sample** | A portion taken from a larger sample, typically by splitting, quartering, or riffling, for the purpose of producing a test portion of the required size. |
| **Test portion** | The quantity of material actually taken for analysis. This is the final sub-divided amount that enters the analytical procedure. |
| **Sampling uncertainty** | The component of overall measurement uncertainty attributable to the sampling process itself — including material heterogeneity, sampling strategy, and sub-sampling variability. |
| **Quartering** | A manual method of sub-sampling in which the sample is formed into a cone, flattened, divided into four equal quarters, and opposite quarters are combined. Repeated until the desired quantity is obtained. |
| **Riffling** | A mechanical method of sub-sampling using a riffle splitter — a device that divides a poured stream of material into two representative halves. |
| **Chain of custody** | A documented, unbroken record of who had possession of a sample from the moment of collection to the point of analysis — and, if required, through to disposal. |

## 5. Responsibilities

| Role | Responsibility |
|---|---|
| **Laboratory Director** | Approve sampling plans for new or non-routine sampling activities. Ensure resources are available for sampling operations. |
| **Technical Manager** | Design or approve sampling plans. Define sampling tools, containers, and preservation requirements. Evaluate sampling uncertainty. Authorize personnel to perform sampling. |
| **Quality Manager** | Ensure sampling records are complete and controlled per Procedure 00. Coordinate customer communication about sampling requirements. |
| **Sampling personnel** | Execute sampling according to the approved plan. Record all required information at the time of sampling. Report any deviations or anomalies. |
| **Analysts** | Perform sub-sampling in the laboratory when reducing a received sample to a test portion. Report any concerns about sample representativeness. |

## 6. Procedure — Sampling Plan

### 6.1 Designing a sampling plan

Before sampling is performed, the **Technical Manager** prepares or approves a sampling plan. The plan is based on the nature of the material, the purpose of the test, and any customer or regulatory requirements. It addresses:

**What to sample:**
- Material type and description (e.g., NMC 811 cathode powder, lot number, container type)
- Lot size and number of containers

**How many samples:**
- Number of increments to collect
- Whether increments are analyzed individually or combined into a composite
- Statistical basis for the number of increments (if applicable — e.g., based on lot size tables, customer specification, or standard requirements)

**Where to sample:**
- Location within the lot (e.g., top, middle, and bottom of a drum; multiple points across a production line; specific containers from a shipment)
- Strategy for selecting sample locations (systematic, random, stratified)

**How to sample:**
- Sampling tools and equipment (e.g., sampling thief, scoop, pipette, syringe)
- Container type and cleanliness requirements
- Sample quantity required (sufficient for all requested tests, plus a retained archive portion if required)
- Personal protective equipment (PPE) required

**How to preserve:**
- Environmental conditions during and after collection (e.g., inert atmosphere for moisture-sensitive materials, temperature control for volatile samples)
- Maximum time between collection and analysis
- Storage conditions during transport

The sampling plan is documented in the **Sampling Plan and Record** ([Appendix 12-App-01](./appendix-01-sampling-plan-record)).

### 6.2 Standard sampling plans

For routine, repetitive sampling activities, the **Technical Manager** may establish standard sampling plans that apply to defined material types. These are documented as SOPs and do not require a new plan for each sampling event — but any deviation from the standard plan must be documented.

Examples for the battery materials laboratory:

| Material type | Standard sampling approach |
|---|---|
| **Cathode powder (NMC, LFP) in drums** | Minimum 3 increments per drum (top, middle, bottom) using a powder sampling thief. Increments combined into one composite per drum. Sub-sample by riffling to obtain test portions. |
| **Cathode powder — multi-drum lot** | Sample √N + 1 drums (where N = total drums in the lot), minimum 3. Each drum sampled as above; composites may be further combined for a lot composite if required by the customer. |
| **Electrode slurry** | Homogenize by stirring before sampling. Collect 3 aliquots from different points in the vessel using a clean pipette. |
| **Electrolyte solutions** | Sample from sealed container using a clean syringe through a septum, under inert atmosphere (argon or nitrogen) to prevent moisture uptake. |
| **Reference solution sub-sampling** | Pipette required volume from the stock using a calibrated pipette. Record lot number, date, and parent solution ID. |

### 6.3 Customer-specified sampling

When the customer specifies a sampling method or plan (e.g., per a regulatory requirement or industry standard), the laboratory follows the customer's requirements. If the customer's plan conflicts with good sampling practice or is likely to produce a non-representative sample, the **Technical Manager** discusses this with the customer before proceeding — and documents the outcome.

## 7. Procedure — Sample Collection

### 7.1 Preparation

Before collecting samples:

1. **Review the sampling plan** — Confirm the number of increments, locations, tools, and containers.
2. **Prepare equipment** — Ensure sampling tools are clean, dry, and free from contamination. For trace analysis, tools may need to be acid-washed. Verify that containers are appropriate for the material (e.g., polyethylene for powders, glass for organic solvents, airtight for moisture-sensitive materials).
3. **Label containers** — Pre-label sample containers with unique identifiers before collection, not after. This prevents mix-ups.
4. **Check environmental conditions** — Confirm that conditions at the sampling location are acceptable (e.g., humidity for moisture-sensitive materials, temperature for temperature-sensitive samples).

### 7.2 Collecting increments

During collection:

- Follow the sampling plan — collect increments from the specified locations using the specified tools
- Handle materials to minimize contamination and alteration (e.g., minimize exposure of hygroscopic powders to ambient air; avoid contact with bare hands)
- Record the actual conditions at the time of sampling (temperature, humidity, time)
- Record any observations about the material's appearance, condition, or homogeneity (e.g., "visible color variation between top and bottom of drum", "some agglomeration noted")
- If conditions differ from the plan (e.g., fewer containers available, material appears different from expected), stop and consult the **Technical Manager** before proceeding

### 7.3 Compositing and sub-sampling

When the plan calls for a composite sample:

1. Combine all increments into a clean, appropriately sized container
2. Mix thoroughly to homogenize — the mixing method depends on the material:
   - **Dry powders:** Tumble, roll, or pass through a riffle splitter multiple times
   - **Slurries:** Stir mechanically or by hand
   - **Liquids:** Mix by inversion or stirring
3. Sub-sample from the homogenized composite to obtain the required test portions
4. For dry powders, sub-sampling by riffling is preferred over scooping — riffling is statistically more representative

### 7.4 Sample quantity

Collect sufficient material for:

- All requested tests (with some margin for repeat analyses if needed)
- A retained archive portion, if required by the customer or the laboratory's own policy
- Any additional QC requirements (e.g., duplicate analysis from the same sample)

As a guideline, collect at least 3× the minimum quantity needed for all planned tests. For battery materials, typical minimum test portions are:

| Analysis | Typical test portion |
|---|---|
| ICP-OES (elemental) | 0.1–0.5 g |
| Karl Fischer (moisture) | 10–100 mg |
| Laser diffraction (particle size) | 0.5–2 g |
| BET (surface area) | 0.5–2 g |
| XRD (phase identification) | 0.5–1 g |
| HPLC-UV (electrolyte) | 1–5 mL |

## 8. Procedure — Sample Identification and Traceability

### 8.1 Unique identification

Every sample collected by the laboratory receives a unique identification code at the point of collection. The code links the sample to:

- The lot or batch it was taken from
- The sampling plan that was followed
- The sampling record documenting the event
- The person who performed the sampling

The identification scheme follows the laboratory's sample numbering system. Labels must be durable — resistant to the chemicals, temperatures, and conditions the sample will encounter during transport and storage.

### 8.2 Chain of custody

When chain of custody is required (e.g., for regulatory samples, dispute resolution, or customer specification), the **Sampling Plan and Record** includes a custody log documenting:

- Who collected the sample (name, date, time)
- Who transported it (if different)
- Who received it at the laboratory (name, date, time)
- How it was stored between collection and analysis
- Any transfers of custody during the process

Chain of custody is maintained from collection to final disposal or return.

## 9. Procedure — Transport and Preservation

### 9.1 Transport conditions

Samples are transported to the laboratory under conditions that prevent:

- **Contamination** — Sealed containers, clean transport vessels, separation from other materials
- **Degradation** — Temperature control for heat-sensitive or volatile samples, protection from light for photosensitive materials
- **Moisture uptake or loss** — Airtight containers for hygroscopic powders, desiccants where appropriate
- **Physical damage** — Padding, secure packaging, upright orientation for liquids

### 9.2 Preservation

For materials that are not stable under ambient conditions, the sampling plan specifies preservation measures:

| Material concern | Preservation method |
|---|---|
| **Moisture-sensitive powders** (e.g., cathode materials, electrolyte salts) | Seal under inert atmosphere (argon); use desiccant; minimize exposure time during sampling |
| **Volatile liquids** (e.g., electrolyte solvents) | Seal immediately in airtight containers; keep cool; minimize headspace |
| **Temperature-sensitive materials** | Transport in insulated containers with temperature monitoring; cool packs or dry ice as appropriate |
| **Light-sensitive materials** | Amber containers or opaque wrapping |

### 9.3 Maximum holding time

The **Technical Manager** defines the maximum time between sample collection and analysis for each material type. If this time is exceeded, the sample may need to be re-collected — the decision is documented.

## 10. Procedure — Sampling Records

### 10.1 What to record

Every sampling event is documented in the **Sampling Plan and Record** ([Appendix 12-App-01](./appendix-01-sampling-plan-record)). The record includes:

- Reference to the sampling plan followed (or the standard SOP for routine sampling)
- Date, time, and location of sampling
- Personnel who performed the sampling
- Description of the material sampled (type, lot/batch number, quantity, container type)
- Number of increments collected and their locations
- Sampling equipment used
- Environmental conditions at the time of sampling
- Any deviations from the sampling plan, with justification
- Observations about the material (appearance, condition, homogeneity)
- Sample identification codes assigned
- Chain of custody information (if applicable)
- Transport and storage conditions

### 10.2 Record retention

Sampling records are retained per [Procedure 00 — Document and Record Control](../00-document-record-control/index.md), typically for a minimum of 5 years or as required by the customer or regulatory framework.

## 11. Procedure — Sampling Uncertainty

### 11.1 Recognizing sampling as a source of uncertainty

When the laboratory performs sampling, the sampling process contributes to the overall measurement uncertainty. This contribution can be significant — often larger than the analytical measurement uncertainty — particularly for heterogeneous materials like battery powders.

The **Technical Manager** evaluates whether sampling uncertainty is a material contributor to the overall uncertainty for each method where the laboratory performs sampling. This evaluation is documented and feeds into the measurement uncertainty budget per [Procedure 15 — Measurement Uncertainty](../15-measurement-uncertainty/index.md).

### 11.2 Estimating sampling uncertainty

Methods for estimating sampling uncertainty include:

- **Duplicate sampling** — Taking duplicate independent samples from the same lot and comparing results. The variability between duplicates reflects the combined sampling and analytical uncertainty.
- **ANOVA approach** — Analyzing multiple increments separately (rather than compositing) to partition variability into between-increment (sampling) and within-increment (analytical) components.
- **Published data** — Using published heterogeneity data for similar materials as an initial estimate, verified by the laboratory's own data over time.

### 11.3 Reducing sampling uncertainty

When sampling uncertainty is unacceptably large:

- Increase the number of increments
- Improve homogenization before sub-sampling
- Reduce the particle size of the material before sub-sampling (e.g., grinding, milling)
- Increase the test portion size

The trade-off between sampling effort and acceptable uncertainty is a practical decision documented in the sampling plan.

## 12. Related documents

| Document | Reference |
|---|---|
| Appendix 1 — Sampling Plan and Record | [12-App-01](./appendix-01-sampling-plan-record) |
| Procedure 00 — Document and Record Control | [Procedure 00](../00-document-record-control/index.md) |
| Procedure 07 — Facilities and Environmental Conditions | [Procedure 07](../07-facilities-environment/index.md) |
| Procedure 09 — Customer Service | [Procedure 09](../09-customer-service/index.md) |
| Procedure 10 — Test and Calibration Methods | [Procedure 10](../10-test-calibration-methods/index.md) |
| Procedure 13 — Handling of Test and Calibration Items | [Procedure 13](../13-handling-items/index.md) |
| Procedure 15 — Measurement Uncertainty | [Procedure 15](../15-measurement-uncertainty/index.md) |

## 13. Revision history

| Revision | Date | Description | Approved by |
|---|---|---|---|
| 00 | *[Date]* | Initial issue | *[Name]* |

---

<div className="insight">

## Why this section exists

Section 12 addresses the first and most consequential step in the measurement chain: *obtaining the material that will be measured.*

A perfectly calibrated ICP-OES, operated by a competent analyst following a validated method, will produce a precise and accurate result — of whatever was put into the instrument. If the sample placed in the digestion vessel is not representative of the lot the customer cares about, the number on the report is precisely wrong. It accurately describes the test portion. It may not describe the lot.

### The sampling paradox in battery materials

Battery materials present a specific challenge that many laboratories underestimate. Cathode powders like NMC appear homogeneous — they are fine, free-flowing powders with a uniform color. This visual uniformity creates a false sense that "any scoop will do."

In reality, cathode powders can exhibit systematic compositional gradients within a drum. Smaller particles settle differently from larger ones during transport. Moisture content varies between the surface (exposed to headspace air) and the interior. Trace impurities may not be uniformly distributed. These variations are invisible to the eye but measurable by ICP-OES — and a single scoop from the top of a drum may not represent the drum's average composition.

This is why the procedure specifies multi-point sampling (top, middle, bottom) and compositing. The composite averages across the gradient. A single increment does not.

### Sampling uncertainty is the elephant in the uncertainty budget

Most measurement uncertainty budgets account for calibration uncertainty, repeatability, and bias — all analytical contributions. They often omit or understate sampling uncertainty, even when the laboratory performs the sampling.

For a heterogeneous material, sampling uncertainty can dwarf analytical uncertainty. An ICP-OES method with ±0.3% analytical precision is meaningless if the sampling step introduces ±2% variability because the material is not homogeneous and the sub-sampling was not rigorous.

Clause 7.3 requires that when the laboratory performs sampling, the sampling process be documented and its contribution to uncertainty be considered. This is not optional additional work — it is a recognition that the measurement begins at the sampling step, not at the instrument.

### The sub-sampling step most laboratories ignore

Even when a laboratory does not perform field sampling (i.e., the customer provides the sample), it almost always performs sub-sampling. The customer sends 500 g of cathode powder. The analyst needs 0.2 g for digestion. The process of going from 500 g to 0.2 g is sub-sampling — and it introduces uncertainty.

If the analyst scoops 0.2 g from the top of the container, that scoop may not represent the 500 g. If the material has segregated during transport, the composition at the top differs from the bottom. The correct approach is to homogenize the entire sample (by tumbling, rolling, or passing through a riffle splitter) before taking the test portion.

Many laboratories do this instinctively — experienced analysts "mix the sample" before weighing. But the practice is often not documented in the SOP and not captured in the uncertainty budget. Section 12 ensures that sub-sampling is treated as a defined, documented step rather than an informal habit.

### When to say "this sample is not representative"

One of the most professionally important — and most difficult — judgments a laboratory makes is deciding that a sample is not suitable for testing. If the sampling was clearly inadequate (e.g., a single grab from a multi-ton lot), or if the sample shows signs of contamination or degradation, the laboratory has a responsibility to inform the customer.

This does not mean refusing to test. It means communicating clearly that the result will describe the test portion, not necessarily the lot, and documenting the concern. The customer can then decide whether to proceed, re-sample, or modify the request. This transparency protects both the customer and the laboratory.

</div>

<div className="nonconformity-example">

## Common nonconformities

Clause 7.3 applies only when the laboratory performs sampling. When it does apply, auditors look for documented plans, evidence that plans were followed, and records that connect each sample back to its source. The examples below cover the most frequent findings.

### <span className="nc-tag nc-major">Major</span> Sampling performed without a documented sampling plan

*"The laboratory routinely sub-sampled cathode powder from customer-supplied 25 kg drums for testing. No documented sampling plan or SOP defined how many increments to take, from which locations within the drum, or how to homogenize and sub-sample the material. Analysts described their approach as 'we scoop from the middle' but acknowledged there was no written procedure."*

If the laboratory is taking a portion from a larger quantity and the representativeness of that portion affects the result, it is performing sampling — and Clause 7.3 requires a plan. "Scoop from the middle" is not a plan; it is a habit. Without defined locations, number of increments, and homogenization steps, there is no basis for asserting that the test portion is representative, and no way to evaluate sampling uncertainty.

### <span className="nc-tag nc-major">Major</span> Sampling records incomplete or absent

*"The laboratory collected samples from three drums of anode material at a customer's warehouse. No sampling records were available. The analyst stated that sample IDs were written on the containers but could not provide documentation of the sampling locations within each drum, the environmental conditions at the time of collection, or the tools used."*

Without a record, the sampling event is unreconstructable. If a result is later questioned, the laboratory cannot demonstrate that the sampling was performed correctly or identify what might have gone wrong. The record must be created at the time of sampling — not filled in retrospectively from memory. Section 10.1 specifies the minimum information to capture.

### <span className="nc-tag nc-minor">Minor</span> Sampling tools not specified or not controlled for contamination

*"The SOP for sub-sampling cathode powders listed 'a clean scoop' as the sampling tool. No specification of material (metal vs. plastic), size, or cleaning procedure was documented. The same scoop was observed being used for both NMC 811 (high nickel) and NMC 111 (equal Ni:Co:Mn) without cleaning between samples."*

Cross-contamination between samples is a real risk when the same elements are being measured at different ratios. A scoop carrying residual NMC 811 powder into an NMC 111 sample would shift the nickel-to-cobalt ratio in a direction that is plausible and difficult to detect. The SOP should specify the tool material, cleaning procedure, and sequence controls — or require dedicated tools per material type.

### <span className="nc-tag nc-minor">Minor</span> No consideration of sampling uncertainty

*"The laboratory's measurement uncertainty budget for ICP-OES analysis of cathode materials included contributions from calibration, repeatability, and bias. The laboratory performed sub-sampling from bulk containers as part of its routine process, but sampling variability was not included in the uncertainty estimate. The Technical Manager acknowledged that sub-sampling was a source of variability but stated it had not been quantified."*

If the laboratory performs sampling (including sub-sampling), Clause 7.3 requires that the sampling contribution to uncertainty be considered. Ignoring it produces an uncertainty estimate that is optimistically small — it describes the precision of the analytical step but not the precision of the entire measurement process from sample to result. Even an approximate estimate, based on duplicate sampling data, is better than omission.

### <span className="nc-tag nc-major">Major</span> Deviation from sampling plan not documented or communicated

*"The sampling plan for a lot of 20 drums of cathode material specified sampling from 6 drums (√20 + 1). Due to time constraints, the sampling technician sampled only 3 drums. This deviation was not documented in the sampling record, not communicated to the Technical Manager, and not reported to the customer. The test report stated that the lot had been sampled per the standard plan."*

This combines a deviation, a documentation failure, and a reporting integrity issue. Halving the number of sampled drums significantly increases the risk that the composite is not representative of the full lot — and the customer relied on the stated sampling plan when interpreting the results. The report is inaccurate because it claims a sampling scheme that was not followed.

### <span className="nc-tag nc-minor">Minor</span> Preservation requirements not defined for moisture-sensitive materials

*"Cathode powder samples were collected from drums in an open warehouse area with approximately 65% relative humidity. The sampling SOP did not specify any moisture-protection measures during collection. Samples were placed in open plastic bags and sealed 15–20 minutes after collection. The subsequent Karl Fischer analysis was intended to determine the as-produced moisture content of the material."*

If the material is hygroscopic and the purpose of the test includes moisture determination, exposure to humid air during sampling invalidates the result. The sample's moisture content at the time of analysis reflects the environment it was exposed to during and after collection, not the as-produced condition. Section 9.2 requires that preservation measures be specified in the sampling plan for materials where environmental exposure affects the measurand.

### How to use these examples

Sampling nonconformities follow a pattern: the laboratory is performing sampling but treating it as a trivial preliminary step rather than a defined, documented process. The self-check is simple: for any routine test where you take a portion from a larger quantity, ask — is there a plan? Is there a record? Are the tools controlled? Is the uncertainty accounted for? If any of these is missing, the sampling step is a weak link in your measurement chain.

</div>
