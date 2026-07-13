export type MigrationDiagnosticSeverity = 'warning' | 'error'

export interface MigrationDiagnostic {
  code: string
  severity: MigrationDiagnosticSeverity
  filePath: string
  line: number
  column: number
  component?: string
  message: string
  suggestion?: string
}

export type MigrationChangeCode =
  | 'anchor-normalized'
  | 'default-preserved'
  | 'form-converted'
  | 'import-moved'
  | 'legacy-enum-converted'
  | 'literal-mapped'
  | 'prop-renamed'
  | 'tabs-updated'

export interface MigrationChange {
  code: MigrationChangeCode
  filePath: string
  line: number
  column: number
  component?: string
  message: string
}

export interface BetaComponentMigrationResult {
  changes: MigrationChange[]
  diagnostics: MigrationDiagnostic[]
}
