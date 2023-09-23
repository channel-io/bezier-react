/* eslint-disable no-console */
const { exec } = require('child_process')

const githubToken = process.argv[2]
const pullNumber = process.argv[3]

const keyToStatus = {
  M: 'Modified 🖊️',
  A: 'Added 🎨',
  D: 'Deleted 🗑️',
}

const getIconName = path => path.split('/').at(-1)

const getDescription = gitLog => {
  let description = '### Icon update is done! 🎉\n\n'

  const updatedAndIconPath = gitLog
    .trim()
    .split('\n')
    .map(line => line.split('\t'))
    .filter(line => line[1].endsWith('.svg'))
    .reduce((acc, cur) => {
      const [key, file] = cur
      const word = keyToStatus[key]
      const icon = `- ${getIconName(file)}`

      if (!acc[word]) {
        acc[word] = [icon]
      } else {
        acc[word].push(icon)
      }
      return acc
    }, {})

  for (const [status, icons] of Object.entries(updatedAndIconPath)) {
    description += `${icons.length} icon(s) ${status}\n`
    description += icons.join('\n')
  }

  return description
}

exec('git log -1 --name-status --pretty="format:"', async (_undefined, stdout) => {
  const description = getDescription(stdout)

  try {
    const res = await fetch(`https://api.github.com/repos/yangwooseong/bezier-react/pulls/${pullNumber}`, {
      method: 'PATCH',
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
        Authorization: `Bearer ${githubToken}`,
        Accept: 'application/vnd.github+json',
      },
      body: JSON.stringify({ body: description }),
    })

    if (!res.ok) {
      console.log('Message: ', await res.json())
    }
  } catch (e) {
    console.log('Error: ', e)
  }
})

