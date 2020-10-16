/* External dependencies */
import React, { useRef } from 'react'
import { base } from 'paths.macro'

/* Internal dependencies */
import { getTitle } from '../../utils/utils'
import { styled } from '../../styling/Theme'
import Palette from '../../styling/Palette'
import Overlay from './Overlay'
import OverlayPosition from './OverlayPosition'

export default {
  title: getTitle(base),
  component: Overlay,
  argTypes: {
    placement: {
      control: {
        type: 'radio',
        options: [
          OverlayPosition.TopCenter,
          OverlayPosition.TopLeft,
          OverlayPosition.TopRight,
          OverlayPosition.RightCenter,
          OverlayPosition.RightTop,
          OverlayPosition.RightBottom,
          OverlayPosition.BottomCenter,
          OverlayPosition.BottomLeft,
          OverlayPosition.BottomRight,
          OverlayPosition.LeftCenter,
          OverlayPosition.LeftTop,
          OverlayPosition.LeftBottom,
        ],
      },
    },
    marginX: {
      control: {
        type: 'range',
        min: -200,
        max: 200,
        step: 1,
      },
    },
    marginY: {
      control: {
        type: 'range',
        min: -200,
        max: 200,
        step: 1,
      },
    },
  },
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 500px;
  border: 1px solid ${Palette.grey700};
`

const Target = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 40px;
  background-color: ${Palette.grey300};
  border-radius: 4px;
`

const Children = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 150px;
  background-color: ${Palette.grey500};
  border-radius: 4px;
`

const Template = (props) => {
  const targetRef = useRef<any>()

  return (
    <Container>
      <Target ref={targetRef}>
        target
      </Target>
      <Overlay
        {...props}
        target={targetRef.current}
      >
        <Children>overlay</Children>
      </Overlay>
    </Container>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  show: false,
  placement: OverlayPosition.BottomCenter,
  marginX: 0,
  marginY: 0,
}
