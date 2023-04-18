import React from 'react'

import {
  LightFoundation,
  LineHeightAbsoluteNumber,
  RoundAbsoluteNumber,
  TypoAbsoluteNumber,
} from '~/src/foundation'

import DisabledOpacity from '~/src/constants/DisabledOpacity'
import { render } from '~/src/utils/testUtils'

import {
  BUTTON_INNER_CONTENT_TEST_ID,
  BUTTON_TEST_ID,
  BUTTON_TEXT_TEST_ID,
  Button,
} from './Button'
import {
  ButtonSize,
  ButtonStyleVariant,
} from './Button.types'
import type ButtonProps from './Button.types'

import {
  BUTTON_HORIZONTAL_PADDING_VALUE,
  TEXT_PADDING_VALUE,
} from './Button.styled'

describe('Button Test >', () => {
  let props: ButtonProps

  beforeEach(() => {
    props = {
      text: 'Test Button',
    }
  })

  const renderButton = (optionProps?: ButtonProps) => render(<Button {...props} {...optionProps} />)

  it('Reset CSS', () => {
    const { getByTestId } = renderButton()
    const defaultButton = getByTestId(BUTTON_TEST_ID)

    expect(defaultButton).toHaveStyle('box-sizing: border-box')
    expect(defaultButton).toHaveStyle('position: relative;')
    expect(defaultButton).toHaveStyle('border: none;')
    expect(defaultButton).toHaveStyle('outline: none;')

    expect(defaultButton).toMatchSnapshot()
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

      expect(primaryButton).toMatchSnapshot()
    })

    it('Secondary', () => {
      const { getByTestId } = renderButton({ styleVariant: ButtonStyleVariant.Secondary })
      const secondaryButton = getByTestId(BUTTON_TEST_ID)

      // Colors
      expect(secondaryButton).toHaveStyle(`color: ${LightFoundation.theme['bgtxt-blue-normal']}`)
      expect(secondaryButton).toHaveStyle(`background-color: ${LightFoundation.theme['bgtxt-blue-lightest']}`)
      expect(secondaryButton).toHaveStyle(`border-radius: ${RoundAbsoluteNumber.R8}px;`)
      expect(secondaryButton).toHaveStyle('overflow: hidden;')

      expect(secondaryButton).toMatchSnapshot()
    })

    it('Tertiary', () => {
      const { getByTestId } = renderButton({ styleVariant: ButtonStyleVariant.Tertiary })
      const tertiaryButton = getByTestId(BUTTON_TEST_ID)

      // Colors
      expect(tertiaryButton).toHaveStyle(`color: ${LightFoundation.theme['bgtxt-blue-normal']}`)
      expect(tertiaryButton).toHaveStyle('background-color: transparent')
      expect(tertiaryButton).toHaveStyle(`border-radius: ${RoundAbsoluteNumber.R8}px;`)
      expect(tertiaryButton).toHaveStyle('overflow: hidden;')

      expect(tertiaryButton).toMatchSnapshot()
    })

    it('Floating', () => {
      const { getByTestId } = renderButton({ styleVariant: ButtonStyleVariant.Floating })
      const floatingButton = getByTestId(BUTTON_TEST_ID)
      const mButtonPaddingFloating = BUTTON_HORIZONTAL_PADDING_VALUE[ButtonSize.M].floating

      // Colors
      expect(floatingButton).toHaveStyle(`color: ${LightFoundation.theme['bgtxt-absolute-white-dark']}`)
      expect(floatingButton).toHaveStyle(`background-color: ${LightFoundation.theme['bgtxt-blue-normal']}`)
      expect(floatingButton).toHaveStyle('border-radius: 1000px;')
      expect(floatingButton).toHaveStyle('overflow: hidden;')

      // Padding
      expect(floatingButton).toHaveStyle(`padding: 0 ${mButtonPaddingFloating}px 0 ${mButtonPaddingFloating}px;`)

      expect(floatingButton).toMatchSnapshot()
    })

    it('FloatingAlt', () => {
      const { getByTestId } = renderButton({ styleVariant: ButtonStyleVariant.FloatingAlt })
      const floatingAltButton = getByTestId(BUTTON_TEST_ID)
      const mButtonPaddingFloating = BUTTON_HORIZONTAL_PADDING_VALUE[ButtonSize.M].floating

      // Colors
      expect(floatingAltButton).toHaveStyle(`color: ${LightFoundation.theme['bgtxt-absolute-white-dark']}`)
      expect(floatingAltButton).toHaveStyle(`background-color: ${LightFoundation.theme['bgtxt-blue-normal']}`)
      expect(floatingAltButton).toHaveStyle('border-radius: 8px;')

      // Padding
      expect(floatingAltButton).toHaveStyle(`padding: 0 ${mButtonPaddingFloating}px 0 ${mButtonPaddingFloating}px;`)

      expect(floatingAltButton).toMatchSnapshot()
    })
  })

  describe('Disabled Test >', () => {
    it('Button can have disabled attribute', () => {
      const { getByTestId } = renderButton({ disabled: true })
      const disabledButton = getByTestId(BUTTON_TEST_ID)

      expect(disabledButton).toBeDisabled()
      expect(disabledButton).toHaveStyle(`opacity: ${DisabledOpacity};`)
      expect(disabledButton).toHaveStyle('cursor: not-allowed;')

      expect(disabledButton).toMatchSnapshot()
    })
  })

  describe('Active Test >', () => {
    it('Active prop change Button to hover style', () => {
      const { getByTestId } = renderButton({ active: true })
      const activatedButton = getByTestId(BUTTON_TEST_ID)

      expect(activatedButton).toHaveStyle(`color: ${LightFoundation.theme['bgtxt-absolute-white-dark']};`)
      expect(activatedButton).toHaveStyle(`background-color: ${LightFoundation.theme['bgtxt-blue-dark']};`)

      expect(activatedButton).toMatchSnapshot()
    })
  })

  describe('Loading Test >', () => {
    it('Active prop change Button to hover style', () => {
      const { getByTestId } = renderButton({ loading: true })
      const loangButton = getByTestId(BUTTON_TEST_ID)
      const loadingButtonContents = getByTestId(BUTTON_INNER_CONTENT_TEST_ID)

      expect(loadingButtonContents).toHaveStyle('visibility: hidden;')

      expect(loangButton).toMatchSnapshot()
    })
  })

  describe('Size Test >', () => {
    describe('with text >', () => {
      it('size prop not given, default size is Size M', () => {
        const { getByTestId } = renderButton()
        const defaultButton = getByTestId(BUTTON_TEST_ID)
        const defaultButtonText = getByTestId(BUTTON_TEXT_TEST_ID)
        const defaultButtonPadding = BUTTON_HORIZONTAL_PADDING_VALUE[ButtonSize.M].default

        expect(defaultButton).toHaveStyle('min-width: 36px;')
        expect(defaultButton).toHaveStyle('height: 36px;')
        // eslint-disable-next-line max-len
        expect(defaultButton).toHaveStyle(`padding: 0 ${defaultButtonPadding}px 0 ${defaultButtonPadding}px;`)

        // Typograpy.Size14
        expect(defaultButtonText).toHaveStyle(`font-size: ${TypoAbsoluteNumber.Typo14}rem;`)
        expect(defaultButtonText).toHaveStyle(`line-height: ${LineHeightAbsoluteNumber.Lh18}rem;`)

        // Text padding value by ButtonSize
        expect(defaultButtonText).toHaveStyle(`padding: 0 ${TEXT_PADDING_VALUE[ButtonSize.M]}px;`)

        expect(defaultButton).toMatchSnapshot()
      })

      it('Size XS', () => {
        const { getByTestId } = renderButton({ size: ButtonSize.XS })
        const xsButton = getByTestId(BUTTON_TEST_ID)
        const xsButtonText = getByTestId(BUTTON_TEXT_TEST_ID)
        const xsDefaultButtonPadding = BUTTON_HORIZONTAL_PADDING_VALUE[ButtonSize.XS].default

        expect(xsButton).toHaveStyle('min-width: 20px;')
        expect(xsButton).toHaveStyle('height: 20px;')
        expect(xsButton).toHaveStyle(`padding: 0 ${xsDefaultButtonPadding}px 0 ${xsDefaultButtonPadding}px;`)

        // Typograpy.Size13
        expect(xsButtonText).toHaveStyle(`font-size: ${TypoAbsoluteNumber.Typo13}rem;`)
        expect(xsButtonText).toHaveStyle(`line-height: ${LineHeightAbsoluteNumber.Lh18}rem;`)

        // Text padding value by ButtonSize
        expect(xsButtonText).toHaveStyle(`padding: 0 ${TEXT_PADDING_VALUE[ButtonSize.XS]}px;`)

        expect(xsButton).toMatchSnapshot()
      })

      it('Size XS - styleVariant: Floating', () => {
        const { getByTestId } = renderButton({
          size: ButtonSize.XS,
          styleVariant: ButtonStyleVariant.Floating,
        })
        const xsFloatingButton = getByTestId(BUTTON_TEST_ID)
        const xsFloatingButtonPadding = BUTTON_HORIZONTAL_PADDING_VALUE[ButtonSize.XS].floating

        // padding value differs when styleVariant: Floating
        expect(xsFloatingButton).toHaveStyle(`padding: 0 ${xsFloatingButtonPadding}px 0 ${xsFloatingButtonPadding}px;`)
        expect(xsFloatingButton).toMatchSnapshot()
      })

      it('Size S', () => {
        const { getByTestId } = renderButton({ size: ButtonSize.S })
        const sButton = getByTestId(BUTTON_TEST_ID)
        const sButtonText = getByTestId(BUTTON_TEXT_TEST_ID)
        const sDefaultButtonPadding = BUTTON_HORIZONTAL_PADDING_VALUE[ButtonSize.S].default

        expect(sButton).toHaveStyle('min-width: 24px;')
        expect(sButton).toHaveStyle('height: 24px;')
        expect(sButton).toHaveStyle(`padding: 0 ${sDefaultButtonPadding}px 0 ${sDefaultButtonPadding}px;`)

        // Typograpy.Size13
        expect(sButtonText).toHaveStyle(`font-size: ${TypoAbsoluteNumber.Typo13}rem;`)
        expect(sButtonText).toHaveStyle(`line-height: ${LineHeightAbsoluteNumber.Lh18}rem;`)

        // Text padding value by ButtonSize
        expect(sButtonText).toHaveStyle(`padding: 0 ${TEXT_PADDING_VALUE[ButtonSize.S]}px;`)

        expect(sButton).toMatchSnapshot()
      })

      it('Size S - styleVariant: Floating', () => {
        const { getByTestId } = renderButton({
          size: ButtonSize.S,
          styleVariant: ButtonStyleVariant.Floating,
        })
        const sFloatingButton = getByTestId(BUTTON_TEST_ID)
        const sFloatingButtonPadding = BUTTON_HORIZONTAL_PADDING_VALUE[ButtonSize.S].floating

        // padding value differs when styleVariant: Floating
        expect(sFloatingButton).toHaveStyle(`padding: 0 ${sFloatingButtonPadding}px 0 ${sFloatingButtonPadding}px;`)
        expect(sFloatingButton).toMatchSnapshot()
      })

      it('Size M', () => {
        const { getByTestId } = renderButton({ size: ButtonSize.M })
        const mButton = getByTestId(BUTTON_TEST_ID)
        const mButtonText = getByTestId(BUTTON_TEXT_TEST_ID)
        const mDefaultButtonPadding = BUTTON_HORIZONTAL_PADDING_VALUE[ButtonSize.M].default

        expect(mButton).toHaveStyle('min-width: 36px;')
        expect(mButton).toHaveStyle('height: 36px;')
        // eslint-disable-next-line max-len
        expect(mButton).toHaveStyle(`padding: 0 ${mDefaultButtonPadding}px 0 ${mDefaultButtonPadding}px;`)

        // Typograpy.Size14
        expect(mButtonText).toHaveStyle(`font-size: ${TypoAbsoluteNumber.Typo14}rem;`)
        expect(mButtonText).toHaveStyle(`line-height: ${LineHeightAbsoluteNumber.Lh18}rem;`)

        // Text padding value by ButtonSize
        expect(mButtonText).toHaveStyle(`padding: 0 ${TEXT_PADDING_VALUE[ButtonSize.M]}px;`)

        expect(mButton).toMatchSnapshot()
      })

      it('Size M - styleVariant: Floating', () => {
        const { getByTestId } = renderButton({
          size: ButtonSize.M,
          styleVariant: ButtonStyleVariant.Floating,
        })
        const mFloatingButton = getByTestId(BUTTON_TEST_ID)
        const mFloatingButtonPadding = BUTTON_HORIZONTAL_PADDING_VALUE[ButtonSize.M].floating

        // padding value differs when styleVariant: Floating
        expect(mFloatingButton).toHaveStyle(`padding: 0 ${mFloatingButtonPadding}px 0 ${mFloatingButtonPadding}px;`)
        expect(mFloatingButton).toMatchSnapshot()
      })

      it('Size L', () => {
        const { getByTestId } = renderButton({ size: ButtonSize.L })
        const lButton = getByTestId(BUTTON_TEST_ID)
        const lButtonText = getByTestId(BUTTON_TEXT_TEST_ID)
        const lDefaultButtonPadding = BUTTON_HORIZONTAL_PADDING_VALUE[ButtonSize.L].default

        expect(lButton).toHaveStyle('min-width: 44px;')
        expect(lButton).toHaveStyle('height: 44px;')
        expect(lButton).toHaveStyle(`padding: 0 ${lDefaultButtonPadding}px 0 ${lDefaultButtonPadding}px;`)

        // Typography.Size15
        expect(lButtonText).toHaveStyle(`font-size: ${TypoAbsoluteNumber.Typo15}rem;`)
        expect(lButtonText).toHaveStyle(`line-height: ${LineHeightAbsoluteNumber.Lh20}rem;`)

        // Text padding value by ButtonSize
        expect(lButtonText).toHaveStyle(`padding: 0 ${TEXT_PADDING_VALUE[ButtonSize.L]}px;`)

        expect(lButton).toMatchSnapshot()
      })

      it('Size L - styleVariant: Floating', () => {
        const { getByTestId } = renderButton({
          size: ButtonSize.L,
          styleVariant: ButtonStyleVariant.Floating,
        })
        const lFloatingButton = getByTestId(BUTTON_TEST_ID)
        const lFloatingButtonPadding = BUTTON_HORIZONTAL_PADDING_VALUE[ButtonSize.L].floating

        // padding value differs when styleVariant: Floating
        expect(lFloatingButton).toHaveStyle(`padding: 0 ${lFloatingButtonPadding}px 0 ${lFloatingButtonPadding}px;`)
        expect(lFloatingButton).toMatchSnapshot()
      })

      it('Size XL', () => {
        const { getByTestId } = renderButton({ size: ButtonSize.XL })
        const xlButton = getByTestId(BUTTON_TEST_ID)
        const xlButtonText = getByTestId(BUTTON_TEXT_TEST_ID)
        const xlDefaultButtonPadding = BUTTON_HORIZONTAL_PADDING_VALUE[ButtonSize.XL].default

        expect(xlButton).toHaveStyle('min-width: 54px;')
        expect(xlButton).toHaveStyle('height: 54px;')
        expect(xlButton).toHaveStyle(`padding: 0 ${xlDefaultButtonPadding}px 0 ${xlDefaultButtonPadding}px;`)

        // Typography.Size18
        expect(xlButtonText).toHaveStyle(`font-size: ${TypoAbsoluteNumber.Typo18}rem;`)
        expect(xlButtonText).toHaveStyle(`line-height: ${LineHeightAbsoluteNumber.Lh24}rem;`)

        // Text padding value by ButtonSize
        expect(xlButtonText).toHaveStyle(`padding: 0 ${TEXT_PADDING_VALUE[ButtonSize.XL]}px;`)

        expect(xlButton).toMatchSnapshot()
      })

      it('Size XL - styleVariant: Floating', () => {
        const { getByTestId } = renderButton({
          size: ButtonSize.XL,
          styleVariant: ButtonStyleVariant.Floating,
        })
        const xlFloatingButton = getByTestId(BUTTON_TEST_ID)
        const xlFloatingButtonPadding = BUTTON_HORIZONTAL_PADDING_VALUE[ButtonSize.XL].floating

        // padding value differs when styleVariant: Floating
        expect(xlFloatingButton).toHaveStyle(`padding: 0 ${xlFloatingButtonPadding}px 0 ${xlFloatingButtonPadding}px;`)
        expect(xlFloatingButton).toMatchSnapshot()
      })
    })

    describe('without text >', () => {
      it('Size XS', () => {
        const { getByTestId } = renderButton({ text: '', size: ButtonSize.XS })
        const xsButton = getByTestId(BUTTON_TEST_ID)

        expect(xsButton).toHaveStyle('min-width: 20px;')
        expect(xsButton).toHaveStyle('height: 20px;')
        expect(xsButton).toHaveStyle('padding: 0px;')

        expect(xsButton).toMatchSnapshot()
      })

      it('Size S', () => {
        const { getByTestId } = renderButton({ text: '', size: ButtonSize.S })
        const sButton = getByTestId(BUTTON_TEST_ID)

        expect(sButton).toHaveStyle('min-width: 24px;')
        expect(sButton).toHaveStyle('height: 24px;')
        expect(sButton).toHaveStyle('padding: 0;')

        expect(sButton).toMatchSnapshot()
      })

      it('Size M', () => {
        const { getByTestId } = renderButton({ text: '', size: ButtonSize.M })
        const mButton = getByTestId(BUTTON_TEST_ID)

        expect(mButton).toHaveStyle('min-width: 36px;')
        expect(mButton).toHaveStyle('height: 36px;')
        expect(mButton).toHaveStyle('padding: 0;')

        expect(mButton).toMatchSnapshot()
      })

      it('Size L', () => {
        const { getByTestId } = renderButton({ text: '', size: ButtonSize.L })
        const lButton = getByTestId(BUTTON_TEST_ID)

        expect(lButton).toHaveStyle('min-width: 44px;')
        expect(lButton).toHaveStyle('height: 44px;')
        expect(lButton).toHaveStyle('padding: 0;')

        expect(lButton).toMatchSnapshot()
      })

      it('Size XL', () => {
        const { getByTestId } = renderButton({ text: '', size: ButtonSize.XL })
        const xlButton = getByTestId(BUTTON_TEST_ID)

        expect(xlButton).toHaveStyle('min-width: 54px;')
        expect(xlButton).toHaveStyle('height: 54px;')
        expect(xlButton).toHaveStyle('padding: 0;')

        expect(xlButton).toMatchSnapshot()
      })
    })
  })
})
