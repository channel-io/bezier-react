/* External dependencies */
import React from 'react'
import _ from 'lodash-es'

/* Internal dependencies */
import { css, TransitionDuration } from 'Foundation'
import { DarkTheme } from 'Foundation/Colors/Theme'
import { ZIndex } from 'Constants/ZIndex'
import { render } from 'Utils/testUtils'
import ToastElementProps, { ToastAppearance, ToastPlacement, ToastPreset } from './Toast.types'
import ToastElement, { TOAST_TEST_ID } from './ToastElement'

describe('Toast test >', () => {
  let props: ToastElementProps

  beforeEach(() => {
    props = {
      content: 'Test Toast',
      transitionDuration: TransitionDuration.M,
      onDismiss: _.noop,
      transform: css``,
      placement: ToastPlacement.BottomLeft,
    }
  })

  const renderToast = (optionProps?: Partial<ToastElementProps>) => render(<ToastElement {...props} {...optionProps} />)

  it('Reset CSS', () => {
    const { getByTestId } = renderToast()
    const defaultToast = getByTestId(TOAST_TEST_ID)

    expect(defaultToast).toHaveStyle('position: relative')
    expect(defaultToast).toHaveStyle('display: flex')
    expect(defaultToast).toHaveStyle('width: 288px')
    expect(defaultToast).toHaveStyle('padding: 16px')
    expect(defaultToast).toHaveStyle(`z-index: ${ZIndex.Toast}`)
  })

  describe('Apearance Variant Test > ', () => {
    it('info color', () => {
      const { getByTestId } = renderToast({ appearance: ToastAppearance.Info })
      const infoToast = getByTestId(TOAST_TEST_ID)

      expect(infoToast.firstChild).toHaveStyle(`color: ${DarkTheme['txt-black-darkest']}`)
    })
    it('success color', () => {
      const { getByTestId } = renderToast({ appearance: ToastAppearance.Success })
      const successToast = getByTestId(TOAST_TEST_ID)

      expect(successToast.firstChild).toHaveStyle(`color: ${DarkTheme['bgtxt-green-normal']}`)
    })
    it('success color', () => {
      const { getByTestId } = renderToast({ appearance: ToastAppearance.Warning })
      const warningToast = getByTestId(TOAST_TEST_ID)

      expect(warningToast.firstChild).toHaveStyle(`color: ${DarkTheme['bgtxt-orange-normal']}`)
    })
    it('success color', () => {
      const { getByTestId } = renderToast({ appearance: ToastAppearance.Error })
      const errorToast = getByTestId(TOAST_TEST_ID)

      expect(errorToast.firstChild).toHaveStyle(`color: ${DarkTheme['bgtxt-red-normal']}`)
    })
  })

  describe('Preset Variant Test > ', () => {
    it('default preset', () => {
      const { getByTestId } = renderToast({ preset: ToastPreset.Default })
      const defaultToast = getByTestId(TOAST_TEST_ID)

      expect(defaultToast.firstChild).toHaveStyle(`color: ${DarkTheme['txt-black-darkest']}`)
    })

    it('default preset', () => {
      const { getByTestId } = renderToast({ preset: ToastPreset.Success })
      const successToast = getByTestId(TOAST_TEST_ID)

      expect(successToast.firstChild).toHaveStyle(`color: ${DarkTheme['bgtxt-green-normal']}`)
    })

    it('default preset', () => {
      const { getByTestId } = renderToast({ preset: ToastPreset.Error })
      const errorToast = getByTestId(TOAST_TEST_ID)

      expect(errorToast.firstChild).toHaveStyle(`color: ${DarkTheme['bgtxt-red-normal']}`)
    })

    it('default preset', () => {
      const { getByTestId } = renderToast({ preset: ToastPreset.Offline })
      const offlineToast = getByTestId(TOAST_TEST_ID)

      expect(offlineToast.firstChild).toHaveStyle(`color: ${DarkTheme['bgtxt-orange-normal']}`)
    })

    it('default preset', () => {
      const { getByTestId } = renderToast({ preset: ToastPreset.Online })
      const onlineToast = getByTestId(TOAST_TEST_ID)

      expect(onlineToast.firstChild).toHaveStyle(`color: ${DarkTheme['bgtxt-green-normal']}`)
    })
  })

  describe('Props - onDismiss', () => {
    it('onDismiss is called when click Close button,', () => {
      const onDismiss = jest.fn()
      const { getByTestId } = renderToast({
        onDismiss,
      })
      const closeToast = getByTestId(`${TOAST_TEST_ID}-close`)
      closeToast.click()
      expect(onDismiss).toBeCalledTimes(1)
    })
  })

  describe('Props - content', () => {
    it('content is string', () => {
      const onDismiss = jest.fn()
      const { getByTestId } = renderToast({
        onDismiss,
        content: 'Hello',
      })
      const content = getByTestId(`${TOAST_TEST_ID}-content`)
      expect(content).toBeInTheDocument()
      expect(content.childNodes.length).toBe(1)
    })

    it('content is string with \n', () => {
      const onDismiss = jest.fn()
      const { getByTestId } = renderToast({
        onDismiss,
        content: 'Hello\nChannelTalk',
      })
      const content = getByTestId(`${TOAST_TEST_ID}-content`)
      expect(content.childNodes.length).toBe(2)
    })

    it('content is ReactNode', () => {
      const onDismiss = jest.fn()
      const { getByTestId } = renderToast({
        onDismiss,
        content: (
          <button type="button">
            Hello
          </button>
        ),
      })
      const content = getByTestId(`${TOAST_TEST_ID}-content`)
      expect(content).toBeInTheDocument()
      expect(content.childNodes.length).toBe(1)
    })
  })

  it('z-index Test > ', () => {
    const { getByTestId } = renderToast({ zIndex: 317 })
    const toast = getByTestId(TOAST_TEST_ID)

    expect(toast).toHaveStyle('z-index: 317')
  })
})
