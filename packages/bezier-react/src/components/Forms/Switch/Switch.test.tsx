/* External dependencies */
import React from 'react'
import userEvent from '@testing-library/user-event'

/* Internal dependencies */
import { LightFoundation } from 'Foundation'
import DisabledOpacity from 'Constants/DisabledOpacity'
import { render } from 'Utils/testUtils'
import {
  Switch,
  SWITCH_TEST_ID,
  SWITCH_HANDLE_TEST_ID,
} from './Switch'
import type SwitchProps from './Switch.types'
import { SwitchSize } from './Switch.types'

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
      expect(switchComponent).toHaveStyle('width: 36px')
      expect(switchComponent).toHaveStyle('height: 24px')
      expect(switchComponent).toHaveStyle('cursor: pointer')
      expect(switchComponent).toHaveStyle(`background-color: ${LightFoundation.theme['bg-black-dark']}`)
      expect(switchComponent).toHaveStyle('border-radius: 12px')
      expect(switchComponent).toHaveStyle('opacity: initial')
      expect(switchHandleComponent).toHaveStyle('position: absolute')
      expect(switchHandleComponent).toHaveStyle('top: 3px')
      expect(switchHandleComponent).toHaveStyle('left: 3px')
      expect(switchHandleComponent).toHaveStyle('width: 18px')
      expect(switchHandleComponent).toHaveStyle('height: 18px')
      expect(switchHandleComponent).toHaveStyle(`background-color: ${LightFoundation.theme['bgtxt-absolute-white-dark']}`)
      expect(switchHandleComponent).toHaveStyle('border-radius: 12px')
      expect(switchHandleComponent).toHaveStyle('transform: initial')
    })
  })

  describe('specify size props', () => {
    it('should render Switch with size M', () => {
      const { getByTestId } = renderComponent({
        size: SwitchSize.M,
      })
      const switchComponent = getByTestId(SWITCH_TEST_ID)
      const switchHandleComponent = getByTestId(SWITCH_HANDLE_TEST_ID)

      expect(switchComponent).toHaveStyle('width: 36px')
      expect(switchComponent).toHaveStyle('height: 24px')
      expect(switchHandleComponent).toHaveStyle('width: 18px')
      expect(switchHandleComponent).toHaveStyle('height: 18px')
    })

    it('should render Switch with size S', () => {
      const { getByTestId } = renderComponent({
        size: SwitchSize.S,
      })
      const switchComponent = getByTestId(SWITCH_TEST_ID)
      const switchHandleComponent = getByTestId(SWITCH_HANDLE_TEST_ID)

      expect(switchComponent).toHaveStyle('width: 30px')
      expect(switchComponent).toHaveStyle('height: 20px')
      expect(switchHandleComponent).toHaveStyle('width: 14px')
      expect(switchHandleComponent).toHaveStyle('height: 14px')
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
      expect(switchComponent).toHaveStyle('cursor: pointer')
    })

    it('should render disabled Switch when disabled is true', () => {
      const { getByTestId } = renderComponent({
        disabled: true,
      })
      const switchComponent = getByTestId(SWITCH_TEST_ID)

      expect(switchComponent).toHaveStyle(`opacity: ${DisabledOpacity}`)
      expect(switchComponent).toHaveStyle('cursor: not-allowed')
    })
  })

  describe('data attribute', () => {
    describe('data-state', () => {
      it('should have data-state="checked" attribute when checked is true', () => {
        const { getByTestId } = renderComponent({
          checked: true,
        })
        const switchComponent = getByTestId(SWITCH_TEST_ID)

        expect(switchComponent).toHaveAttribute('data-state', 'checked')
      })

      it('should have data-state="unchecked" attribute when checked is false', () => {
        const { getByTestId } = renderComponent({
          checked: false,
        })
        const switchComponent = getByTestId(SWITCH_TEST_ID)

        expect(switchComponent).toHaveAttribute('data-state', 'unchecked')
      })
    })

    describe('data-disabled', () => {
      it('should have data-disabled attribute when disabled is true', () => {
        const { getByTestId } = renderComponent({
          disabled: true,
        })
        const switchComponent = getByTestId(SWITCH_TEST_ID)

        expect(switchComponent).toHaveAttribute('data-disabled')
      })

      it('should not have data-disabled attribute when disabled is false', () => {
        const { getByTestId } = renderComponent({
          disabled: false,
        })
        const switchComponent = getByTestId(SWITCH_TEST_ID)

        expect(switchComponent).not.toHaveAttribute('data-disabled')
      })
    })
  })

  describe('user interactions', () => {
    it('should change state when user clicks Switch', async () => {
      const user = userEvent.setup()
      const onClick = jest.fn()
      const onCheckedChange = jest.fn()
      const { getByTestId } = renderComponent({
        defaultChecked: false,
        onClick,
        onCheckedChange,
      })
      const switchComponent = getByTestId(SWITCH_TEST_ID)

      await user.click(switchComponent)
      expect(switchComponent).toHaveAttribute('data-state', 'checked')
      expect(onClick).toHaveBeenCalledTimes(1)
      expect(onCheckedChange).toHaveBeenCalledTimes(1)
      await user.click(switchComponent)
      expect(switchComponent).toHaveAttribute('data-state', 'unchecked')
      expect(onClick).toHaveBeenCalledTimes(2)
      expect(onCheckedChange).toHaveBeenCalledTimes(2)
    })

    it('should change state when user enters Space key on Switch', async () => {
      const user = userEvent.setup()
      const onCheckedChange = jest.fn()
      const { getByTestId } = renderComponent({
        defaultChecked: false,
        onCheckedChange,
      })
      const switchComponent = getByTestId(SWITCH_TEST_ID)

      await user.tab()
      await user.keyboard('[Space]')
      expect(switchComponent).toHaveAttribute('data-state', 'checked')
      expect(onCheckedChange).toHaveBeenCalledTimes(1)
      await user.keyboard('[Space]')
      expect(switchComponent).toHaveAttribute('data-state', 'unchecked')
      expect(onCheckedChange).toHaveBeenCalledTimes(2)
    })

    it('should change state when user enters Enter key on Switch', async () => {
      const user = userEvent.setup()
      const onCheckedChange = jest.fn()
      const { getByTestId } = renderComponent({
        defaultChecked: false,
        onCheckedChange,
      })
      const switchComponent = getByTestId(SWITCH_TEST_ID)

      await user.tab()
      await user.keyboard('[Enter]')
      expect(switchComponent).toHaveAttribute('data-state', 'checked')
      expect(onCheckedChange).toHaveBeenCalledTimes(1)
      await user.keyboard('[Enter]')
      expect(switchComponent).toHaveAttribute('data-state', 'unchecked')
      expect(onCheckedChange).toHaveBeenCalledTimes(2)
    })

    it('should not change state when user clicks disabled Switch', async () => {
      const user = userEvent.setup()
      const onClick = jest.fn()
      const onCheckedChange = jest.fn()
      const { getByTestId } = renderComponent({
        defaultChecked: false,
        disabled: true,
        onClick,
        onCheckedChange,
      })
      const switchComponent = getByTestId(SWITCH_TEST_ID)

      await user.click(switchComponent)
      expect(switchComponent).toHaveAttribute('data-state', 'unchecked')
      expect(onClick).not.toHaveBeenCalled()
      expect(onCheckedChange).not.toHaveBeenCalled()
    })
  })

  describe('accessibility', () => {
    describe('role', () => {
      it('should render switch with "switch" role', () => {
        const { getAllByRole } = renderComponent()
        const switchComponents = getAllByRole('switch')

        expect(switchComponents).toHaveLength(1)
        expect(switchComponents[0]).toBeInTheDocument()
      })
    })

    describe('aria-checked', () => {
      it('should be "true" when state is "on"', () => {
        const { getAllByRole } = renderComponent({
          checked: true,
        })
        const switchComponents = getAllByRole('switch')

        expect(switchComponents).toHaveLength(1)
        expect(switchComponents[0]).toHaveAttribute('aria-checked', 'true')
      })

      it('should be "false" when state is "off"', () => {
        const { getAllByRole } = renderComponent({
          checked: false,
        })
        const switchComponents = getAllByRole('switch')

        expect(switchComponents).toHaveLength(1)
        expect(switchComponents[0]).toHaveAttribute('aria-checked', 'false')
      })
    })

    describe('aria-disabled', () => {
      it('should have "true" value on "aria-disabled" attribute when disabled prop is true', () => {
        const { getByTestId } = renderComponent({ disabled: true })
        const switchComponent = getByTestId(SWITCH_TEST_ID)

        expect(switchComponent).toHaveAttribute('aria-disabled', 'true')
      })
    })
  })
})
