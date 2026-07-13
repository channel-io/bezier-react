import project from '../../project.js'

import transform from './transform.js'

function migrate(source: string) {
  const sourceFile = project.createSourceFile(
    'beta-migration-test.tsx',
    source,
    {
      overwrite: true,
    }
  )
  const result = transform(sourceFile)
  return {
    code: sourceFile.getFullText(),
    changes: result.changes,
    diagnostics: result.diagnostics,
  }
}

describe('beta component migration', () => {
  it('transforms component-scoped literal props and preserves unrelated components', () => {
    const { code, diagnostics } = migrate(`
      import {
        Avatar,
        Badge as BezierBadge,
        Banner,
        Button,
        Icon,
        Spinner,
        Status,
      } from '@channel.io/bezier-react'
      import { Icon as OtherIcon } from './icons'

      export const Example = ({ compact }) => (
        <>
          <BezierBadge variant="monochrome-light" />
          <Icon size={compact ? 'xs' : 'm'} />
          <Spinner size="xl" />
          <Avatar name="A" status="online-crescent" />
          <Status type="offline-crescent" />
          <Banner icon={null} />
          <Button text="Save" leftContent={Icon} />
          <OtherIcon size="m" />
        </>
      )
    `)

    expect(code).toContain("from '@channel.io/bezier-react/beta'")
    expect(code).toContain('<BezierBadge variant="neutral-light" />')
    expect(code).toContain("<Icon size={compact ? '16' : '24'} />")
    expect(code).toContain('<Spinner size="48" />')
    expect(code).toContain('status="online-dnd"')
    expect(code).toContain('type="offline-dnd"')
    expect(code).toContain('<Banner leadingIcon={null} />')
    expect(code).toContain('<Button label="Save" leadingContent={Icon} />')
    expect(code).toContain('<OtherIcon size="m" />')
    expect(diagnostics).toHaveLength(0)
  })

  it('converts a native form owner and FormControl together', () => {
    const { code, diagnostics } = migrate(`
      import { FormControl, FormLabel, TextArea } from '@channel.io/bezier-react'

      export const Example = () => (
        <form onSubmit={() => undefined}>
          <FormControl size="m">
            <FormLabel>Email</FormLabel>
            <TextArea />
          </FormControl>
        </form>
      )
    `)

    expect(code).toContain('Form, FormField')
    expect(code).toContain('<Form onSubmit={() => undefined}>')
    expect(code).toContain('<FormField size="m">')
    expect(code).toContain('</FormField>')
    expect(code).toContain('</Form>')
    expect(diagnostics).not.toEqual(
      expect.arrayContaining([
        expect.objectContaining({ code: 'form-owner-review' }),
      ])
    )
  })

  it('reports a standalone FormControl instead of inventing form ownership', () => {
    const { code, diagnostics } = migrate(`
      import { FormControl } from '@channel.io/bezier-react'
      export const Field = () => <FormControl size="xl" />
    `)

    expect(code).toContain('FormField')
    expect(diagnostics).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ code: 'form-field-size-manual' }),
        expect.objectContaining({ code: 'form-owner-review' }),
      ])
    )
  })

  it('removes TabItems and moves a supported TabList size to Tabs', () => {
    const { code, diagnostics } = migrate(`
      import { Tabs, TabList, TabItems, TabItem } from '@channel.io/bezier-react'
      export const Example = () => (
        <Tabs defaultValue="all">
          <TabList size="s">
            <TabItems>
              <TabItem value="all">All</TabItem>
            </TabItems>
          </TabList>
        </Tabs>
      )
    `)

    expect(code).toContain('<Tabs defaultValue="all" size="s">')
    expect(code).toContain('<TabList>')
    expect(code).not.toContain('TabItems')
    expect(diagnostics).toHaveLength(0)
  })

  it('leaves intent-dependent components on the root import and reports them', () => {
    const { code, diagnostics } = migrate(`
      import { ListItem, Badge } from '@channel.io/bezier-react'
      export const Example = () => <ListItem content={<Badge>New</Badge>} />
    `)

    expect(code).toContain(
      "import { ListItem } from '@channel.io/bezier-react'"
    )
    expect(code).toContain(
      "import { Badge } from '@channel.io/bezier-react/beta'"
    )
    expect(diagnostics).toEqual([
      expect.objectContaining({
        code: 'manual-component-migration',
        component: 'ListItem',
      }),
    ])
  })

  it('reports dynamic values and does not rewrite unrelated literals', () => {
    const { code, diagnostics } = migrate(`
      import { Icon } from '@channel.io/bezier-react'
      const size = 'm'
      const domain = { size: 'm' }
      export const Example = () => <Icon size={size} />
    `)

    expect(code).toContain('<Icon size={size} />')
    expect(code).toContain("const domain = { size: 'm' }")
    expect(diagnostics).toEqual([
      expect.objectContaining({ code: 'dynamic-prop-value' }),
    ])
  })

  it('transforms typed props objects and Storybook args only with proven context', () => {
    const { code, diagnostics } = migrate(`
      import { Badge, type IconProps, Spinner } from '@channel.io/bezier-react'
      import type { StoryObj } from '@storybook/react'

      const iconProps: IconProps = { size: 'l' }
      const story = { args: { variant: 'monochrome-dark' } }
      const badgeStory: StoryObj<typeof Badge> = { variant: 'monochrome-light' }
      const spinnerStory = { size: 'm' } satisfies StoryObj<typeof Spinner>
    `)

    expect(code).toContain("const iconProps: IconProps = { size: '36' }")
    expect(code).toContain(
      "const story = { args: { variant: 'monochrome-dark' } }"
    )
    expect(code).toContain(
      "const badgeStory: StoryObj<typeof Badge> = { variant: 'neutral-light' }"
    )
    expect(code).toContain(
      "const spinnerStory = { size: '20' } satisfies StoryObj<typeof Spinner>"
    )
    expect(diagnostics).toHaveLength(0)
  })

  it('moves a standalone type-only import without creating an empty import', () => {
    const { code, diagnostics } = migrate(`
      import type { OverlayProps } from '@channel.io/bezier-react'
      export type Props = Pick<OverlayProps, 'position'>
    `)

    expect(code).toContain(
      "import type { OverlayProps } from '@channel.io/bezier-react/beta'"
    )
    expect(code).not.toContain("from '@channel.io/bezier-react'")
    expect(diagnostics).toHaveLength(0)
  })

  it('is idempotent for fully automatic migrations', () => {
    const first = migrate(`
      import { Badge, Icon } from '@channel.io/bezier-react'
      export const Example = () => <Badge variant="monochrome-dark" icon={<Icon size="m" />} />
    `)
    const sourceFile = project.createSourceFile(
      'beta-migration-idempotence-test.tsx',
      first.code,
      { overwrite: true }
    )

    const second = transform(sourceFile)

    expect(sourceFile.getFullText()).toBe(first.code)
    expect(first.diagnostics).toHaveLength(0)
    expect(second.changes).toHaveLength(0)
    expect(second.diagnostics).toHaveLength(0)
  })

  it('composes the legacy enum transform before beta value mappings', () => {
    const { code, diagnostics } = migrate(`
      import { Icon, IconSize, Status, StatusType } from '@channel.io/bezier-react'
      export const Example = () => (
        <>
          <Icon size={IconSize.Normal} />
          <Status type={StatusType.OnlineCrescent} />
        </>
      )
    `)

    expect(code).toContain("<Icon size='24' />")
    expect(code).toContain("<Status type='online-dnd' />")
    expect(code).not.toContain('IconSize')
    expect(code).not.toContain('StatusType')
    expect(diagnostics).toHaveLength(0)
  })

  it('preserves the legacy ProgressBar default width', () => {
    const { code, changes } = migrate(`
      import { ProgressBar } from '@channel.io/bezier-react'
      export const Example = () => <ProgressBar value={0.5} />
    `)

    expect(code).toContain('<ProgressBar value={0.5} width={36} />')
    expect(changes).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ code: 'default-preserved' }),
        expect.objectContaining({ code: 'import-moved' }),
      ])
    )
  })
})
