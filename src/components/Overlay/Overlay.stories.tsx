/* External dependencies */
import React, { useEffect, useRef, useState } from 'react'
import { base } from 'paths.macro'
import { Story, Meta } from '@storybook/react'

/* Internal dependencies */
import { styled } from 'Foundation'
import { getTitle } from 'Utils/storyUtils'
import Overlay from './Overlay'
import OverlayProps, { OverlayPosition } from './Overlay.types'

export default {
  title: getTitle(base),
  component: Overlay,
  argTypes: {
    position: {
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
          OverlayPosition.InnerLeftTop,
          OverlayPosition.InnerLeftBottom,
          OverlayPosition.InnerRightTop,
          OverlayPosition.InnerRightBottom,
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
    containerWidth: {
      control: {
        type: 'range',
        min: 100,
        max: 1000,
        step: 20,
      },
    },
    containerHeight: {
      control: {
        type: 'range',
        min: 100,
        max: 1000,
        step: 20,
      },
    },
  },
} as Meta

interface ContainerProps {
  width?: number
  height?: number
}

const Container = styled.div<ContainerProps>`
  position: relative;
  width: ${({ width }) => width ?? 600}px;
  height: ${({ height }) => height ?? 500}px;
  overflow: hidden;
  border: 1px solid ${props => props.foundation?.theme?.['bg-black-dark']};
`

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`

const Target = styled.div`
  position: absolute;
  top: 200px;
  left: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 40px;
  background-color: ${props => props.foundation?.theme?.['bg-black-dark']};
  border-radius: 4px;
`

const Children = styled.div`
  width: 250px;
  height: 150px;
  overflow-y: scroll;
  background-color: ${props => props.foundation?.theme?.['bg-black-dark']};
  border-radius: 4px;
`

const ScrollContent = styled.div`
  box-sizing: border-box;
  width: 250px;
  height: 350px;
  padding: 5px;
  color: white;
`

const OverlayTemplate: React.FC<OverlayProps & ContainerProps> = ({
  children,
  width: containerWidth,
  height: containerHeight,
  ...rests
}) => {
  const containerRef = useRef<any>(null)
  const targetRef = useRef<any>(null)

  return (
    <Container
      width={containerWidth}
      height={containerHeight}
      ref={containerRef}
    >
      <Wrapper>
        <Target ref={targetRef}>
          target
        </Target>
        <Overlay
          {...rests}
          target={targetRef.current}
          container={containerRef.current}
        >
          { children }
        </Overlay>
      </Wrapper>
    </Container>
  )
}

const Template: Story = (props) => (
  <OverlayTemplate {...props}>
    <Children>
      <ScrollContent>
        {
          `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s
          with the release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.`
        }
      </ScrollContent>
    </Children>
  </OverlayTemplate>
)

export const Primary = Template.bind({})
Primary.args = {
  show: false,
  position: OverlayPosition.BottomCenter,
  marginX: 0,
  marginY: 0,
  keepInContainer: false,
  withTransition: false,
}

const StressTestTemplate: Story<OverlayProps> = (props) => {
  const targetRef = useRef<any>()
  const containerRef = useRef<any>()
  const [, reload] = useState(0)

  useEffect(() => {
    setInterval(() => {
      reload(prev => prev + 1)
    }, 100)
  }, [])

  return (
    <OverlayTemplate
      {...props}
      // 실제 값은 변하지 않지만, 100ms의 매 렌더링마다 참조가 변하고 있다.
      containerStyle={{ opacity: 1 }}
      target={targetRef.current}
      container={containerRef.current}
    >
      <Children>
        <ScrollContent>
          {
            `Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.`
          }
        </ScrollContent>
      </Children>
    </OverlayTemplate>
  )
}

export const StressTest = StressTestTemplate.bind({})
StressTest.args = {
  enableClickOutside: false,
}

const ChangeableChildrenTemplate: Story<OverlayProps> = (props) => {
  const [items, setItems] = useState<number[]>([])

  const addItem = React.useCallback(() => {
    setItems([...items, Math.random()])
  }, [items])

  return (
    <>
      <button type="button" onClick={addItem}>Add</button>
      <div>
        <OverlayTemplate {...props}>
          <Children>
            { items.map((item) => (
              <div key={item}>
                { item }
              </div>
            )) }
          </Children>
        </OverlayTemplate>
      </div>
    </>
  )
}

export const ChangeableChildren = ChangeableChildrenTemplate.bind({})
ChangeableChildren.args = {
  show: false,
  position: OverlayPosition.BottomCenter,
  marginX: 0,
  marginY: 0,
  keepInContainer: false,
  withTransition: false,
  enableClickOutside: true,
}
