/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { LightFoundation } from 'Foundation'
import { render } from 'Utils/testUtils'
import Switch, { SWITCH_TEST_ID, SWITCH_HANDLE_TEST_ID } from './Switch'
import type SwitchProps from './Switch.types'

describe('Switch', () => {
  const renderComponent = (props?: Partial<SwitchProps>) => render(
    <Switch {...props} />,
  )

  describe('no props specified', () => {
    it('should render default Switch', () => {
      const { getByTestId } = renderComponent()
      const switchComponent = getByTestId(SWITCH_TEST_ID)
      const switchHandleComponent = getByTestId(SWITCH_HANDLE_TEST_ID)

      expect(switchComponent).toHaveStyle('position: relative')
      expect(switchComponent).toHaveStyle('width: 32px')
      expect(switchComponent).toHaveStyle('height: 20px')
      expect(switchComponent).toHaveStyle('cursor: pointer')
      expect(switchComponent).toHaveStyle(`background-color: ${LightFoundation.theme['bg-black-dark']}`)
      expect(switchComponent).toHaveStyle('border-radius: 10px')
      expect(switchComponent).toHaveStyle('opacity: initial')
      expect(switchHandleComponent).toHaveStyle('position: absolute')
      expect(switchHandleComponent).toHaveStyle('top: 2px')
      expect(switchHandleComponent).toHaveStyle('left: 2px')
      expect(switchHandleComponent).toHaveStyle('width: 16px')
      expect(switchHandleComponent).toHaveStyle('height: 16px')
      expect(switchHandleComponent).toHaveStyle(`background-color: ${LightFoundation.theme['bgtxt-absolute-white-dark']}`)
      expect(switchHandleComponent).toHaveStyle('border-radius: 50%')
      expect(switchHandleComponent).toHaveStyle('transform: initial')
    })
  })

  describe('specify size props', () => {
    it('should render Switch with given size', () => {
      const { getByTestId } = renderComponent({
        size: 16,
      })
      const switchComponent = getByTestId(SWITCH_TEST_ID)
      const switchHandleComponent = getByTestId(SWITCH_HANDLE_TEST_ID)

      expect(switchComponent).toHaveStyle('width: 32px')
      expect(switchComponent).toHaveStyle('height: 20px')
      expect(switchComponent).toHaveStyle('border-radius: 10px')
      expect(switchHandleComponent).toHaveStyle('top: 2px')
      expect(switchHandleComponent).toHaveStyle('left: 2px')
      expect(switchHandleComponent).toHaveStyle('width: 16px')
      expect(switchHandleComponent).toHaveStyle('height: 16px')
    })
  })

  describe('specify checked props', () => {
    it('should render Switch with non-checked state when checked is false', () => {
      const { getByTestId } = renderComponent({
        checked: false,
      })
      const switchComponent = getByTestId(SWITCH_TEST_ID)
      const switchHandleComponent = getByTestId(SWITCH_HANDLE_TEST_ID)

      expect(switchComponent).toHaveStyle(`background-color: ${LightFoundation.theme['bg-black-dark']}`)
      expect(switchHandleComponent).toHaveStyle('transform: initial')
    })

    it('should render Switch with checked state when checked is true', () => {
      const { getByTestId } = renderComponent({
        checked: true,
      })
      const switchComponent = getByTestId(SWITCH_TEST_ID)
      const switchHandleComponent = getByTestId(SWITCH_HANDLE_TEST_ID)

      expect(switchComponent).toHaveStyle(`background-color: ${LightFoundation.theme['bgtxt-green-normal']}`)
      expect(switchHandleComponent).toHaveStyle('transform: translateX(12px)')
    })
  })

  describe('specify disabled props', () => {
    it('should render default Switch when disabled is false', () => {
      const { getByTestId } = renderComponent({
        disabled: false,
      })
      const switchComponent = getByTestId(SWITCH_TEST_ID)

      expect(switchComponent).toHaveStyle('opacity: initial')
    })

    it('should render disabled Switch when disabled is true', () => {
      const { getByTestId } = renderComponent({
        disabled: true,
      })
      const switchComponent = getByTestId(SWITCH_TEST_ID)

      expect(switchComponent).toHaveStyle('opacity: .2')
    })
  })
})
