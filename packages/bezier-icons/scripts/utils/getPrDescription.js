const { getIconNamesByStatus } = require('./getIconNamesByStatus')

const statusByKey = {
  M: 'modified',
  A: 'added',
  D: 'deleted',
  R100: 'renamed',
}

const emojiByKey = {
  M: '✏️',
  A: '🆕',
  D: '🗑️',
  R100: '✍️',
}

const getSummary = (iconsByStatus) => {
  let res = ''

  for (const [key, icons] of Object.entries(iconsByStatus)) {
    res += `- ${icons.length} icon(s) ${statusByKey[key]}\n`
  }

  return res
}

const getTable = (iconsByStatus) => {
  let res = '| Name | Status |\n|--|--|\n'

  for (const [key, icons] of Object.entries(iconsByStatus)) {
    for (const icon of icons) {
      res += `| ${icon} | ${emojiByKey[key]} |\n`
    }
  }

  return res
}

const getDescription = (gitLog) => {
  const iconsByStatus = getIconNamesByStatus(gitLog)

  let description = '### Icon update is ready to be merged! 🎉\n\n'

  description += getSummary(iconsByStatus)
  description += '\n'
  description += getTable(iconsByStatus)

  return description.trim()
}

module.exports = {
  getDescription,
}
