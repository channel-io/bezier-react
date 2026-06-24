import * as React from 'react'

import { fireEvent, waitFor } from '@testing-library/dom'
import { getWindow } from 'ssr-window'

import { render } from '~/src/utils/test'

import { Button } from '~/src/components/Button'

import {
  CONTAINER_TEST_ID,
  ESCAPE_KEY,
  OVERLAY_TEST_ID,
  Overlay,
} from './Overlay'
import type {
  ContainerRectAttr,
  OverlayProps,
  TargetRectAttr,
} from './Overlay.types'
import { getOverlayTranslation } from './utils'

import styles from './Overlay.module.scss'

const RootOverlay: React.FC<OverlayProps> = ({ children, ...rests }) => (
  <div id="main">
    <Overlay {...rests}>{children}</Overlay>
  </div>
)

describe('Overlay', () => {
  let props: OverlayProps

  beforeEach(() => {
    props = {
      container: getWindow().document.body,
      show: true,
    }
  })

  describe('Position', () => {
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

    describe('getOverlayTranslation', () => {
      it('Without any option', () => {
        const result = getOverlayTranslation({
          overlay: null,
          targetRect: null,
          position: 'bottom-center',
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
          position: 'bottom-left',
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
          position: 'bottom-left',
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
          position: 'bottom-left',
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
    const renderRootOverlay = (optionProps?: OverlayProps) =>
      render(
        <RootOverlay
          {...props}
          {...optionProps}
        />
      )

    beforeEach(() => {
      props = {
        show: true,
        className: '',
        containerClassName: '',
        position: 'left-center',
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
          const { getByTestId } = renderRootOverlay({
            containerClassName: CLASSNAME,
          })
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

      describe('target', () => {
        it('supports virtual target rect', () => {
          const getBoundingClientRect = jest.fn(() => ({
            width: 0,
            height: 0,
            top: 100,
            left: 200,
          }))

          renderRootOverlay({
            target: {
              getBoundingClientRect,
            },
          })

          expect(getBoundingClientRect).toHaveBeenCalled()
        })

        it('updates position when the page scrolls', async () => {
          let targetTop = 100
          const target = {
            getBoundingClientRect: () => ({
              width: 50,
              height: 30,
              top: targetTop,
              left: 80,
            }),
          } as HTMLElement

          const { getByTestId } = renderRootOverlay({
            target,
            position: 'bottom-left',
          })
          const overlay = getByTestId(OVERLAY_TEST_ID)

          await waitFor(() => {
            expect(overlay).toHaveStyle('top: 100px')
          })

          targetTop = 60
          fireEvent.scroll(window)

          await waitFor(() => {
            expect(overlay).toHaveStyle('top: 60px')
          })
        })

        it('updates position when the window resizes', async () => {
          let targetTop = 100
          const target = {
            getBoundingClientRect: () => ({
              width: 50,
              height: 30,
              top: targetTop,
              left: 80,
            }),
          } as HTMLElement

          const { getByTestId } = renderRootOverlay({
            target,
            position: 'bottom-left',
          })
          const overlay = getByTestId(OVERLAY_TEST_ID)

          await waitFor(() => {
            expect(overlay).toHaveStyle('top: 100px')
          })

          targetTop = 60
          fireEvent.resize(window)

          await waitFor(() => {
            expect(overlay).toHaveStyle('top: 60px')
          })
        })

        it('updates position when a scrollable ancestor scrolls', async () => {
          let targetTop = 100
          const scrollParent = document.createElement('div')
          const target = document.createElement('button')

          scrollParent.style.overflow = 'auto'
          scrollParent.appendChild(target)
          document.body.appendChild(scrollParent)

          target.getBoundingClientRect = jest.fn(() => ({
            width: 50,
            height: 30,
            top: targetTop,
            left: 80,
            right: 130,
            bottom: targetTop + 30,
            x: 80,
            y: targetTop,
            toJSON: () => {},
          }))

          const { getByTestId } = renderRootOverlay({
            target,
            position: 'bottom-left',
          })
          const overlay = getByTestId(OVERLAY_TEST_ID)

          await waitFor(() => {
            expect(overlay).toHaveStyle('top: 100px')
          })

          targetTop = 60
          fireEvent.scroll(scrollParent)

          await waitFor(() => {
            expect(overlay).toHaveStyle('top: 60px')
          })

          scrollParent.remove()
        })

        it('updates position when the target size changes', async () => {
          const typedWindow = window as Window & {
            ResizeObserver?: typeof ResizeObserver
          }
          const originalResizeObserver = typedWindow.ResizeObserver
          let resizeObserverCallback: ResizeObserverCallback = () => {}
          let targetHeight = 30
          const target = document.createElement('button')

          typedWindow.ResizeObserver = jest
            .fn()
            .mockImplementation((callback) => {
              resizeObserverCallback = callback

              return {
                observe: jest.fn(),
                disconnect: jest.fn(),
              }
            })

          target.getBoundingClientRect = jest.fn(() => ({
            width: 50,
            height: targetHeight,
            top: 100,
            left: 80,
            right: 130,
            bottom: 100 + targetHeight,
            x: 80,
            y: 100,
            toJSON: () => {},
          }))

          const { getByTestId } = renderRootOverlay({
            target,
            position: 'bottom-left',
          })
          const overlay = getByTestId(OVERLAY_TEST_ID)

          await waitFor(() => {
            expect(overlay).toHaveStyle(
              'transform: translateX(0px) translateY(30px)'
            )
          })

          targetHeight = 60
          React.act(() => {
            resizeObserverCallback([], {} as ResizeObserver)
          })

          await waitFor(() => {
            expect(overlay).toHaveStyle(
              'transform: translateX(0px) translateY(60px)'
            )
          })

          typedWindow.ResizeObserver = originalResizeObserver
        })

        it('updates position when the container size changes', async () => {
          const typedWindow = window as Window & {
            ResizeObserver?: typeof ResizeObserver
          }
          const originalResizeObserver = typedWindow.ResizeObserver
          let resizeObserverCallback: ResizeObserverCallback = () => {}
          let containerTop = 20
          const container = document.createElement('div')
          const target = {
            getBoundingClientRect: () => ({
              width: 50,
              height: 30,
              top: 100,
              left: 80,
            }),
          } as HTMLElement

          typedWindow.ResizeObserver = jest
            .fn()
            .mockImplementation((callback) => {
              resizeObserverCallback = callback

              return {
                observe: jest.fn(),
                disconnect: jest.fn(),
              }
            })

          container.getBoundingClientRect = jest.fn(() => ({
            width: 300,
            height: 300,
            top: containerTop,
            left: 0,
            right: 300,
            bottom: containerTop + 300,
            x: 0,
            y: containerTop,
            toJSON: () => {},
          }))

          document.body.appendChild(container)

          const { getByTestId } = renderRootOverlay({
            container,
            target,
            position: 'bottom-left',
          })
          const overlay = getByTestId(OVERLAY_TEST_ID)

          await waitFor(() => {
            expect(overlay).toHaveStyle('top: 80px')
          })

          containerTop = 40
          React.act(() => {
            resizeObserverCallback([], {} as ResizeObserver)
          })

          await waitFor(() => {
            expect(overlay).toHaveStyle('top: 60px')
          })

          container.remove()
          typedWindow.ResizeObserver = originalResizeObserver
        })

        it('updates position when the overlay size changes', async () => {
          const typedWindow = window as Window & {
            ResizeObserver?: typeof ResizeObserver
          }
          const originalResizeObserver = typedWindow.ResizeObserver
          let resizeObserverCallback: ResizeObserverCallback = () => {}
          let overlayHeight = 40
          const target = document.createElement('button')
          const container = document.createElement('div')

          typedWindow.ResizeObserver = jest
            .fn()
            .mockImplementation((callback) => {
              resizeObserverCallback = callback

              return {
                observe: jest.fn(),
                disconnect: jest.fn(),
              }
            })

          target.getBoundingClientRect = jest.fn(() => ({
            width: 50,
            height: 30,
            top: 100,
            left: 80,
            right: 130,
            bottom: 130,
            x: 80,
            y: 100,
            toJSON: () => {},
          }))

          container.getBoundingClientRect = jest.fn(() => ({
            width: 300,
            height: 150,
            top: 0,
            left: 0,
            right: 300,
            bottom: 150,
            x: 0,
            y: 0,
            toJSON: () => {},
          }))

          document.body.appendChild(container)

          const { getByTestId } = renderRootOverlay({
            container,
            target,
            position: 'bottom-left',
            keepInContainer: true,
          })
          const overlay = getByTestId(OVERLAY_TEST_ID)
          overlay.getBoundingClientRect = jest.fn(() => ({
            width: 50,
            height: overlayHeight,
            top: 100,
            left: 80,
            right: 130,
            bottom: 100 + overlayHeight,
            x: 80,
            y: 100,
            toJSON: () => {},
          }))

          React.act(() => {
            resizeObserverCallback([], {} as ResizeObserver)
          })

          await waitFor(() => {
            expect(overlay).toHaveStyle(
              'transform: translateX(0px) translateY(-40px)'
            )
          })

          overlayHeight = 60
          React.act(() => {
            resizeObserverCallback([], {} as ResizeObserver)
          })

          await waitFor(() => {
            expect(overlay).toHaveStyle(
              'transform: translateX(0px) translateY(-60px)'
            )
          })

          container.remove()
          typedWindow.ResizeObserver = originalResizeObserver
        })
      })

      describe('enableClickOutside', () => {
        document.onclick = jest.fn()
        const onHide = jest.fn()

        afterEach(jest.clearAllMocks)

        it('is True', () => {
          const { getByTestId } = renderRootOverlay({
            enableClickOutside: true,
            onHide,
          })
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
          expect(overlay).toHaveClass(styles.transition)
        })

        it('keeps rendering until transition ends when show becomes false', async () => {
          const onTransitionEnd = jest.fn()
          const { getByTestId, queryByTestId, rerender } = render(
            <RootOverlay
              {...props}
              show
              withTransition
              onTransitionEnd={onTransitionEnd}
            />
          )

          const overlay = getByTestId(OVERLAY_TEST_ID)

          rerender(
            <RootOverlay
              {...props}
              show={false}
              withTransition
              onTransitionEnd={onTransitionEnd}
            />
          )

          fireEvent.transitionEnd(overlay)

          expect(onTransitionEnd).toHaveBeenCalledTimes(1)
          await waitFor(() => {
            expect(queryByTestId(OVERLAY_TEST_ID)).not.toBeInTheDocument()
          })
        })
      })
    })

    describe('Event', () => {
      document.onkeydown = jest.fn()
      const onHide = jest.fn()

      afterEach(jest.clearAllMocks)

      describe('keydown', () => {
        it('is Triggered By Escape', () => {
          const { getByTestId } = renderRootOverlay({
            withTransition: true,
            onHide,
          })
          const overlay = getByTestId(OVERLAY_TEST_ID)
          fireEvent.keyDown(overlay, { key: ESCAPE_KEY })
          expect(document.onkeydown).toHaveBeenCalledTimes(1)
          expect(onHide).toHaveBeenCalledTimes(1)
          fireEvent.keyDown(overlay, { key: ESCAPE_KEY })
          expect(document.onkeydown).toHaveBeenCalledTimes(2)
          expect(onHide).toHaveBeenCalledTimes(2)
        })

        it('is not Triggered By All keys except Escape', () => {
          const { getByTestId } = renderRootOverlay({
            withTransition: true,
            onHide,
          })
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

      describe('click', () => {
        it('calls onHide when element outside the overlay is clicked', async () => {
          renderRootOverlay({ onHide })
          fireEvent.click(document.body)
          expect(onHide).toHaveBeenCalled()
        })

        it('does not call onHide when the target is clicked', () => {
          const target = document.createElement('button')

          document.body.appendChild(target)
          renderRootOverlay({
            target,
            onHide,
          })

          fireEvent.click(target)

          expect(onHide).not.toHaveBeenCalled()

          target.remove()
        })

        it('calls onHide when document.body is used as the target and clicked', () => {
          renderRootOverlay({
            target: document.body,
            onHide,
          })

          fireEvent.click(document.body)

          expect(onHide).toHaveBeenCalled()
        })

        it('does not call onHide when element inside the overlay is clicked', () => {
          const { getByRole } = renderRootOverlay({
            children: <Button text="button" />,
            onHide,
          })
          const button = getByRole('button')
          fireEvent.click(button)
          expect(onHide).not.toHaveBeenCalled()
        })
      })

      describe('wheel', () => {
        it('stops propagation from the overlay container', () => {
          const { getByTestId } = renderRootOverlay()
          const container = getByTestId(CONTAINER_TEST_ID)
          const event = new WheelEvent('wheel', { bubbles: true })
          const stopPropagation = jest.spyOn(event, 'stopPropagation')

          container.dispatchEvent(event)

          expect(stopPropagation).toHaveBeenCalledTimes(1)
        })
      })
    })
  })
})
