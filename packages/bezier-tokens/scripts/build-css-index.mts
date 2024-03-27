import fs from 'fs'
import path from 'path'

import chalk from 'chalk'

const destination = 'styles.css'

function concatenateStylesheet(buildPath: string) {
  const files = fs.readdirSync(buildPath)
  const outputData = files
    .filter((file) => file.endsWith('.css') && file !== destination)
    .map((file) => fs.readFileSync(path.join(buildPath, file), 'utf8'))
    .join('\n')

  fs.writeFileSync(path.join(buildPath, destination), outputData)
  // eslint-disable-next-line no-console
  console.log(chalk.green.bold(`\n✔︎ Created ${buildPath}/${destination}`))

  files.forEach((file) => {
    if (file !== destination) {
      fs.unlinkSync(path.join(buildPath, file))
      // eslint-disable-next-line no-console
      console.log(`  ✔︎ Removed ${buildPath}/${file}`)
    }
  })
}

function main() {
  ;['dist/css', 'dist/alpha/css'].forEach(concatenateStylesheet)
}

main()
