import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming/create'

// eslint-disable-next-line no-restricted-imports
import packageJson from '../package.json'

import logo from './assets/ch-logo.svg'

addons.setConfig({
  theme: create({
    base: 'light',
    fontBase: 'Inter, NotoSansKR, NotoSansJP, sans-serif',
    fontCode: 'ui-monospace',
    brandTitle: 'Bezier React Storybook',
    brandUrl: packageJson.repository.url,
    brandImage: logo,
    brandTarget: '_self',
  }),
})
