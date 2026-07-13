import fs from 'fs/promises'
import path from 'path'

import { createProject } from '../../project.js'

import transform from './transform.js'
import { type MigrationChange, type MigrationDiagnostic } from './types.js'

const GLOB_CHARACTERS = '*?{}[]!'
const EXCLUDED_DIRECTORY_NAMES = new Set([
  '.next',
  '__generated__',
  'build',
  'coverage',
  'dist',
  'generated',
  'node_modules',
  'storybook-static',
  'vendor',
])

export interface MigrationScope {
  input: string
  kind: 'directory' | 'file' | 'glob'
  resolvedPath: string
  glob: string
}

export interface MigrationQaHotspot {
  path: string
  changedFiles: number
  diagnosticFiles: number
  diagnostics: number
  risks: Record<string, number>
}

export interface RunBetaComponentMigrationOptions {
  files?: string
  scope?: string
  dryRun?: boolean
  reportPath?: string
  summaryPath?: string
  cwd?: string
  hotspotDepth?: number
  onScopeResolved?: (scope: MigrationScope, fileCount: number) => void
}

export interface BetaComponentMigrationReport {
  version: 2
  transform: 'beta-component-migration'
  dryRun: boolean
  cwd: string
  scope: MigrationScope
  summary: {
    scannedFiles: number
    changedFiles: number
    changes: number
    warnings: number
    errors: number
    filesWithDiagnostics: number
  }
  changedFilePaths: string[]
  changes: MigrationChange[]
  changesByCode: Record<string, number>
  diagnostics: MigrationDiagnostic[]
  diagnosticsByCode: Record<string, number>
  diagnosticsByComponent: Record<string, number>
  qaHotspots: MigrationQaHotspot[]
}

interface ResolvedMigrationInput {
  scope: MigrationScope
  scopeRoot: string
  filePattern: string
}

function containsGlob(value: string) {
  return [...value].some((character) => GLOB_CHARACTERS.includes(character))
}

function toPosixPath(value: string) {
  return value.split(path.sep).join('/')
}

function relativePath(filePath: string, cwd: string) {
  const relative = path.relative(cwd, filePath)
  return relative && !relative.startsWith('..') && !path.isAbsolute(relative)
    ? toPosixPath(relative)
    : toPosixPath(filePath)
}

function globRoot(pattern: string, cwd: string) {
  const absolutePattern = path.resolve(cwd, pattern)
  const firstGlobIndex = [...absolutePattern].findIndex((character) =>
    GLOB_CHARACTERS.includes(character)
  )
  if (firstGlobIndex === -1) {
    return path.dirname(absolutePattern)
  }
  const staticPrefix = absolutePattern.slice(0, firstGlobIndex)
  return staticPrefix.endsWith(path.sep)
    ? staticPrefix.slice(0, -1)
    : path.dirname(staticPrefix)
}

function assertInsideCwd(filePath: string, cwd: string) {
  const relative = path.relative(cwd, filePath)
  if (relative.startsWith('..') || path.isAbsolute(relative)) {
    throw new Error(
      `--scope must stay inside the current repository: ${filePath}`
    )
  }
}

