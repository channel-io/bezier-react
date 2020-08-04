/* External dependencies */
import React, { useRef, useCallback } from 'react'
import { addDecorator } from '@storybook/react'
import { withKnobs, select, number, text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

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
    <Navigation
      title={text('title', 'Title')}
      fixedTitle={boolean('fixed title', false)}
      width={number('width', 240)}
      minWidth={number('minWidth', 240)}
      maxWidth={number('maxWidth', 540)}
      onChangeWidth={action('onChangeWidth')}
    />
  </ThemeProvider>
)

export const ResizeDisabled = () => (
  <ThemeProvider theme={LightTheme}>
    <Navigation disableResize/>
  </ThemeProvider>
)

export const WithRef = () => {
  const navigationRef = useRef<HTMLDivElement | null>(null)

  const handleClick = useCallback(() => {
    alert(navigationRef.current?.offsetWidth)
  }, [navigationRef])

  return (
    <ThemeProvider theme={LightTheme}>
      <div
        style={{
          display: 'flex',
          height: '100%',
        }}
      >
        <Navigation ref={navigationRef} width={number('width', 300)}>
          Guess my width!
        </Navigation>
        <button type="button" onClick={handleClick}>click me</button>
      </div>
    </ThemeProvider>
  )
}

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
          withScroll
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

export const ProgrammaticScroll = () => {
  const scrollAreaRef = useRef<HTMLDivElement | null>(null)
  const firstMilestone = useRef<HTMLDivElement | null>(null)
  const secondMilestone = useRef<HTMLDivElement | null>(null)
  const scrollToTop = useCallback(() => {
    scrollAreaRef.current.scrollTop = 0
  }, [])

  const scrollToBottom = useCallback(() => {
    scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
  }, [])

  return (
    <div
      style={{ display: 'flex', height: '100%' }}
    >
      <ThemeProvider theme={LightTheme}>
        <Navigation
          scrollRef={scrollAreaRef}
          withScroll
        >
          <div
            style={{
              position: 'relative',
              height: 15000,
            }}
          >
            <div style={{ position: 'absolute', top: 0 }}>
              Hi, This is TOP!
            </div>

            <div
              ref={firstMilestone}
              style={{ position: 'absolute', top: 3000 }}
            >
              1st Milestone
            </div>

            <div
              ref={secondMilestone}
              style={{ position: 'absolute', top: 8000 }}
            >
              2nd Milestone
            </div>

            <div style={{ position: 'absolute', bottom: 0 }}>
              Oh hello, This is BOTTOM!
            </div>
          </div>
        </Navigation>
        <div>
          <button type="button" onClick={scrollToTop}>
            Go to Top
          </button>
          <button type="button" onClick={scrollToBottom}>
            Go to Bottom
          </button>
        </div>
      </ThemeProvider>
    </div>
  )
}
