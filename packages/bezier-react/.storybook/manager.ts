import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming/create'

// eslint-disable-next-line no-restricted-imports
import packageJson from '../package.json'

addons.setConfig({
  theme: create({
    base: 'light',
    fontBase: 'Inter, NotoSansKR, NotoSansJP, sans-serif',
    fontCode: 'ui-monospace',
    brandTitle: `${packageJson.name}@${packageJson.version}`,
    brandUrl: packageJson.repository.url,
    brandTarget: '_self',
  }),
})
