const statusByKey = {
  M: 'modified',
  A: 'added',
  D: 'deleted',
}

const emojiByKey = {
  M: '✏️',
  A: '🆕',
  D: '🗑️',
}

const getIconName = (path) => path.split('/').at(-1)

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
      res += `| ${getIconName(icon)} | ${emojiByKey[key]} |\n`
    }
  }

  return res
}

const getIconNamesByStatus = (gitLog) => gitLog
  .trim()
  .split('\n')
  .map(line => line.split('\t'))
  .filter(line => line[1].endsWith('.svg'))
  .reduce((acc, cur) => {
    const [key, file] = cur
    const icon = getIconName(file)

    if (!icon) { return acc }

    if (!acc[key]) {
      acc[key] = [icon]
    } else {
      acc[key].push(icon)
    }
    return acc
  }, {})

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
