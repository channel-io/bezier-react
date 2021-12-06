/* External dependencies */
import React from 'react'
import { getWindow } from 'ssr-window'

/* Internal dependencies */
import { render } from 'Utils/testUtils'
import OverlayProps, { ContainerRectAttr, TargetRectAttr, OverlayPosition } from './Overlay.types'
import Overlay, { OVERLAY_TEST_ID } from './Overlay'
import { getOverlayTranslation } from './utils'

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
})
