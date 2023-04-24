import React from 'react'

import {
  type Meta,
  type Story,
} from '@storybook/react'
import base from 'paths.macro'

import {
  backgroundImageVariable,
  smoothCorners,
  styled,
} from '~/src/foundation'

import { getTitle } from '~/src/utils/storyUtils'

export default {
  title: getTitle(base),
  argTypes: {
    width: {
      control: {
        type: 'range',
        min: 10,
        max: 500,
        step: 1,
      },
    },
    height: {
      control: {
        type: 'range',
        min: 10,
        max: 500,
        step: 1,
      },
    },
  },
  decorators: [
    story => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        { story() }
      </div>
    ),
  ],
} as Meta

interface DivProps {
  width: number
  height: number
}

const IMAGE_URL = 'https://picsum.photos/200/300.jpg'

const WithSmooth = styled.div<DivProps>`
  box-sizing: content-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background-color: white;
  border-radius: 42%;
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1), 0 5px 15px 0 rgba(0, 0, 0, 0.5);

  ${smoothCorners({
    shadow: '0 0 0px 3px rgba(0, 0, 0, 0.1), 0 5px 15px 0 rgba(0, 0, 0, 0.5)',
    backgroundColor: 'white',
    shadowBlur: 15,
    borderRadius: '42%',
  })};
`
const WithoutSmooth = styled.div<DivProps>`
  box-sizing: content-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background-color: white;
  background-image: url(IMAGE_URL);
  background-position: center;
  background-size: contain;
  border-radius: 42%;
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1), 0 5px 15px 0 rgba(0, 0, 0, 0.5);
`

const Template: Story<DivProps> = (args) => (
  <>
    <WithSmooth
      style={backgroundImageVariable({ imageUrl: IMAGE_URL })}
      {...args}
    />
    <WithoutSmooth {...args} />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
  width: 100,
  height: 100,
}
