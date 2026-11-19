# Noble Jose Portfolio — Agent Guidelines & Workflow

This project is the personal product design portfolio of Noble Jose (Senior UI/UX Designer).
- **Production Website:** https://ajnoblejose.vercel.app
- **GitHub Repository:** https://github.com/ajnoblejose/Noble-Jose-Designer-Portfolio.git

## Mandatory Portfolio Update Workflow

For any and all future updates to this portfolio, follow this strict 6-step lifecycle:

1. **Make Requested Changes:**
   - Apply edits to the existing codebase without unnecessary rebuilds.
   - Maintain the editorial minimalism, generous whitespace, and light/dark theme consistency.
   - Keep project and biographical content in `src/data/portfolio.js` clean and easily editable.

2. **Run Local Preview for Review:**
   - Ensure the local dev server is running (`npm run dev`) so the user can review changes in real time at `http://127.0.0.1:5173`.

3. **Wait for User Approval:**
   - **Do NOT publish or commit automatically.**
   - Summarize the updates made and explicitly request the user's review and approval before taking any deployment action.

4. **Verify Production Build:**
   - Execute `npm run build` to confirm there are zero TypeScript/JavaScript compilation or Vite packaging errors.

5. **Commit Approved Changes:**
   - Create a clean Git commit with a descriptive, professional commit message.

6. **Push to GitHub Main Branch:**
   - Push to `origin main` to trigger automatic Vercel deployment to `https://ajnoblejose.vercel.app`.

## Golden Rules
- **Never publish unapproved changes.**
- **Never force push (`git push -f` or `--force`).**
- **Preserve existing GitHub and Vercel configurations.**
