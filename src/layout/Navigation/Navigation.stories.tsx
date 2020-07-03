/* External dependencies */
import React from 'react'
import { addDecorator } from '@storybook/react'
import { withKnobs, select, number, text, boolean } from '@storybook/addon-knobs'

/* Internal dependencies */
import { GNB } from '../GNB'
import { ThemeProvider, LightTheme, DarkTheme } from '../../styling/Theme'
import Navigation from './Navigation'

export default {
  title: 'Navigation',
  decorators: [withKnobs],
}

const decorator = storyfn => (
  <div style={{ height: '100vh' }}>
    { storyfn() }
  </div>
)

addDecorator(decorator)

export const Default = () => (
  <ThemeProvider theme={LightTheme}>
    <Navigation />
  </ThemeProvider>
)

export const ResizeDisabled = () => (
  <ThemeProvider theme={LightTheme}>
    <Navigation disableResize/>
  </ThemeProvider>
)

export const WithGNB = () => {
  const getTheme = (theme: string) => (theme === 'dark' ? DarkTheme : LightTheme)

  return (
    <div
      style={{
        display: 'flex',
        height: '100%',
      }}
    >
      <ThemeProvider theme={getTheme(select('theme', ['light', 'dark'], 'light'))}>
        <GNB>
          This is GNB
        </GNB>
        <Navigation
          title={text('navigation title', '고객 연락처')}
          fixedTitle={boolean('fixed title', false)}
          maxWidth={number('max width', 540)}
          minWidth={number('min width', 240)}
        >
          {
            Array.from(Array(100).keys()).map((item, index) => (
              <div
                style={{
                  width: '100%',
                  paddingLeft: 15,
                  marginBottom: 15,
                }}
              >
                { `${index}-팀챗` }
              </div>
            ))
          }
        </Navigation>
        <div
          style={{
            width: '100%',
            height: '100%',
            overflowX: 'hidden',
            overflowY: 'scroll',
          }}
        >
          {
            Array.from(Array(100).keys()).map((item, index) => (
              <div
                style={{
                  width: '100%',
                  marginTop: 1,
                  padding: 15,
                }}
              >
                { `${index}-메시지` }
              </div>
            ))
          }
        </div>
      </ThemeProvider>
    </div>
  )
}
