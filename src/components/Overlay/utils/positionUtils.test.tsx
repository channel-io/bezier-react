/* Internal dependencies */
import { OverlayPosition } from '../Overlay.types'
import {
  getOverlayPosition,
  getOverlayTranslation,
} from './positionUtils'

const MOCK_CONTAINER_RECT = {
  containerWidth: 500,
  containerHeight: 700,
  containerTop: 100,
  containerLeft: 200,
  scrollTop: 50,
  scrollLeft: 20,
}

const MOCK_TARGET_RECT = {
  targetWidth: 100,
  targetHeight: 50,
  targetTop: 150,
  targetLeft: 250,
  clientTop: 2,
  clientLeft: 2,
}

describe('positionUtils', () => {
  describe('getOverlayPosition', () => {
    it('If container prop is given, scrollTop and scrollLeft has a real scroll value', () => {
      const containerRect = {
        ...MOCK_CONTAINER_RECT,
      }
      const targetRect = {
        ...MOCK_TARGET_RECT,
      }
      const { top, left } = getOverlayPosition({ containerRect, targetRect })

      expect(top).toBe(98)
      expect(left).toBe(68)
    })

    it('If container prop is not given, scrollTop and scrollLeft has a zero', () => {
      const containerRect = {
        ...MOCK_CONTAINER_RECT,
        scrollTop: 0,
        scrollLeft: 0,
      }
      const targetRect = {
        ...MOCK_TARGET_RECT,
      }
      const { top, left } = getOverlayPosition({ containerRect, targetRect })
      expect(top).toBe(48)
      expect(left).toBe(48)
    })
  })

  describe('getOverlayTranslation', () => {
    const MOCK_OVERLAY_RECT = {
      width: 260,
      height: 130,
    }

    const marginX = 5
    const marginY = 10

    const mockOverlay = {
      getBoundingClientRect: () => MOCK_OVERLAY_RECT,
    }

    const mockArgs = {
      containerRect: MOCK_CONTAINER_RECT,
      targetRect: MOCK_TARGET_RECT,
      overlay: mockOverlay,
      marginX,
      marginY,
      keepInContainer: false,
    }

    it('placement is TopCenter', () => {
      // @ts-ignore
      const { transform } = getOverlayTranslation({
        ...mockArgs,
        placement: OverlayPosition.TopCenter,
      })

      const translateX = -75
      const translateY = -140

      expect(transform).toBe(`translate(${translateX}px, ${translateY}px)`)
    })

    it('placement is TopLeft', () => {
      // @ts-ignore
      const { transform } = getOverlayTranslation({
        ...mockArgs,
        placement: OverlayPosition.TopLeft,
      })

      const translateX = 5
      const translateY = -140

      expect(transform).toBe(`translate(${translateX}px, ${translateY}px)`)
    })

    it('placement is TopRight', () => {
      // @ts-ignore
      const { transform } = getOverlayTranslation({
        ...mockArgs,
        placement: OverlayPosition.TopRight,
      })

      const translateX = -155
      const translateY = -140

      expect(transform).toBe(`translate(${translateX}px, ${translateY}px)`)
    })

    it('placement is RightCenter', () => {
      // @ts-ignore
      const { transform } = getOverlayTranslation({
        ...mockArgs,
        placement: OverlayPosition.RightCenter,
      })

      const translateX = 105
      const translateY = -30

      expect(transform).toBe(`translate(${translateX}px, ${translateY}px)`)
    })

    it('placement is RightTop', () => {
      // @ts-ignore
      const { transform } = getOverlayTranslation({
        ...mockArgs,
        placement: OverlayPosition.RightTop,
      })

      const translateX = 105
      const translateY = 10

      expect(transform).toBe(`translate(${translateX}px, ${translateY}px)`)
    })

    it('placement is RightBottom', () => {
      // @ts-ignore
      const { transform } = getOverlayTranslation({
        ...mockArgs,
        placement: OverlayPosition.RightBottom,
      })

      const translateX = 105
      const translateY = -70

      expect(transform).toBe(`translate(${translateX}px, ${translateY}px)`)
    })

    it('placement is BottomCenter', () => {
      // @ts-ignore
      const { transform } = getOverlayTranslation({
        ...mockArgs,
        placement: OverlayPosition.BottomCenter,
      })

      const translateX = -75
      const translateY = 60

      expect(transform).toBe(`translate(${translateX}px, ${translateY}px)`)
    })

    it('placement is BottomLeft', () => {
      // @ts-ignore
      const { transform } = getOverlayTranslation({
        ...mockArgs,
        placement: OverlayPosition.BottomLeft,
      })

      const translateX = 5
      const translateY = 60

      expect(transform).toBe(`translate(${translateX}px, ${translateY}px)`)
    })

    it('placement is BottomRight', () => {
      // @ts-ignore
      const { transform } = getOverlayTranslation({
        ...mockArgs,
        placement: OverlayPosition.BottomRight,
      })

      const translateX = -155
      const translateY = 60

      expect(transform).toBe(`translate(${translateX}px, ${translateY}px)`)
    })

    it('placement is LeftCenter', () => {
      // @ts-ignore
      const { transform } = getOverlayTranslation({
        ...mockArgs,
        placement: OverlayPosition.LeftCenter,
      })

      const translateX = -265
      const translateY = -30

      expect(transform).toBe(`translate(${translateX}px, ${translateY}px)`)
    })

    it('placement is LeftTop', () => {
      // @ts-ignore
      const { transform } = getOverlayTranslation({
        ...mockArgs,
        placement: OverlayPosition.LeftTop,
      })

      const translateX = -265
      const translateY = 10

      expect(transform).toBe(`translate(${translateX}px, ${translateY}px)`)
    })

    it('placement is LeftBottom', () => {
      // @ts-ignore
      const { transform } = getOverlayTranslation({
        ...mockArgs,
        placement: OverlayPosition.LeftBottom,
      })

      const translateX = -265
      const translateY = -70

      expect(transform).toBe(`translate(${translateX}px, ${translateY}px)`)
    })

    it('placement is InnerLeftTop', () => {
      // @ts-ignore
      const { transform } = getOverlayTranslation({
        ...mockArgs,
        placement: OverlayPosition.InnerLeftTop,
      })

      const translateX = 5
      const translateY = 10

      expect(transform).toBe(`translate(${translateX}px, ${translateY}px)`)
    })

    it('placement is InnerLeftBottom', () => {
      // @ts-ignore
      const { transform } = getOverlayTranslation({
        ...mockArgs,
        placement: OverlayPosition.InnerLeftBottom,
      })

      const translateX = 5
      const translateY = -70

      expect(transform).toBe(`translate(${translateX}px, ${translateY}px)`)
    })

    it('placement is InnerRightTop', () => {
      // @ts-ignore
      const { transform } = getOverlayTranslation({
        ...mockArgs,
        placement: OverlayPosition.InnerRightTop,
      })

      const translateX = -155
      const translateY = 10

      expect(transform).toBe(`translate(${translateX}px, ${translateY}px)`)
    })

    it('placement is InnerRightBottom', () => {
      // @ts-ignore
      const { transform } = getOverlayTranslation({
        ...mockArgs,
        placement: OverlayPosition.InnerRightBottom,
      })

      const translateX = -155
      const translateY = -70

      expect(transform).toBe(`translate(${translateX}px, ${translateY}px)`)
    })
  })
})
