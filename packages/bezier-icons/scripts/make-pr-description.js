const { exec } = require('child_process')

const githubToken = process.argv[0]
const pullNumber = process.argv[1]

const keyToHeader = {
  M: 'Modified 🖊️\n',
  A: 'Added 🎨\n',
  D: 'Deleted 🗑️\n',
}

const getIconName = path => path.split('/').at(-1)

const getDescription = gitLog => {
  let description = 'Update Icons 😃\n\n'

  const updatedAndIconPath = gitLog
    .trim()
    .split('\n')
    .map(line => line.split('\t'))
    .filter(line => line[1].endsWith('.svg'))
    .reduce((acc, cur) => {
      const [key, file] = cur
      const header = keyToHeader[key]
      const icon = `- ${getIconName(file)}`

      if (!acc[header]) {
        acc[header] = [icon]
      } else {
        acc[header].push(icon)
      }
      return acc
    }, {})

  for (const [key, icons] of Object.entries(updatedAndIconPath)) {
    description += key
    description += icons.join('\n')
  }

  return description
}

exec('git log -1 --name-status --pretty="format:"', async (_undefined, stdout) => {
  const description = getDescription(stdout)

  await fetch(`https://api.github.com/repos/yangwooseong/bezier-react/${pullNumber}`, {
    method: 'PATCH',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
      Authorization: `Bearer ${githubToken}`,
      Accept: 'application/vnd.github+json',
    },
    body: description,
  })
})

