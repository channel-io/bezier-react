/* eslint-disable @typescript-eslint/no-explicit-any */

import { readFileSync, statSync } from 'node:fs'
import { createRequire } from 'node:module'
import { dirname, extname, join, resolve as resolvePath } from 'node:path'

export type AstNode = any

interface ImportBinding {
  imported: string
  source: string
}

interface CachedModule {
  mtimeMs: number
  size: number
  state: ProgramState
}

const BEZIER_ENTRYPOINTS = new Set([
  '@channel.io/bezier-react',
  '@channel.io/bezier-react/beta',
])
const SOURCE_EXTENSIONS = [
  '.ts',
  '.tsx',
  '.js',
  '.jsx',
  '.mts',
  '.cts',
  '.mjs',
  '.cjs',
]
const moduleCache = new Map<string, CachedModule>()

export function jsxName(node: AstNode): string | null {
  if (!node) return null
  if (node.type === 'JSXIdentifier') return node.name
  if (node.type === 'JSXMemberExpression') {
    const object = jsxName(node.object)
    const property = jsxName(node.property)
    return object && property ? `${object}.${property}` : null
  }
  return null
}

export function propertyName(node: AstNode): string | null {
  if (!node || node.computed) return null
  if (node.key?.type === 'Identifier') return node.key.name
  if (node.key?.type === 'Literal') return String(node.key.value)
  return null
}

export function jsxAttribute(node: AstNode, name: string) {
  return node.attributes?.find(
    (attribute: AstNode) =>
      attribute.type === 'JSXAttribute' && attribute.name?.name === name
  )
}

export function staticObjectProperties(node: AstNode) {
  if (node?.type !== 'ObjectExpression') return null
  const result = new Map<string, unknown>()
  for (const property of node.properties ?? []) {
    if (property.type !== 'Property' || property.computed) return null
    const name = propertyName(property)
    if (!name) return null
    const value = property.value
    if (value.type === 'Literal') {
      result.set(name, value.value)
    } else if (value.type === 'TemplateLiteral' && value.expressions.length === 0) {
      result.set(name, value.quasis[0]?.value.cooked ?? '')
    } else {
      return null
    }
  }
  return result
}

export function expressionName(node: AstNode): string | null {
  let expression = node
  while (
    expression &&
    [
      'ChainExpression',
      'TSAsExpression',
      'TSNonNullExpression',
      'TSTypeAssertion',
    ].includes(expression.type)
  ) {
    expression = expression.expression
  }
  if (expression?.type === 'Identifier') return expression.name
  if (
    expression?.type === 'MemberExpression' &&
    !expression.computed &&
    expression.object?.type === 'Identifier' &&
    expression.property?.type === 'Identifier'
  ) {
    return `${expression.object.name}.${expression.property.name}`
  }
  return null
}

function unwrapStyledTag(tag: AstNode) {
  let expression = tag
  while (
    expression?.type === 'CallExpression' &&
    expression.callee?.type === 'MemberExpression' &&
    !expression.callee.computed &&
    expression.callee.property?.name === 'attrs'
  ) {
    expression = expression.callee.object
  }
  return expression
}

function resolveRelativeModule(importer: string | null, source: string) {
  if (!importer || !source.startsWith('.')) return null
  const base = resolvePath(dirname(importer), source)
  const extension = extname(base)
  const stem = SOURCE_EXTENSIONS.includes(extension)
    ? base.slice(0, -extension.length)
    : base
  const candidates = [
    base,
    ...SOURCE_EXTENSIONS.map((value) => `${stem}${value}`),
    ...SOURCE_EXTENSIONS.map((value) => join(base, `index${value}`)),
  ]
  for (const candidate of new Set(candidates)) {
    try {
      if (statSync(candidate).isFile()) return candidate
    } catch {
      continue
    }
  }
  return null
}

function loadModule(filename: string, cwd: string) {
  try {
    const stat = statSync(filename)
    const cached = moduleCache.get(filename)
    if (cached?.mtimeMs === stat.mtimeMs && cached.size === stat.size) {
      return cached.state
    }
    const consumerRequire = createRequire(join(resolvePath(cwd), 'package.json'))
    const parser = consumerRequire('@typescript-eslint/parser') as {
      parse: (code: string, options: Record<string, unknown>) => AstNode
    }
    const program = parser.parse(readFileSync(filename, 'utf8'), {
      ecmaFeatures: { jsx: /\.[cm]?[jt]sx$/u.test(filename) },
      ecmaVersion: 2024,
      filePath: filename,
      sourceType: 'module',
    })
    const state = ProgramState.fromProgram(filename, cwd, program)
    moduleCache.set(filename, {
      mtimeMs: stat.mtimeMs,
      size: stat.size,
      state,
    })
    return state
  } catch {
    return null
  }
}

export class ProgramState {
  private readonly declarations = new Map<string, AstNode>()
  private readonly exportBindings = new Map<string, string>()
  private readonly imports = new Map<string, ImportBinding>()
  private readonly styledBindings = new Set<string>()

  constructor(
    private readonly filename: string | null = null,
    private readonly cwd = process.cwd()
  ) {}

  static fromProgram(filename: string, cwd: string, program: AstNode) {
    const state = new ProgramState(filename, cwd)
    for (const statement of program.body ?? []) state.visitStatement(statement)
    return state
  }

