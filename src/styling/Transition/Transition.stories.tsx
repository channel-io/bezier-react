/* External dependencies */
import React, { useCallback, useState, useMemo } from 'react'
import base from 'paths.macro'

/* Internal dependencies */
import { styled } from '../Theme'
import { getTitle } from '../../utils/utils'

export default {
  title: getTitle(base),
  argTypes: {
    property: {
      control: {
        type: 'radio',
        options: [
          'top',
          'right',
          'bottom',
          'left',
        ],
      },
    },
  },
}

const ElementWrapper = styled.div`
  position: relative;
  border: 1px solid red;
  width: 500px;
  height: 500px;
  overflow: hidden;
`

interface ElementProps {
  top?: number
  right?: number
  bottom?: number
  left?: number
}

const Element = styled.div.attrs<ElementProps>(({
  top,
  right,
  bottom,
  left,
}) => ({
  style: {
    top,
    right,
    bottom,
    left,
  },
}))`
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: lightgray;
  border-radius: 4px;
  transition-property: top, right, bottom, left;
  transition-duration: ${props => props.theme?.transition?.TransitionDuration.M};
  transition-timing-function: ${props => props.theme?.transition?.TransitionEasing};
`

const Template = (args) => {
  const [isEntered, setIsEntered] = useState(false)

  const handleClick = useCallback(() => setIsEntered(prevEntered => !prevEntered), [])

  const props: {
    top?: number
    right?: number
    bottom?: number
    left?: number
  } = useMemo(() => {
    switch (args.property) {
      case 'top':
        return {
          top: isEntered ? 200 : -100,
          left: 200,
        }
      case 'right':
        return {
          right: isEntered ? 200 : -100,
          top: 200,
        }
      case 'bottom':
        return {
          bottom: isEntered ? 200 : -100,
          left: 200,
        }
      case 'left':
      default:
        return {
          left: isEntered ? 200 : -100,
          top: 200,
        }
    }
  }, [args, isEntered])

  return (
    <>
      <ElementWrapper>
        { /* @ts-ignore */ }
        <Element
          {...props}
        />
      </ElementWrapper>
      <button onClick={handleClick} type="button">
        보이기 / 숨기기
      </button>
    </>
  )
}

export const Top = Template.bind({})
Top.args = {
  property: 'top',
}
