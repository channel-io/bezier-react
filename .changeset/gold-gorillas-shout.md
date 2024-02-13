---
"@channel.io/bezier-react": major
---

**Breaking Changes: The enum type that the component receives as props is changed to a string (or number) literal type**

The properties that change are:

- `AvatarGroupEllipsisType`
- `IconSize`
- `LegacyTooltipPosition`
- `ModalTitleSize`
- `OverlayPosition`
- `ProgressBarSize`, `ProgressBarVariant`
- `SpinnerSize`
- `SwitchSize`
- `TagBadgeSize`, `TagBadgeVariant`
- `TextAreaHeight`
- `TextFieldSize`, `TextFieldVariant`
- `ToastPlacement`, `ToastAppearance`, `ToastPreset`
- `TooltipPosition`

Also, `SpinnerThickness` props of `Spinner` is not supported any more.

When changed to string literal type, it is changed to the kebab-cased value of enum. e.g. `TooltipPosition.TopCenter` -> `top-center`. Among the above enums, `TextAreaHeight` is converted to number literal type. e.g. `TextAreaHeight.Row16` -> `16`
