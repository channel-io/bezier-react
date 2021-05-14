/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { styled, smoothCorners } from '../../foundation'

export default {
  title: 'SmoothCorners',
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
    Story => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        { Story() }
      </div>
    ),
  ],
}

interface DivProps {
  width: number
  height: number
}

const WithSmooth = styled.div<DivProps>`
  box-sizing: content-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background-color: white;
  background-image: url('https://picsum.photos/200/300.jpg');
  border-radius: 42%;
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1), 0 5px 15px 0 rgba(0, 0, 0, 0.5);

  ${smoothCorners({
    shadow: '0 0 0px 3px rgba(0, 0, 0, 0.1), 0 5px 15px 0 rgba(0, 0, 0, 0.5)',
    backgroundColor: 'white',
    backgroundImage: 'https://picsum.photos/200/300.jpg',
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
  background-image: url('https://picsum.photos/200/300.jpg');
  background-position: center;
  background-size: contain;
  border-radius: 42%;
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1), 0 5px 15px 0 rgba(0, 0, 0, 0.5);
`

const Template = (args) => (
  <>
    <WithSmooth
      {...args}
    />
    <WithoutSmooth
      {...args}
    />
  </>
)

export const Primary = Template.bind({})
Primary.args = {
  width: 100,
  height: 100,
}