async function resolveMigrationInput(
  files: string | undefined,
  scope: string | undefined,
  cwd: string
): Promise<ResolvedMigrationInput> {
  if (Boolean(files) === Boolean(scope)) {
    throw new Error('Pass exactly one of --scope or --files.')
  }

  if (scope) {
    const realCwd = await fs.realpath(cwd)
    const requestedPath = path.resolve(realCwd, scope)
    let resolvedPath: string
    try {
      resolvedPath = await fs.realpath(requestedPath)
    } catch {
      throw new Error(`--scope does not exist: ${scope}`)
    }
    assertInsideCwd(resolvedPath, realCwd)
    const stat = await fs.stat(resolvedPath)
    if (!stat.isDirectory() && !stat.isFile()) {
      throw new Error(`--scope must be a source file or directory: ${scope}`)
    }
    if (stat.isFile() && !/\.tsx?$/.test(resolvedPath)) {
      throw new Error(`--scope file must use a .ts or .tsx extension: ${scope}`)
    }
    const scopeSegments = path.relative(realCwd, resolvedPath).split(path.sep)
    if (
      scopeSegments.some((segment) => EXCLUDED_DIRECTORY_NAMES.has(segment))
    ) {
      throw new Error(`--scope points inside an excluded directory: ${scope}`)
    }

    const filePattern = stat.isDirectory()
      ? `${toPosixPath(resolvedPath)}/**/*.{ts,tsx}`
      : toPosixPath(resolvedPath)
    return {
      scope: {
        input: scope,
        kind: stat.isDirectory() ? 'directory' : 'file',
        resolvedPath: relativePath(resolvedPath, realCwd),
        glob: relativePath(filePattern, realCwd),
      },
      scopeRoot: stat.isDirectory() ? resolvedPath : path.dirname(resolvedPath),
      filePattern,
    }
  }

  const inputPattern = files as string
  const filePattern = toPosixPath(path.resolve(cwd, inputPattern))
  const scopeRoot = globRoot(filePattern, cwd)
  return {
    scope: {
      input: inputPattern,
      kind: containsGlob(inputPattern) ? 'glob' : 'file',
      resolvedPath: relativePath(
        containsGlob(inputPattern) ? scopeRoot : filePattern,
        cwd
      ),
      glob: inputPattern,
    },
    scopeRoot,
    filePattern,
  }
}

function isExcludedSourceFile(filePath: string, scopeRoot: string) {
  const relative = path.relative(scopeRoot, filePath)
  return relative
    .split(path.sep)
    .slice(0, -1)
    .some((segment) => EXCLUDED_DIRECTORY_NAMES.has(segment))
}

async function findSourceFiles(directory: string): Promise<string[]> {
  const entries = await fs.readdir(directory, { withFileTypes: true })
  const nestedFiles = await Promise.all(
    entries
      .sort((left, right) => left.name.localeCompare(right.name))
      .map(async (entry) => {
        const entryPath = path.join(directory, entry.name)
        if (entry.isDirectory()) {
          return EXCLUDED_DIRECTORY_NAMES.has(entry.name)
            ? []
            : findSourceFiles(entryPath)
        }
        return entry.isFile() && /\.tsx?$/.test(entry.name) ? [entryPath] : []
      })
  )
  return nestedFiles.flat()
}

async function addSourceFiles(
  project: ReturnType<typeof createProject>,
  input: ResolvedMigrationInput
) {
  let sourceFiles
  if (input.scope.kind === 'directory') {
    const filePaths = await findSourceFiles(input.scopeRoot)
    sourceFiles = filePaths.map((filePath) =>
      project.addSourceFileAtPath(filePath)
    )
  } else if (containsGlob(input.filePattern)) {
    const projectPattern = path.isAbsolute(input.filePattern)
      ? path.relative(process.cwd(), input.filePattern)
      : input.filePattern
    sourceFiles = project.addSourceFilesAtPaths(projectPattern)
  } else {
    sourceFiles = [project.addSourceFileAtPath(input.filePattern)]
  }
  return sourceFiles
    .filter(
      (sourceFile) =>
        !isExcludedSourceFile(sourceFile.getFilePath(), input.scopeRoot)
    )
    .sort((left, right) =>
      left.getFilePath().localeCompare(right.getFilePath())
    )
}

function countBy<T>(items: T[], getKey: (item: T) => string) {
  const counts = new Map<string, number>()
  items.forEach((item) => {
    const key = getKey(item)
    counts.set(key, (counts.get(key) ?? 0) + 1)
  })
  return Object.fromEntries(
    [...counts.entries()].sort(([left], [right]) => left.localeCompare(right))
  )
}

function hotspotPath(filePath: string, scopeRoot: string, depth: number) {
  const relative = path.relative(scopeRoot, filePath)
  if (relative.startsWith('..') || path.isAbsolute(relative)) {
    return toPosixPath(path.dirname(filePath))
  }
  const directories = relative.split(path.sep).slice(0, -1)
  return directories.length === 0
    ? '.'
    : toPosixPath(directories.slice(0, depth).join(path.sep))
}

