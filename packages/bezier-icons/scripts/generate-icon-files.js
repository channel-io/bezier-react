const path = require('path')

const { generateIconFiles } = require('./generateIconFilesFromJson')

const bezierIconsDirectory = path.resolve(__dirname, '..')
const iconsJson = path.resolve(bezierIconsDirectory, 'icons.json')

generateIconFiles(iconsJson, bezierIconsDirectory)
