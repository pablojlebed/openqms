---
sidebar_position: 1.1
title: "10.1 Appendix 1 – Method Register"
description: Template for maintaining a register of all approved laboratory methods with source, verification/validation status, and scope.
---

# Appendix 1 — Method Register

**Parent procedure:** [10 – Test and Calibration Methods](./)

## Purpose

To provide a single, controlled reference for all test and calibration methods approved for use in the laboratory. The register records the method source, scope, verification or validation status, linked SOP, and review history. It is the definitive list of what the laboratory is authorized to perform.

## Instructions

1. The **Technical Manager** adds a new entry when a method is approved for routine use, following successful verification or validation.
2. The register is reviewed at least annually to confirm that SOP revisions, standard edition references, and verification/validation status are current.
3. Methods that are retired or superseded are moved to Part B.
4. This register is a controlled document managed per [Procedure 00](../00-document-record-control/index.md).

---

## Part A — Active Methods

Complete one row per method. Where a single SOP covers multiple analytes (e.g., a multi-element ICP-OES method), use a single row and list all analytes in the "Analyte / Measurand" column.

| Method ID | Method name | Analyte / Measurand | Matrix / Scope | Method type | Reference standard or source | SOP number (current revision) | Verification / Validation status | Date verified / validated | Next review due | Technical Manager sign-off |
|---|---|---|---|---|---|---|---|---|---|---|
| M-001 | ICP-OES multi-element analysis | Ni, Co, Mn, Li, Al, Fe | NMC/NCA/LCO cathode powders; acid digest | In-house | Laboratory development | SOP-10-001 Rev. 02 | Validated — Report VAL-001 | *[Date]* | *[Date]* | *[Initials]* |
| M-002 | Karl Fischer moisture determination | Moisture (H₂O) | Cathode and anode active materials | Standard | ISO 760:*[year]* | SOP-10-002 Rev. 01 | Verified — Record VER-002 | *[Date]* | *[Date]* | *[Initials]* |
| M-003 | Laser diffraction particle size distribution | D10, D50, D90, span | Cathode and anode powders, wet dispersion | Standard | ISO 13320:*[year]* | SOP-10-003 Rev. 01 | Verified — Record VER-003 | *[Date]* | *[Date]* | *[Initials]* |
| M-004 | BET specific surface area | BET surface area (m²/g) | Cathode and anode active materials | Standard | ISO 9277:*[year]* | SOP-10-004 Rev. 01 | Verified — Record VER-004 | *[Date]* | *[Date]* | *[Initials]* |
| M-005 | HPLC-UV organic impurity analysis | NMP, PVDF, other organic impurities | Anode material extracts | In-house | Laboratory development | SOP-10-005 Rev. 01 | Validated — Report VAL-005 | *[Date]* | *[Date]* | *[Initials]* |
| *[Add rows]* | | | | | | | | | | |

**Method type key:** Standard = published standard method used within scope · Modified = standard method adapted beyond original scope · In-house = laboratory-developed method

---

## Part B — Method Deviations Log

Record all authorized temporary deviations from active methods. This log is reviewed by the Technical Manager quarterly.

| Deviation ref. | Method ID | Deviation description | Batch / Sample ref. | Technical justification | Authorized by | Date | Disclosed on report? | Follow-up action |
|---|---|---|---|---|---|---|---|---|
| DEV-001 | M-001 | Modified acid ratio for high-Fe samples showing incomplete dissolution with standard 3:1 HNO₃:HCl mixture | *[Batch ref.]* | High Fe content (>15%) caused incomplete dissolution; 4:1 ratio confirmed by dissolution check | *[Name]* | *[Date]* | Yes — noted on report | Review SOP for high-Fe scope; consider method extension |
| *[Add rows]* | | | | | | | | |

---

## Part C — Retired Methods

Record methods that are no longer in active use. Records are retained per Procedure 00.

| Method ID | Method name | Date retired | Reason | SOP archived at | Records retained until |
|---|---|---|---|---|---|
| *[ID]* | *[Name]* | *[Date]* | *[e.g., Superseded by M-006, customer no longer requires]* | *[Archive ref.]* | *[Date]* |
| | | | | | |

---

## Part D — Standard Method Edition Tracking

Record the publication date of standard methods in use and document the outcome of reviews when new editions are published.

| Method ID | Standard reference | Edition in use | Latest published edition | Review date | Review outcome | Action taken | Reviewed by |
|---|---|---|---|---|---|---|---|
| M-002 | ISO 760 | *[year]* | *[year]* | *[Date]* | *[e.g., No technical changes — no re-verification required / Technical changes — re-verification required]* | *[e.g., SOP updated to reference new edition]* | *[Name]* |
| M-003 | ISO 13320 | *[year]* | *[year]* | *[Date]* | | | |
| M-004 | ISO 9277 | *[year]* | *[year]* | *[Date]* | | | |
| *[Add rows]* | | | | | | | |

---

**Register maintained by:** *[Technical Manager name]* — **Last reviewed:** *[Date]*

:::tip Adapt this template
Pre-populate Part A with your laboratory's actual methods. The sample entries reflect the battery materials laboratory scope. If your laboratory uses a LIMS or document management system that tracks method status, this register may be generated from that system — but a controlled, reviewable version must always be available for assessment purposes.
:::
