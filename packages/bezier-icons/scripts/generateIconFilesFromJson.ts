import fs from 'fs'
import path from 'path'

type SvgObject = Record<string, string>

const flushAndMakeIconsDirectory = (dir: string) => {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true })
    fs.mkdirSync(dir)
  }
}

const makeSvgFiles = (dir: string) => ([iconName, svgObject]: [string, SvgObject]) => {
  const svgPath = path.resolve(dir, `${iconName}.svg`)
  const { svg } = svgObject

  fs.writeFileSync(svgPath, svg, 'utf-8')
}

const generateSVGFilesFromMap = (iconsJson: string, dir: string) => {
  const svgByName: Record<string, SvgObject> = JSON.parse(fs.readFileSync(iconsJson, 'utf-8'))

  Object.entries(svgByName)
    .forEach(makeSvgFiles(dir))
}

export const generateIconFiles = (iconsJson: string, dir: string) => {
  flushAndMakeIconsDirectory(dir)
  generateSVGFilesFromMap(iconsJson, dir)
}
