import { execFileSync } from 'node:child_process'
import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  statSync,
  writeFileSync,
} from 'node:fs'
import { dirname, join, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import ts from 'typescript'

export const SCHEMA_VERSION = '1.0.0'

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '../..')
const repository = 'https://github.com/channel-io/bezier-react'

function readJson(path) {
  return JSON.parse(readFileSync(path, 'utf8'))
}

function packageInfo(packageDir) {
  const { name, version } = readJson(join(packageDir, 'package.json'))
  return { name, version }
}

function sourceInfo(entrypoint) {
  return {
    repository,
    commit: execFileSync('git', ['rev-parse', 'HEAD'], {
      cwd: rootDir,
      encoding: 'utf8',
    }).trim(),
    entrypoint,
  }
}

function stableJson(value) {
  return `${JSON.stringify(value, null, 2)}\n`
}

function writeOrCheck(outputPath, manifest, check) {
  const next = stableJson(manifest)
  if (check) {
    if (!existsSync(outputPath)) {
      throw new Error(
        `Missing generated manifest: ${relative(rootDir, outputPath)}`
      )
    }
    if (readFileSync(outputPath, 'utf8') !== next) {
      throw new Error(
        `Stale generated manifest: ${relative(rootDir, outputPath)}. Run yarn manifest:generate.`
      )
    }
    return
  }
  mkdirSync(dirname(outputPath), { recursive: true })
  writeFileSync(outputPath, next)
}

function exportedNames(checker, sourceFile) {
  const symbol = checker.getSymbolAtLocation(sourceFile)
  if (!symbol) return []
  return checker
    .getExportsOfModule(symbol)
    .map((entry) => entry.getName())
    .sort((a, b) => a.localeCompare(b))
}

function aliasedSymbol(checker, symbol) {
  return symbol.flags & ts.SymbolFlags.Alias
    ? checker.getAliasedSymbol(symbol)
    : symbol
}

function jsDoc(checker, symbol) {
  return ts.displayPartsToString(symbol.getDocumentationComment(checker)).trim()
}

function jsDocTags(symbol) {
  return Object.fromEntries(
    symbol.getJsDocTags().map(({ name, text }) => [
      name,
      text
        ?.map((part) => part.text)
        .join('')
        .trim() ?? '',
    ])
  )
}

function literalValues(type) {
  const members = (type.isUnion() ? type.types : [type]).filter(
    (member) => !(member.flags & ts.TypeFlags.Undefined)
  )
  const values = members.flatMap((member) => {
    if (member.isStringLiteral() || member.isNumberLiteral()) {
      return [member.value]
    }
    if (member.flags & ts.TypeFlags.BooleanLiteral) {
      return [member.intrinsicName === 'true']
    }
    return []
  })
  return values.length === members.length ? values : []
}

function propsFor(checker, symbol) {
  const target = aliasedSymbol(checker, symbol)
  const type = checker.getDeclaredTypeOfSymbol(target)
  return checker
    .getPropertiesOfType(type)
    .filter((property) =>
      property.declarations?.some(
        (declaration) =>
          !declaration.getSourceFile().fileName.includes('/node_modules/')
      )
    )
    .map((property) => {
      const declaration =
        property.valueDeclaration ?? property.declarations?.[0]
      const propertyType = declaration
        ? checker.getTypeOfSymbolAtLocation(property, declaration)
        : checker.getDeclaredTypeOfSymbol(property)
      const tags = jsDocTags(property)
      return {
        name: property.getName(),
        required: !(property.flags & ts.SymbolFlags.Optional),
        type: checker.typeToString(
          propertyType,
          declaration,
          ts.TypeFormatFlags.NoTruncation |
            ts.TypeFormatFlags.UseAliasDefinedOutsideCurrentScope
        ),
        literalValues: literalValues(propertyType),
        default: tags.default || null,
        deprecated: Object.hasOwn(tags, 'deprecated'),
        description: jsDoc(checker, property) || null,
      }
    })
    .sort((a, b) => a.name.localeCompare(b.name))
}

