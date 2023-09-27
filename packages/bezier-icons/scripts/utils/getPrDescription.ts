const keyToStatus: Record<string, string> = {
  M: 'Modified 🖊️',
  A: 'Added 🎨',
  D: 'Deleted 🗑️',
}

const getIconName = (path: string) => path.split('/').at(-1)

export const getDescription = (gitLog: string) => {
  let description = '### Icon update is ready to be merged! 🎉\n\n'

  const statusAndIconArray = gitLog
    .trim()
    .split('\n')
    .map(line => line.split('\t'))
    .filter(line => line[1].endsWith('.svg'))
    .reduce((acc, cur) => {
      const [key, file] = cur
      const status = keyToStatus[key]
      const icon = `- ${getIconName(file)}`

      if (!acc[status]) {
        acc[status] = [icon]
      } else {
        acc[status].push(icon)
      }
      return acc
    }, {} as Record<string, string[]>)

  for (const [status, icons] of Object.entries(statusAndIconArray)) {
    description += `${icons.length} icon(s) ${status}\n`
    description += icons.join('\n')
    description += '\n\n'
  }

  return description.trim()
}
