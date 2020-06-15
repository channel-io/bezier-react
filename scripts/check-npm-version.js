const { exec } = require('child_process')
const packages = require('../package.json')

const npmVersion = packages.engines.npm

exec('npm -v', (error, stdout, stderr) => {
  if (error || stderr) {
    console.error(`npm 실행에 실패하였습니다. error: ${error} stderr: ${stderr}`)
    process.exit(1)
  }

  const userNpmVersion = stdout.trim()
  if (userNpmVersion !== npmVersion) {
    console.error(`설치된 npm 버전이 다릅니다. 프로젝트 버전: ${npmVersion} 현재 버전: ${userNpmVersion}`)
  }

  console.log(`npm 버전 확인 완료. 현재 버전: ${userNpmVersion}`)
})
