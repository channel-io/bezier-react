import userEvent from '@testing-library/user-event'

import { render } from '~/src/utils/test'

import { Switch } from './Switch'
import { type SwitchProps } from './Switch.types'

describe('Switch', () => {
  const renderComponent = (props?: Partial<SwitchProps>) =>
    render(<Switch {...props} />)

  describe('data attribute', () => {
    describe('data-state', () => {
      it('should have data-state="checked" attribute when checked is true', () => {
        const { getByRole } = renderComponent({
          checked: true,
        })
        const switchComponent = getByRole('switch')

        expect(switchComponent).toHaveAttribute('data-state', 'checked')
      })

      it('should have data-state="unchecked" attribute when checked is false', () => {
        const { getByRole } = renderComponent({
          checked: false,
        })
        const switchComponent = getByRole('switch')

        expect(switchComponent).toHaveAttribute('data-state', 'unchecked')
      })
    })

    describe('data-disabled', () => {
      it('should have data-disabled attribute when disabled is true', () => {
        const { getByRole } = renderComponent({
          disabled: true,
        })
        const switchComponent = getByRole('switch')

        expect(switchComponent).toHaveAttribute('data-disabled')
      })

      it('should not have data-disabled attribute when disabled is false', () => {
        const { getByRole } = renderComponent({
          disabled: false,
        })
        const switchComponent = getByRole('switch')

        expect(switchComponent).not.toHaveAttribute('data-disabled')
      })
    })
  })

  describe('user interactions', () => {
    it('should change state when user clicks Switch', async () => {
      const user = userEvent.setup()
      const onClick = jest.fn()
      const onCheckedChange = jest.fn()
      const { getByRole } = renderComponent({
        defaultChecked: false,
        onClick,
        onCheckedChange,
      })
      const switchComponent = getByRole('switch')

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
      const { getByRole } = renderComponent({
        defaultChecked: false,
        onCheckedChange,
      })
      const switchComponent = getByRole('switch')

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
      const { getByRole } = renderComponent({
        defaultChecked: false,
        onCheckedChange,
      })
      const switchComponent = getByRole('switch')

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
      const { getByRole } = renderComponent({
        defaultChecked: false,
        disabled: true,
        onClick,
        onCheckedChange,
      })
      const switchComponent = getByRole('switch')

      await user.click(switchComponent)
      expect(switchComponent).toHaveAttribute('data-state', 'unchecked')
      expect(onClick).not.toHaveBeenCalled()
      expect(onCheckedChange).not.toHaveBeenCalled()
    })
  })

  describe('accessibility', () => {
    describe('role', () => {
      it('should render switch with "switch" role', () => {
        const { getByRole } = renderComponent()
        const switchComponent = getByRole('switch')

        expect(switchComponent).toBeInTheDocument()
      })
    })

    describe('aria-checked', () => {
      it('should be "true" when state is "on"', () => {
        const { getByRole } = renderComponent({
          checked: true,
        })
        const switchComponent = getByRole('switch')

        expect(switchComponent).toHaveAttribute('aria-checked', 'true')
      })

      it('should be "false" when state is "off"', () => {
        const { getByRole } = renderComponent({
          checked: false,
        })
        const switchComponent = getByRole('switch')

        expect(switchComponent).toHaveAttribute('aria-checked', 'false')
      })
    })

    describe('aria-disabled', () => {
      it('should have "true" value on "aria-disabled" attribute when disabled prop is true', () => {
        const { getByRole } = renderComponent({
          disabled: true,
        })
        const switchComponent = getByRole('switch')

        expect(switchComponent).toHaveAttribute('aria-disabled', 'true')
      })
    })
  })
})
