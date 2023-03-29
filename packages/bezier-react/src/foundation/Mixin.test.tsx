/* External dependencies */
import React from 'react'

/* Internal Dependencies */
import { render } from '~/src/utils/testUtils'
import {
  css,
  styled,
} from './FoundationStyledComponent'
import { ellipsis } from './Mixins'

const ELLIPSIS_TEST_ID = 'bezier-react-ellipsis'

describe('Mixin test >', () => {
  describe('ellipsis test >', () => {
    it('return 1 line ellipsis without parameter', () => {
      const style = ellipsis()
      expect(style).toEqual(css`
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      `)
    })

    it('return 1 line ellipsis when line is 1', () => {
      const style = ellipsis(1)
      expect(style).toEqual(css`
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      `)
    })

    it('If lineHeight does not exist when line is more than 1, console.warn called and return empty style', () => {
      const spyConsole = jest.spyOn(console, 'warn').mockImplementation()
      // @ts-ignore
      const style = ellipsis(5)
      expect(spyConsole).toBeCalled()
      expect(style).toEqual(css``)
    })

    it('return multiline style when line is more than 1 and lineHeight exist', () => {
      const Element = styled.div`
        ${ellipsis(5, 10)}
      `
      const { getByTestId } = render(<Element data-testid={ELLIPSIS_TEST_ID} />)
      const renderedComponent = getByTestId(ELLIPSIS_TEST_ID)
      expect(renderedComponent).toHaveStyle(`
        display: -webkit-box;
        max-height: 50rem;
        overflow: hidden;
        line-height: 10rem;
        text-overflow: ellipsis;
      `)
    })
  })
})
