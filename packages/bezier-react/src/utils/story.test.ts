import { getObjectFromEnum } from './story'

describe('story', () => {
  describe('getObjectFromEnum', () => {
    it('converts a non-empty enum to an object with enum members as keys and values', () => {
      enum FooEnum {
        A = 'A',
        B = 'B',
        C = 'C',
      }
      expect(getObjectFromEnum(FooEnum)).toMatchObject({ A: 'A', B: 'B', C: 'C' })
    })

    it('converts an empty enum to an empty object', () => {
      enum EmptyEnum {}
      expect(getObjectFromEnum(EmptyEnum)).toMatchObject({})
    })
  })
})
