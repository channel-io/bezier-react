const fs = require('fs')
const path = require('path')

const bezierIconsDirectory = path.resolve(__dirname, '..')
const iconsJson = path.resolve(bezierIconsDirectory, 'icons.json')
const iconsDir = path.join(bezierIconsDirectory, 'icons')
const svgByName = JSON.parse(fs.readFileSync(iconsJson, 'utf-8'))

const flushAndMakeIconsDirectory = () => {
  if (fs.existsSync(iconsDir)) {
    fs.rmSync(iconsDir, { recursive: true, force: true })
    fs.mkdirSync(iconsDir)
  }
}

const makeSvgFiles = ([iconName, svgObject]) => {
  const svgPath = path.resolve(iconsDir, `${iconName}.svg`)
  const { svg } = svgObject

  fs.writeFileSync(svgPath, svg, 'utf-8')
}

const generateSVGFilesFromMap = () => {
  Object.entries(svgByName)
    .sort(([iconName1], [iconName2]) => iconName1.localeCompare(iconName2))
    .map(makeSvgFiles)
}

const generateIconFiles = () => {
  flushAndMakeIconsDirectory()
  generateSVGFilesFromMap()
}

generateIconFiles()
