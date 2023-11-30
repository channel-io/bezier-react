import fs from 'fs'
import path from 'path'

const directory = 'dist/css'
const outputFile = 'styles.css'

function buildConcatenateStylesheet() {
  const files = fs.readdirSync(directory)
  const outputData = files
    .filter(file => file.endsWith('.css') && file !== outputFile)
    .map(file => fs.readFileSync(path.join(directory, file), 'utf8'))
    .join('\n')

  fs.writeFileSync(path.join(directory, outputFile), outputData)
  // eslint-disable-next-line no-console
  console.log(`\n✔︎ Created ${outputFile} in ${directory}`)
}

function cleanUp() {
  const files = fs.readdirSync(directory)
  files.forEach(file => {
    if (file !== outputFile) {
      fs.unlinkSync(path.join(directory, file))
      // eslint-disable-next-line no-console
      console.log(`  ✔︎ Clean up ${file} in ${directory}`)
    }
  })
}

function main() {
  buildConcatenateStylesheet()
  cleanUp()
}

main()
