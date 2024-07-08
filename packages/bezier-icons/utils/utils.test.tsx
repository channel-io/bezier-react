import { forwardRef } from 'react'

import { createBezierIcon, isBezierIcon } from '.'

describe('Icon utils', () => {
  describe('createBezierIcon', () => {
    it('isBezierIcon returns false for non BezierIcon', () => {
      const source = forwardRef(() => <svg />)
      expect(isBezierIcon(source)).toBe(false)
    })

    it('createBezierIcon returns a BezierIcon', () => {
      const source = forwardRef(() => <svg />)
      const mockBezierIcon = createBezierIcon(source)
      expect(isBezierIcon(mockBezierIcon)).toBe(true)
    })
  })
})
