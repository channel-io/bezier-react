/* eslint-disable no-console */
const { exec } = require('child_process')

const { getDescription } = require('./utils/getPrDescription')

const githubToken = process.argv[2]
const pullNumber = process.argv[3]

const updateDescription = async (description) => {
  try {
    const res = await fetch(
      `https://api.github.com/repos/channel-io/bezier-react/pulls/${pullNumber}`,
      {
        method: 'PATCH',
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
          Authorization: `Bearer ${githubToken}`,
          Accept: 'application/vnd.github+json',
        },
        body: JSON.stringify({ body: description }),
      }
    )

    if (!res.ok) {
      console.log('Description: ', description)
      console.log('Message: ', await res.json())
    }
  } catch (e) {
    console.log('Error: ', e)
  }
}

exec(
  'git log -1 --name-status --pretty="format:"',
  async (_undefined, stdout) => {
    console.log("LOG: ', stdout")
    updateDescription(getDescription(stdout))
  }
)
