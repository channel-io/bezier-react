# Bezier root/alpha to beta migration guide

Use this reference after the codemod writes
`.bezier-beta-migration-report.json`. The report location is authoritative;
do not infer Bezier ownership from JSX tag text alone.

## Diagnostic handling

| Diagnostic                   | Required action                                                                                     |
| ---------------------------- | --------------------------------------------------------------------------------------------------- |
| `dynamic-prop-value`         | Trace the local value union. Map it only if every possible value belongs to the legacy Bezier prop. |
| `prop-collision`             | Compare both values and keep one beta prop. Never pick by source order.                             |
| `manual-component-migration` | Use the component decision sections below.                                                          |
| `manual-prop-migration`      | Select the beta value from semantic/visual intent, then remove the legacy prop.                     |
| `form-owner-review`          | Confirm submission ownership. Use beta `Form` for a native form; do not create nested forms.        |
| `form-field-size-manual`     | Choose `m` or `l`; review legacy `xs`/`xl` visually.                                                |
| `tabs-size-*`                | Keep one `s` or `m` size on the owning `Tabs`.                                                      |
| `import-name-collision`      | Normalize the alias after checking all references.                                                  |
| `transform-failed`           | Inspect the file before continuing; do not suppress the error.                                      |

## List and item decisions

Choose the parent semantics before renaming `ListItem`:

- Action menu under an overlay or more button: use `DropdownMenuItem` inside
  `DropdownMenu`. Rename `onClick` to `onSelect`, left/right content to
  leading/trailing content, and use `DropdownMenuSeparator` for dividers.
- Static settings or grouped content: use `SectionItem` inside `Section`.
- Collapsible grouped content: use `CollapsibleSectionTrigger` and
  `CollapsibleSectionItem`/`SectionItem` inside `CollapsibleSection`.
- App navigation: use `NavigationItem` inside `NavigationList`; use `href` for
  links and `onClick` for button actions.
- Selectable option: use `SelectOption` or `MultiSelectOption`; do not preserve
  generic click handling.
- Freeform row: keep an app-owned layout. Do not force it into a semantic beta
  component.

For `SectionLabel`, move children to `content`, left/right content to
leading/trailing content, and remove `open`. If `open` controlled disclosure,
move it to `CollapsibleSection` and use `CollapsibleSectionTrigger`.

## Form decisions

- Convert `<form>` that contains migrated `FormControl` nodes directly to
  `<Form>` and convert `FormControl` to `FormField`.
- Keep native form props (`onSubmit`, `action`, `method`, `noValidate`) on
  `Form`; it wraps a native form element.
- Do not add a `Form` around a standalone `FormField` without confirming the
  submission scope.
- Keep `size="m"` or `size="l"`. Choose a new size for legacy `xs`/`xl`.
- Use `FormErrorMessage` for error text. Do not automatically reinterpret
  arbitrary conditional `FormHelperText` as an error.
- Use `FormGroup` only when one label describes multiple controls.

## Select and TextField decisions

For legacy `Select`, rebuild the data model explicitly:

```tsx
<Select
  value={value}
  onValueChange={setValue}
>
  <SelectOption
    value="open"
    label="Open"
  />
  <SelectOption
    value="closed"
    label="Closed"
  />
</Select>
```

Use `SelectGroup` for grouped options. Rich `content` requires a plain `label`
for trigger display, typeahead, and accessible naming. Use `MultiSelect` only
when the old control actually allowed multiple selected values.

For `TextField`:

- Static `type="search"`: migrate to `Search` and preserve `allowClear`.
- Other supported input types: migrate to `TextInput`.
- Rename left/right content and wrapper opt-outs to leading/trailing names.
- Review imperative refs; beta exposes the native-oriented `TextInputRef`, not
  every legacy selection helper.
- Dynamic `type` that can include search requires splitting render branches or
  keeping an app wrapper that chooses `Search` vs `TextInput`.

## Button decisions

Mechanical names are:

- `text` -> `label`
- `leftContent` / `prefixContent` -> `leadingContent`
- `rightContent` / `suffixContent` -> `trailingContent`
- `href` requires `as="a"` unless a custom router component owns navigation

Do not mechanically map the old visual props. Choose both beta dimensions:

- `variant`: `filled`, `outlined`, or `ghost`
- `semantic`: `primary`, `secondary`, or `destructive`

Legacy red/destructive actions normally become `semantic="destructive"`, but
the variant still depends on emphasis. Remove legacy `xl` only after choosing
`l` or changing layout. For custom `as={RouterLink}`, verify disabled/loading
navigation behavior in the wrapper.

## Toggle and segmented controls

- `SegmentedControl` supports `s` and `m`; legacy `xs -> s`, `l -> m`.
- Text items use string children with optional `leadingContent` and
  `trailingContent`.
- Icon-only items use `icon` and require an `aria-label`.
- Convert `AlphaToggleButtonGroup` to `SegmentedControl` only for single
  selection. Beta SegmentedControl is not a replacement for a multi-select
  toggle group.
- Keep app-owned controls when independent pressed states are required.

## Navigation and disclosure

- Wrap `NavItem`/`NavGroup` migrations in `NavigationList`.
- `NavigationItem` must have either `href` or `onClick`.
- Map `NavGroup.name` to a visible `label`; map `open` to controlled open state
  and `onClick` to `onOpenChange` after removing name-based callback coupling.
- `OutlineItem` becomes `NavigationGroup` only when it represents navigation.
  Use `CollapsibleSection` for grouped disclosure and keep a tree widget
  app-owned when hierarchical keyboard behavior is required.

## Feedback and display edge cases

- `Banner variant="alt"`: choose a supported variant after visual review. Do
  not preserve `iconColor`; beta owns icon color by variant.
- `ProgressBar`: the codemod adds `width={36}` when legacy width was omitted.
  Choose `default` or `overlaid` for old variants.
- `Tag`: removed monochrome variants have no Badge-style neutral rename.
- `Toast`: map semantic intent to `info`, `success`, or `error`; move z-index
  to `ToastProvider`. Review old `offline`/`online` presets manually.
- `Tooltip`/`Help`: remove body icons. Put essential icon meaning in the
  trigger or textual title/description.
- `Emoji.imageUrl`: use a supported emoji name or app-owned image.
- `AlphaStatusBadge`: derive `online`, `offline`, `online-dnd`, or
  `offline-dnd` from both legacy booleans. Preserve dynamic combinations with
  an explicit expression.
- `LegacyIcon`: first migrate icon names to `@channel.io/bezier-icons`, then
  pass the icon source to beta `Icon`.

## Layout primitives

- `Center`: use a Box/HStack/VStack that preserves horizontal and vertical
  alignment.
- generic `Stack`: choose HStack or VStack from direction; move StackItem props
  to children or Box.
- `LegacySpacer`: prefer parent spacing; use Box only for intentional flexible
  space.
- `KeyValueItem`: use SettingsField only for setting rows. Use SectionItem or
  app layout for general data rows and preserve independent action targets.

## Verification

After edits, rerun the codemod. Then:

1. Resolve every remaining report entry in source.
2. Search root Bezier imports and confirm every remaining symbol is deliberately
   root-only and non-deprecated.
3. Run typecheck; use errors to find narrowed tokens, removed props, and stale
   type imports.
4. Run focused tests for forms, selection, menus, navigation, and overlays.
5. Verify keyboard behavior and accessible names for structural migrations.
