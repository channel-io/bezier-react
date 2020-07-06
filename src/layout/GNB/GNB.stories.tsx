/* External dependencies */
import React, { useRef, useCallback } from 'react'
import { addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

/* Internal dependencies */
import { LightTheme, ThemeProvider } from '../../styling/Theme'
import GNB from './GNB'

export default {
  title: 'GNB',
  decorators: [withKnobs],
}

const decorator = storyfn => (
  <div style={{ height: '100vh' }}>
    { storyfn() }
  </div>
)

addDecorator(decorator)

export const WithoutTheme = () => (<GNB />)

export const WithTheme = () => (
  <ThemeProvider theme={LightTheme}>
    <GNB />
  </ThemeProvider>
)

export const WithRef = () => {
  const gnbRef = useRef<HTMLDivElement | null>(null)

  const handleClick = useCallback(() => {
    alert(`GNB Height: ${gnbRef.current?.offsetHeight}`)
  }, [gnbRef])

  return (
    <ThemeProvider theme={LightTheme}>
      <div
        style={{
          display: 'flex',
          height: '100%',
        }}
      >
        <GNB
          ref={gnbRef}
        >
          Guess my height!
        </GNB>
        <button type="button" style={{ height: 50 }} onClick={handleClick}>click me!</button>
      </div>
    </ThemeProvider>
  )
}
