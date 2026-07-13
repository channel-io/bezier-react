import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const PACKAGE_NAME = '@channel.io/bezier-codemod'
const SKILL_NAME = 'migrate-bezier-beta'

export interface InstallSkillOptions {
  cwd?: string
  skillPath?: string
  force?: boolean
}

export interface InstalledSkill {
  path: string
  packageName: string
  version: string
}

function assertInsideCwd(targetPath: string, cwd: string) {
  const relative = path.relative(cwd, targetPath)
  if (relative.startsWith('..') || path.isAbsolute(relative)) {
    throw new Error(
      `Skill destination must stay inside the repository: ${targetPath}`
    )
  }
}

async function copyDirectory(source: string, destination: string) {
  await fs.mkdir(destination, { recursive: true })
  const entries = await fs.readdir(source, { withFileTypes: true })
  await Promise.all(
    entries.map(async (entry) => {
      const sourcePath = path.join(source, entry.name)
      const destinationPath = path.join(destination, entry.name)
      if (entry.isDirectory()) {
        await copyDirectory(sourcePath, destinationPath)
        return
      }
      if (!entry.isFile()) {
        throw new Error(`Unsupported skill entry: ${sourcePath}`)
      }
      await fs.copyFile(sourcePath, destinationPath)
    })
  )
}

export async function installMigrateBezierBetaSkill({
  cwd = process.cwd(),
  skillPath = '.agents/skills',
  force = false,
}: InstallSkillOptions = {}): Promise<InstalledSkill> {
  const absoluteCwd = path.resolve(cwd)
  const moduleDirectory = path.dirname(fileURLToPath(import.meta.url))
  const packageRoot = path.resolve(moduleDirectory, '..')
  const source = path.join(packageRoot, 'skills', SKILL_NAME)
  const requestedDestination = path.resolve(absoluteCwd, skillPath)
  const destination =
    path.basename(requestedDestination) === SKILL_NAME
      ? requestedDestination
      : path.join(requestedDestination, SKILL_NAME)
  assertInsideCwd(destination, absoluteCwd)

  const packageJson = JSON.parse(
    await fs.readFile(path.join(packageRoot, 'package.json'), 'utf8')
  ) as { name?: string; version?: string }
  if (packageJson.name !== PACKAGE_NAME || !packageJson.version) {
    throw new Error('Could not determine the installed Bezier codemod version.')
  }

  try {
    await fs.access(destination)
    if (!force) {
      throw new Error(
        `Skill already exists at ${destination}. Pass --force to replace it.`
      )
    }
    await fs.rm(destination, { recursive: true, force: true })
  } catch (error) {
    if (
      error instanceof Error &&
      !('code' in error && error.code === 'ENOENT')
    ) {
      throw error
    }
  }

  await fs.mkdir(path.dirname(destination), { recursive: true })
  await copyDirectory(source, destination)
  await fs.writeFile(
    path.join(destination, 'codemod-version.json'),
    `${JSON.stringify(
      { packageName: PACKAGE_NAME, version: packageJson.version },
      null,
      2
    )}\n`,
    'utf8'
  )

  return {
    path: destination,
    packageName: PACKAGE_NAME,
    version: packageJson.version,
  }
}
