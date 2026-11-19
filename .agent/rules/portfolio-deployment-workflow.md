---
description: Persistent workflow for all portfolio updates, reviews, builds, and deployments.
globs: ["**/*"]
always_on: true
---

# Portfolio Development & Deployment Workflow

This project is Noble Jose's personal UI/UX design portfolio.
Production Website: https://ajnoblejose.vercel.app
GitHub Repository: https://github.com/ajnoblejose/Noble-Jose-Designer-Portfolio.git

For all future portfolio updates, you MUST strictly adhere to the following sequence:

## Required Workflow Steps

1. **Make Requested Changes:**
   - Implement the requested edits or additions to the existing project codebase.
   - Maintain visual simplicity, minimal editorial typography (Geist / Geist Mono), and consistent light/dark theme tokens.
   - Keep content in `src/data/portfolio.js` easily editable.

2. **Run Local Preview for Review:**
   - Launch or maintain the local Vite preview server (`npm run dev`) so the user can inspect the live updates in their browser.
   - Present the changes clearly to the user.

3. **Wait for Approval:**
   - Never proceed to commit, publish, or push without explicit approval from the user.
   - Ask for review and confirm whether further adjustments are needed.

4. **Verify Production Build:**
   - Once approved, run `npm run build` to verify that there are 0 build errors, no missing imports, and that type/asset bundles compile cleanly.

5. **Commit Approved Changes:**
   - Stage and commit the approved modifications with a clear, descriptive Git commit message following conventional commits (e.g., `feat: ...`, `fix: ...`, `refactor: ...`).

6. **Push to GitHub Main Branch:**
   - Push the commits to `origin main` to trigger automatic production deployment on Vercel (`https://ajnoblejose.vercel.app`).

## Strict Safety Constraints

- **Never publish unapproved changes:** Do not push to GitHub without user sign-off.
- **Never use force push (`--force` / `-f`):** Always preserve commit history cleanly.
- **Preserve Configurations:** Keep existing GitHub remotes, Vercel build settings, package configurations, and project structure intact.
