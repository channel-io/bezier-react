type IconsByStatus = Record<string, string[]>

const statusByKey: Record<string, string> = {
  M: 'modified',
  A: 'added',
  D: 'deleted',
}

const emojiByKey: Record<string, string> = {
  M: '✏️',
  A: '🆕',
  D: '🗑️',
}

const getIconName = (path: string) => path.split('/').at(-1)

const getSummary = (iconsByStatus: IconsByStatus) => {
  let res = ''

  for (const [key, icons] of Object.entries(iconsByStatus)) {
    res += `- ${icons.length} icon(s) ${statusByKey[key]}\n`
  }

  return res
}

const getTable = (iconsByStatus: IconsByStatus) => {
  let res = '| Name | Status |\n|--|--|\n'

  for (const [key, icons] of Object.entries(iconsByStatus)) {
    for (const icon of icons) {
      res += `| ${getIconName(icon)} | ${emojiByKey[key]} |\n`
    }
  }

  return res
}

export const getDescription = (gitLog: string) => {
  let description = '### Icon update is ready to be merged! 🎉\n\n'

  const iconsByStatus = gitLog
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
    }, {} as Record<string, string[]>)

  description += getSummary(iconsByStatus)
  description += '\n'
  description += getTable(iconsByStatus)

  return description.trim()
}
