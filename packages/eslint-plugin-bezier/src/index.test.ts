import { mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

import { RuleTester } from 'eslint'

import plugin = require('./index')

const tester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
})

const beta = '@channel.io/bezier-react/beta'
const testRequire = createRequire(__filename)
const crossFileRoot = mkdtempSync(join(tmpdir(), 'bezier-eslint-wrapper-'))

writeFileSync(
  join(crossFileRoot, 'wrappers.tsx'),
  `import styled from 'styled-components'
   import { Box, TabList, Tabs } from '${beta}'
   export const Root = styled(Tabs).attrs({ role: 'tablist' })\`display: block;\`
   export const List = styled(TabList)\`display: block;\`
   export const BoxOwner = styled(Box)\`display: block;\``
)

afterAll(() => rmSync(crossFileRoot, { force: true, recursive: true }))

tester.run('no-private-entrypoint', plugin.rules['no-private-entrypoint'], {
  valid: [`import { Tabs } from '${beta}'`],
  invalid: [
    {
      code: "import { Tabs } from '@channel.io/bezier-react/dist/beta/Tabs'",
      errors: [{ messageId: 'rejected' }],
    },
  ],
})

tester.run('no-legacy-root-import', plugin.rules['no-legacy-root-import'], {
  valid: [
    `import {} from '@channel.io/bezier-react'`,
    `import { Button } from '${beta}'`,
  ],
  invalid: [
    {
      code: "import { Button as LegacyButton } from '@channel.io/bezier-react'",
      errors: [{ messageId: 'exact' }],
    },
    {
      code: "import * as Bezier from '@channel.io/bezier-react'",
      errors: [{ messageId: 'namespace' }],
    },
  ],
})

const validCompound = [
  `import { Tabs, TabList, TabItem } from '${beta}'
   const value = <Tabs><TabList><TabItem /></TabList></Tabs>`,
  `import { Tabs as Root, TabList as List, TabItem as Item } from '${beta}'
   const value = <Root><List><Item /></List></Root>`,
  `import * as Bezier from '${beta}'
   const value = <Bezier.Tabs><Bezier.TabList><Bezier.TabItem /></Bezier.TabList></Bezier.Tabs>`,
  `import styled from 'styled-components'
   import { Tabs, TabList, TabItem } from '${beta}'
   const StyledTabs = styled(Tabs)\`color: red;\`
   const WrappedTabs = styled(StyledTabs)\`display: block;\`
   const StyledList = styled(TabList)\`display: block;\`
   const value = <WrappedTabs><StyledList><TabItem /></StyledList></WrappedTabs>`,
  `import { Tabs, TabItem } from '${beta}'
   const DynamicOwner = withOwner(Tabs)
   const value = <DynamicOwner><TabItem /></DynamicOwner>`,
  {
    filename: join(crossFileRoot, 'consumer.tsx'),
    code: `import * as Styled from './wrappers'
           import { TabItem } from '${beta}'
           const value = <Styled.Root><Styled.List><TabItem /></Styled.List></Styled.Root>`,
  },
]

tester.run(
  'no-orphan-compound-child',
  plugin.rules['no-orphan-compound-child'],
  {
    valid: validCompound,
    invalid: [
      {
        code: `import { TabItem } from '${beta}'; const value = <div><TabItem /></div>`,
        errors: [{ messageId: 'rejected' }],
      },
      {
        code: `import styled from 'styled-components'
               import { Box, TabItem } from '${beta}'
               const Owner = styled(Box)\`display: block;\`
               const value = <Owner><TabItem /></Owner>`,
        errors: [{ messageId: 'rejected' }],
      },
      {
        filename: join(crossFileRoot, 'consumer.tsx'),
        code: `import { BoxOwner as Owner } from './wrappers'
               import { TabItem } from '${beta}'
               const value = <Owner><TabItem /></Owner>`,
        errors: [{ messageId: 'rejected' }],
      },
    ],
  }
)

