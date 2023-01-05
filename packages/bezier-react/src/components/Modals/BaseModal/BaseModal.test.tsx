/* External dependencies */
import React from 'react'
import type { RenderResult } from '@testing-library/react'
import { fireEvent } from '@testing-library/react'

/* Internal dependencies */
import { LightFoundation } from '~/src/foundation'
import { render } from '~/src/utils/testUtils'
import BaseModal from './BaseModal'
import type { BaseModalProps } from './BaseModal.types'

const DEFAULT_PROPS: BaseModalProps = {
  show: true,
  className: 'BaseModal',
  onHide: jest.fn(),
}

describe('BaseModal', () => {
  let renderResult: RenderResult

  describe('When "show" is false', () => {
    beforeEach(() => {
      renderResult = render(
        <BaseModal {...DEFAULT_PROPS} show={false} />,
        {
          container: document.body,
        },
      )
    })

    afterEach(jest.clearAllMocks)

    it('Component is "null"', async () => {
      const target = renderResult.container.firstChild
      expect(target).toBe(null)
    })
  })

  describe('When "show" is true', () => {
    beforeEach(() => {
      renderResult = render(
        <BaseModal {...DEFAULT_PROPS} />,
        {
          container: document.body,
        },
      )
    })

    afterEach(jest.clearAllMocks)

    it('should equal the snapshot', async () => {
      const target = await renderResult.findByTestId('BaseModal')
      expect(target).toMatchSnapshot()
    })

    it('BaseModal is mounted', async () => {
      const target = await renderResult.findByTestId('BaseModal')
      expect(target).toBeInTheDocument()
    })

    it('className is transferred into BaseModal__Children', async () => {
      const target = await renderResult.findByTestId('BaseModal__Children')
      expect(target.classList.contains(DEFAULT_PROPS.className || '')).toBe(true)
    })

    it('When Modal__Background is clicked, the onHide is called', async () => {
      const target = await renderResult.findByTestId('BaseModal__Background')
      fireEvent.click(target)
      expect(DEFAULT_PROPS.onHide).toBeCalledTimes(1)
    })

    it('When "Escape" key is down, the onHide is called', async () => {
      const target = await renderResult.findByTestId('BaseModal__Background')
      fireEvent.keyDown(target, { key: 'Escape' })
      expect(DEFAULT_PROPS.onHide).toBeCalledTimes(1)
    })
  })

  describe('When "autoFocus" is true', () => {
    beforeEach(() => {
      renderResult = render(
        <BaseModal
          {...DEFAULT_PROPS}
          autoFocus
        />,
        {
          container: document.body,
        },
      )
    })

    afterEach(jest.clearAllMocks)

    it('BaseModal__Children has focus', async () => {
      const target = await renderResult.findByTestId('BaseModal__Children')
      expect(target).toHaveFocus()
    })
  })

  describe('Styles', () => {
    beforeEach(() => {
      renderResult = render(
        <BaseModal {...DEFAULT_PROPS} />,
        {
          container: document.body,
        },
      )
    })

    afterEach(jest.clearAllMocks)

    it('BaseModal', async () => {
      const target = await renderResult.findByTestId('BaseModal')
      expect(target).toHaveStyle('position: fixed;')
      expect(target).toHaveStyle('top: 0;')
      expect(target).toHaveStyle('right: 0;')
      expect(target).toHaveStyle('bottom: 0;')
      expect(target).toHaveStyle('left: 0;')
      expect(target).toHaveStyle('display: flex;')
      expect(target).toHaveStyle('align-items: center;')
      expect(target).toHaveStyle('justify-content: center;')
    })

    it('BaseModal__Background', async () => {
      const target = await renderResult.findByTestId('BaseModal__Background')
      expect(target).toHaveStyle('position: absolute;')
      expect(target).toHaveStyle('top: 0;')
      expect(target).toHaveStyle('right: 0;')
      expect(target).toHaveStyle('bottom: 0;')
      expect(target).toHaveStyle('left: 0;')
      expect(target).toHaveStyle(`background-color: ${LightFoundation.theme['bgtxt-absolute-black-lighter']}`)
    })

    it('BaseModal__Children', async () => {
      const target = await renderResult.findByTestId('BaseModal__Children')
      expect(target).toHaveStyle('display: block;')
      expect(target).toHaveStyle('min-width: 360px;')
      expect(target).toHaveStyle('color: rgb(36, 36, 40);')
      expect(target).toHaveStyle('background-color: #fff;')
      expect(target).toHaveStyle('border-radius: 20px;')
      expect(target).toHaveStyle('box-shadow: inset 0 0 2px 0 #FFFFFF1F, 0 0 2px 1px #0000000D, 0 4px 20px #00000038;')
    })
  })
})
