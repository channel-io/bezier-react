/* External dependencies */
import React from 'react'
import { getWindow } from 'ssr-window'
import { fireEvent } from '@testing-library/dom'

/* Internal dependencies */
import { TransitionDuration } from 'Foundation'
import { render } from 'Utils/testUtils'
import OverlayProps, { ContainerRectAttr, TargetRectAttr, OverlayPosition } from './Overlay.types'
import Overlay, { CONTAINER_TEST_ID, ESCAPE_KEY, OVERLAY_TEST_ID, WRAPPER_TEST_ID } from './Overlay'
import { getOverlayTranslation } from './utils'

const RootOverlay: React.FC<OverlayProps> = ({ children, ...rests }) => (
  <div id="main">
    <Overlay {...rests}>
      { children }
    </Overlay>
  </div>
)

describe('Overlay test >', () => {
  let props: OverlayProps

  beforeEach(() => {
    props = {
      container: getWindow().document.body,
      show: true,
    }
  })

  const renderOverlay = (optionProps?: OverlayProps) => render(
    <div>
      <div />
      <Overlay {...props} {...optionProps}>
        <div>
          test
        </div>
      </Overlay>
    </div>,
  )

  it('Snapshot >', () => {
    // const { getByTestId: getContainerTestId } = renderContainer()
    // const renderedContainer = getContainerTestId('container')

    const { getByTestId } = renderOverlay()
    const rendered = getByTestId(OVERLAY_TEST_ID)
    expect(rendered).toMatchSnapshot()
  })

  describe('PositionUtils >', () => {
    const overlay = {
      getBoundingClientRect: () => ({
        width: 400,
        height: 400,
      }),
    } as HTMLElement

    const targetRect: TargetRectAttr = {
      targetWidth: 100,
      targetHeight: 100,
      targetTop: 450,
      targetLeft: 450,
      clientTop: 0,
      clientLeft: 0,
    }

    const containerRect: ContainerRectAttr = {
      containerWidth: 1000,
      containerHeight: 1000,
      containerTop: 0,
      containerLeft: 0,
      scrollTop: 0,
      scrollLeft: 0,
    }

    describe('getOverlayTranslation() > ', () => {
      it('Without any option', () => {
        const result = getOverlayTranslation({
          overlay: null,
          targetRect: null,
          position: OverlayPosition.BottomCenter,
          marginX: 0,
          marginY: 0,
          keepInContainer: true,
          containerRect: {
            containerWidth: 0,
            containerHeight: 0,
            containerTop: 0,
            containerLeft: 0,
            scrollTop: 0,
            scrollLeft: 0,
          },
        })

        expect(result).toEqual({
          translateX: 0,
          translateY: 0,
        })
      })

      it('BottomLeft 일반적인 경우, targetHeight 만큼 이동.', () => {
        const result = getOverlayTranslation({
          overlay,
          targetRect,
          position: OverlayPosition.BottomLeft,
          marginX: 0,
          marginY: 0,
          keepInContainer: true,
          containerRect,
        })

        expect(result).toEqual({
          translateX: 0,
          translateY: 100,
        })
      })

      it('BottomLeft 아래가 넘어가는 경우, -overlay.height 만큼 이동', () => {
        const overflowTarget: TargetRectAttr = {
          ...targetRect,
          targetTop: 950,
        }

        const result = getOverlayTranslation({
          overlay,
          targetRect: overflowTarget,
          position: OverlayPosition.BottomLeft,
          marginX: 0,
          marginY: 0,
          keepInContainer: true,
          containerRect,
        })

        expect(result).toEqual({
          translateX: 0,
          translateY: -400,
        })
      })

      it('BottomLeft 아래가 넘어가지만 target 아래쪽 공간이 더 넓을 경우, 일반 상태와 같은 결과.', () => {
        const overflowTarget: TargetRectAttr = {
          ...targetRect,
          targetTop: 200,
        }

        const overflowContainer: ContainerRectAttr = {
          ...containerRect,
          containerHeight: 600,
        }

        /*
          containerHeight: 600,
          targetHeight: 100에
          targetTop: 200이므로,
          target의 아래쪽 공간은 300이다.
          300이 200보다 크므로, overlay는 아래쪽에 나타나야 함.
        */

        const result = getOverlayTranslation({
          overlay,
          targetRect: overflowTarget,
          position: OverlayPosition.BottomLeft,
          marginX: 0,
          marginY: 0,
          keepInContainer: true,
          containerRect: overflowContainer,
        })

        expect(result).toEqual({
          translateX: 0,
          translateY: 100,
        })
      })
    })
  })

  describe('Props and Event', () => {
    const renderRootOverlay = (optionProps?: OverlayProps) => render(<RootOverlay {...props} {...optionProps} />)

    beforeEach(() => {
      props = {
        show: true,
        className: '',
        containerClassName: '',
        position: OverlayPosition.LeftCenter,
        marginX: 0,
        marginY: 0,
        keepInContainer: false,
        withTransition: false,
        enableClickOutside: false,
        children: 'Test Overlay',
      }
    })

    describe('Props', () => {
      describe('show', () => {
        describe('is True', () => {
          it('container style', () => {
            const { getByTestId } = renderRootOverlay()
            const overlay = getByTestId(CONTAINER_TEST_ID)
            expect(overlay).toHaveStyle('position: fixed')
            expect(overlay).toHaveStyle('top: 0')
            expect(overlay).toHaveStyle('right: 0')
            expect(overlay).toHaveStyle('bottom: 0')
            expect(overlay).toHaveStyle('left: 0')
            expect(overlay).toHaveStyle('width: 100%')
            expect(overlay).toHaveStyle('height: 100%')
            expect(overlay).toHaveStyle('pointer-events: all')
          })

          it('wrapper style', () => {
            const { getByTestId } = renderRootOverlay()
            const overlay = getByTestId(WRAPPER_TEST_ID)
            expect(overlay).toHaveStyle('position: relative')
            expect(overlay).toHaveStyle('width: 100%')
            expect(overlay).toHaveStyle('height: 100%')
          })

          it('overlay style', () => {
            const { getByTestId } = renderRootOverlay()
            const overlay = getByTestId(OVERLAY_TEST_ID)
            expect(overlay).toHaveStyle('position: absolute')
          })
        })

        describe('is False', () => {
          it('container style', () => {
            const { container } = renderRootOverlay()
            // <main id="main" />
            expect(container.children.length).toBe(1)
          })
        })
      })

      describe('className', () => {
        it('is transferred', () => {
          const CLASSNAME = 'Test__Overlay'
          const { getByTestId } = renderRootOverlay({ className: CLASSNAME })
          const overlay = getByTestId(OVERLAY_TEST_ID)
          expect(overlay).toHaveClass(CLASSNAME)
        })
      })

      describe('style', () => {
        it('is transferred', () => {
          const STYLE: React.CSSProperties = {
            width: '100px',
          }
          const { getByTestId } = renderRootOverlay({ style: STYLE })
          const overlay = getByTestId(OVERLAY_TEST_ID)
          expect(overlay).toHaveStyle('width: 100px')
        })
      })

      describe('containerClassName', () => {
        it('is transferred', () => {
          const CLASSNAME = 'Test__Container'
          const { getByTestId } = renderRootOverlay({ containerClassName: CLASSNAME })
          const overlay = getByTestId(CONTAINER_TEST_ID)
          expect(overlay).toHaveClass(CLASSNAME)
        })
      })

      describe('containerStyle', () => {
        it('is transferred', () => {
          const STYLE: React.CSSProperties = {
            width: '100px',
          }
          const { getByTestId } = renderRootOverlay({ containerStyle: STYLE })
          const overlay = getByTestId(CONTAINER_TEST_ID)
          expect(overlay).toHaveStyle('width: 100px')
        })
      })

      describe('enableClickOutside', () => {
        document.onclick = jest.fn()
        const onHide = jest.fn()

        afterEach(jest.clearAllMocks)

        it('is True', () => {
          const { getByTestId } = renderRootOverlay({ enableClickOutside: true, onHide })
          const overlay = getByTestId(CONTAINER_TEST_ID)

          overlay.click()
          expect(document.onclick).toHaveBeenCalledTimes(1)
          expect(onHide).toHaveBeenCalledTimes(1)
          overlay.click()
          expect(document.onclick).toHaveBeenCalledTimes(2)
          expect(onHide).toHaveBeenCalledTimes(2)
        })

        it('is False - click is stopPropagation ', () => {
          const { getByTestId } = renderRootOverlay()
          const overlay = getByTestId(CONTAINER_TEST_ID)

          overlay.click()
          expect(document.onclick).toHaveBeenCalledTimes(0)
          expect(onHide).toHaveBeenCalledTimes(0)
          overlay.click()
          expect(document.onclick).toHaveBeenCalledTimes(0)
          expect(onHide).toHaveBeenCalledTimes(0)
        })
      })

      describe('withTransition', () => {
        it('is True', () => {
          const { getByTestId } = renderRootOverlay({ withTransition: true })
          const overlay = getByTestId(OVERLAY_TEST_ID)

          expect(overlay).toHaveStyle(`transition-property: ${['top', 'opacity'].join(',')}`)
          expect(overlay).toHaveStyle(`transition-duration: ${TransitionDuration.S}ms`)
          expect(overlay).toHaveStyle('transition-timing-function: cubic-bezier(.3,0,0,1)')
          expect(overlay).toHaveStyle('transition-delay: 0ms')
        })
      })
    })

    describe('Event', () => {
      describe('keyup', () => {
        document.onkeydown = jest.fn()
        const onHide = jest.fn()

        afterEach(jest.clearAllMocks)

        it('is Triggered By Escape', () => {
          const { getByTestId } = renderRootOverlay({ withTransition: true, onHide })
          const overlay = getByTestId(OVERLAY_TEST_ID)
          fireEvent.keyDown(overlay, { key: ESCAPE_KEY })
          expect(document.onkeydown).toHaveBeenCalledTimes(1)
          expect(onHide).toHaveBeenCalledTimes(1)
          fireEvent.keyDown(overlay, { key: ESCAPE_KEY })
          expect(document.onkeydown).toHaveBeenCalledTimes(2)
          expect(onHide).toHaveBeenCalledTimes(2)
        })

        it('is not Triggered By All keys except Escape', () => {
          const { getByTestId } = renderRootOverlay({ withTransition: true, onHide })
          const overlay = getByTestId(OVERLAY_TEST_ID)
          fireEvent.keyDown(overlay, { key: 'Enter' })
          expect(document.onkeydown).toHaveBeenCalledTimes(1)
          expect(onHide).toHaveBeenCalledTimes(0)
          fireEvent.keyDown(overlay, { key: 'ArrowRight' })
          expect(document.onkeydown).toHaveBeenCalledTimes(2)
          expect(onHide).toHaveBeenCalledTimes(0)
          fireEvent.keyDown(overlay, { key: 'Z' })
          expect(document.onkeydown).toHaveBeenCalledTimes(3)
          expect(onHide).toHaveBeenCalledTimes(0)
        })
      })
    })
  })
})
