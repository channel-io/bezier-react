import {
  createBezierIcon,
  isBezierIcon,
} from '.'

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
})
