const statusByKey = {
  M: '**CHANGE**',
  A: '**ADD**',
  D: '**DELETE**',
}

const getIconName = (path) => path.split('/').at(-1)

const getIconChangeLog = (iconsByStatus) => {
  let res = ''

  for (const [key, icons] of Object.entries(iconsByStatus)) {
    res += statusByKey[key]
    res += '\n\n'
    res += icons.map(icon => `- ${icon}`).join('\n')
    res += '\n\n'
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

const getChangeLog = (gitLog) => {
  const iconsByStatus = getIconNamesByStatus(gitLog)

  let description =
`---
"@channel.io/bezier-icons": minor
---
  
Update icons

`

  description += getIconChangeLog(iconsByStatus)

  return description.trim()
}

module.exports = {
  getChangeLog,
}
