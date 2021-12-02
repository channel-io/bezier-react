/* Internal dependencies */
import { OverlayPosition } from './Overlay.types'
import {
  getOverlayPosition,
  getOverlayTranslation,
} from './utils'

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

describe('positionUtils Test >', () => {
  describe('getOverlayPosition Test >', () => {
    it('If container prop is given, scrollTop and scrollLeft has a real scroll value', () => {
      const containerRect = {
        ...MOCK_CONTAINER_RECT,
      }
      const targetRect = {
        ...MOCK_TARGET_RECT,
      }
      const { top, left } = getOverlayPosition({ containerRect, targetRect, show: true })

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
      const { top, left } = getOverlayPosition({ containerRect, targetRect, show: true })
      expect(top).toBe(48)
      expect(left).toBe(48)
    })
  })

  describe('getOverlayTranslation Test >', () => {
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

    it('position is TopCenter', () => {
      // @ts-ignore
      const { translateX, translateY } = getOverlayTranslation({
        ...mockArgs,
        position: OverlayPosition.TopCenter,
      })

      expect(translateX).toEqual(-75)
      expect(translateY).toEqual(-140)
    })

    it('position is TopLeft', () => {
      // @ts-ignore
      const { translateX, translateY } = getOverlayTranslation({
        ...mockArgs,
        position: OverlayPosition.TopLeft,
      })

      expect(translateX).toEqual(5)
      expect(translateY).toEqual(-140)
    })

    it('position is TopRight', () => {
      // @ts-ignore
      const { translateX, translateY } = getOverlayTranslation({
        ...mockArgs,
        position: OverlayPosition.TopRight,
      })

      expect(translateX).toEqual(-155)
      expect(translateY).toEqual(-140)
    })

    it('position is RightCenter', () => {
      // @ts-ignore
      const { translateX, translateY } = getOverlayTranslation({
        ...mockArgs,
        position: OverlayPosition.RightCenter,
      })

      expect(translateX).toEqual(105)
      expect(translateY).toEqual(-30)
    })

    it('position is RightTop', () => {
      // @ts-ignore
      const { translateX, translateY } = getOverlayTranslation({
        ...mockArgs,
        position: OverlayPosition.RightTop,
      })

      expect(translateX).toEqual(105)
      expect(translateY).toEqual(10)
    })

    it('position is RightBottom', () => {
      // @ts-ignore
      const { translateX, translateY } = getOverlayTranslation({
        ...mockArgs,
        position: OverlayPosition.RightBottom,
      })

      expect(translateX).toEqual(105)
      expect(translateY).toEqual(-70)
    })

    it('position is BottomCenter', () => {
      // @ts-ignore
      const { translateX, translateY } = getOverlayTranslation({
        ...mockArgs,
        position: OverlayPosition.BottomCenter,
      })

      expect(translateX).toEqual(-75)
      expect(translateY).toEqual(60)
    })

    it('position is BottomLeft', () => {
      // @ts-ignore
      const { translateX, translateY } = getOverlayTranslation({
        ...mockArgs,
        position: OverlayPosition.BottomLeft,
      })

      expect(translateX).toEqual(5)
      expect(translateY).toEqual(60)
    })

    it('position is BottomRight', () => {
      // @ts-ignore
      const { translateX, translateY } = getOverlayTranslation({
        ...mockArgs,
        position: OverlayPosition.BottomRight,
      })

      expect(translateX).toEqual(-155)
      expect(translateY).toEqual(60)
    })

    it('position is LeftCenter', () => {
      // @ts-ignore
      const { translateX, translateY } = getOverlayTranslation({
        ...mockArgs,
        position: OverlayPosition.LeftCenter,
      })

      expect(translateX).toEqual(-265)
      expect(translateY).toEqual(-30)
    })

    it('position is LeftTop', () => {
      // @ts-ignore
      const { translateX, translateY } = getOverlayTranslation({
        ...mockArgs,
        position: OverlayPosition.LeftTop,
      })

      expect(translateX).toEqual(-265)
      expect(translateY).toEqual(10)
    })

    it('position is LeftBottom', () => {
      // @ts-ignore
      const { translateX, translateY } = getOverlayTranslation({
        ...mockArgs,
        position: OverlayPosition.LeftBottom,
      })

      expect(translateX).toEqual(-265)
      expect(translateY).toEqual(-70)
    })

    it('position is InnerLeftTop', () => {
      // @ts-ignore
      const { translateX, translateY } = getOverlayTranslation({
        ...mockArgs,
        position: OverlayPosition.InnerLeftTop,
      })

      expect(translateX).toEqual(5)
      expect(translateY).toEqual(10)
    })

    it('position is InnerLeftBottom', () => {
      // @ts-ignore
      const { translateX, translateY } = getOverlayTranslation({
        ...mockArgs,
        position: OverlayPosition.InnerLeftBottom,
      })

      expect(translateX).toEqual(5)
      expect(translateY).toEqual(-70)
    })

    it('position is InnerRightTop', () => {
      // @ts-ignore
      const { translateX, translateY } = getOverlayTranslation({
        ...mockArgs,
        position: OverlayPosition.InnerRightTop,
      })

      expect(translateX).toEqual(-155)
      expect(translateY).toEqual(10)
    })

    it('position is InnerRightBottom', () => {
      // @ts-ignore
      const { translateX, translateY } = getOverlayTranslation({
        ...mockArgs,
        position: OverlayPosition.InnerRightBottom,
      })

      expect(translateX).toEqual(-155)
      expect(translateY).toEqual(-70)
    })
  })
})
