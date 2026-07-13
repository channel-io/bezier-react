#!/usr/bin/env node

import { render } from 'ink'
import meow from 'meow'

import App from './App.js'
import { installMigrateBezierBetaSkill } from './install-skill.js'
import { runBetaComponentMigration } from './transforms/beta-component-migration/runner.js'

const cli = meow(
  `
  Usage:
    $ npx @channel.io/bezier-codemod
    $ npx @channel.io/bezier-codemod --install-skill
    $ npx @channel.io/bezier-codemod --transform beta-component-migration --scope src/features/Document --dry-run

  Options:
    --install-skill  Install the migrate-bezier-beta skill in .agents/skills
    --skill-path     Override the skill root or destination
    --force          Replace an existing installed skill
    --transform      Run a transform without the interactive UI
    --scope          Source file or directory; directories become TypeScript globs
    --files          Explicit source file path or glob
    --dry-run        Produce diagnostics without saving source files
    --report         Write a JSON migration report
    --summary        Write a Markdown migration summary
    --hotspot-depth  Directory depth used to group QA hotspots (default: 2)

  More info:
    https://github.com/channel-io/bezier-react
`,
  {
    importMeta: import.meta,
    flags: {
      installSkill: {
        type: 'boolean',
        default: false,
      },
      skillPath: {
        type: 'string',
      },
      force: {
        type: 'boolean',
        default: false,
      },
      transform: {
        type: 'string',
      },
      scope: {
        type: 'string',
      },
      files: {
        type: 'string',
      },
      dryRun: {
        type: 'boolean',
        default: false,
      },
      report: {
        type: 'string',
      },
      summary: {
        type: 'string',
      },
      hotspotDepth: {
        type: 'number',
        default: 2,
      },
    },
  }
)

if (cli.flags.installSkill) {
  const installed = await installMigrateBezierBetaSkill({
    skillPath: cli.flags.skillPath,
    force: cli.flags.force,
  })
  // eslint-disable-next-line no-console
  console.log(
    `Installed migrate-bezier-beta at ${installed.path} (pinned to ${installed.packageName}@${installed.version}).`
  )
} else if (cli.flags.transform) {
  if (cli.flags.transform !== 'beta-component-migration') {
    throw new Error(`Unknown non-interactive transform: ${cli.flags.transform}`)
  }
  const reportPath =
    cli.flags.report ??
    (cli.flags.dryRun ? '.bezier-beta-migration-report.json' : undefined)
  const summaryPath =
    cli.flags.summary ??
    (cli.flags.dryRun ? '.bezier-beta-migration-summary.md' : undefined)
  const report = await runBetaComponentMigration({
    files: cli.flags.files,
    scope: cli.flags.scope,
    dryRun: cli.flags.dryRun,
    reportPath,
    summaryPath,
    hotspotDepth: cli.flags.hotspotDepth,
    onScopeResolved: (scope, fileCount) => {
      // eslint-disable-next-line no-console
      console.log(`Resolved scope: ${scope.glob} (${fileCount} files)`)
    },
  })
  // eslint-disable-next-line no-console
  console.log(
    JSON.stringify({ ...report.summary, reportPath, summaryPath }, null, 2)
  )
  if (report.summary.errors > 0) {
    process.exitCode = 1
  }
} else {
  render(<App />)
}
