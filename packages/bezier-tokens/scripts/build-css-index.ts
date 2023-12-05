import fs from 'fs'
import path from 'path'

const buildPath = 'dist/css'
const destination = 'styles.css'

function concatenateStylesheet() {
  const files = fs.readdirSync(buildPath)
  const outputData = files
    .filter(file => file.endsWith('.css') && file !== destination)
    .map(file => fs.readFileSync(path.join(buildPath, file), 'utf8'))
    .join('\n')

  fs.writeFileSync(path.join(buildPath, destination), outputData)
  // eslint-disable-next-line no-console
  console.log(`\n✔︎ Created ${buildPath}/${destination}`)
}

function cleanUp() {
  const files = fs.readdirSync(buildPath)
  files.forEach(file => {
    if (file !== destination) {
      fs.unlinkSync(path.join(buildPath, file))
      // eslint-disable-next-line no-console
      console.log(`  ✔︎ Removed ${buildPath}/${file}`)
    }
  })
}

function main() {
  concatenateStylesheet()
  cleanUp()
}

main()
