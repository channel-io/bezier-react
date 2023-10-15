const { getIconNamesByStatus } = require('./getIconNamesByStatus')

const yamlFrontMatter =
`---
"@channel.io/bezier-icons": minor
---\n
`

const statusByKey = {
  M: '**CHANGE**',
  A: '**ADD**',
  D: '**DELETE**',
}

const getIconChangeLog = (iconsByStatus) => {
  let changeLog = 'Icon Update\n\n'

  for (const [key, icons] of Object.entries(iconsByStatus)) {
    changeLog += statusByKey[key]
    changeLog += '\n\n'
    changeLog += icons.map(icon => `- ${icon}`).join('\n')
    changeLog += '\n\n'
  }

  return changeLog.trim()
}

const getChangeLog = (gitLog) => yamlFrontMatter + getIconChangeLog(getIconNamesByStatus(gitLog))

module.exports = {
  getChangeLog,
}
