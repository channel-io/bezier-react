import React from 'react'

import {
  LightFoundation,
  DarkFoundation,
} from '~/src/foundation'
import { SmoothCornersFeature } from '~/src/features'
import BezierProvider from '~/src/providers/BezierProvider'
import { AlphaAppProvider } from '~/src/providers/AlphaAppProvider'
import { InvertedThemeProvider } from '~/src/providers/ThemeProvider'
import { Text } from '~/src/components/Text'

import '~/src/styles/index.scss'

const FoundationKeyword = {
  Light: 'light',
  Dark: 'dark',
}

function getFoundation(keyword) {
  const isDarkFoundation = keyword === FoundationKeyword.Dark
  return {
    isDarkFoundation,
    foundation: isDarkFoundation ? DarkFoundation : LightFoundation,
    invertedFoundation: isDarkFoundation ? LightFoundation : DarkFoundation,
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

// TODO: Migrate to AlphaAppProvider
export function WithFoundationProvider(Story, context) {
  const {
    isDarkFoundation,
    foundation,
    invertedFoundation,
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

  return (
    <AlphaAppProvider
      themeName={isDarkFoundation ? "dark" : "light"}
      features={[SmoothCornersFeature]}
    >
      <BezierProvider
        foundation={foundation}
        themeVarsScope=".theme"
      >
        <div style={wrapperStyle}>
          <div className="theme" style={storyWrapperStyle}>
            <div style={{ ...innerWrapperStyle, backgroundColor }}>
              { Story(context) }
            </div>
            <Text bold color="bgtxt-absolute-black-light">
              { themeName }
            </Text>
          </div>

          <BezierProvider
            foundation={invertedFoundation}
            themeVarsScope=".inverted-theme"
          >
            <InvertedThemeProvider>
              <div className="inverted-theme" style={storyWrapperStyle}>
                <div style={{ ...innerWrapperStyle, backgroundColor: invertedBackgroundColor }}>
                  { Story(context) }
                </div>
                <Text bold color="bgtxt-absolute-black-light">
                  { invertedThemeName }
                </Text>
              </div>
            </InvertedThemeProvider>
          </BezierProvider>
        </div>
      </BezierProvider>
    </AlphaAppProvider>
  )
}
