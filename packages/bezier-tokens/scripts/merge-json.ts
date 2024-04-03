import fs from 'fs/promises'
import path from 'path'

import chalk from 'chalk'

export async function mergeJson(buildPath: string) {
  try {
    const destination = path.join(buildPath, 'tokens.json')
    const files = await fs.readdir(buildPath)
    const result: Record<string, any> = {}

    for (const file of files.filter((file) => file.endsWith('.json'))) {
      if (file === path.basename(destination)) continue

      const filePath = path.join(buildPath, file)
      const data = await fs.readFile(filePath, 'utf8')

      try {
        const fileName = file.replace('.json', '')
        const fileData = JSON.parse(data)
        result[fileName] = fileData
      } catch (error) {
        throw error
      }

      await fs.unlink(filePath)
    }

    await fs.writeFile(destination, JSON.stringify(result, null, 2))

    console.log(chalk.green.bold(`\n✔︎ Merged JSON saved to ${destination}`))
  } catch (error) {
    throw error
  }
}