tester.run(
  'review-unresolved-compound-owner',
  plugin.rules['review-unresolved-compound-owner'],
  {
    valid: validCompound.filter((_, index) => index !== 4),
    invalid: [
      {
        code: `import { Tabs, TabItem } from '${beta}'
               const DynamicOwner = withOwner(Tabs)
               const value = <DynamicOwner><TabItem /></DynamicOwner>`,
        errors: [{ messageId: 'rejected' }],
      },
    ],
  }
)

tester.run(
  'no-icon-wrapper-in-owner-slot',
  plugin.rules['no-icon-wrapper-in-owner-slot'],
  {
    valid: [
      `import { IconButton } from '${beta}'
       import { AddIcon } from '@channel.io/bezier-icons'
       const value = <IconButton content={AddIcon} />`,
    ],
    invalid: [
      {
        code: `import { Icon, IconButton } from '${beta}'
               import { AddIcon } from '@channel.io/bezier-icons'
               const value = <IconButton content={<Icon source={AddIcon} />} />`,
        errors: [{ messageId: 'rejected' }],
      },
    ],
  }
)

tester.run(
  'no-internal-descendant-selector',
  plugin.rules['no-internal-descendant-selector'],
  {
    valid: [
      `import styled from 'styled-components'
       const AppButton = () => null
       const StyledButton = styled(AppButton)\`svg { width: 16px; }\``,
      `import styled from 'styled-components'
       import { IconButton } from '${beta}'
       const selector = 'svg'
       const StyledButton = styled(IconButton)\`\${selector} { width: 16px; }\``,
    ],
    invalid: [
      {
        code: `import styled from 'styled-components'
               import { IconButton } from '${beta}'
               const StyledButton = styled(IconButton)\`
                 svg, path { width: 16px; }
               \``,
        errors: [{ messageId: 'rejected' }],
      },
      {
        code: `import styled from 'styled-components'
               import { Button } from '${beta}'
               const StyledButton = styled(Button)\`
                 .IconWrapper { color: red; }
               \``,
        errors: [{ messageId: 'rejected' }],
      },
    ],
  }
)

tester.run(
  'no-manual-icon-styled-template',
  plugin.rules['no-manual-icon-styled-template'],
  {
    valid: [
      `import styled from 'styled-components'
       const Panel = styled.div\`width: 20px; height: 20px; border: 1px solid; transform: rotate(45deg);\``,
      `import styled from 'styled-components'
       const ArrowIcon = styled.div\`width: 20px; color: red;\``,
    ],
    invalid: [
      {
        code: `import styled from 'styled-components'
               const ChevronIcon = styled.div\`
                 width: 12px;
                 height: 12px;
                 border-right: 2px solid;
                 transform: rotate(45deg);
               \``,
        errors: [{ messageId: 'rejected' }],
      },
    ],
  }
)

const typescriptTester = new RuleTester({
  parser: testRequire.resolve('@typescript-eslint/parser'),
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
})

typescriptTester.run(
  'no-unsafe-prop-type-escape',
  plugin.rules['no-unsafe-prop-type-escape'],
  {
    valid: [
      `import { Box } from '${beta}'
       const value = <Box padding={4 as number} />`,
      'const value = <AppBox padding={4 as any} />',
    ],
    invalid: [
      {
        code: `import styled from 'styled-components'
               import { Box } from '${beta}'
               const Surface = styled(Box)\`display: block;\`
               const value = <Surface padding={4 as any} />`,
        errors: [{ messageId: 'rejected' }],
      },
    ],
  }
)

