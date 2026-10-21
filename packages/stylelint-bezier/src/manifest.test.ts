import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

import { loadComponentContracts } from './manifest'

const roots: string[] = []
afterAll(() =>
  roots.forEach((root) => rmSync(root, { recursive: true, force: true }))
)
function consumer(schemaVersion: string) {
  const root = mkdtempSync(join(tmpdir(), 'bezier-stylelint-manifest-'))
  roots.push(root)
  const pkg = join(root, 'node_modules/@channel.io/bezier-react')
  mkdirSync(pkg, { recursive: true })
  writeFileSync(join(root, 'package.json'), '{}')
  writeFileSync(
    join(pkg, 'package.json'),
    JSON.stringify({ exports: { './manifest.json': './manifest.json' } })
  )
  writeFileSync(
    join(pkg, 'manifest.json'),
    JSON.stringify({
      schemaVersion,
      components: [{ name: 'Button', props: [{ name: 'size' }] }],
    })
  )
  return root
}

it.each(['1.0.0', '2.0.0'])(
  'reads public component props from React manifest %s',
  (version) => {
    const contracts = loadComponentContracts(consumer(version))
    expect([...contracts.get('Button')!.props]).toEqual(['size'])
  }
)
it('rejects future React schema majors', () => {
  expect(() => loadComponentContracts(consumer('3.0.0'))).toThrow('Unsupported')
})
