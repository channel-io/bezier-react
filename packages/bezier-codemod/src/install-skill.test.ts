import { spawnSync } from 'child_process'
import fs from 'fs'
import os from 'os'
import path from 'path'

import { installMigrateBezierBetaSkill } from './install-skill.js'

describe('migrate-bezier-beta skill installer', () => {
  it('installs a version-pinned skill and uses that pin for npx fallback', async () => {
    const directory = fs.mkdtempSync(
      path.join(os.tmpdir(), 'bezier-beta-skill-')
    )
    const sourceDirectory = path.join(directory, 'src')
    const binaryDirectory = path.join(directory, 'bin')
    const capturedArgsPath = path.join(directory, 'npx-args.json')
    fs.mkdirSync(sourceDirectory)
    fs.mkdirSync(binaryDirectory)
    const installed = await installMigrateBezierBetaSkill({ cwd: directory })
    const pin = JSON.parse(
      fs.readFileSync(path.join(installed.path, 'codemod-version.json'), 'utf8')
    ) as { packageName: string; version: string }
    const fakeNpxPath = path.join(binaryDirectory, 'npx')
    fs.writeFileSync(
      fakeNpxPath,
      `#!/usr/bin/env node\nrequire('fs').writeFileSync(${JSON.stringify(
        capturedArgsPath
      )}, JSON.stringify(process.argv.slice(2)))\n`
    )
    fs.chmodSync(fakeNpxPath, 0o755)

    const result = spawnSync(
      process.execPath,
      [
        path.join(installed.path, 'scripts', 'run-codemod.mjs'),
        '--scope',
        'src',
        '--dry-run',
      ],
      {
        cwd: directory,
        encoding: 'utf8',
        env: {
          ...process.env,
          PATH: `${binaryDirectory}${path.delimiter}${process.env.PATH ?? ''}`,
        },
      }
    )

    expect(result.status).toBe(0)
    expect(JSON.parse(fs.readFileSync(capturedArgsPath, 'utf8'))).toEqual(
      expect.arrayContaining([
        '--yes',
        `${pin.packageName}@${pin.version}`,
        '--scope',
        'src',
        '--dry-run',
      ])
    )
  })

  it('requires force before replacing an installed skill', async () => {
    const directory = fs.mkdtempSync(
      path.join(os.tmpdir(), 'bezier-beta-skill-force-')
    )
    await installMigrateBezierBetaSkill({ cwd: directory })

    await expect(
      installMigrateBezierBetaSkill({ cwd: directory })
    ).rejects.toThrow('Skill already exists')
    await expect(
      installMigrateBezierBetaSkill({ cwd: directory, force: true })
    ).resolves.toEqual(expect.objectContaining({ version: expect.any(String) }))
  })
})
