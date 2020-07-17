/* External dependencies */
import React from 'react'
import { withKnobs, text, select, object } from '@storybook/addon-knobs'

/* Internal dependencies */
import { createColors } from '../../styling/Colors'
import { DarkTheme, ThemeProvider } from '../../styling/Theme'
import Text from './Text'

export default {
  title: 'Text',
  decorators: [withKnobs],
}

export const Primary = () => (<Text>{ text('content', 'hello') }</Text>)

export const WithStyle = () => (
  <Text
    style={object('style', { color: 'green' })}
  >
    Text
  </Text>
)

export const AlternativeTag = () => (
  <Text
    as={select('as', ['h1', 'h2', 'button'], 'button') as React.ElementType}
  >
    { text('content', 'bye') }
  </Text>
)

export const WithTheme = () => (
  <ThemeProvider theme={DarkTheme}>
    <div style={{ backgroundColor: 'black' }}>
      <Text>
        { text('content', 'hiiii') }
      </Text>
    </div>
  </ThemeProvider>
)

export const WithCustomTheme = () => {
  const customColors = createColors({
    base: 'light',
    colors: {
      textBase: text('textBase', 'pink'),
    },
  })

  const customTheme = { colors: customColors }

  return (
    <ThemeProvider theme={customTheme}>
      <Text>
        { text('content', 'hello, world') }
      </Text>
    </ThemeProvider>
  )
}