  private visitStatement(statement: AstNode) {
    if (statement.type === 'ImportDeclaration') {
      this.visitImport(statement)
      return
    }
    if (statement.type === 'ExportNamedDeclaration') {
      this.visitExport(statement)
      return
    }
    if (statement.type === 'VariableDeclaration') {
      for (const declaration of statement.declarations ?? []) {
        this.visitVariable(declaration)
      }
    }
  }

  visitImport(node: AstNode) {
    const source = String(node.source.value)
    for (const specifier of node.specifiers ?? []) {
      if (specifier.type === 'ImportSpecifier') {
        this.imports.set(specifier.local.name, {
          imported: specifier.imported.name ?? specifier.imported.value,
          source,
        })
      } else if (specifier.type === 'ImportNamespaceSpecifier') {
        this.imports.set(specifier.local.name, { imported: '*', source })
      } else if (specifier.type === 'ImportDefaultSpecifier') {
        this.imports.set(specifier.local.name, { imported: 'default', source })
      }
      if (
        source === 'styled-components' &&
        (specifier.type === 'ImportDefaultSpecifier' ||
          specifier.type === 'ImportNamespaceSpecifier' ||
          (specifier.type === 'ImportSpecifier' &&
            (specifier.imported.name ?? specifier.imported.value) === 'styled'))
      ) {
        this.styledBindings.add(specifier.local.name)
      }
    }
  }

  visitVariable(node: AstNode) {
    if (node.id?.type === 'Identifier' && node.init) {
      this.declarations.set(node.id.name, node.init)
    }
  }

  visitExport(node: AstNode) {
    const declaration = node.declaration
    if (declaration?.type === 'VariableDeclaration') {
      for (const value of declaration.declarations ?? []) {
        this.visitVariable(value)
        if (value.id?.type === 'Identifier') {
          this.exportBindings.set(value.id.name, value.id.name)
        }
      }
    }
    if (!declaration) {
      for (const specifier of node.specifiers ?? []) {
        if (specifier.type !== 'ExportSpecifier') continue
        const local = specifier.local.name ?? String(specifier.local.value)
        const exported = specifier.exported.name ?? String(specifier.exported.value)
        this.exportBindings.set(exported, local)
      }
    }
  }

  importSource(name: string | null) {
    if (!name) return null
    const [root] = name.split('.')
    return this.imports.get(root)?.source ?? null
  }

  isStyledTemplate(tag: AstNode) {
    const expression = unwrapStyledTag(tag)
    const root = expressionName(
      expression?.type === 'CallExpression' ? expression.callee : expression
    )?.split('.')[0]
    return Boolean(root && this.styledBindings.has(root))
  }

  resolveStyledTarget(tag: AstNode) {
    const expression = unwrapStyledTag(tag)
    if (
      expression?.type === 'MemberExpression' &&
      !expression.computed &&
      expression.object?.type === 'Identifier' &&
      this.styledBindings.has(expression.object.name) &&
      expression.property?.type === 'Identifier'
    ) {
      return expression.property.name
    }
    if (expression?.type !== 'CallExpression') return null
    const styledRoot = expressionName(expression.callee)?.split('.')[0]
    const target = expression.arguments?.[0]
    return styledRoot && this.styledBindings.has(styledRoot) && target
      ? this.resolve(expressionName(target))
      : null
  }

  resolve(name: string | null, seen = new Set<string>()): string | null {
    if (!name) return null
    if (/^[a-z]/u.test(name)) return name
    const key = `${this.filename ?? '<input>'}:${name}`
    if (seen.has(key)) return null
    const nextSeen = new Set(seen).add(key)
    const [root, member] = name.split('.', 2)
    const binding = this.imports.get(root)
    if (binding) {
      if (BEZIER_ENTRYPOINTS.has(binding.source)) {
        return binding.imported === '*' ? member ?? null : binding.imported
      }
      const modulePath = resolveRelativeModule(this.filename, binding.source)
      const exported = binding.imported === '*' ? member : binding.imported
      return modulePath && exported
        ? loadModule(modulePath, this.cwd)?.resolveExport(exported, nextSeen) ?? null
        : null
    }
    if (member) return null
    const initializer = this.declarations.get(root)
    if (!initializer) return null
    if (initializer.type === 'TaggedTemplateExpression') {
      const target = unwrapStyledTag(initializer.tag)
      if (
        target?.type === 'MemberExpression' &&
        !target.computed &&
        target.object?.type === 'Identifier' &&
        this.styledBindings.has(target.object.name) &&
        target.property?.type === 'Identifier'
      ) {
        return target.property.name
      }
      if (target?.type !== 'CallExpression') return null
      const styledRoot = expressionName(target.callee)?.split('.')[0]
      const wrapped = target.arguments?.[0]
      return styledRoot && this.styledBindings.has(styledRoot) && wrapped
        ? this.resolve(expressionName(wrapped), nextSeen)
        : null
    }
    return this.resolve(expressionName(initializer), nextSeen)
  }

  private resolveExport(exported: string, seen: Set<string>) {
    const local = this.exportBindings.get(exported)
    return local ? this.resolve(local, seen) : null
  }
}

export function contextCwd(context: AstNode) {
  return context.cwd ?? context.getCwd?.() ?? process.cwd()
}

export function contextFilename(context: AstNode) {
  const filename = context.filename ?? context.getFilename?.() ?? null
  return filename && !String(filename).startsWith('<') ? String(filename) : null
}