function isComponentSymbol(checker, name, symbol) {
  if (!/^[A-Z]/.test(name)) return false
  const target = aliasedSymbol(checker, symbol)
  if (!(target.flags & ts.SymbolFlags.Value)) return false
  const declaration = target.valueDeclaration ?? target.declarations?.[0]
  if (!declaration) return false
  const type = checker.getTypeOfSymbolAtLocation(target, declaration)
  return checker.getSignaturesOfType(type, ts.SignatureKind.Call).length > 0
}

function evaluateLiteral(node) {
  if (ts.isStringLiteralLike(node)) return node.text
  if (node.kind === ts.SyntaxKind.TrueKeyword) return true
  if (node.kind === ts.SyntaxKind.FalseKeyword) return false
  if (ts.isArrayLiteralExpression(node))
    return node.elements.map(evaluateLiteral)
  if (ts.isObjectLiteralExpression(node)) {
    return Object.fromEntries(
      node.properties.map((property) => {
        if (!ts.isPropertyAssignment(property)) {
          throw new Error('Bezier metadata only supports property assignments')
        }
        const name = property.name.getText().replace(/^['"]|['"]$/g, '')
        return [name, evaluateLiteral(property.initializer)]
      })
    )
  }
  throw new Error(`Unsupported Bezier metadata expression: ${node.getText()}`)
}

function readStoryMetadata(storyPath) {
  if (!existsSync(storyPath)) return null
  const source = ts.createSourceFile(
    storyPath,
    readFileSync(storyPath, 'utf8'),
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX
  )
  let metadata = null
  function visit(node) {
    if (
      ts.isCallExpression(node) &&
      ts.isIdentifier(node.expression) &&
      node.expression.text === 'defineBezierMetadata'
    ) {
      if (metadata)
        throw new Error(`Multiple Bezier metadata blocks: ${storyPath}`)
      metadata = evaluateLiteral(node.arguments[0])
    }
    ts.forEachChild(node, visit)
  }
  visit(source)
  return metadata
}

function findCycle(metadata) {
  const graph = new Map(
    Object.entries(metadata.parts ?? {}).map(([name, value]) => [
      name,
      value.requiresAncestor ?? [],
    ])
  )
  const active = new Set()
  const visited = new Set()
  function visit(name) {
    if (active.has(name)) return true
    if (visited.has(name)) return false
    active.add(name)
    for (const ancestor of graph.get(name) ?? []) {
      if (visit(ancestor)) return true
    }
    active.delete(name)
    visited.add(name)
    return false
  }
  return [...graph.keys()].some(visit)
}

export function validateFamilyMetadata(
  family,
  members,
  metadata,
  hasStory = true
) {
  if (members.length === 1 && !metadata) {
    return {
      model: 'unknown',
      root: members[0],
      parts: {},
      independent: {},
      usage: null,
    }
  }
  if (!hasStory) {
    throw new Error(
      `${family}: multi-component family requires a Story and parameters.bezier`
    )
  }
  if (!metadata) {
    throw new Error(
      `${family}: multi-component family is missing parameters.bezier`
    )
  }
  const classified = [
    metadata.root,
    ...Object.keys(metadata.parts ?? {}),
    ...Object.keys(metadata.independent ?? {}),
  ]
  const missing = members.filter((member) => !classified.includes(member))
  const unknown = classified.filter((member) => !members.includes(member))
  const duplicates = classified.filter(
    (member, index) => classified.indexOf(member) !== index
  )
  if (missing.length)
    throw new Error(
      `${family}: unclassified public member(s): ${missing.join(', ')}`
    )
  if (unknown.length)
    throw new Error(`${family}: stale/unknown member(s): ${unknown.join(', ')}`)
  if (duplicates.length)
    throw new Error(
      `${family}: duplicate member classification: ${duplicates.join(', ')}`
    )
  for (const [member, value] of Object.entries(metadata.parts ?? {})) {
    for (const ancestor of value.requiresAncestor ?? []) {
      if (!members.includes(ancestor)) {
        throw new Error(`${family}.${member}: unknown ancestor ${ancestor}`)
      }
    }
  }
  if (findCycle(metadata)) throw new Error(`${family}: ancestor cycle detected`)
  return { ...metadata, usage: metadata.usage ?? null }
}

export function generateReactManifest() {
  const packageDir = join(rootDir, 'packages/bezier-react')
  const betaDir = join(packageDir, 'src/beta')
  const configPath = join(packageDir, 'tsconfig.json')
  const config = ts.readConfigFile(configPath, ts.sys.readFile)
  const parsed = ts.parseJsonConfigFileContent(
    config.config,
    ts.sys,
    packageDir
  )
  const program = ts.createProgram(parsed.fileNames, parsed.options)
  const checker = program.getTypeChecker()
  const rootIndex = program.getSourceFile(join(betaDir, 'index.ts'))
  const familyNames = rootIndex.statements
    .filter(ts.isExportDeclaration)
    .map((statement) => statement.moduleSpecifier?.text)
    .filter((path) => path?.startsWith('./'))
    .map((path) => path.slice(2))
    .sort((a, b) => a.localeCompare(b))
  const components = []
  const exports = []
  const types = []
  for (const family of familyNames) {
    const familyIndex = program.getSourceFile(join(betaDir, family, 'index.ts'))
    const names = exportedNames(checker, familyIndex)
    const propsNames = new Set(names.filter((name) => name.endsWith('Props')))
    const moduleSymbol = checker.getSymbolAtLocation(familyIndex)
    const symbols = new Map(
      checker
        .getExportsOfModule(moduleSymbol)
        .map((symbol) => [symbol.getName(), symbol])
    )
    const members = names
      .filter(
        (name) =>
          propsNames.has(`${name}Props`) ||
          isComponentSymbol(checker, name, symbols.get(name))
      )
      .sort((a, b) => a.localeCompare(b))
    const storyPath = join(betaDir, family, `${family}.stories.tsx`)
    const semantics = validateFamilyMetadata(
      family,
      members,
      readStoryMetadata(storyPath),
      existsSync(storyPath)
    )
    for (const name of names) {
      const target = aliasedSymbol(checker, symbols.get(name))
      const tags = jsDocTags(target)
      exports.push({
        name,
        family,
        exportPath: './beta',
        kind: members.includes(name)
          ? 'component'
          : target.flags & ts.SymbolFlags.Value
            ? 'runtime'
            : 'type',
        deprecated: Object.hasOwn(tags, 'deprecated'),
        description: jsDoc(checker, target) || null,
      })
    }
    for (const name of members) {
      const symbol = symbols.get(name)
      const target = aliasedSymbol(checker, symbol)
      const tags = jsDocTags(target)
      const propsSymbol = symbols.get(`${name}Props`)
      components.push({
        name,
        family,
        exportPath: './beta',
        propsType: propsSymbol ? `${name}Props` : null,
        deprecated: Object.hasOwn(tags, 'deprecated'),
        description: jsDoc(checker, target) || null,
        props: propsSymbol ? propsFor(checker, propsSymbol) : [],
        semantics,
      })
    }
    for (const name of names.filter((name) => !members.includes(name))) {
      const symbol = symbols.get(name)
      const target = aliasedSymbol(checker, symbol)
      if (
        target.flags &
        (ts.SymbolFlags.TypeAlias |
          ts.SymbolFlags.Interface |
          ts.SymbolFlags.TypeParameter)
      ) {
        const tags = jsDocTags(target)
        types.push({
          name,
          family,
          exportPath: './beta',
          deprecated: Object.hasOwn(tags, 'deprecated'),
          description: jsDoc(checker, target) || null,
        })
      }
    }
  }
  components.sort((a, b) => a.name.localeCompare(b.name))
  exports.sort(
    (a, b) => a.name.localeCompare(b.name) || a.family.localeCompare(b.family)
  )
  types.sort(
    (a, b) => a.name.localeCompare(b.name) || a.family.localeCompare(b.family)
  )
  return {
    schemaVersion: SCHEMA_VERSION,
    package: packageInfo(packageDir),
    source: sourceInfo('src/beta/index.ts'),
    exports,
    components,
    types,
  }
}

function toPascalCase(value) {
  return value.replace(/(^|[-_])(.)/g, (_, __, character) =>
    character.toUpperCase()
  )
}

export function generateIconsManifest() {
  const packageDir = join(rootDir, 'packages/bezier-icons')
  const iconsDir = join(packageDir, 'icons')
  const icons = readdirSync(iconsDir)
    .filter((name) => name.endsWith('.svg'))
    .sort((a, b) => a.localeCompare(b))
    .map((fileName) => {
      const source = readFileSync(join(iconsDir, fileName), 'utf8')
      const name = fileName.slice(0, -4)
      const viewBox = source.match(/viewBox=["']([^"']+)["']/)?.[1] ?? null
      const width =
        source.match(/<svg[^>]*\bwidth=["']([^"']+)["']/)?.[1] ?? null
      const height =
        source.match(/<svg[^>]*\bheight=["']([^"']+)["']/)?.[1] ?? null
      return {
        name,
        componentName: `${toPascalCase(name)}Icon`,
        aliases: [],
        geometry: { viewBox, width, height },
      }
    })
  return {
    schemaVersion: SCHEMA_VERSION,
    package: packageInfo(packageDir),
    source: sourceInfo('icons/*.svg'),
    icons,
  }
}

function walkFiles(directory) {
  return readdirSync(directory)
    .flatMap((name) => {
      const path = join(directory, name)
      return statSync(path).isDirectory() ? walkFiles(path) : [path]
    })
    .sort((a, b) => a.localeCompare(b))
}

function flattenTokens(node, path = [], output = []) {
  for (const [name, value] of Object.entries(node)) {
    const tokenPath = [...path, name]
    if (value && typeof value === 'object' && Object.hasOwn(value, 'value')) {
      output.push({
        name: tokenPath.join('.'),
        category: tokenPath[0],
        valueType: value.type ?? typeof value.value,
        deprecated: Boolean(value.deprecated),
      })
    } else if (value && typeof value === 'object') {
      flattenTokens(value, tokenPath, output)
    }
  }
  return output
}

export function generateTokensManifest() {
  const packageDir = join(rootDir, 'packages/bezier-tokens')
  const sourceDir = join(packageDir, 'src')
  const tokens = walkFiles(sourceDir)
    .filter((path) => path.endsWith('.json'))
    .flatMap((path) =>
      flattenTokens(readJson(path)).map((token) => ({
        ...token,
        source: relative(packageDir, path),
      }))
    )
    .sort(
      (a, b) => a.name.localeCompare(b.name) || a.source.localeCompare(b.source)
    )
  return {
    schemaVersion: SCHEMA_VERSION,
    package: packageInfo(packageDir),
    source: sourceInfo('src/**/*.json'),
    tokens,
  }
}

const generators = {
  react: [generateReactManifest, 'packages/bezier-react/dist/manifest.json'],
  icons: [generateIconsManifest, 'packages/bezier-icons/dist/manifest.json'],
  tokens: [generateTokensManifest, 'packages/bezier-tokens/dist/manifest.json'],
}

export function run({
  packages = Object.keys(generators),
  check = false,
} = {}) {
  for (const packageName of packages) {
    const entry = generators[packageName]
    if (!entry) throw new Error(`Unknown manifest package: ${packageName}`)
    const [generate, output] = entry
    writeOrCheck(join(rootDir, output), generate(), check)
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const packageIndex = process.argv.indexOf('--package')
  const packages =
    packageIndex === -1 ? undefined : [process.argv[packageIndex + 1]]
  try {
    run({ packages, check: process.argv.includes('--check') })
  } catch (error) {
    console.error(error.message)
    process.exitCode = 1
  }
}
