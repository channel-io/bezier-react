import fs from 'fs/promises'
import path from 'path'

import chalk from 'chalk'

export async function mergeCss(buildPath: string) {
  try {
    const destination = path.join(buildPath, 'styles.css')
    const files = await fs.readdir(buildPath)
    const result: string[] = []

    for (const file of files.filter((file) => file.endsWith('.css'))) {
      if (file === path.basename(destination)) continue

      const filePath = path.join(buildPath, file)
      const data = await fs.readFile(filePath, 'utf8')
      result.push(data)

      await fs.unlink(filePath)
    }

    await fs.writeFile(destination, result.join('\n'))

    console.log(chalk.green.bold(`\n✔︎ Merged CSS saved to ${destination}`))
  } catch (error) {
    throw error
  }
}