tester.run(
  'no-public-style-prop-bypass',
  plugin.rules['no-public-style-prop-bypass'],
  {
    valid: [
      `import { Box } from '${beta}'; const value = <Box padding={4} />`,
      `const value = <Box style={{ padding: 4 }} />`,
    ],
    invalid: [
      {
        code: `import { Box as Surface } from '${beta}'; const value = <Surface style={{ padding: 4, width: 20 }} />`,
        errors: [{ messageId: 'rejected' }],
      },
      {
        code: `import * as B from '${beta}'; const value = <B.Box style={{ margin: 4 }} />`,
        errors: [{ messageId: 'rejected' }],
      },
      {
        code: `import styled from 'styled-components'
               import { Box } from '${beta}'
               const Surface = styled(Box)\`display: block;\`
               const value = <Surface style={{ padding: 4 }} />`,
        errors: [{ messageId: 'rejected' }],
      },
    ],
  }
)

tester.run(
  'no-native-control-bypass',
  plugin.rules['no-native-control-bypass'],
  {
    valid: ['<input type="text" />', '<div role="button" />'],
    invalid: [
      { code: '<button />', errors: [{ messageId: 'rejected' }] },
      {
        code: '<input type="checkbox" />',
        errors: [{ messageId: 'rejected' }],
      },
      { code: '<select />', errors: [{ messageId: 'rejected' }] },
    ],
  }
)

tester.run(
  'prefer-layout-component',
  plugin.rules['prefer-layout-component'],
  {
    valid: [
      '<div role="region" style={{ display: "flex" }} />',
      '<div onClick={click} style={{ display: "flex" }} />',
      '<div style={{ display: "grid" }} />',
      '<div style={{ overflow: "auto", display: "flex" }} />',
      '<div style={{ display: responsiveDisplay }} />',
      '<div style={{ position: "absolute", width: 20 }} />',
    ],
    invalid: [
      {
        code: '<div style={{ display: "flex", flexDirection: "column", padding: 4 }} />',
        errors: [{ messageId: 'candidate' }],
      },
      {
        code: '<div style={{ width: 20, padding: 4 }} />',
        errors: [{ messageId: 'candidate' }],
      },
    ],
  }
)

tester.run(
  'prefer-text-for-plain-text',
  plugin.rules['prefer-text-for-plain-text'],
  {
    valid: [
      '<button><span>Save</span></button>',
      `import { Button } from '${beta}'; const value = <Button><span>Save</span></Button>`,
      `import styled from 'styled-components'
       import { Button } from '${beta}'
       const Action = styled(Button)\`display: inline-flex;\`
       const value = <Action><span>Save</span></Action>`,
      '<span><strong>Nested only</strong></span>',
    ],
    invalid: [
      { code: '<span>Hello</span>', errors: [{ messageId: 'rejected' }] },
      { code: '<p>{t("hello")}</p>', errors: [{ messageId: 'rejected' }] },
    ],
  }
)

tester.run('no-inline-svg', plugin.rules['no-inline-svg'], {
  valid: ['<Icon />'],
  invalid: [
    {
      code: '<svg><path d="M0 0" /></svg>',
      errors: [{ messageId: 'rejected' }],
    },
  ],
})

tester.run('no-icon-like-glyph', plugin.rules['no-icon-like-glyph'], {
  valid: ['<div>Continue → next step</div>', '<div>→</div>'],
  invalid: [
    { code: '<span>→</span>', errors: [{ messageId: 'rejected' }] },
    {
      code: '<i aria-hidden="true">✓</i>',
      errors: [{ messageId: 'rejected' }],
    },
  ],
})

tester.run(
  'require-suppression-reason',
  plugin.rules['require-suppression-reason'],
  {
    valid: [
      `// eslint-disable-next-line no-unused-vars -- Bezier external signed asset must preserve source SVG
       const unused = <svg />`,
    ],
    invalid: [
      {
        code: `/* eslint-disable no-unused-vars -- Bezier exception */
               const value = <svg />`,
        errors: [{ messageId: 'blanket' }],
      },
      {
        code: `// eslint-disable-next-line no-unused-vars -- Bezier bad
               const value = <svg />`,
        errors: [{ messageId: 'reason' }],
      },
    ],
  }
)
