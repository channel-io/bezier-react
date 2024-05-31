const { getIconNamesByStatus } = require('./getIconNamesByStatus')
const { getRenamedIconMap } = require('./getRenamedIconMap')

const yamlFrontMatter = `---
"@channel.io/bezier-icons": minor
---\n
`

const statusByKey = {
  M: 'Modified',
  A: 'Added',
  D: 'Deleted',
  R100: 'Renamed',
}

const getIconChangeLog = (iconsByStatus, iconNameMap) => {
  let changeLog = 'Update icons\n\n'

  for (const [key, icons] of Object.entries(iconsByStatus)) {
    changeLog += statusByKey[key]
    changeLog += '\n\n'
    if (key !== 'R100') {
      changeLog += icons.map((icon) => `- ${icon}`).join('\n')
    } else {
      changeLog += icons
        .map((icon) => `- ${icon} -> ${iconNameMap[icon]}`)
        .join('\n')
    }
    changeLog += '\n\n'
  }

  return changeLog.trim()
}

const getChangeLog = (gitLog) =>
  yamlFrontMatter +
  getIconChangeLog(getIconNamesByStatus(gitLog), getRenamedIconMap(gitLog))

module.exports = {
  getChangeLog,
}
