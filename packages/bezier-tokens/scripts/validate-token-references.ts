import { readFileSync, readdirSync, statSync } from 'fs'
import { join, relative } from 'path'

// ANSI color codes
const RED = '\x1b[31m'
const YELLOW = '\x1b[33m'
const RESET = '\x1b[0m'
const BOLD = '\x1b[1m'

/**
 * Extracts all token references from JSON object recursively.
 * Handles string values and nested objects/arrays (e.g., shadow types).
 */
function extractTokenReferences(
  obj: any,
  references: Set<string> = new Set()
): Set<string> {
  if (obj && typeof obj === 'object') {
    if (Array.isArray(obj)) {
      obj.forEach((item) => extractTokenReferences(item, references))
    } else {
      if ('value' in obj) {
        if (typeof obj.value === 'string') {
          const referenceRegex = /\{([^}]+)\}/g
          let match
          while ((match = referenceRegex.exec(obj.value)) !== null) {
            references.add(match[1])
          }
        } else if (typeof obj.value === 'object') {
          extractTokenReferences(obj.value, references)
        }
      }

      for (const value of Object.values(obj)) {
        extractTokenReferences(value, references)
      }
    }
  } else if (typeof obj === 'string') {
    const referenceRegex = /\{([^}]+)\}/g
    let match
    while ((match = referenceRegex.exec(obj)) !== null) {
      references.add(match[1])
    }
  }

  return references
}

function findJsonFiles(dir: string, fileList: string[] = []): string[] {
  const files = readdirSync(dir)

  files.forEach((file) => {
    const filePath = join(dir, file)
    const stat = statSync(filePath)

    if (stat.isDirectory()) {
      findJsonFiles(filePath, fileList)
    } else if (file.endsWith('.json')) {
      fileList.push(filePath)
    }
  })

  return fileList
}

/**
 * Collects all token paths from JSON object.
 * Only paths with 'value' or 'type' fields are considered valid tokens.
 */
function collectTokenPaths(
  obj: any,
  prefix: string[] = [],
  paths: Set<string> = new Set()
): Set<string> {
  if (obj && typeof obj === 'object' && !Array.isArray(obj)) {
    if ('value' in obj || 'type' in obj) {
      const path = prefix.join('.')
      if (path) {
        paths.add(path)
      }
    }

    for (const [key, value] of Object.entries(obj)) {
      if (key !== 'value' && key !== 'type') {
        const newPrefix = [...prefix, key]
        collectTokenPaths(value, newPrefix, paths)
      }
    }
  } else if (Array.isArray(obj)) {
    obj.forEach((item) => collectTokenPaths(item, prefix, paths))
  }

  return paths
}

function validateTokenReferences(
  jsonFiles: string[],
  allTokenPaths: Set<string>
): Map<string, string[]> {
  const invalidReferences = new Map<string, string[]>()

  for (const filePath of jsonFiles) {
    try {
      const content = readFileSync(filePath, 'utf-8')
      const json = JSON.parse(content)
      const references = extractTokenReferences(json)

      for (const reference of references) {
        if (!allTokenPaths.has(reference)) {
          const relativePath = relative(process.cwd(), filePath)
          const files = invalidReferences.get(reference) || []
          if (!files.includes(relativePath)) {
            files.push(relativePath)
            invalidReferences.set(reference, files)
          }
        }
      }
    } catch (error) {
      console.warn(
        `${YELLOW}⚠️  Failed to validate file: ${filePath}${RESET}`,
        error
      )
    }
  }

  return invalidReferences
}

function formatErrorOutput(invalidReferences: Map<string, string[]>): void {
  const sortedTokens = Array.from(invalidReferences.keys()).sort()

  console.error(`\n${RED}${BOLD}✖ Token Validation Failed${RESET}\n`)
  console.error(`${RED}${'─'.repeat(60)}${RESET}`)

  for (const token of sortedTokens) {
    const files = invalidReferences.get(token)!
    console.error(`\n${RED}${BOLD}  ${token}${RESET}`)
    for (const file of files) {
      console.error(`    ${YELLOW}→${RESET} ${file}`)
    }
  }

  console.error(`\n${RED}${'─'.repeat(60)}${RESET}`)
  console.error(
    `\n${RED}${BOLD}Error:${RESET} The above ${sortedTokens.length} token(s) do not exist.\n`
  )
}

function main() {
  const srcDir = join(process.cwd(), 'src')
  const jsonFiles = findJsonFiles(srcDir)

  const allTokenPaths = new Set<string>()

  for (const filePath of jsonFiles) {
    try {
      const content = readFileSync(filePath, 'utf-8')
      const json = JSON.parse(content)
      const paths = collectTokenPaths(json)
      paths.forEach((path) => allTokenPaths.add(path))
    } catch (error) {
      console.warn(
        `${YELLOW}⚠️  Failed to parse file: ${filePath}${RESET}`,
        error
      )
    }
  }

  const invalidReferences = validateTokenReferences(jsonFiles, allTokenPaths)

  if (invalidReferences.size > 0) {
    formatErrorOutput(invalidReferences)
    process.exit(1)
  }
}

main()
