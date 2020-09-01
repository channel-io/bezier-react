/* External dependencies */
import React from 'react'

/* Internel dependencies */
import EnableCSSHoudini from '../src/worklets/EnableCSSHoudini'
import { ThemeProvider, LightTheme, DarkTheme } from '../src/styling/Theme'

// CSS Houdini
EnableCSSHoudini({ smoothCorners: true })

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
  const backgroundColor = context.globals.theme === 'dark' ? 'black' : 'white'

  return (
    <div style={{ backgroundColor }}>
      <ThemeProvider theme={theme}>
        <Story {...context}/>
      </ThemeProvider>
    </div>
  )
}

export const decorators = [withThemeProvider]
