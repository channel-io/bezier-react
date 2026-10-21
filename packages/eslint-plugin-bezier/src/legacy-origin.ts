import { readFileSync, statSync } from 'node:fs'
import { createRequire } from 'node:module'
import { dirname, extname, join, resolve } from 'node:path'

import { type AstNode, expressionName, jsxName } from './ast.js'

const ROOT = '@channel.io/bezier-react'
const EXTENSIONS = [
  '.ts',
  '.tsx',
  '.js',
  '.jsx',
  '.mts',
  '.cts',
  '.mjs',
  '.cjs',
]
interface Binding {
  source: string
  imported: string
}
interface Module {
  filename: string
  declarations: Map<string, AstNode>
  imports: Map<string, Binding>
  exports: Map<string, AstNode | Binding>
  stars: string[]
}

function sourceFile(base: string) {
  const extension = extname(base)
  const stem = EXTENSIONS.includes(extension)
    ? base.slice(0, -extension.length)
    : base
  for (const candidate of new Set([
    base,
    ...EXTENSIONS.map((value) => `${stem}${value}`),
    ...EXTENSIONS.map((value) => join(base, `index${value}`)),
  ])) {
    try {
      if (statSync(candidate).isFile()) return candidate
    } catch {
      continue
    }
  }
  return null
}

function resolveModule(importer: string, source: string) {
  if (source.startsWith('.'))
    return sourceFile(resolve(dirname(importer), source))
  try {
    const consumerRequire = createRequire(importer)
    const entry = consumerRequire.resolve(source)
    // Installed workspace packages often publish dist while retaining src. Only
    // inspect this resolved package; never walk all of node_modules.
    const parts = source.split('/')
    const packageName = parts.slice(0, source.startsWith('@') ? 2 : 1).join('/')
    if (source === packageName) {
      let directory = dirname(entry)
      while (dirname(directory) !== directory) {
        try {
          const manifest = JSON.parse(
            readFileSync(join(directory, 'package.json'), 'utf8')
          )
          if (manifest.name === packageName) {
            return sourceFile(join(directory, 'src/index')) ?? sourceFile(entry)
          }
        } catch {
          // Continue toward the owning package root.
        }
        directory = dirname(directory)
      }
    }
    return sourceFile(entry)
  } catch {
    return null
  }
}

function moduleFromProgram(filename: string, program: AstNode): Module {
  const module: Module = {
    filename,
    declarations: new Map(),
    imports: new Map(),
    exports: new Map(),
    stars: [],
  }
  const declare = (node: AstNode) => {
    if (node?.type === 'VariableDeclaration') {
      for (const declaration of node.declarations) {
        if (declaration.id.type === 'Identifier') {
          module.declarations.set(declaration.id.name, declaration.init)
        }
      }
    } else if (node?.id?.name) module.declarations.set(node.id.name, node)
  }
  for (const node of program.body) {
    if (node.type === 'ImportDeclaration' && node.importKind !== 'type') {
      for (const specifier of node.specifiers) {
        if (specifier.importKind === 'type') continue
        module.imports.set(specifier.local.name, {
          source: node.source.value,
          imported:
            specifier.type === 'ImportNamespaceSpecifier'
              ? '*'
              : specifier.type === 'ImportDefaultSpecifier'
                ? 'default'
                : (specifier.imported.name ?? specifier.imported.value),
        })
      }
    } else if (
      node.type === 'ExportAllDeclaration' &&
      node.exportKind !== 'type'
    ) {
      module.stars.push(node.source.value)
    } else if (node.type === 'ExportDefaultDeclaration') {
      declare(node.declaration)
      module.exports.set('default', node.declaration)
    } else if (
      node.type === 'ExportNamedDeclaration' &&
      node.exportKind !== 'type'
    ) {
      declare(node.declaration)
      if (node.declaration?.type === 'VariableDeclaration') {
        for (const declaration of node.declaration.declarations) {
          if (declaration.id.type === 'Identifier') {
            module.exports.set(declaration.id.name, declaration.id)
          }
        }
      } else if (node.declaration?.id?.name) {
        module.exports.set(node.declaration.id.name, node.declaration)
      }
      for (const specifier of node.specifiers) {
        if (specifier.exportKind === 'type') continue
        const exported = specifier.exported.name ?? specifier.exported.value
        module.exports.set(
          exported,
          node.source
            ? {
                source: node.source.value,
                imported: specifier.local.name ?? specifier.local.value,
              }
            : specifier.local
        )
      }
    } else declare(node)
  }
  return module
}

