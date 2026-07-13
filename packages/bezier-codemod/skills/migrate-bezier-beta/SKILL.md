---
name: migrate-bezier-beta
description: Migrate TypeScript and React repositories from @channel.io/bezier-react root or alpha component APIs to @channel.io/bezier-react/beta. Use when upgrading legacy Bezier components, resolving beta migration diagnostics, converting FormControl/TextField/ListItem/Select and other old interfaces, or validating that a repository no longer uses deprecated Bezier component exports.
---

# Migrate Bezier Beta

Run the provenance-aware codemod, resolve its structured diagnostics with
repository context, and verify the migrated application. Do not stop after the
codemod when warnings or legacy imports remain.

## Workflow

1. Inspect `git status` and preserve all pre-existing changes.
2. Resolve the user's natural-language scope to one concrete source file or
   directory. Search repository-owned TypeScript paths with `rg --files` and
   compare every matching suffix. Exclude dependencies, generated files,
   `dist`, `build`, coverage, snapshots, and vendored code. Prefer a path under
   the target application's `src` tree. If multiple owned source paths remain
   plausible, ask the user instead of widening the scope.
3. State the resolved path before execution. Locate this skill directory and
   run a dry-run first:

   ```bash
   node <skill-directory>/scripts/run-codemod.mjs \
     --scope apps/example/src/features/Document \
     --dry-run \
     --report /tmp/bezier-beta-migration-report.json \
     --summary /tmp/bezier-beta-migration-summary.md
   ```

   `--scope` accepts a `.ts`/`.tsx` file or directory. The codemod validates
   that it exists inside the repository, turns a directory into a
   `**/*.{ts,tsx}` glob, excludes generated/build directories, and prints the
   resolved glob plus matched file count before transformation. Use `--files`
   only when the user explicitly supplies a reviewed glob.

4. Read the Markdown summary and JSON report. Report the changed file count and
   paths, automatic change types, diagnostic categories, and the highest-risk
   QA hotspots. Add repository-specific QA flows when component structure or
   product behavior makes a directory riskier than the numeric ranking alone.
5. If any diagnostic is not a trivial local prop choice, read
   [references/migration-guide.md](references/migration-guide.md) before editing
   that case.
6. Resolve diagnostics in source order. Inspect parent composition, state,
   callbacks, accessibility, and nearby tests before choosing a heuristic
   target. Never decide from the old component name alone.
7. Run the codemod again with the same scope. Continue until a run is idempotent
   and every report diagnostic is resolved or explicitly justified by a
   root-only API with no beta replacement.
8. Search imports from `@channel.io/bezier-react`. Confirm every remaining
   named import is a non-deprecated provider, token, hook, or intentionally
   retained primitive. Do not assume a green typecheck proves this.
9. Run the repository formatter on touched files, then run typecheck and
   focused tests. Fix narrowed token types, removed props, form ownership,
   controlled state, keyboard behavior, and accessible names exposed by those
   checks.
10. Review the final diff for unrelated formatting. Keep reports outside the
    repository or remove temporary reports unless the user asks to retain them.

## Scope Interpretation

- Treat phrases such as "features/Document only" as a path-search request, not
  as a literal glob and not as permission to scan the whole repository.
- Show all duplicate candidate roots considered and the one selected when the
  repository is large or generated copies exist.
- Never silently fall back from an empty or missing narrow scope to `src` or
  the repository root.
- Split very large migrations into user-requested paths so each batch has a
  reviewable diff and focused QA surface.

## Codemod Rules

- Treat diagnostics as required work, not informational output.
- Keep Bezier import provenance. Do not globally replace common literals or
  prop names.
- Preserve aliases unless normalization is necessary to resolve a collision.
- Convert a native `<form>` that owns legacy fields to beta `<Form>`. Do not
  create a new form or nest forms without proving submission ownership.
- Prefer minimal, local edits for automatic cases. Use broader restructuring
  only for intent-dependent components described in the migration guide.
- Re-run typecheck after structure-heavy batches so one semantic decision is
  tested at a time.

## Missing Codemod Binary

The runner uses `BEZIER_CODEMOD_BIN` when explicitly set, then a repository-local
binary only when its package version matches this installed skill, then the CLI
shipped beside the skill. If none is available, it automatically runs
`npx --yes @channel.io/bezier-codemod@<pinned-version>`. The pin is written when
the skill is installed. Never replace it with `latest` or another unreviewed
version during a migration.

## Completion Criteria

Finish only when the codemod is idempotent, diagnostics are resolved, deprecated
root/alpha component imports are gone or deliberately retained with evidence,
and typecheck plus relevant tests pass. Report any retained primitive or
unverified interaction explicitly.
