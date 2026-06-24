import type { BezierComponentProps, ChildrenProps } from '~/src/types/props'
import type { FormFieldLabelPosition } from '~/src/v3/Form'

export interface SettingsProps
  extends BezierComponentProps<'div'>,
    ChildrenProps {}

interface SettingsFieldOwnProps {
  /**
   * Name of the setting.
   * Unlike `FormField`, `SettingsField` does not render required markers.
   */
  label: React.ReactNode

  /**
   * Additional description for the setting.
   * This is not used for validation or error messages.
   */
  description?: React.ReactNode

  /**
   * Help content displayed next to the label.
   */
  help?: React.ReactNode

  /**
   * Layout position of the label area.
   * @default 'left'
   */
  labelPosition?: FormFieldLabelPosition
}

export interface SettingsFieldProps
  extends BezierComponentProps<'div'>,
    ChildrenProps,
    SettingsFieldOwnProps {}
