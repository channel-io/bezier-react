import fs from 'fs'
import os from 'os'
import path from 'path'

import { runBetaComponentMigration } from './runner.js'

describe('beta component migration runner', () => {
  it('supports dry runs and writes a structured report', async () => {
    const directory = fs.mkdtempSync(
      path.join(os.tmpdir(), 'bezier-beta-migration-')
    )
    const sourcePath = path.join(directory, 'example.tsx')
    const reportPath = path.join(directory, 'report.json')
    const summaryPath = path.join(directory, 'summary.md')
    const input = `
      import { Icon, ListItem } from '@channel.io/bezier-react'
      export const Example = () => <ListItem content={<Icon size="m" />} />
    `
    fs.writeFileSync(sourcePath, input)

    const report = await runBetaComponentMigration({
      files: sourcePath,
      dryRun: true,
      reportPath,
      summaryPath,
    })

    expect(fs.readFileSync(sourcePath, 'utf8')).toBe(input)
    expect(report.summary).toEqual({
      scannedFiles: 1,
      changedFiles: 1,
      changes: 2,
      warnings: 1,
      errors: 0,
      filesWithDiagnostics: 1,
    })
    expect(report.changedFilePaths).toEqual([sourcePath])
    expect(report.changesByCode).toEqual({
      'import-moved': 1,
      'literal-mapped': 1,
    })
    expect(report.diagnosticsByCode).toEqual({
      'manual-component-migration': 1,
    })
    expect(report.diagnostics).toEqual([
      expect.objectContaining({
        code: 'manual-component-migration',
        component: 'ListItem',
        filePath: sourcePath,
      }),
    ])
    expect(JSON.parse(fs.readFileSync(reportPath, 'utf8'))).toEqual(report)
    expect(fs.readFileSync(summaryPath, 'utf8')).toContain(
      '# Bezier Beta Migration Summary'
    )
    expect(fs.readFileSync(summaryPath, 'utf8')).toContain(sourcePath)
  })

  it('resolves a directory scope and excludes generated directories', async () => {
    const directory = fs.mkdtempSync(
      path.join(os.tmpdir(), 'bezier-beta-migration-scope-')
    )
    const sourceDirectory = path.join(directory, 'src', 'features', 'Document')
    const generatedDirectory = path.join(sourceDirectory, 'dist')
    fs.mkdirSync(generatedDirectory, { recursive: true })
    fs.writeFileSync(
      path.join(sourceDirectory, 'owned.tsx'),
      "import { Badge } from '@channel.io/bezier-react'\nexport const badge = <Badge />\n"
    )
    fs.writeFileSync(
      path.join(generatedDirectory, 'copy.tsx'),
      "import { Badge } from '@channel.io/bezier-react'\nexport const badge = <Badge />\n"
    )
    const onScopeResolved = jest.fn()

    const report = await runBetaComponentMigration({
      cwd: directory,
      scope: 'src/features/Document',
      dryRun: true,
      onScopeResolved,
    })

    expect(report.scope).toEqual({
      input: 'src/features/Document',
      kind: 'directory',
      resolvedPath: 'src/features/Document',
      glob: 'src/features/Document/**/*.{ts,tsx}',
    })
    expect(report.summary.scannedFiles).toBe(1)
    expect(report.changedFilePaths).toEqual(['src/features/Document/owned.tsx'])
    expect(onScopeResolved).toHaveBeenCalledWith(report.scope, 1)
  })

  it('rejects a natural scope outside the repository', async () => {
    const directory = fs.mkdtempSync(
      path.join(os.tmpdir(), 'bezier-beta-migration-outside-')
    )

    await expect(
      runBetaComponentMigration({
        cwd: directory,
        scope: '..',
        dryRun: true,
      })
    ).rejects.toThrow('--scope must stay inside the current repository')
  })

  it('rejects a natural scope inside generated output', async () => {
    const directory = fs.mkdtempSync(
      path.join(os.tmpdir(), 'bezier-beta-migration-generated-')
    )
    fs.mkdirSync(path.join(directory, 'dist'), { recursive: true })

    await expect(
      runBetaComponentMigration({
        cwd: directory,
        scope: 'dist',
        dryRun: true,
      })
    ).rejects.toThrow('--scope points inside an excluded directory')
  })
})