function createQaHotspots(
  changedFilePaths: string[],
  diagnostics: MigrationDiagnostic[],
  scopeRoot: string,
  depth: number
) {
  const entries = new Map<
    string,
    {
      changedFiles: Set<string>
      diagnosticFiles: Set<string>
      diagnostics: number
      risks: Map<string, number>
    }
  >()
  const entryFor = (filePath: string) => {
    const key = hotspotPath(filePath, scopeRoot, depth)
    const entry = entries.get(key) ?? {
      changedFiles: new Set<string>(),
      diagnosticFiles: new Set<string>(),
      diagnostics: 0,
      risks: new Map<string, number>(),
    }
    entries.set(key, entry)
    return entry
  }

  changedFilePaths.forEach((filePath) =>
    entryFor(filePath).changedFiles.add(filePath)
  )
  diagnostics.forEach((diagnostic) => {
    const entry = entryFor(diagnostic.filePath)
    entry.diagnosticFiles.add(diagnostic.filePath)
    entry.diagnostics += 1
    entry.risks.set(
      diagnostic.code,
      (entry.risks.get(diagnostic.code) ?? 0) + 1
    )
  })

  return [...entries.entries()]
    .map(([entryPath, entry]) => ({
      path: entryPath,
      changedFiles: entry.changedFiles.size,
      diagnosticFiles: entry.diagnosticFiles.size,
      diagnostics: entry.diagnostics,
      risks: Object.fromEntries(
        [...entry.risks.entries()].sort(([, left], [, right]) => right - left)
      ),
    }))
    .sort(
      (left, right) =>
        right.diagnostics - left.diagnostics ||
        right.diagnosticFiles - left.diagnosticFiles ||
        right.changedFiles - left.changedFiles ||
        left.path.localeCompare(right.path)
    )
}

function normalizeLocations<T extends { filePath: string }>(
  items: T[],
  cwd: string
) {
  return items.map((item) => ({
    ...item,
    filePath: relativePath(item.filePath, cwd),
  }))
}

function markdownTable(headers: string[], rows: string[][]) {
  if (rows.length === 0) {
    return '_None_'
  }
  const escape = (value: string) => value.replaceAll('|', '\\|')
  return [
    `| ${headers.map(escape).join(' | ')} |`,
    `| ${headers.map(() => '---').join(' | ')} |`,
    ...rows.map((row) => `| ${row.map(escape).join(' | ')} |`),
  ].join('\n')
}

export function renderBetaComponentMigrationMarkdown(
  report: BetaComponentMigrationReport
) {
  const mode = report.dryRun ? 'Dry run' : 'Write'
  const hotspotRows = report.qaHotspots.slice(0, 20).map((hotspot) => [
    `\`${hotspot.path}\``,
    String(hotspot.changedFiles),
    String(hotspot.diagnosticFiles),
    String(hotspot.diagnostics),
    Object.entries(hotspot.risks)
      .slice(0, 3)
      .map(([code, count]) => `${code} (${count})`)
      .join(', ') || '-',
  ])
  const lines = [
    '# Bezier Beta Migration Summary',
    '',
    `- Mode: ${mode}`,
    `- Scope: \`${report.scope.resolvedPath}\``,
    `- Resolved glob: \`${report.scope.glob}\``,
    '',
    '## Summary',
    '',
    markdownTable(
      [
        'Scanned',
        'Changed',
        'Changes',
        'Warnings',
        'Errors',
        'Diagnostic files',
      ],
      [
        [
          String(report.summary.scannedFiles),
          String(report.summary.changedFiles),
          String(report.summary.changes),
          String(report.summary.warnings),
          String(report.summary.errors),
          String(report.summary.filesWithDiagnostics),
        ],
      ]
    ),
    '',
    '## Automatic Changes',
    '',
    markdownTable(
      ['Change type', 'Count'],
      Object.entries(report.changesByCode)
        .sort(([, left], [, right]) => right - left)
        .map(([code, count]) => [`\`${code}\``, String(count)])
    ),
    '',
    '## Diagnostic Categories',
    '',
    markdownTable(
      ['Diagnostic', 'Count'],
      Object.entries(report.diagnosticsByCode)
        .sort(([, left], [, right]) => right - left)
        .map(([code, count]) => [`\`${code}\``, String(count)])
    ),
    '',
    '## QA Hotspots',
    '',
    markdownTable(
      [
        'Path',
        'Changed files',
        'Diagnostic files',
        'Diagnostics',
        'Main risks',
      ],
      hotspotRows
    ),
    '',
    '## Changed Files',
    '',
    report.changedFilePaths.length > 0
      ? report.changedFilePaths
          .map((filePath) => `- \`${filePath}\``)
          .join('\n')
      : '_None_',
    '',
  ]
  return `${lines.join('\n')}\n`
}

