import React from 'react'

import {
  LightFoundation,
  DarkFoundation,
  createGlobalStyle,
} from '~/src/foundation'
import {
  FeatureProvider,
  SmoothCornersFeature,
} from '~/src/features'
import BezierProvider from '~/src/providers/BezierProvider'
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

const GlobalStyle = createGlobalStyle`
  :root {
    font-family: Inter, sans-serif;
  }
`

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
    <FeatureProvider features={[SmoothCornersFeature]}>
      <GlobalStyle />

      <BezierProvider foundation={foundation}>
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
      </BezierProvider>
    </FeatureProvider>
  )
}
