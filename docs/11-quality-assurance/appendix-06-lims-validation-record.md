---
title: "Appendix 11-App-06 — LIMS Validation Record"
description: Record template for documenting software validation activities, test cases, and outcomes.
---

# LIMS Validation Record

**Appendix number:** 11-App-06  
**Parent procedure:** [Procedure 11 — Quality Assurance](./index.md)

## Instructions

Complete one record per software system per validation event (initial validation, re-validation after update, periodic verification). File in quality records and reference in the LIMS Validation Register ([Appendix 11-App-05](./appendix-05-lims-validation-register)).

---

## Section A — System Identification

| Field | Entry |
|---|---|
| **Validation record number** | *[e.g., VR-LIMS-001]* |
| **Software system** | *[e.g., LabWare LIMS]* |
| **Version** | *[e.g., 7.4.2]* |
| **Vendor** | *[e.g., LabWare Inc.]* |
| **Installation environment** | *[e.g., Server: Windows Server 2022, SQL Server 2019; Clients: Windows 11]* |
| **Risk category** | *[High / Medium / Low]* |
| **Validation type** | *[Initial / Re-validation (reason: ___) / Periodic verification]* |
| **Validation date(s)** | *[Start – End]* |
| **Validated by** | *[Name(s)]* |

## Section B — Requirements Specification

*List the functional requirements to be tested. For re-validations or periodic verifications, list only the requirements affected by the change or selected for re-verification.*

| Req. ID | Functional requirement | Risk to result validity | Test case ref(s). |
|---|---|---|---|
| R-01 | *[e.g., System assigns unique, sequential sample IDs that cannot be duplicated]* | *[e.g., Sample mix-up → wrong results reported]* | *[TC-01]* |
| R-02 | *[e.g., Concentration calculated from calibration curve matches independent manual calculation within rounding tolerance]* | *[e.g., Incorrect result reported]* | *[TC-02, TC-03]* |
| R-03 | *[e.g., Data transfer from ICP-OES software to LIMS preserves all decimal places and units]* | *[e.g., Truncation or unit error in reported result]* | *[TC-04]* |
| R-04 | *[e.g., Dilution correction applied correctly using the factor entered at sample registration]* | *[e.g., Incorrect final concentration]* | *[TC-05]* |
| R-05 | *[e.g., Results rounded to the number of significant figures specified in the method SOP]* | *[e.g., Incorrect precision in reported result]* | *[TC-06]* |
| R-06 | *[e.g., Audit trail records every data entry, modification, and deletion with user, timestamp, original value, new value, and reason]* | *[e.g., Undetected data manipulation]* | *[TC-07, TC-08]* |
| R-07 | *[e.g., Role-based access prevents analysts from approving reports or modifying locked records]* | *[e.g., Unauthorized approval or data modification]* | *[TC-09]* |
| R-08 | *[e.g., Test report assembles correct sample ID, method, results, units, uncertainty, and approval signatures]* | *[e.g., Incorrect report issued to customer]* | *[TC-10]* |
| R-09 | *[e.g., Backup restores all data and configuration without loss]* | *[e.g., Data loss after system failure]* | *[TC-11]* |

## Section C — Test Cases and Results

| TC ref. | Req. ID | Test description | Input / precondition | Expected result | Actual result | Pass / Fail | Tester | Date | Notes |
|---|---|---|---|---|---|---|---|---|---|
| TC-01 | R-01 | *[Attempt to register two samples with the same ID]* | *[Register sample S-001; attempt to register another as S-001]* | *[System rejects duplicate; assigns next sequential ID]* | *[___]* | *[___]* | *[___]* | *[___]* | |
| TC-02 | R-02 | *[Verify ICP-OES Ni concentration calculation]* | *[Enter known intensities: std1=1000, std2=5000, std3=10000 counts at known concentrations; sample=7500 counts]* | *[Concentration = X.XXX mg/L (independently calculated)]* | *[___]* | *[___]* | *[___]* | *[___]* | |
| TC-03 | R-02 | *[Verify Karl Fischer moisture calculation]* | *[Enter known titration volume, reagent factor, sample mass]* | *[Moisture = X.XXX % (independently calculated)]* | *[___]* | *[___]* | *[___]* | *[___]* | |
| TC-04 | R-03 | *[Verify data transfer from ICP-OES to LIMS]* | *[Export 10-sample result set from ICP Expert; import into LIMS]* | *[All values match source file exactly — same decimal places, units, sample IDs]* | *[___]* | *[___]* | *[___]* | *[___]* | |
| TC-05 | R-04 | *[Verify dilution correction]* | *[Sample registered with dilution factor 50; measured concentration 2.345 mg/L]* | *[Reported concentration = 117.25 mg/L (= 2.345 × 50)]* | *[___]* | *[___]* | *[___]* | *[___]* | |
| TC-06 | R-05 | *[Verify rounding]* | *[Result = 33.3549% Ni; SOP specifies 2 decimal places]* | *[Report shows 33.35% Ni]* | *[___]* | *[___]* | *[___]* | *[___]* | |
| TC-07 | R-06 | *[Verify audit trail on data entry]* | *[Enter result 33.35%; then modify to 33.40% with reason "transcription error"]* | *[Audit trail shows: original=33.35%, new=33.40%, user=[name], timestamp, reason="transcription error"]* | *[___]* | *[___]* | *[___]* | *[___]* | |
| TC-08 | R-06 | *[Verify audit trail cannot be deleted]* | *[Attempt to delete or modify an audit trail entry]* | *[System prevents deletion/modification of audit trail]* | *[___]* | *[___]* | *[___]* | *[___]* | |
| TC-09 | R-07 | *[Verify access control]* | *[Log in as Analyst role; attempt to approve a test report]* | *[System rejects — insufficient privileges]* | *[___]* | *[___]* | *[___]* | *[___]* | |
| TC-10 | R-08 | *[Verify report assembly]* | *[Complete a full sample workflow (registration → analysis → QC pass → report); compare report output against raw data]* | *[All fields correct: sample ID, method, results, units, uncertainty, dates, approvals]* | *[___]* | *[___]* | *[___]* | *[___]* | |
| TC-11 | R-09 | *[Verify backup/restore]* | *[Restore database from most recent backup to test environment]* | *[All records present and correct; no data loss; application functions normally]* | *[___]* | *[___]* | *[___]* | *[___]* | |

## Section D — Summary and Conclusion

| Field | Entry |
|---|---|
| **Total test cases** | *[n]* |
| **Passed** | *[n]* |
| **Failed** | *[n]* |
| **Failures resolved?** | *[Yes — describe resolution / No — describe risk mitigation and timeline]* |
| **Conclusion** | *[e.g., "All test cases passed. The system is validated for routine use." / "X test cases failed; corrective action taken; re-testing passed. The system is validated for routine use with the following restriction: ___"]* |

**Validated by:** *[Name, date]*  
**Approved by:** *[Technical Manager, date]*

## Section E — Re-validation and Periodic Verification Log

*Use this section to record subsequent re-validations or periodic verifications performed on this system.*

| Date | Trigger | Test cases executed | Results | Conclusion | Performed by | Approved by |
|---|---|---|---|---|---|---|
| *[Date]* | *[e.g., Software update to v7.4.3]* | *[e.g., TC-02, TC-04, TC-05, TC-06, TC-10 — calculation and data transfer tests]* | *[e.g., All passed]* | *[e.g., Validated status maintained]* | *[Name]* | *[Technical Manager]* |
| *[Date]* | *[e.g., Annual periodic verification]* | *[e.g., TC-02, TC-04, TC-06, TC-07, TC-11]* | | | | |
