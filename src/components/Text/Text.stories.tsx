/* External dependencies */
import React from 'react'
import { withKnobs, text, select, object } from '@storybook/addon-knobs'

/* Internal dependencies */
import Text from './Text'
import { DarkTheme, ChThemeProvider } from '../../theme/Theme'

export default {
  title: 'Text',
  decorators: [withKnobs],
}

export const Primary = () => (<Text content={text('content', 'hello')} />)

export const WithStyle = () => (
  <Text
    content={text('content', 'hello')}
    style={object('style', { color: 'green' })}
  />
)

export const AlternativeTag = () => (
  <Text
    content={text('content', 'bye')}
    as={select('as', ['h1', 'h2', 'button'], 'button') as React.ElementType}
  />
)

export const WithTheme = () => (
  <ChThemeProvider theme={DarkTheme}>
    <Text content={text('content', 'hiiii')} />
  </ChThemeProvider>
)