function lexicalModule(module: Module, bindings: AstNode[]): Module {
  const scoped = {
    ...module,
    declarations: new Map(module.declarations),
    imports: new Map(module.imports),
  }
  const bind = (pattern: AstNode, value: AstNode) => {
    if (!pattern) return
    if (pattern.type === 'Identifier') {
      scoped.imports.delete(pattern.name)
      scoped.declarations.set(pattern.name, value)
    } else if (
      pattern.type === 'AssignmentPattern' ||
      pattern.type === 'RestElement'
    ) {
      bind(pattern.left ?? pattern.argument, null)
    } else if (pattern.type === 'ObjectPattern') {
      for (const property of pattern.properties)
        bind(property.value ?? property.argument, null)
    } else if (pattern.type === 'ArrayPattern') {
      for (const element of pattern.elements) bind(element, null)
    }
  }
  for (const node of bindings) {
    if (node.type === 'VariableDeclaration') {
      for (const declaration of node.declarations)
        bind(declaration.id, declaration.init)
    } else if (node.type === 'FunctionDeclaration') bind(node.id, node)
    else bind(node, null)
  }
  return scoped
}

/** Evidence of a legacy render dependency, not a proof of safety on null. */
export class LegacyOriginAnalyzer {
  private readonly modules = new Map<string, Module | null>()
  private readonly input: Module

  constructor(
    filename: string,
    private readonly cwd: string,
    program: AstNode
  ) {
    this.input = moduleFromProgram(filename, program)
  }

  resolveUsed(name: string): string | null {
    const source = this.importedSource(name, new Set())
    if (!source || source === ROOT) return null
    return this.resolveName(this.input, name, new Set())
  }

  private importedSource(name: string, seen: Set<string>): string | null {
    if (seen.has(name)) return null
    const next = new Set(seen).add(name)
    const [root, member] = name.split('.', 2)
    const binding = this.input.imports.get(root)
    if (binding) return binding.source
    const alias = expressionName(this.input.declarations.get(root))
    return alias
      ? this.importedSource(member ? `${alias}.${member}` : alias, next)
      : null
  }

  private load(filename: string) {
    if (this.modules.has(filename)) return this.modules.get(filename) ?? null
    this.modules.set(filename, null)
    try {
      const consumerRequire = createRequire(join(this.cwd, 'package.json'))
      const parser = consumerRequire('@typescript-eslint/parser') as {
        parse: (source: string, options: Record<string, unknown>) => AstNode
      }
      const program = parser.parse(readFileSync(filename, 'utf8'), {
        filePath: filename,
        ecmaFeatures: { jsx: /\.[jt]sx$/u.test(filename) },
        sourceType: 'module',
        ecmaVersion: 2024,
      })
      const module = moduleFromProgram(filename, program)
      this.modules.set(filename, module)
      return module
    } catch {
      return null
    }
  }

  private follow(
    module: Module,
    binding: Binding,
    seen: Set<string>
  ): string | null {
    if (binding.source === ROOT) return `${ROOT}:${binding.imported}`
    if (binding.source.startsWith(`${ROOT}/`)) return null
    const filename = resolveModule(module.filename, binding.source)
    const target = filename ? this.load(filename) : null
    return target ? this.resolveExport(target, binding.imported, seen) : null
  }

  private resolveExport(
    module: Module,
    name: string,
    seen: Set<string>
  ): string | null {
    const key = `${module.filename}:export:${name}`
    if (seen.has(key)) return null
    const next = new Set(seen).add(key)
    const binding = module.exports.get(name)
    if (binding) {
      return 'source' in binding && typeof binding.source === 'string'
        ? this.follow(module, binding as Binding, next)
        : this.expression(module, binding, next)
    }
    for (const source of module.stars) {
      const origin = this.follow(module, { source, imported: name }, next)
      if (origin) return origin
    }
    return null
  }

