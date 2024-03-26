const { getIconNamesByStatus } = require('./getIconNamesByStatus')

const yamlFrontMatter = `---
"@channel.io/bezier-icons": minor
---\n
`

const statusByKey = {
  M: 'Modified',
  A: 'Added',
  D: 'Deleted',
}

const getIconChangeLog = (iconsByStatus) => {
  let changeLog = 'Update icons\n\n'

  for (const [key, icons] of Object.entries(iconsByStatus)) {
    changeLog += statusByKey[key]
    changeLog += '\n\n'
    changeLog += icons.map((icon) => `- ${icon}`).join('\n')
    changeLog += '\n\n'
  }

  return changeLog.trim()
}

const getChangeLog = (gitLog) =>
  yamlFrontMatter + getIconChangeLog(getIconNamesByStatus(gitLog))

module.exports = {
  getChangeLog,
}
