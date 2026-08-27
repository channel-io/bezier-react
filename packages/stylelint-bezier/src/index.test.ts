import { readFileSync } from 'node:fs'
import { join } from 'node:path'

import stylelint, { type Rule } from 'stylelint'

// eslint-disable-next-line @typescript-eslint/no-require-imports
const config = require('./index') as {
  rules: Record<string, unknown>
  overrides: Array<{ customSyntax?: unknown }>
}
const packageJson = JSON.parse(
  readFileSync(join(__dirname, '../package.json'), 'utf8')
) as {
  peerDependencies: Record<string, string>
  peerDependenciesMeta: Record<string, unknown>
}
import {
  rule as componentOverride,
  ruleName as componentOverrideName,
} from './plugins/no-component-style-override'
import {
  rule as internalSelector,
  ruleName as internalSelectorName,
} from './plugins/no-internal-selector'
import {
  rule as layout,
  ruleName as layoutName,
} from './plugins/prefer-layout-component'
import {
  rule as suppression,
  ruleName as suppressionName,
} from './plugins/require-suppression-reason'
import {
  rule as validateToken,
  ruleName as validateTokenName,
} from './plugins/validate-token'

async function warnings(
  code: string,
  ruleName: string,
  rule: Rule,
  codeFilename = 'fixture.css'
) {
  const result = await stylelint.lint({
    code,
    codeFilename,
    config: {
      customSyntax: codeFilename.endsWith('.css')
        ? undefined
        : 'postcss-styled-syntax',
      plugins: [{ ruleName, rule }],
      rules: { [ruleName]: true },
    },
  })
  return result.results[0].warnings
}

test('the shared config activates only the existing token rule', () => {
  expect(config.rules).toEqual({ 'bezier/validate-token': true })
})

test('the shared config delegates styled syntax loading to Stylelint', () => {
  expect(config.overrides[0]?.customSyntax).toBe('postcss-styled-syntax')
})

test('the shared config requires compatible Stylelint runtime peers', () => {
  expect(packageJson.peerDependencies).toMatchObject({
    postcss: '^8.5.1',
    'postcss-styled-syntax': '^0.7.2',
    stylelint: '>=16.14.1',
  })
  expect(packageJson.peerDependenciesMeta.postcss).toBeUndefined()
  expect(
    packageJson.peerDependenciesMeta['postcss-styled-syntax']
  ).toBeUndefined()
})

test('validate-token preserves invalid token diagnostics', async () => {
  const result = await warnings(
    '.sample { color: var(--not-a-bezier-token); }',
    validateTokenName,
    validateToken
  )
  expect(result).toHaveLength(1)
  expect(result[0].text).toContain('Invalid token')
})

test('no-internal-selector rejects private test selectors', async () => {
  expect(
    await warnings(
      `import styled from 'styled-components'
       const Wrapped = styled.div\`
         & [data-testid="bezier-button-content"] { color: red; }
       \``,
      internalSelectorName,
      internalSelector,
      'fixture.styles.tsx'
    )
  ).toHaveLength(1)
})

test('component overrides use the installed public prop contract', async () => {
  const invalid = `
    import { Box as Surface } from '@channel.io/bezier-react/beta'
    import styled from 'styled-components'
    export const StyledSurface = styled(Surface)\`
      padding: 4px;
    \`
  `
  const valid = `
    import { Button } from '@channel.io/bezier-react/beta'
    import styled from 'styled-components'
    export const StyledButton = styled(Button)\`
      text-transform: uppercase;
    \`
  `
  expect(
    await warnings(
      invalid,
      componentOverrideName,
      componentOverride,
      'fixture.styles.tsx'
    )
  ).toHaveLength(1)
  expect(
    await warnings(
      valid,
      componentOverrideName,
      componentOverride,
      'fixture.styles.ts'
    )
  ).toHaveLength(0)
})

test('layout candidates exclude dynamic, grid, scroll, and responsive ownership', async () => {
  const candidate = `
    import styled from 'styled-components'
    export const Row = styled.div\`
      display: flex;
      padding: 4px;
    \`
  `
  const excluded = [
    'display: grid;',
    'display: flex; overflow: auto;',
    'display: flex; padding: ${responsivePadding};',
    'display: flex; @media (width > 600px) { display: block; }',
  ]
  expect(
    await warnings(candidate, layoutName, layout, 'fixture.styles.tsx')
  ).toHaveLength(1)
  for (const declarations of excluded) {
    const code = `import styled from 'styled-components'; const Row = styled.div\`${declarations}\``
    expect(
      await warnings(code, layoutName, layout, 'fixture.styles.tsx')
    ).toHaveLength(0)
  }
})

test('suppression hygiene requires a scoped concrete reason', async () => {
  const invalid =
    '/* stylelint-disable bezier/no-component-style-override */\n.a { color: red; }'
  const valid =
    '/* stylelint-disable-next-line bezier/no-component-style-override -- Third-party widget requires this fixed width */\n.a { width: 10px; }'
  expect(await warnings(invalid, suppressionName, suppression)).toHaveLength(1)
  expect(await warnings(valid, suppressionName, suppression)).toHaveLength(0)
})
