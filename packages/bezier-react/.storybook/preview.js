/* External dependencies */
import React from 'react'

/* Internal dependencies */
import {
  LightFoundation,
  DarkFoundation,
} from 'Foundation'
import BezierProvider from 'Providers/BezierProvider'
import { Text } from 'Components/Text'

const FoundationKeyword = {
  Light: 'light',
  Dark: 'dark',
}

export const parameters = {
  layout: 'centered',
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: 'white',
      },
      {
        name: 'dark',
        value: '#2f3233',
      },
    ],
  }
}

export const globalTypes = {
  Foundation: {
    name: 'Foundation',
    description: 'Global Foundation for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: [FoundationKeyword.Light, FoundationKeyword.Dark],
    },
  },
};

function getFoundation(keyword) {
  const isDarkFoundation = keyword === FoundationKeyword.Dark
  return {
    isDarkFoundation,
    foundation: isDarkFoundation ? DarkFoundation : LightFoundation,
    invertedFoundation: isDarkFoundation ? LightFoundation : DarkFoundation,
  }
}

const customGlobalStyle = {
  // You can inject custom global CSS
  global: {
    html: {
      fontFamily: 'Inter',
    }
  }
}

const wrapperStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 20,
  width: '100%',
  height: '100%',
}

const storyWrapperStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 20,
  padding: 20,
}

const innerWrapperStyle = {
  height: '100%',
  padding: 40,
  borderRadius: 20,
}

function withFoundationProvider(Story, context) {
  const {
    isDarkFoundation,
    foundation: Foundation,
    invertedFoundation: InvertedFoundation,
   } = getFoundation(context.globals.Foundation)

  const [backgroundColor, invertedBackgroundColor, themeName, invertedThemeName] = (() => {
    const lightBackgroundColor = LightFoundation.theme['bg-white-normal']
    const darkBackgroundColor = DarkFoundation.theme['bg-white-normal']
    const lightThemeName = 'Light Theme'
    const darkThemeName = 'Dark Theme'

    return isDarkFoundation
      ? [darkBackgroundColor, lightBackgroundColor, darkThemeName, lightThemeName]
      : [lightBackgroundColor, darkBackgroundColor, lightThemeName, darkThemeName]
  })()

  const foundation = {
    ...Foundation,
    ...customGlobalStyle,
  }

  const invertedFoundation = {
    ...InvertedFoundation,
    ...customGlobalStyle,
  }

  return (
    <div style={wrapperStyle}>
      <BezierProvider 
        foundation={foundation}
        themeVarsScope=".theme"
      >
        <div className="theme" style={storyWrapperStyle}>
          <div style={{ ...innerWrapperStyle, backgroundColor }}>
            { Story(context) }
          </div>
          <Text bold color="bgtxt-absolute-black-light">
            { themeName }
          </Text>
        </div>
      </BezierProvider>
      <BezierProvider
        foundation={invertedFoundation}
        themeVarsScope=".inverted-theme"
      >
        <div className="inverted-theme" style={storyWrapperStyle}>
          <div style={{ ...innerWrapperStyle, backgroundColor: invertedBackgroundColor }}>
            { Story(context) }
          </div>
          <Text bold color="bgtxt-absolute-black-light">
            { invertedThemeName }
          </Text>
        </div>
      </BezierProvider>
    </div>
  )
}

export const decorators = [withFoundationProvider]
