import { exec } from 'child_process'
import packages from '../package.json'

const yarnVersion = packages.engines.yarn

exec('yarn -v', (error, stdout, stderr) => {
  if (error || stderr) {
    console.error(`yarn 실행에 실패하였습니다. error: ${error} stderr: ${stderr}`)
    process.exit(1)
  }

  const userYarnVersion = stdout.trim()
  if (userYarnVersion !== yarnVersion) {
    console.error(`설치된 yarn 버전이 다릅니다. 프로젝트 버전: ${yarnVersion} 현재 버전: ${userYarnVersion}`)
  }

  console.log(`yarn 버전 확인 완료. 현재 버전: ${userYarnVersion}`)
})
