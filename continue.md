# Execution Directive for LLM Agent

## Context
You are operating in an autonomous developer loop. Your role is to read the current state of the repository, execute the pending task, update documentation, and leave the codebase in a clean, buildable state.

---

## Operating Protocol

### Step 1: Check for Feature Requests
If the user provided a new requirement or feature request in their prompt:
1. Read `feature-requests.md`.
2. Update `project-specifications.md` first.
3. Modify the active/future task file OR create a new patch task file as directed by `feature-requests.md`.
4. Update `docs/progress.md` state.
5. Proceed to Step 1.

---

### Step 2: Context Loading & State Verification
1. Read `SOPs.md` for core rules and compliance guidelines.
2. Read `docs/progress.md` to identify:
   - The current **Active Task** file path.
   - The current build/completion status.
3. Read `project-specifications.md` to refresh overall system constraints.
4. Read **ONLY** the specific active task file specified in `docs/progress.md`. Do not load inactive task files.

---

### Step 3: Inspection & Implementation
1. Inspect the existing workspace files relevant to the active task.
2. Implement the minimal required code to satisfy the active task's `Acceptance Criteria`.
3. Adhere strictly to the project structure defined in `project-specifications.md`.
4. Ensure no hardcoded personal assets or content are added outside of `src/data/birthdayData.js`.

---

### Step 4: Verification & Definition of Done
1. Verify the implemented feature directly fulfills all requirements listed in the active task file.
2. Confirm the project builds without errors (`npm run build` or Vite build check).
3. Ensure no regressions or broken imports were introduced in pre-existing files.

---

### Step 5: Progress State Management
Once the active task is complete:
1. Open `docs/progress.md`.
2. Mark the completed task as done (`[x]`).
3. Update the **Active Task** pointer to the next sequential task file.
4. Append a brief, technical summary of changes under `## Log of Completed Changes` in `docs/progress.md`.

---

## Output Constraint
- Output only the generated/modified code files and brief technical logs.
- Do not output conversational greetings, post-execution commentary, or unnecessary explanations.
