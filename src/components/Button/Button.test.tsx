/* External dependencies */
import React from 'react'

/* Internal dependencies */
import {
  LightFoundation,
  RoundAbsoluteNumber,
  TypoAbsoluteNumber,
  LineHeightAbsoluteNumber,
} from '../../foundation'
import DisabledOpacity from '../../constants/DisabledOpacity'
import { render } from '../../utils/testUtils'
import Button, {
  BUTTON_TEST_ID,
  BUTTON_TEXT_TEST_ID,
} from './Button'
import {
  ButtonStyleVariant,
  ButtonSize,
} from './Button.types'
import type { ButtonProps } from './Button.types'

describe('Button Test >', () => {
  let props: ButtonProps

  beforeEach(() => {
    props = {
      text: 'Test Button',
    }
  })

  const renderButton = (optionProps?: ButtonProps) => render(<Button {...props} {...optionProps}/>)

  it('Reset CSS', () => {
    const { getByTestId } = renderButton()
    const defaultButton = getByTestId(BUTTON_TEST_ID)

    expect(defaultButton).toHaveStyle('box-sizing: border-box')
    expect(defaultButton).toHaveStyle('position: relative;')
    expect(defaultButton).toHaveStyle('border: none;')
    expect(defaultButton).toHaveStyle('outline: none;')
  })

  describe('StyleVariant Test >', () => {
    it('Primary', () => {
      const { getByTestId } = renderButton({ styleVariant: ButtonStyleVariant.Primary })
      const primaryButton = getByTestId(BUTTON_TEST_ID)

      // Colors
      expect(primaryButton).toHaveStyle(`color: ${LightFoundation.theme['bgtxt-absolute-white-dark']}`)
      expect(primaryButton).toHaveStyle(`background-color: ${LightFoundation.theme['bgtxt-blue-normal']}`)
      expect(primaryButton).toHaveStyle(`border-radius: ${RoundAbsoluteNumber.R8}px;`)
      expect(primaryButton).toHaveStyle('overflow: hidden;')
    })

    it('Secondary', () => {
      const { getByTestId } = renderButton({ styleVariant: ButtonStyleVariant.Secondary })
      const secondaryButton = getByTestId(BUTTON_TEST_ID)

      // Colors
      expect(secondaryButton).toHaveStyle(`color: ${LightFoundation.theme['bgtxt-blue-normal']}`)
      expect(secondaryButton).toHaveStyle(`background-color: ${LightFoundation.theme['bgtxt-blue-lightest']}`)
      expect(secondaryButton).toHaveStyle(`border-radius: ${RoundAbsoluteNumber.R8}px;`)
      expect(secondaryButton).toHaveStyle('overflow: hidden;')
    })

    it('Tertiary', () => {
      const { getByTestId } = renderButton({ styleVariant: ButtonStyleVariant.Tertiary })
      const tertiaryButton = getByTestId(BUTTON_TEST_ID)

      // Colors
      expect(tertiaryButton).toHaveStyle(`color: ${LightFoundation.theme['bgtxt-blue-normal']}`)
      expect(tertiaryButton).toHaveStyle('background-color: transparent')
      expect(tertiaryButton).toHaveStyle(`border-radius: ${RoundAbsoluteNumber.R8}px;`)
      expect(tertiaryButton).toHaveStyle('overflow: hidden;')
    })

    it('Floating', () => {
      const { getByTestId } = renderButton({ styleVariant: ButtonStyleVariant.Floating })
      const floatingButton = getByTestId(BUTTON_TEST_ID)

      // Colors
      expect(floatingButton).toHaveStyle(`color: ${LightFoundation.theme['bgtxt-absolute-white-dark']}`)
      expect(floatingButton).toHaveStyle(`background-color: ${LightFoundation.theme['bgtxt-blue-normal']}`)
      expect(floatingButton).toHaveStyle('border-radius: 1000px;')
      expect(floatingButton).toHaveStyle('overflow: hidden;')
    })
  })

  describe('Disabled Test >', () => {
    it('Button can have disabled attribute', () => {
      const { getByTestId } = renderButton({ disabled: true })
      const disabledButton = getByTestId(BUTTON_TEST_ID)

      expect(disabledButton).toBeDisabled()
      expect(disabledButton).toHaveStyle(`opacity: ${DisabledOpacity};`)
      expect(disabledButton).toHaveStyle('cursor: not-allowed;')
    })
  })

  describe('Active Test >', () => {
    it('Active prop change Button to hover style', () => {
      const { getByTestId } = renderButton({ active: true })
      const activatedButton = getByTestId(BUTTON_TEST_ID)

      expect(activatedButton).toHaveStyle(`color: ${LightFoundation.theme['bgtxt-absolute-white-dark']};`)
      expect(activatedButton).toHaveStyle(`background-color: ${LightFoundation.theme['bgtxt-blue-dark']};`)
    })
  })

  describe('Size Test >', () => {
    describe('with text >', () => {
      it('Size XS', () => {
        const { getByTestId } = renderButton({ size: ButtonSize.XS })
        const xsButton = getByTestId(BUTTON_TEST_ID)
        const xsButtonText = getByTestId(BUTTON_TEXT_TEST_ID)

        expect(xsButton).toHaveStyle('min-width: 20px;')
        expect(xsButton).toHaveStyle('height: 20px;')
        expect(xsButton).toHaveStyle('padding: 2px;')

        // Typograpy.Size13
        expect(xsButtonText).toHaveStyle(`font-size: ${TypoAbsoluteNumber.Typo13}px;`)
        expect(xsButtonText).toHaveStyle(`line-height: ${LineHeightAbsoluteNumber.Lh18}px;`)
      })

      it('Size S', () => {
        const { getByTestId } = renderButton({ size: ButtonSize.S })
        const sButton = getByTestId(BUTTON_TEST_ID)
        const sButtonText = getByTestId(BUTTON_TEXT_TEST_ID)

        expect(sButton).toHaveStyle('min-width: 24px;')
        expect(sButton).toHaveStyle('height: 24px;')
        expect(sButton).toHaveStyle('padding: 3px 4px;')

        // Typograpy.Size13
        expect(sButtonText).toHaveStyle(`font-size: ${TypoAbsoluteNumber.Typo13}px;`)
        expect(sButtonText).toHaveStyle(`line-height: ${LineHeightAbsoluteNumber.Lh18}px;`)
      })

      it('Size M', () => {
        const { getByTestId } = renderButton({ size: ButtonSize.M })
        const mButton = getByTestId(BUTTON_TEST_ID)
        const mButtonText = getByTestId(BUTTON_TEXT_TEST_ID)

        expect(mButton).toHaveStyle('min-width: 36px;')
        expect(mButton).toHaveStyle('height: 36px;')
        expect(mButton).toHaveStyle('padding: 8px 10px;')

        // Typograpy.Size14
        expect(mButtonText).toHaveStyle(`font-size: ${TypoAbsoluteNumber.Typo14}px;`)
        expect(mButtonText).toHaveStyle(`line-height: ${LineHeightAbsoluteNumber.Lh18}px;`)
      })

      it('Size L', () => {
        const { getByTestId } = renderButton({ size: ButtonSize.L })
        const lButton = getByTestId(BUTTON_TEST_ID)
        const lButtonText = getByTestId(BUTTON_TEXT_TEST_ID)

        expect(lButton).toHaveStyle('min-width: 44px;')
        expect(lButton).toHaveStyle('height: 44px;')
        expect(lButton).toHaveStyle('padding: 12px 10px;')

        // Typograpy.Size14
        expect(lButtonText).toHaveStyle(`font-size: ${TypoAbsoluteNumber.Typo14}px;`)
        expect(lButtonText).toHaveStyle(`line-height: ${LineHeightAbsoluteNumber.Lh18}px;`)
      })

      it('Size XL', () => {
        const { getByTestId } = renderButton({ size: ButtonSize.XL })
        const xlButton = getByTestId(BUTTON_TEST_ID)
        const xlButtonText = getByTestId(BUTTON_TEXT_TEST_ID)

        expect(xlButton).toHaveStyle('min-width: 54px;')
        expect(xlButton).toHaveStyle('height: 54px;')
        expect(xlButton).toHaveStyle('padding: 15px 14px;')

        // Typograpy.Size16
        expect(xlButtonText).toHaveStyle(`font-size: ${TypoAbsoluteNumber.Typo16}px;`)
        expect(xlButtonText).toHaveStyle(`line-height: ${LineHeightAbsoluteNumber.Lh22}px;`)
      })
    })

    describe('without text >', () => {
      it('Size XS', () => {
        const { getByTestId } = renderButton({ text: '', size: ButtonSize.XS })
        const xsButton = getByTestId(BUTTON_TEST_ID)

        expect(xsButton).toHaveStyle('min-width: 20px;')
        expect(xsButton).toHaveStyle('height: 20px;')
        expect(xsButton).toHaveStyle('padding: 2px;')
      })

      it('Size S', () => {
        const { getByTestId } = renderButton({ text: '', size: ButtonSize.S })
        const xsButton = getByTestId(BUTTON_TEST_ID)

        expect(xsButton).toHaveStyle('min-width: 24px;')
        expect(xsButton).toHaveStyle('height: 24px;')
        expect(xsButton).toHaveStyle('padding: 3px 3px;')
      })

      it('Size M', () => {
        const { getByTestId } = renderButton({ text: '', size: ButtonSize.M })
        const xsButton = getByTestId(BUTTON_TEST_ID)

        expect(xsButton).toHaveStyle('min-width: 36px;')
        expect(xsButton).toHaveStyle('height: 36px;')
        expect(xsButton).toHaveStyle('padding: 8px 8px;')
      })

      it('Size L', () => {
        const { getByTestId } = renderButton({ text: '', size: ButtonSize.L })
        const xsButton = getByTestId(BUTTON_TEST_ID)

        expect(xsButton).toHaveStyle('min-width: 44px;')
        expect(xsButton).toHaveStyle('height: 44px;')
        expect(xsButton).toHaveStyle('padding: 12px 12px;')
      })

      it('Size XL', () => {
        const { getByTestId } = renderButton({ text: '', size: ButtonSize.XL })
        const xsButton = getByTestId(BUTTON_TEST_ID)

        expect(xsButton).toHaveStyle('min-width: 54px;')
        expect(xsButton).toHaveStyle('height: 54px;')
        expect(xsButton).toHaveStyle('padding: 15px 15px;')
      })
    })
  })
})
