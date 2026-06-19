import userEvent from '@testing-library/user-event'

import { render } from '~/src/utils/test'
import {
  FormField,
  FormLabel,
} from '~/src/v3/FormField'

import { Switch } from './Switch'
import { type SwitchProps } from './Switch.types'

describe('Switch', () => {
  const renderSwitch = ({
    children,
    ...props
  }: SwitchProps = {}) => render(<Switch {...props}>{children}</Switch>)

  let user: ReturnType<typeof userEvent.setup>

  beforeEach(() => {
    user = userEvent.setup()
  })

  describe('data attribute', () => {
    it('should have data-state="checked" attribute when checked is true', () => {
      const { getByRole } = renderSwitch({
        checked: true,
      })

      expect(getByRole('switch')).toHaveAttribute('data-state', 'checked')
    })

    it('should have data-state="unchecked" attribute when checked is false', () => {
      const { getByRole } = renderSwitch({
        checked: false,
      })

      expect(getByRole('switch')).toHaveAttribute('data-state', 'unchecked')
    })

    it('should have data-disabled attribute when disabled is true', () => {
      const { getByRole } = renderSwitch({
        disabled: true,
      })

      expect(getByRole('switch')).toHaveAttribute('data-disabled')
    })
  })

  describe('user interactions', () => {
    it('should change state when user clicks Switch', async () => {
      const onClick = jest.fn()
      const onCheckedChange = jest.fn()
      const { getByRole } = renderSwitch({
        defaultChecked: false,
        onClick,
        onCheckedChange,
      })
      const switchComponent = getByRole('switch')

      await user.click(switchComponent)
      expect(switchComponent).toHaveAttribute('data-state', 'checked')
      expect(onClick).toHaveBeenCalledTimes(1)
      expect(onCheckedChange).toHaveBeenCalledTimes(1)
    })

    it('should change state when user clicks the label', async () => {
      const { getByRole, getByText } = renderSwitch({
        defaultChecked: false,
        children: 'Enable notification',
      })
      const switchComponent = getByRole('switch')
      const label = getByText('Enable notification')

      await user.click(label)
      expect(switchComponent).toHaveAttribute('data-state', 'checked')
    })

    it('should change state when user enters Space key on Switch', async () => {
      const onCheckedChange = jest.fn()
      const { getByRole } = renderSwitch({
        defaultChecked: false,
        onCheckedChange,
      })
      const switchComponent = getByRole('switch')

      await user.tab()
      await user.keyboard('[Space]')
      expect(switchComponent).toHaveAttribute('data-state', 'checked')
      expect(onCheckedChange).toHaveBeenCalledTimes(1)
    })

    it('should change state when user enters Enter key on Switch', async () => {
      const onCheckedChange = jest.fn()
      const { getByRole } = renderSwitch({
        defaultChecked: false,
        onCheckedChange,
      })
      const switchComponent = getByRole('switch')

      await user.tab()
      await user.keyboard('[Enter]')
      expect(switchComponent).toHaveAttribute('data-state', 'checked')
      expect(onCheckedChange).toHaveBeenCalledTimes(1)
    })

    it('should not change state when user clicks disabled Switch', async () => {
      const onClick = jest.fn()
      const onCheckedChange = jest.fn()
      const { getByRole } = renderSwitch({
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
    it('should render switch with "switch" role', () => {
      const { getByRole } = renderSwitch()
      expect(getByRole('switch')).toBeInTheDocument()
    })

    it('should have aria-checked="true" when checked is true', () => {
      const { getByRole } = renderSwitch({
        checked: true,
      })

      expect(getByRole('switch')).toHaveAttribute('aria-checked', 'true')
    })

    it('should have aria-checked="false" when checked is false', () => {
      const { getByRole } = renderSwitch({
        checked: false,
      })

      expect(getByRole('switch')).toHaveAttribute('aria-checked', 'false')
    })

    it('should have aria-disabled="true" when disabled prop is true', () => {
      const { getByRole } = renderSwitch({
        disabled: true,
      })

      expect(getByRole('switch')).toHaveAttribute('aria-disabled', 'true')
    })
  })

  describe('With FormField', () => {
    it("FormField's id prop should be passed to Switch", () => {
      const { getByRole } = render(
        <FormField id="form-field-id">
          <Switch />
        </FormField>
      )

      expect(getByRole('switch')).toHaveAttribute('id', 'form-field-id')
    })

    it("Switch's id prop should override FormField's id prop", () => {
      const { getByRole } = render(
        <FormField id="form-field-id">
          <Switch id="switch-id" />
        </FormField>
      )

      expect(getByRole('switch')).toHaveAttribute('id', 'switch-id')
    })

    it('should be labelled by FormLabel when standalone', () => {
      const { getByRole } = render(
        <FormField>
          <FormLabel>Email notification</FormLabel>
          <Switch />
        </FormField>
      )

      expect(
        getByRole('switch', { name: 'Email notification' })
      ).toBeInTheDocument()
    })

    it("FormField's disabled prop should be passed to Switch", () => {
      const { getByRole } = render(
        <FormField disabled>
          <Switch />
        </FormField>
      )

      expect(getByRole('switch')).toHaveAttribute('aria-disabled', 'true')
    })
  })
})
