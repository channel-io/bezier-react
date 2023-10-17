const { exec } = require('child_process')
const fs = require('fs')
const path = require('path')

const { getChangeLog } = require('./utils/getChangeLog')

const changesetPath = path.resolve(__dirname, `../../../.changeset/icon-update-${new Date().valueOf()}.md`)

exec('git log -1 --name-status --pretty="format:"', async (_undefined, stdout) => {
  fs.writeFileSync(changesetPath, getChangeLog(stdout), 'utf-8')
})

