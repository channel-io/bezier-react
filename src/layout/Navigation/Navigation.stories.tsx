/* External dependencies */
import React, { useRef, useCallback } from 'react'
import { action } from '@storybook/addon-actions'
import base from 'paths.macro'

/* Internal dependencies */
import { getTitle } from '../../utils/utils'
import { GNB } from '../GNB'
import Navigation from './Navigation'

export default {
  title: getTitle(base),
  component: Navigation,
  decorators: [Story => (
    <div style={{ height: '100vh' }}>
      <Story />
    </div>
  )],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    onChangeWidth: {
      control: {
        action: 'onChangeWidth',
      },
    },
    onScroll: {
      control: {
        action: 'onScroll',
      },
    },
  },
}

const Template = (args) => <Navigation {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'Title',
  fixedTitle: false,
  disableResize: false,
  width: 240,
  minWidth: 240,
  maxWidth: 540,
}

export const WithGNB = (args) => (
  <div
    style={{
      display: 'flex',
      height: '100%',
    }}
  >
    <GNB>
      This is GNB
    </GNB>
    <Navigation {...args}>
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
  </div>
)
WithGNB.args = {
  withScroll: true,
  title: '고객 연락처',
  fixedTitle: false,
  maxWidth: 540,
  minWidth: 240,
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
      <Navigation
        scrollRef={scrollAreaRef}
        withScroll
        onScroll={action('onScroll')}
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
    </div>
  )
}
