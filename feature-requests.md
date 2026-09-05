# Feature Request & Change Pipeline Guidelines

This document defines the strict workflow an LLM must follow when a user requests a new feature, design tweak, or requirement update.

---

## Step 1: Update the Source of Truth
Before creating or modifying any task files, **always update `project-specifications.md` first**.
- Locate the relevant section in `project-specifications.md`.
- Modify or add the new requirement details directly.
- Maintain consistency with existing architecture and data models.

---

## Step 2: Check Progress State
Read `docs/progress.md` to determine the current execution state:
1. Identify the **Active Task**.
2. Identify all **Completed Tasks** (marked `[x]`).
3. Identify all **Future Tasks** (marked `[ ]`).

---

## Step 3: Determine Classification & Execute

### Case A: Change affects a FUTURE or ACTIVE task
If the change modifies a feature that has **NOT** been completed yet:
1. Locate the existing task file in `docs/tasks/`.
2. Edit the task file directly:
   - Update `## Objective`, `## Requirements`, and `## Acceptance Criteria`.
   - Append a `## 🔄 Revision` section at the bottom specifying the date and changes made.
3. Keep `docs/progress.md` unchanged (the task path remains the same).

### Case B: Change affects an ALREADY COMPLETED task
If the change modifies a feature that is marked as **COMPLETED** (`[x]`):
1. **DO NOT** edit or uncheck previously completed task files.
2. Identify the phase directory where the feature belongs (e.g., `docs/tasks/phase-2-initial-screen/`).
3. Create a **Patch Task File** using the naming convention:
   `docs/tasks/<phase-dir>/<phase_number>.<sub_number>-patch-<short-title>.md`
   *(Example: `docs/tasks/phase-2-initial-screen/2.9-patch-custom-sound.md`)*
4. Structure the patch file with:
   - `## Reason for Change`
   - `## Updated Requirements`
   - `## Boundaries / Impact` (specify affected files and what NOT to break)
   - `## Acceptance Criteria`
5. Update `docs/progress.md`:
   - Register the new patch task under its respective Phase section.
   - Set the active task in `docs/progress.md` to this new patch task.

---

## Step 4: Token & Execution Rules
- Do not begin writing application code until `project-specifications.md` and the appropriate task/patch files are updated.
- Respond with a brief summary of the specification and task file updates made, then await user confirmation or proceed directly to code implementation based on SOPs.