export async function runBetaComponentMigration({
  files,
  scope,
  dryRun = false,
  reportPath,
  summaryPath,
  cwd = process.cwd(),
  hotspotDepth = 2,
  onScopeResolved,
}: RunBetaComponentMigrationOptions) {
  if (!Number.isInteger(hotspotDepth) || hotspotDepth < 1) {
    throw new Error('hotspotDepth must be a positive integer.')
  }

  const absoluteCwd = await fs.realpath(path.resolve(cwd))
  const input = await resolveMigrationInput(files, scope, absoluteCwd)
  const project = createProject()
  const sourceFiles = await addSourceFiles(project, input)
  onScopeResolved?.(input.scope, sourceFiles.length)

  const diagnostics: MigrationDiagnostic[] = []
  const changes: MigrationChange[] = []
  const changedFilePaths: string[] = []

  for (const sourceFile of sourceFiles) {
    const before = sourceFile.getFullText()
    try {
      const result = transform(sourceFile)
      diagnostics.push(...result.diagnostics)
      changes.push(...result.changes)
      if (sourceFile.getFullText() !== before) {
        changedFilePaths.push(sourceFile.getFilePath())
        if (!dryRun) {
          await sourceFile.save()
        }
      }
    } catch (error) {
      diagnostics.push({
        code: 'transform-failed',
        severity: 'error',
        filePath: sourceFile.getFilePath(),
        line: 1,
        column: 1,
        message: error instanceof Error ? error.message : String(error),
        suggestion: 'Inspect this file manually and rerun the migration.',
      })
    }
  }

  const normalizedChanges = normalizeLocations(changes, absoluteCwd)
  const normalizedDiagnostics = normalizeLocations(diagnostics, absoluteCwd)
  const normalizedChangedFilePaths = changedFilePaths.map((filePath) =>
    relativePath(filePath, absoluteCwd)
  )
  const filesWithDiagnostics = new Set(
    normalizedDiagnostics.map(({ filePath }) => filePath)
  ).size
  const report: BetaComponentMigrationReport = {
    version: 2,
    transform: 'beta-component-migration',
    dryRun,
    cwd: toPosixPath(absoluteCwd),
    scope: input.scope,
    summary: {
      scannedFiles: sourceFiles.length,
      changedFiles: normalizedChangedFilePaths.length,
      changes: normalizedChanges.length,
      warnings: normalizedDiagnostics.filter(
        ({ severity }) => severity === 'warning'
      ).length,
      errors: normalizedDiagnostics.filter(
        ({ severity }) => severity === 'error'
      ).length,
      filesWithDiagnostics,
    },
    changedFilePaths: normalizedChangedFilePaths,
    changes: normalizedChanges,
    changesByCode: countBy(normalizedChanges, ({ code }) => code),
    diagnostics: normalizedDiagnostics,
    diagnosticsByCode: countBy(normalizedDiagnostics, ({ code }) => code),
    diagnosticsByComponent: countBy(
      normalizedDiagnostics,
      ({ component }) => component ?? '(unscoped)'
    ),
    qaHotspots: createQaHotspots(
      changedFilePaths,
      diagnostics,
      input.scopeRoot,
      hotspotDepth
    ),
  }

  if (reportPath) {
    const absoluteReportPath = path.resolve(absoluteCwd, reportPath)
    await fs.mkdir(path.dirname(absoluteReportPath), { recursive: true })
    await fs.writeFile(
      absoluteReportPath,
      `${JSON.stringify(report, null, 2)}\n`,
      'utf8'
    )
  }
  if (summaryPath) {
    const absoluteSummaryPath = path.resolve(absoluteCwd, summaryPath)
    await fs.mkdir(path.dirname(absoluteSummaryPath), { recursive: true })
    await fs.writeFile(
      absoluteSummaryPath,
      renderBetaComponentMigrationMarkdown(report),
      'utf8'
    )
  }

  return report
}
