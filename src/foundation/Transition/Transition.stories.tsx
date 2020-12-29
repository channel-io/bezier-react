/* External dependencies */
import React, { useCallback, useState, useMemo } from 'react'
import base from 'paths.macro'

/* Internal dependencies */
import { styled } from '../index'
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
  width: 300px;
  height: 300px;
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
  ${({ foundation }) => foundation?.transition?.getTransitionsCSS(
    ['top', 'right', 'bottom', 'left'],
    foundation?.transition?.TransitionDuration.M,
  )};
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
          top: isEntered ? 100 : -100,
          left: 100,
        }
      case 'right':
        return {
          right: isEntered ? 100 : -100,
          top: 100,
        }
      case 'bottom':
        return {
          bottom: isEntered ? 100 : -100,
          left: 100,
        }
      case 'left':
      default:
        return {
          left: isEntered ? 100 : -100,
          top: 100,
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
