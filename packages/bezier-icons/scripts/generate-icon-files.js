const path = require('path')

const { generateIconFiles } = require('./utils/generateIconFilesFromJson')

const bezierIconsDirectory = path.resolve(__dirname, '../icons')
const iconsJson = path.resolve(__dirname, '../icons.json')

generateIconFiles(iconsJson, bezierIconsDirectory)