  private resolveName(
    module: Module,
    name: string,
    seen: Set<string>
  ): string | null {
    const key = `${module.filename}:local:${name}`
    if (seen.has(key)) return null
    const next = new Set(seen).add(key)
    const [root, member] = name.split('.', 2)
    const binding = module.imports.get(root)
    if (binding) {
      return this.follow(
        module,
        {
          ...binding,
          imported:
            binding.imported === '*' ? (member ?? '*') : binding.imported,
        },
        next
      )
    }
    const declaration = module.declarations.get(root)
    if (member) {
      const alias = expressionName(declaration)
      return alias ? this.resolveName(module, `${alias}.${member}`, next) : null
    }
    return this.expression(module, declaration, next)
  }

  private expression(
    module: Module,
    node: AstNode,
    seen: Set<string>
  ): string | null {
    if (!node) return null
    const name = expressionName(node)
    if (name) return this.resolveName(module, name, seen)
    if (node.type === 'TaggedTemplateExpression') {
      let tag = node.tag
      while (
        tag.type === 'CallExpression' &&
        tag.callee.type === 'MemberExpression' &&
        tag.callee.property.name === 'attrs'
      )
        tag = tag.callee.object
      if (
        tag.type !== 'CallExpression' ||
        !this.isImported(module, tag.callee, 'styled-components', [
          'default',
          'styled',
        ])
      )
        return null
      return this.expression(module, tag.arguments[0], seen)
    }
    if (node.type === 'CallExpression') {
      if (
        this.isImported(module, node.callee, 'react', ['memo', 'forwardRef'])
      ) {
        return this.expression(module, node.arguments[0], seen)
      }
      if (this.isImported(module, node.callee, 'react', ['createElement'])) {
        return this.expression(module, node.arguments[0], seen)
      }
      return null
    }
    if (
      [
        'ArrowFunctionExpression',
        'FunctionExpression',
        'FunctionDeclaration',
      ].includes(node.type)
    ) {
      return this.rendered(lexicalModule(module, node.params), node.body, seen)
    }
    return null
  }

  private isImported(
    module: Module,
    node: AstNode,
    source: string,
    names: string[]
  ) {
    const name = expressionName(node)
    if (!name) return false
    const [root, member] = name.split('.', 2)
    const binding = module.imports.get(root)
    return (
      binding?.source === source &&
      (binding.imported === '*' || (binding.imported === 'default' && member)
        ? names.includes(member ?? '')
        : names.includes(binding.imported))
    )
  }

  private rendered(
    module: Module,
    node: AstNode,
    seen: Set<string>
  ): string | null {
    if (!node || typeof node !== 'object') return null
    if (
      [
        'ArrowFunctionExpression',
        'FunctionExpression',
        'FunctionDeclaration',
      ].includes(node.type)
    )
      return null
    if (node.type === 'BlockStatement') {
      const scoped = lexicalModule(
        module,
        node.body.filter((statement: AstNode) =>
          ['VariableDeclaration', 'FunctionDeclaration'].includes(
            statement.type
          )
        )
      )
      for (const statement of node.body) {
        const origin = this.rendered(scoped, statement, seen)
        if (origin) return origin
      }
      return null
    }
    if (node.type === 'JSXOpeningElement') {
      const name = jsxName(node.name)
      return name && !/^[a-z]/u.test(name)
        ? this.resolveName(module, name, seen)
        : null
    }
    if (
      node.type === 'CallExpression' &&
      this.isImported(module, node.callee, 'react', ['createElement'])
    ) {
      const origin = this.expression(module, node.arguments[0], seen)
      if (origin) return origin
    }
    for (const [key, value] of Object.entries(node)) {
      if (['parent', 'loc', 'range', 'tokens', 'comments'].includes(key))
        continue
      for (const child of Array.isArray(value) ? value : [value]) {
        const origin = this.rendered(module, child, seen)
        if (origin) return origin
      }
    }
    return null
  }
}
