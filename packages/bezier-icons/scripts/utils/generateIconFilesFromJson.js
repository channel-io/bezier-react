const fs = require('fs')
const path = require('path')

const flushAndMakeIconsDirectory = (dir) => {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true })
    fs.mkdirSync(dir)
  }
}

const makeSvgFiles = (dir) => ([iconName, svgObject]) => {
  const svgPath = path.resolve(dir, `${iconName}.svg`)
  const { svg } = svgObject

  fs.writeFileSync(svgPath, svg, 'utf-8')
}

const generateSVGFilesFromMap = (iconsJson, dir) => {
  const svgByName = JSON.parse(fs.readFileSync(iconsJson, 'utf-8'))

  Object.entries(svgByName)
    .forEach(makeSvgFiles(dir))
}

const generateIconFiles = (iconsJson, dir) => {
  flushAndMakeIconsDirectory(dir)
  generateSVGFilesFromMap(iconsJson, dir)
}

module.exports = {
  generateIconFiles,
}
