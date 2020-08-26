/* External dependencies */
import React from 'react'

/* Internel dependencies */
import { ThemeProvider, LightTheme, DarkTheme } from '../src/styling/Theme'

const ThemeKeyword = {
  Light: 'light',
  Dark: 'dark',
}

export const parameters = {
  layout: 'centered',
}

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: [ThemeKeyword.Light, ThemeKeyword.Dark],
    },
  },
};

function getTheme(keyword) {
  if (keyword === ThemeKeyword.Light) return LightTheme
  return DarkTheme
}

function withThemeProvider(Story, context) {
  const theme = getTheme(context.globals.theme)

  return (
    <ThemeProvider theme={theme}>
      <Story {...context}/>
    </ThemeProvider>
  )
}

export const decorators = [withThemeProvider]
