import React from 'react'

import {
  createBezierIcon,
  createIconLabel,
  isBezierIcon,
} from './utils'

describe('Icon utils', () => {
  describe('createBezierIcon', () => {
    it('isBezierIcon returns false for non BezierIcon', () => {
      const source = () => (<svg />)
      expect(isBezierIcon(source)).toBe(false)
    })

    it('createBezierIcon returns a BezierIcon', () => {
      const source = () => (<svg />)
      const mockBezierIcon = createBezierIcon(source)
      expect(isBezierIcon(mockBezierIcon)).toBe(true)
    })
  })

  describe('createIconLabel', () => {
    it('should format the string as intended', () => {
      const label = 'SvgSpaceSvgHorizontal'
      const expectedLabel = 'Space Svg Horizontal'
      expect(createIconLabel(label)).toBe(expectedLabel)
    })
  })
})
