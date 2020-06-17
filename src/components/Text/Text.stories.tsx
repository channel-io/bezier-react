/* External dependencies */
import React from 'react'

/* Internal dependencies */
import Text from './Text'
import { DarkTheme, ChThemeProvider } from '../../theme/Theme'

export default {
  title: 'Text',
}

export const Primary = () => <Text content="hello" />

export const WithStyle = () => <Text content="hello" styles={{ color: 'green' }}/>

export const AlternativeTag = () => <Text content="bye" as="button" />

export const WithTheme = () => (
  <ChThemeProvider theme={DarkTheme}>
    <Text content="hiiii"/>
  </ChThemeProvider>
)
