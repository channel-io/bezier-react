import React from 'react'

import { AllIcon } from './generated'
import {
  createBezierIcon,
  isBezierIcon,
} from './utils'

describe('Icon utils', () => {
  describe('createBezierIcon', () => {
    it('isBezierIcon returns true for BezierIcon', () => {
      expect(isBezierIcon(AllIcon)).toBe(true)
    })

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
})
