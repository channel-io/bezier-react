/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { LightFoundation } from '../../foundation'
import { render } from '../../utils/testUtils'
import Spinner, { SPINNER_TEST_ID } from './Spinner'
import SpinnerProps, { SpinnerSize } from './Spinner.types'

describe('Spinner test >', () => {
  let props: SpinnerProps

  beforeEach(() => {
    props = {}
  })

  const renderSpinner = (optionProps?: SpinnerProps) => render(
    <Spinner {...props} {...optionProps} />,
  )

  it('Spinner has default style', () => {
    const { getByTestId } = renderSpinner()
    const renderedSpinner = getByTestId(SPINNER_TEST_ID)

    expect(renderedSpinner).toHaveStyle('width: 20px;')
    expect(renderedSpinner).toHaveStyle('height: 20px;')
    expect(renderedSpinner).toHaveStyle('border-style: solid;')
    expect(renderedSpinner).toHaveStyle('border-width: 3px;')
    expect(renderedSpinner).toHaveStyle('border-radius: 50%;')
  })

  describe('Color >', () => {
    it('Default color is inherited color', () => {
      const { getByTestId } = renderSpinner()
      const renderedSpinner = getByTestId(SPINNER_TEST_ID)

      expect(renderedSpinner).toHaveStyle('border-top-color: transparent;')
      expect(renderedSpinner).toHaveStyle('border-right-color: inherit;')
      expect(renderedSpinner).toHaveStyle('border-bottom-color: inherit;')
      expect(renderedSpinner).toHaveStyle('border-left-color: inherit;')
    })

    it('Spinner received SemanticNames', () => {
      const targetSemanticName = 'bgtxt-blue-normal'
      const { getByTestId } = renderSpinner({ color: targetSemanticName })
      const renderedSpinner = getByTestId(SPINNER_TEST_ID)

      expect(renderedSpinner).toHaveStyle('border-top-color: transparent;')
      expect(renderedSpinner).toHaveStyle(`border-right-color: ${LightFoundation.theme[targetSemanticName]};`)
      expect(renderedSpinner).toHaveStyle(`border-bottom-color: ${LightFoundation.theme[targetSemanticName]};`)
      expect(renderedSpinner).toHaveStyle(`border-left-color: ${LightFoundation.theme[targetSemanticName]};`)
    })
  })

  describe('Spinner Size >', () => {
    it('Size XL', () => {
      const { getByTestId } = renderSpinner({ size: SpinnerSize.XL })
      const xlSpinner = getByTestId(SPINNER_TEST_ID)

      expect(xlSpinner).toHaveStyle('width: 50px;')
      expect(xlSpinner).toHaveStyle('height: 50px;')
      expect(xlSpinner).toHaveStyle('border-width: 4px;')
    })

    it('Size L', () => {
      const { getByTestId } = renderSpinner({ size: SpinnerSize.L })
      const lSpinner = getByTestId(SPINNER_TEST_ID)

      expect(lSpinner).toHaveStyle('width: 24px;')
      expect(lSpinner).toHaveStyle('height: 24px;')
      expect(lSpinner).toHaveStyle('border-width: 3px;')
    })

    it('Size M', () => {
      const { getByTestId } = renderSpinner({ size: SpinnerSize.M })
      const mSpinner = getByTestId(SPINNER_TEST_ID)

      expect(mSpinner).toHaveStyle('width: 20px;')
      expect(mSpinner).toHaveStyle('height: 20px;')
      expect(mSpinner).toHaveStyle('border-width: 3px;')
    })

    it('Size S', () => {
      const { getByTestId } = renderSpinner({ size: SpinnerSize.S })
      const sSpinner = getByTestId(SPINNER_TEST_ID)

      expect(sSpinner).toHaveStyle('width: 16px;')
      expect(sSpinner).toHaveStyle('height: 16px;')
      expect(sSpinner).toHaveStyle('border-width: 2px;')
    })

    it('Size XS', () => {
      const { getByTestId } = renderSpinner({ size: SpinnerSize.XS })
      const xsSpinner = getByTestId(SPINNER_TEST_ID)

      expect(xsSpinner).toHaveStyle('width: 12px;')
      expect(xsSpinner).toHaveStyle('height: 12px;')
      expect(xsSpinner).toHaveStyle('border-width: 2px;')
    })
  })
})
