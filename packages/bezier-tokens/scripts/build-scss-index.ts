import fs from 'fs/promises'
import path from 'path'

interface BuildScssIndexOptions {
  buildPath: string
}

export async function buildScssIndex({ buildPath }: BuildScssIndexOptions) {
  const destination = path.join(buildPath, 'index.scss')

  try {
    const files = await fs.readdir(buildPath)
    let useStatements = ''
    let mapStatements = '$tokens: (\n'

    for (const file of files.filter(
      (file) => file.endsWith('.scss') && file !== path.basename(destination)
    )) {
      const moduleName = path.basename(file, '.scss')

      useStatements += `@use './${moduleName}' as ${moduleName};\n`
      mapStatements += `  "${moduleName}": ${moduleName}.$tokens,\n`
    }

    mapStatements += ');\n'

    const result = `${useStatements}\n${mapStatements}`

    await fs.writeFile(destination, result)

    console.log(`\n✔︎ Created ${destination}`)
  } catch (error) {
    throw error
  }
}
