# SOPs.md — Standard Operating Procedures

## Core Rules
1. **Source of Truth**: Refer to `project-specifications.md` for project requirements and product details.
2. **Execution Strategy**: Complete tasks strictly sequentially from `docs/tasks/`. Implement ONLY the active task file.
3. **State Management**: After completing a task, update `docs/progress.md` before moving to the next.
4. **Token Discipline**: Do NOT output conversational filler (e.g., "Sure, I'll do that!", "I understand"). Output code, file edits, or brief technical explanations only when required.
5. **No Premature Optimization/Abstraction**: Write minimal, clean React code using local state and CSS. Avoid third-party state managers or custom animation frameworks unless specified.
6. **Preserve Codebase**: Inspect existing files before modifying. Do not rewrite working files or refactor outside task scope.
7. **Asset Safety**: Keep personal content in `src/data/birthdayData.js`. Never hardcode raw data inside component files.
8. **Feature Requests & Changes**: Strictly follow `feature-requests.md` for any new feature requests or requirement changes before executing code edits.

## Definition of Done (Per Task)
- Feature meets task requirements and `project-specifications.md`.
- No regression or build errors (`npm run dev` and `npm run build` pass).
- `docs/progress.md` is updated.
