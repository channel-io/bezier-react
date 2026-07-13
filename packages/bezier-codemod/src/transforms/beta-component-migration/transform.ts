import {
  type ImportDeclaration,
  type ImportSpecifier,
  type JsxAttribute,
  type JsxElement,
  type JsxOpeningElement,
  type JsxSelfClosingElement,
  Node,
  type ObjectLiteralExpression,
  type SourceFile,
  SyntaxKind,
} from 'ts-morph'

import enumMemberToStringLiteral from '../v2-enum-member-to-string-literal/transform.js'

import {
  type BetaComponentMigrationResult,
  type MigrationChange,
  type MigrationDiagnostic,
} from './types.js'

const ROOT_MODULE = '@channel.io/bezier-react'
const BETA_MODULE = '@channel.io/bezier-react/beta'

type JsxOpeningLike = JsxOpeningElement | JsxSelfClosingElement

interface ImportedBinding {
  exportedName: string
  localName: string
  declaration: ImportDeclaration
  specifier: ImportSpecifier
}

export const COMPONENT_EXPORT_MAP: Record<string, string> = {
  AlphaAvatar: 'Avatar',
  AlphaAvatarGroup: 'AvatarGroup',
  AlphaButton: 'Button',
  AlphaFloatingButton: 'Button',
  AlphaFloatingIconButton: 'IconButton',
  AlphaIconButton: 'IconButton',
  AlphaLoader: 'Spinner',
  Avatar: 'Avatar',
  AvatarGroup: 'AvatarGroup',
  Badge: 'Badge',
  Banner: 'Banner',
  Box: 'Box',
  Button: 'Button',
  ButtonGroup: 'ButtonGroup',
  Checkbox: 'Checkbox',
  ConfirmModal: 'ConfirmModal',
  ConfirmModalBody: 'ConfirmModalBody',
  ConfirmModalClose: 'ConfirmModalClose',
  ConfirmModalContent: 'ConfirmModalContent',
  ConfirmModalFooter: 'ConfirmModalFooter',
  ConfirmModalHeader: 'ConfirmModalHeader',
  ConfirmModalTrigger: 'ConfirmModalTrigger',
  Divider: 'Divider',
  Emoji: 'Emoji',
  FormControl: 'FormField',
  FormErrorMessage: 'FormErrorMessage',
  FormGroup: 'FormGroup',
  FormHelperText: 'FormHelperText',
  FormLabel: 'FormLabel',
  Help: 'Help',
  HStack: 'HStack',
  Icon: 'Icon',
  Modal: 'Modal',
  ModalBody: 'ModalBody',
  ModalClose: 'ModalClose',
  ModalContent: 'ModalContent',
  ModalFooter: 'ModalFooter',
  ModalHeader: 'ModalHeader',
  ModalTrigger: 'ModalTrigger',
  Overlay: 'Overlay',
  ProgressBar: 'ProgressBar',
  Radio: 'Radio',
  RadioGroup: 'RadioGroup',
  SectionLabel: 'SectionLabel',
  SegmentedControl: 'SegmentedControl',
  SegmentedControlItem: 'SegmentedControlItem',
  SegmentedControlTabContent: 'SegmentedControlTabContent',
  SegmentedControlTabList: 'SegmentedControlTabList',
  Select: 'Select',
  Slider: 'Slider',
  SmoothCornersBox: 'SmoothCornersBox',
  Spinner: 'Spinner',
  Status: 'Status',
  Switch: 'Switch',
  TabAction: 'TabAction',
  TabActions: 'TabActions',
  TabContent: 'TabContent',
  TabItem: 'TabItem',
  TabList: 'TabList',
  Tabs: 'Tabs',
  Tag: 'Tag',
  Text: 'Text',
  TextArea: 'TextArea',
  ToastProvider: 'ToastProvider',
  Tooltip: 'Tooltip',
  VStack: 'VStack',
  useAvatarRadiusToken: 'useAvatarRadiusToken',
  useFormControlContext: 'useFormFieldContext',
  useFormFieldProps: 'useFormFieldProps',
  useModalContainerContext: 'useModalContainerContext',
  useToast: 'useToast',
}

const TYPE_EXPORT_MAP: Record<string, string> = {
  AlphaAvatarGroupProps: 'AvatarGroupProps',
  AlphaAvatarProps: 'AvatarProps',
  AlphaAvatarSize: 'AvatarSize',
  AlphaButtonProps: 'ButtonProps',
  AlphaButtonSize: 'ButtonSize',
  AlphaFloatingButtonProps: 'ButtonProps',
  AlphaFloatingButtonSize: 'ButtonSize',
  AlphaFloatingIconButtonProps: 'IconButtonProps',
  AlphaIconButtonProps: 'IconButtonProps',
  AlphaLoaderProps: 'SpinnerProps',
  AvatarGroupEllipsisType: 'AvatarGroupEllipsisType',
  AvatarGroupProps: 'AvatarGroupProps',
  AvatarProps: 'AvatarProps',
  AvatarSize: 'AvatarSize',
  BadgeProps: 'BadgeProps',
  BadgeSize: 'BadgeSize',
  BadgeVariant: 'BadgeVariant',
  BannerProps: 'BannerProps',
  BannerVariant: 'BannerVariant',
  BoxProps: 'BoxProps',
  ButtonGroupProps: 'ButtonGroupProps',
  ButtonProps: 'ButtonProps',
  ButtonSize: 'ButtonSize',
  CheckboxProps: 'CheckboxProps',
  CheckedState: 'CheckedState',
  ConfirmModalBodyProps: 'ConfirmModalBodyProps',
  ConfirmModalCloseProps: 'ConfirmModalCloseProps',
  ConfirmModalContentProps: 'ConfirmModalContentProps',
  ConfirmModalFooterProps: 'ConfirmModalFooterProps',
  ConfirmModalHeaderProps: 'ConfirmModalHeaderProps',
  ConfirmModalProps: 'ConfirmModalProps',
  ConfirmModalTriggerProps: 'ConfirmModalTriggerProps',
  DividerProps: 'DividerProps',
  EmojiProps: 'EmojiProps',
  EmojiSize: 'EmojiSize',
  FormControlAriaProps: 'FormFieldAriaProps',
  FormControlContextValue: 'FormFieldContextValue',
  FormControlProps: 'FormFieldProps',
  FormErrorMessageProps: 'FormErrorMessageProps',
  FormFieldProps: 'FormFieldProps',
  FormFieldSize: 'FormFieldSize',
  FormGroupProps: 'FormGroupProps',
  FormHelperTextProps: 'FormHelperTextProps',
  FormLabelProps: 'FormLabelProps',
  HelpProps: 'HelpProps',
  HStackProps: 'HStackProps',
  IconProps: 'IconProps',
  IconSize: 'IconSize',
  ModalBodyProps: 'ModalBodyProps',
  ModalCloseProps: 'ModalCloseProps',
  ModalContentProps: 'ModalContentProps',
  ModalFooterProps: 'ModalFooterProps',
  ModalHeaderProps: 'ModalHeaderProps',
  ModalProps: 'ModalProps',
  ModalTitleSize: 'ModalTitleSize',
  ModalTriggerProps: 'ModalTriggerProps',
  OverlayPosition: 'OverlayPosition',
  OverlayProps: 'OverlayProps',
  ProgressBarProps: 'ProgressBarProps',
  ProgressBarSize: 'ProgressBarSize',
  ProgressBarVariant: 'ProgressBarVariant',
  RadioGroupProps: 'RadioGroupProps',
  RadioProps: 'RadioProps',
  SectionLabelProps: 'SectionLabelProps',
  SegmentedControlItemProps: 'SegmentedControlItemProps',
  SegmentedControlProps: 'SegmentedControlProps',
  SegmentedControlSize: 'SegmentedControlSize',
  SegmentedControlTabContentProps: 'SegmentedControlTabContentProps',
  SegmentedControlTabListProps: 'SegmentedControlTabListProps',
  SelectProps: 'SelectProps',
  SliderProps: 'SliderProps',
  SmoothCornersBoxProps: 'SmoothCornersBoxProps',
  SpinnerProps: 'SpinnerProps',
  SpinnerSize: 'SpinnerSize',
  StatusProps: 'StatusProps',
  StatusSize: 'StatusSize',
  StatusType: 'StatusType',
  SwitchProps: 'SwitchProps',
  TabActionProps: 'TabActionProps',
  TabContentProps: 'TabContentProps',
  TabItemProps: 'TabItemProps',
  TabListProps: 'TabListProps',
  TabSize: 'TabSize',
  TabsProps: 'TabsProps',
  TagProps: 'TagProps',
  TagSize: 'TagSize',
  TagVariant: 'TagVariant',
  TextAreaHeight: 'TextAreaHeight',
  TextAreaProps: 'TextAreaProps',
  TextProps: 'TextProps',
  ToastContent: 'ToastContent',
  ToastId: 'ToastId',
  ToastOptions: 'ToastOptions',
  ToastPlacement: 'ToastPlacement',
  ToastPreset: 'ToastPreset',
  ToastProps: 'ToastProps',
  ToastProviderProps: 'ToastProviderProps',
  ToastType: 'ToastType',
  TooltipPosition: 'TooltipPosition',
  TooltipProps: 'TooltipProps',
  VStackProps: 'VStackProps',
}

const EXPORT_MAP = { ...COMPONENT_EXPORT_MAP, ...TYPE_EXPORT_MAP }

export const MANUAL_EXPORTS: Record<string, string> = {
  AlphaButtonColor:
    'Choose beta Button semantic and variant from intent; the legacy color is not a beta color prop.',
  AlphaButtonVariant:
    'Choose beta Button variant and semantic; alpha primary/secondary/tertiary are not direct beta values.',
  AlphaDialogPrimitive:
    'Keep AlphaDialogPrimitive on the root entrypoint until a beta DialogPrimitive is exported.',
  AlphaStatusBadge:
    'Choose a beta Status type from online/doNotDisturb state; the boolean pair has no direct prop rename.',
  AlphaFloatingButtonColor:
    'Choose beta Button semantic and variant from intent; the legacy color is not a beta color prop.',
  AlphaFloatingButtonVariant:
    'Choose beta Button variant and semantic; the floating variant has no direct beta value.',
  AlphaToggleButton:
    'Migrate the toggle intent to SegmentedControl or an app-owned pressed button.',
  AlphaToggleButtonGroup:
    'Choose SegmentedControl for single selection or an app-owned multi-toggle control.',
  AlphaToggleEmojiButtonGroup:
    'Rebuild with SegmentedControl or an app-owned emoji selector.',
  AlphaTooltipPrimitive:
    'Use Tooltip for standard help text or keep a low-level primitive until the trigger/content behavior is reviewed.',
  AutoFocus:
    'Use the target control autoFocus prop or an explicit focus effect.',
  ButtonColorVariant:
    'Choose beta Button semantic; legacy color variants are not exposed by beta Button.',
  ButtonStyleVariant:
    'Choose beta Button variant from filled, outlined, or ghost.',
  Center:
    'Replace Center with Box, HStack, or VStack and preserve both-axis alignment.',
  CheckableAvatar:
    'Compose beta Avatar with Checkbox or another explicit selection control.',
  CheckboxSize:
    'Remove the size prop and verify the fixed 18px beta Checkbox treatment.',
  KeyValueItem:
    'Choose SettingsField for a setting row or SectionItem for a general key/value row.',
  KeyValueMultiLineItem:
    'Choose SettingsField or app-owned layout after reviewing actions and click targets.',
  LegacyIcon:
    'Replace legacy icon names with @channel.io/bezier-icons sources before using beta Icon.',
  LegacyHStack: 'Replace with beta HStack and review item/spacer behavior.',
  LegacyStack: 'Replace with HStack or VStack and review item/spacer behavior.',
  LegacyStackItem:
    'Move item layout props to the HStack/VStack child or a Box.',
  LegacySpacer: 'Use layout spacing or an explicit Box.',
  LegacyTooltip: 'Migrate trigger and content behavior to beta Tooltip.',
  LegacyVStack: 'Replace with beta VStack and review item/spacer behavior.',
  ListItem:
    'Choose SectionItem, DropdownMenuItem, NavigationItem, or a select option from usage intent.',
  NavGroup:
    'Migrate to NavigationGroup inside NavigationList and convert callbacks to open state.',
  NavItem:
    'Migrate to NavigationItem inside NavigationList and choose href or onClick semantics.',
  OutlineItem:
    'Choose CollapsibleSection, NavigationGroup, or app-owned tree behavior.',
  SectionLabel:
    'Move SectionLabel into Section or CollapsibleSection and convert children to content.',
  Select:
    'Rebuild options and trigger with beta Select/SelectOption composition.',
  Stack: 'Replace with HStack or VStack according to direction.',
  StackItem: 'Move item layout props to the HStack/VStack child or a Box.',
  SwitchSize:
    'Remove the size prop and verify the fixed beta Switch treatment.',
  TextField:
    'Use Search for type="search"; otherwise use TextInput and rename side-content props.',
  ToggleButtonGroup:
    'Choose SegmentedControl for single selection or an app-owned multi-toggle control.',
  ToastAppearance:
    'Map appearance intent to the beta info, success, or error preset.',
}

const ICON_SIZE_MAP: Record<string, string> = {
  xxxs: '10',
  xxs: '12',
  xs: '16',
  s: '20',
  m: '24',
  l: '36',
  xl: '44',
}

const SPINNER_SIZE_MAP: Record<string, string> = {
  xs: '12',
  s: '16',
  m: '20',
  l: '24',
  xl: '48',
}

const STATUS_MAP: Record<string, string> = {
  'online-crescent': 'online-dnd',
  'offline-crescent': 'offline-dnd',
}

const BADGE_VARIANT_MAP: Record<string, string> = {
  'monochrome-light': 'neutral-light',
  'monochrome-dark': 'neutral-dark',
}

const SEGMENTED_CONTROL_SIZE_MAP: Record<string, string> = {
  xs: 's',
  s: 's',
  m: 'm',
  l: 'm',
}

function getBindings(sourceFile: SourceFile) {
  return sourceFile
    .getImportDeclarations()
    .filter((declaration) =>
      [ROOT_MODULE, BETA_MODULE].includes(declaration.getModuleSpecifierValue())
    )
    .flatMap((declaration) =>
      declaration.getNamedImports().map((specifier) => ({
        exportedName: specifier.getName(),
        localName: specifier.getAliasNode()?.getText() ?? specifier.getName(),
        declaration,
        specifier,
      }))
    )
}

function isTypeOnlyBinding(binding: ImportedBinding) {
  return binding.declaration.isTypeOnly() || binding.specifier.isTypeOnly()
}

function localNamesFor(bindings: ImportedBinding[], exportedNames: string[]) {
  return bindings
    .filter((binding) => exportedNames.includes(binding.exportedName))
    .map((binding) => binding.localName)
}

function localNamesForModule(
  bindings: ImportedBinding[],
  exportedNames: string[],
  moduleSpecifier: string
) {
  return bindings
    .filter(
      (binding) =>
        binding.declaration.getModuleSpecifierValue() === moduleSpecifier &&
        exportedNames.includes(binding.exportedName)
    )
    .map((binding) => binding.localName)
}

function getJsxOpenings(sourceFile: SourceFile, localNames: string[]) {
  return (
    [SyntaxKind.JsxOpeningElement, SyntaxKind.JsxSelfClosingElement] as const
  )
    .flatMap((kind) => sourceFile.getDescendantsOfKind(kind))
    .filter((node) => localNames.includes(node.getTagNameNode().getText()))
}

function getAttribute(node: JsxOpeningLike, name: string) {
  return node
    .getAttributes()
    .find(
      (attribute): attribute is JsxAttribute =>
        Node.isJsxAttribute(attribute) &&
        attribute.getNameNode().getText() === name
    )
}

function getStringAttributeInitializer(attribute: JsxAttribute) {
  const initializer = attribute.getInitializer()
  return initializer && Node.isStringLiteral(initializer)
    ? initializer
    : undefined
}

function createDiagnostic(
  sourceFile: SourceFile,
  node: Node,
  diagnostic: Omit<
    MigrationDiagnostic,
    'filePath' | 'line' | 'column' | 'severity'
  > & { severity?: MigrationDiagnostic['severity'] }
) {
  const { line, column } = sourceFile.getLineAndColumnAtPos(node.getStart())
  return {
    severity: 'warning' as const,
    filePath: sourceFile.getFilePath(),
    line,
    column,
    ...diagnostic,
  }
}

function createChange(
  sourceFile: SourceFile,
  node: Node,
  change: Omit<MigrationChange, 'filePath' | 'line' | 'column'>
) {
  const { line, column } = sourceFile.getLineAndColumnAtPos(node.getStart())
  return {
    filePath: sourceFile.getFilePath(),
    line,
    column,
    ...change,
  }
}

function renameAttribute(
  sourceFile: SourceFile,
  node: JsxOpeningLike,
  from: string,
  to: string,
  component: string,
  diagnostics: MigrationDiagnostic[],
  changes: MigrationChange[]
) {
  const attribute = getAttribute(node, from)
  if (!attribute) {
    return
  }
  if (getAttribute(node, to)) {
    diagnostics.push(
      createDiagnostic(sourceFile, attribute, {
        code: 'prop-collision',
        component,
        message: `${component} has both ${from} and ${to}; the codemod left both unchanged.`,
        suggestion: `Choose the intended ${to} value and remove ${from}.`,
      })
    )
    return
  }
  changes.push(
    createChange(sourceFile, attribute, {
      code: 'prop-renamed',
      component,
      message: `Renamed ${component}.${from} to ${to}.`,
    })
  )
  attribute.getNameNode().replaceWithText(to)
}

function mapExpressionLiteral(
  node: Node,
  valueMap: Record<string, string>
): boolean {
  if (
    Node.isStringLiteral(node) ||
    Node.isNoSubstitutionTemplateLiteral(node)
  ) {
    const mapped = valueMap[node.getLiteralValue()]
    if (mapped) {
      node.setLiteralValue(mapped)
      return true
    }
    return false
  }
  if (Node.isConditionalExpression(node)) {
    const whenTrueChanged = mapExpressionLiteral(node.getWhenTrue(), valueMap)
    const whenFalseChanged = mapExpressionLiteral(node.getWhenFalse(), valueMap)
    return whenTrueChanged || whenFalseChanged
  }
  if (Node.isParenthesizedExpression(node)) {
    return mapExpressionLiteral(node.getExpression(), valueMap)
  }
  return false
}

function isLiteralOnlyExpression(node: Node): boolean {
  if (
    Node.isStringLiteral(node) ||
    Node.isNoSubstitutionTemplateLiteral(node)
  ) {
    return true
  }
  if (Node.isConditionalExpression(node)) {
    return (
      isLiteralOnlyExpression(node.getWhenTrue()) &&
      isLiteralOnlyExpression(node.getWhenFalse())
    )
  }
  if (Node.isParenthesizedExpression(node)) {
    return isLiteralOnlyExpression(node.getExpression())
  }
  return false
}

function mapAttributeValue(
  attribute: JsxAttribute,
  valueMap: Record<string, string>
) {
  const initializer = attribute.getInitializer()
  if (!initializer) {
    return false
  }
  if (Node.isStringLiteral(initializer)) {
    const mapped = valueMap[initializer.getLiteralValue()]
    if (mapped) {
      initializer.setLiteralValue(mapped)
      return true
    }
    return false
  }
  if (Node.isJsxExpression(initializer)) {
    const expression = initializer.getExpression()
    return expression ? mapExpressionLiteral(expression, valueMap) : false
  }
  return false
}

function transformMappedAttribute(
  sourceFile: SourceFile,
  nodes: JsxOpeningLike[],
  prop: string,
  valueMap: Record<string, string>,
  component: string,
  diagnostics: MigrationDiagnostic[],
  changes: MigrationChange[]
) {
  nodes.forEach((node) => {
    const attribute = getAttribute(node, prop)
    if (!attribute) {
      return
    }
    if (mapAttributeValue(attribute, valueMap)) {
      changes.push(
        createChange(sourceFile, attribute, {
          code: 'literal-mapped',
          component,
          message: `Mapped legacy ${component}.${prop} literals to beta values.`,
        })
      )
      return
    }
    const initializer = attribute.getInitializer()
    if (
      initializer &&
      (Node.isStringLiteral(initializer) ||
        (Node.isJsxExpression(initializer) &&
          initializer.getExpression() &&
          isLiteralOnlyExpression(initializer.getExpressionOrThrow())))
    ) {
      return
    }
    diagnostics.push(
      createDiagnostic(sourceFile, attribute, {
        code: 'dynamic-prop-value',
        component,
        message: `${component}.${prop} could not be proven to use only legacy literal values.`,
        suggestion: `Map the value to the beta ${component}.${prop} union.`,
      })
    )
  })
}

function reportAttribute(
  sourceFile: SourceFile,
  nodes: JsxOpeningLike[],
  prop: string,
  component: string,
  message: string,
  suggestion: string,
  diagnostics: MigrationDiagnostic[]
) {
  nodes.forEach((node) => {
    const attribute = getAttribute(node, prop)
    if (attribute) {
      diagnostics.push(
        createDiagnostic(sourceFile, attribute, {
          code: 'manual-prop-migration',
          component,
          message,
          suggestion,
        })
      )
    }
  })
}

function reportMappedAttributeRemainder(
  sourceFile: SourceFile,
  nodes: JsxOpeningLike[],
  prop: string,
  values: string[],
  component: string,
  message: string,
  suggestion: string,
  diagnostics: MigrationDiagnostic[]
) {
  nodes.forEach((node) => {
    const attribute = getAttribute(node, prop)
    if (!attribute) {
      return
    }
    const literal = getStringAttributeInitializer(attribute)
    if (literal && !values.includes(literal.getLiteralValue())) {
      return
    }
    diagnostics.push(
      createDiagnostic(sourceFile, attribute, {
        code: 'manual-prop-migration',
        component,
        message,
        suggestion,
      })
    )
  })
}

function getObjectTypeContext(node: Node) {
  let current = node
  while (current.getParent()) {
    const parent = current.getParentOrThrow()
    if (
      Node.isParenthesizedExpression(parent) ||
      Node.isAsExpression(parent) ||
      Node.isSatisfiesExpression(parent)
    ) {
      if (Node.isAsExpression(parent) || Node.isSatisfiesExpression(parent)) {
        return parent.getTypeNode()?.getText()
      }
      current = parent
      continue
    }
    if (
      Node.isVariableDeclaration(parent) &&
      parent.getInitializer() === current
    ) {
      return parent.getTypeNode()?.getText()
    }
    return undefined
  }
  return undefined
}

function getTypedObjectLiterals(
  sourceFile: SourceFile,
  bindings: ImportedBinding[],
  exportedTypeNames: string[],
  exportedComponentNames: string[] = []
) {
  const contextNames = [
    ...localNamesFor(bindings, exportedTypeNames),
    ...localNamesFor(bindings, exportedComponentNames),
  ]
  if (contextNames.length === 0) {
    return []
  }
  return sourceFile
    .getDescendantsOfKind(SyntaxKind.ObjectLiteralExpression)
    .filter((object) => {
      const context = getObjectTypeContext(object)
      return Boolean(
        context &&
          contextNames.some((name) => new RegExp(`\\b${name}\\b`).test(context))
      )
    })
}

function getObjectProperty(object: ObjectLiteralExpression, name: string) {
  return object
    .getProperties()
    .find(
      (property) =>
        (Node.isPropertyAssignment(property) ||
          Node.isShorthandPropertyAssignment(property)) &&
        property.getName() === name
    )
}

function renameObjectProperty(
  sourceFile: SourceFile,
  object: ObjectLiteralExpression,
  from: string,
  to: string,
  component: string,
  diagnostics: MigrationDiagnostic[],
  changes: MigrationChange[]
) {
  const property = getObjectProperty(object, from)
  if (!property) {
    return
  }
  if (getObjectProperty(object, to)) {
    diagnostics.push(
      createDiagnostic(sourceFile, property, {
        code: 'prop-collision',
        component,
        message: `${component} props contain both ${from} and ${to}; the codemod left both unchanged.`,
        suggestion: `Choose the intended ${to} value and remove ${from}.`,
      })
    )
    return
  }
  changes.push(
    createChange(sourceFile, property, {
      code: 'prop-renamed',
      component,
      message: `Renamed ${component}.${from} to ${to} in a typed props object.`,
    })
  )
  if (Node.isPropertyAssignment(property)) {
    property.getNameNode().replaceWithText(to)
  } else if (Node.isShorthandPropertyAssignment(property)) {
    property.replaceWithText(`${to}: ${from}`)
  }
}

function mapObjectProperty(
  sourceFile: SourceFile,
  object: ObjectLiteralExpression,
  prop: string,
  valueMap: Record<string, string>,
  component: string,
  diagnostics: MigrationDiagnostic[],
  changes: MigrationChange[]
) {
  const property = getObjectProperty(object, prop)
  if (!property) {
    return
  }
  if (!Node.isPropertyAssignment(property)) {
    diagnostics.push(
      createDiagnostic(sourceFile, property, {
        code: 'dynamic-prop-value',
        component,
        message: `${component}.${prop} shorthand could not be proven to use only legacy literal values.`,
        suggestion: `Map the value to the beta ${component}.${prop} union.`,
      })
    )
    return
  }
  const initializer = property.getInitializer()
  if (!initializer) {
    return
  }
  if (mapExpressionLiteral(initializer, valueMap)) {
    changes.push(
      createChange(sourceFile, property, {
        code: 'literal-mapped',
        component,
        message: `Mapped legacy ${component}.${prop} literals to beta values in a typed props object.`,
      })
    )
  } else if (!isLiteralOnlyExpression(initializer)) {
    diagnostics.push(
      createDiagnostic(sourceFile, property, {
        code: 'dynamic-prop-value',
        component,
        message: `${component}.${prop} could not be proven to use only legacy literal values.`,
        suggestion: `Map the value to the beta ${component}.${prop} union.`,
      })
    )
  }
}

function transformTypedObjects(
  sourceFile: SourceFile,
  bindings: ImportedBinding[],
  diagnostics: MigrationDiagnostic[],
  changes: MigrationChange[]
) {
  getTypedObjectLiterals(
    sourceFile,
    bindings,
    ['BadgeProps'],
    ['Badge']
  ).forEach((object) =>
    mapObjectProperty(
      sourceFile,
      object,
      'variant',
      BADGE_VARIANT_MAP,
      'Badge',
      diagnostics,
      changes
    )
  )
  getTypedObjectLiterals(sourceFile, bindings, ['IconProps'], ['Icon']).forEach(
    (object) =>
      mapObjectProperty(
        sourceFile,
        object,
        'size',
        ICON_SIZE_MAP,
        'Icon',
        diagnostics,
        changes
      )
  )
  getTypedObjectLiterals(
    sourceFile,
    bindings,
    ['SpinnerProps'],
    ['Spinner']
  ).forEach((object) =>
    mapObjectProperty(
      sourceFile,
      object,
      'size',
      SPINNER_SIZE_MAP,
      'Spinner',
      diagnostics,
      changes
    )
  )
  getTypedObjectLiterals(
    sourceFile,
    bindings,
    ['AvatarProps'],
    ['Avatar', 'AlphaAvatar']
  ).forEach((object) =>
    mapObjectProperty(
      sourceFile,
      object,
      'status',
      STATUS_MAP,
      'Avatar',
      diagnostics,
      changes
    )
  )
  getTypedObjectLiterals(
    sourceFile,
    bindings,
    ['StatusProps'],
    ['Status']
  ).forEach((object) =>
    mapObjectProperty(
      sourceFile,
      object,
      'type',
      STATUS_MAP,
      'Status',
      diagnostics,
      changes
    )
  )
  getTypedObjectLiterals(
    sourceFile,
    bindings,
    ['BannerProps'],
    ['Banner']
  ).forEach((object) =>
    renameObjectProperty(
      sourceFile,
      object,
      'icon',
      'leadingIcon',
      'Banner',
      diagnostics,
      changes
    )
  )
  getTypedObjectLiterals(
    sourceFile,
    bindings,
    ['ButtonProps', 'AlphaButtonProps'],
    ['Button', 'AlphaButton', 'AlphaFloatingButton']
  ).forEach((object) => {
    renameObjectProperty(
      sourceFile,
      object,
      'text',
      'label',
      'Button',
      diagnostics,
      changes
    )
    renameObjectProperty(
      sourceFile,
      object,
      'leftContent',
      'leadingContent',
      'Button',
      diagnostics,
      changes
    )
    renameObjectProperty(
      sourceFile,
      object,
      'rightContent',
      'trailingContent',
      'Button',
      diagnostics,
      changes
    )
    renameObjectProperty(
      sourceFile,
      object,
      'prefixContent',
      'leadingContent',
      'Button',
      diagnostics,
      changes
    )
    renameObjectProperty(
      sourceFile,
      object,
      'suffixContent',
      'trailingContent',
      'Button',
      diagnostics,
      changes
    )
  })
  getTypedObjectLiterals(
    sourceFile,
    bindings,
    ['SegmentedControlProps'],
    ['SegmentedControl']
  ).forEach((object) =>
    mapObjectProperty(
      sourceFile,
      object,
      'size',
      SEGMENTED_CONTROL_SIZE_MAP,
      'SegmentedControl',
      diagnostics,
      changes
    )
  )
}

function transformTabs(
  sourceFile: SourceFile,
  bindings: ImportedBinding[],
  diagnostics: MigrationDiagnostic[],
  changes: MigrationChange[]
) {
  const tabsNames = localNamesFor(bindings, ['Tabs'])
  const tabListNames = localNamesFor(bindings, ['TabList'])
  const tabItemsBindings = bindings.filter(
    (binding) => binding.exportedName === 'TabItems'
  )
  const tabItemsNames = tabItemsBindings.map((binding) => binding.localName)

  sourceFile
    .getDescendantsOfKind(SyntaxKind.JsxElement)
    .filter((element) =>
      tabItemsNames.includes(
        element.getOpeningElement().getTagNameNode().getText()
      )
    )
    .forEach((element) => {
      changes.push(
        createChange(sourceFile, element, {
          code: 'tabs-updated',
          component: 'Tabs',
          message: 'Removed a legacy TabItems wrapper.',
        })
      )
      element.replaceWithText(
        element
          .getJsxChildren()
          .map((child) => child.getText())
          .join('')
      )
    })

  getJsxOpenings(sourceFile, tabListNames).forEach((tabList) => {
    const size = getAttribute(tabList, 'size')
    if (!size) {
      return
    }
    const literal = getStringAttributeInitializer(size)
    if (!literal || !['s', 'm'].includes(literal.getLiteralValue())) {
      diagnostics.push(
        createDiagnostic(sourceFile, size, {
          code: 'tabs-size-manual',
          component: 'Tabs',
          message: 'TabList size is dynamic or unsupported by beta Tabs.',
          suggestion:
            'Move an s or m size to the nearest Tabs; review legacy l manually.',
        })
      )
      return
    }
    const owner = tabList
      .getAncestors()
      .filter(Node.isJsxElement)
      .find((ancestor) =>
        tabsNames.includes(
          ancestor.getOpeningElement().getTagNameNode().getText()
        )
      )
    if (!owner) {
      diagnostics.push(
        createDiagnostic(sourceFile, size, {
          code: 'tabs-owner-not-found',
          component: 'Tabs',
          message:
            'The codemod could not find the Tabs that owns this TabList.',
          suggestion: 'Move size to the correct Tabs root.',
        })
      )
      return
    }
    const ownerOpening = owner.getOpeningElement()
    const ownerSize = getAttribute(ownerOpening, 'size')
    if (ownerSize) {
      if (ownerSize.getText() === size.getText()) {
        changes.push(
          createChange(sourceFile, size, {
            code: 'tabs-updated',
            component: 'Tabs',
            message: 'Removed a duplicate TabList size already owned by Tabs.',
          })
        )
        size.remove()
      } else {
        diagnostics.push(
          createDiagnostic(sourceFile, size, {
            code: 'tabs-size-conflict',
            component: 'Tabs',
            message: 'Tabs and TabList have conflicting size props.',
            suggestion: 'Keep one beta-supported size on Tabs.',
          })
        )
      }
      return
    }
    changes.push(
      createChange(sourceFile, size, {
        code: 'tabs-updated',
        component: 'Tabs',
        message: 'Moved TabList size to its Tabs owner.',
      })
    )
    ownerOpening.addAttribute({ name: 'size', initializer: literal.getText() })
    size.remove()
  })

  tabItemsBindings.forEach((binding) => {
    const remaining = sourceFile
      .getDescendantsOfKind(SyntaxKind.Identifier)
      .filter((identifier) => identifier.getText() === binding.localName)
    if (remaining.length === 1) {
      binding.specifier.remove()
    } else {
      diagnostics.push(
        createDiagnostic(sourceFile, binding.specifier, {
          code: 'tab-items-manual',
          component: 'Tabs',
          message:
            'TabItems still has a non-JSX reference and cannot move to beta.',
          suggestion:
            'Inline the intended TabItem children and remove the TabItems reference.',
        })
      )
    }
  })
}

function ensureBetaImport(sourceFile: SourceFile, exportedName: string) {
  const existing = getBindings(sourceFile).find(
    (binding) =>
      binding.declaration.getModuleSpecifierValue() === BETA_MODULE &&
      binding.exportedName === exportedName
  )
  if (existing) {
    return existing.localName
  }
  const occupiedNames = new Set(
    sourceFile
      .getImportDeclarations()
      .flatMap((declaration) => [
        ...declaration
          .getNamedImports()
          .map(
            (specifier) =>
              specifier.getAliasNode()?.getText() ?? specifier.getName()
          ),
        declaration.getDefaultImport()?.getText(),
        declaration.getNamespaceImport()?.getText(),
      ])
      .filter((name): name is string => Boolean(name))
  )
  const localName = occupiedNames.has(exportedName)
    ? `Bezier${exportedName}`
    : exportedName
  const declaration =
    sourceFile
      .getImportDeclarations()
      .find((item) => item.getModuleSpecifierValue() === BETA_MODULE) ??
    sourceFile.addImportDeclaration({ moduleSpecifier: BETA_MODULE })
  declaration.addNamedImport({
    name: exportedName,
    alias: localName === exportedName ? undefined : localName,
  })
  return localName
}

function transformForm(
  sourceFile: SourceFile,
  bindings: ImportedBinding[],
  diagnostics: MigrationDiagnostic[],
  changes: MigrationChange[]
) {
  const fieldNames = localNamesFor(bindings, ['FormControl'])
  if (fieldNames.length === 0) {
    return
  }
  const fields = getJsxOpenings(sourceFile, fieldNames)
  const nativeForms = new Set<JsxElement>()
  fields.forEach((field) => {
    const size = getAttribute(field, 'size')
    const literal = size ? getStringAttributeInitializer(size) : undefined
    if (size && (!literal || !['m', 'l'].includes(literal.getLiteralValue()))) {
      diagnostics.push(
        createDiagnostic(sourceFile, size, {
          code: 'form-field-size-manual',
          component: 'FormField',
          message: 'Legacy FormControl size is not proven to be m or l.',
          suggestion: 'Choose beta FormField size m or l.',
        })
      )
    }

    const nativeForm = field
      .getAncestors()
      .filter(Node.isJsxElement)
      .find(
        (ancestor) =>
          ancestor.getOpeningElement().getTagNameNode().getText() === 'form'
      )
    if (!nativeForm) {
      diagnostics.push(
        createDiagnostic(sourceFile, field, {
          code: 'form-owner-review',
          component: 'FormField',
          message:
            'FormControl has no native form ancestor to convert automatically.',
          suggestion:
            'Place FormField under beta Form or confirm that an app-owned form supplies submission scope.',
        })
      )
      return
    }
    nativeForms.add(nativeForm)
  })

  if (nativeForms.size > 0) {
    const formName = ensureBetaImport(sourceFile, 'Form')
    nativeForms.forEach((nativeForm) => {
      changes.push(
        createChange(sourceFile, nativeForm, {
          code: 'form-converted',
          component: 'Form',
          message: 'Converted a native form owner to beta Form.',
        })
      )
      nativeForm.getOpeningElement().getTagNameNode().replaceWithText(formName)
      nativeForm.getClosingElement()?.getTagNameNode().replaceWithText(formName)
    })
  }
}

function transformButtons(
  sourceFile: SourceFile,
  bindings: ImportedBinding[],
  diagnostics: MigrationDiagnostic[],
  changes: MigrationChange[]
) {
  const buttonNames = localNamesFor(bindings, [
    'Button',
    'AlphaButton',
    'AlphaFloatingButton',
  ])
  const iconButtonNames = localNamesFor(bindings, [
    'AlphaIconButton',
    'AlphaFloatingIconButton',
  ])
  const buttons = getJsxOpenings(sourceFile, buttonNames)
  const legacyButtons = getJsxOpenings(
    sourceFile,
    localNamesForModule(
      bindings,
      ['Button', 'AlphaButton', 'AlphaFloatingButton'],
      ROOT_MODULE
    )
  )
  buttons.forEach((button) => {
    renameAttribute(
      sourceFile,
      button,
      'text',
      'label',
      'Button',
      diagnostics,
      changes
    )
    renameAttribute(
      sourceFile,
      button,
      'leftContent',
      'leadingContent',
      'Button',
      diagnostics,
      changes
    )
    renameAttribute(
      sourceFile,
      button,
      'rightContent',
      'trailingContent',
      'Button',
      diagnostics,
      changes
    )
    renameAttribute(
      sourceFile,
      button,
      'prefixContent',
      'leadingContent',
      'Button',
      diagnostics,
      changes
    )
    renameAttribute(
      sourceFile,
      button,
      'suffixContent',
      'trailingContent',
      'Button',
      diagnostics,
      changes
    )
    if (getAttribute(button, 'href') && !getAttribute(button, 'as')) {
      changes.push(
        createChange(sourceFile, button, {
          code: 'anchor-normalized',
          component: 'Button',
          message: 'Added as="a" to a Button with href.',
        })
      )
      button.addAttribute({ name: 'as', initializer: '"a"' })
    }
  })
  ;[...buttons, ...getJsxOpenings(sourceFile, iconButtonNames)].forEach(
    (button) => {
      const as = getAttribute(button, 'as')
      const type = getAttribute(button, 'type')
      if (
        as &&
        type &&
        getStringAttributeInitializer(as)?.getLiteralValue() === 'a'
      ) {
        changes.push(
          createChange(sourceFile, type, {
            code: 'anchor-normalized',
            component: 'Button',
            message: 'Removed button-only type from an anchor Button.',
          })
        )
        type.remove()
        diagnostics.push(
          createDiagnostic(sourceFile, as, {
            code: 'anchor-button-type-removed',
            component: 'Button',
            message: 'Removed button-only type from an anchor action.',
            suggestion: 'Verify link navigation and disabled/loading behavior.',
          })
        )
      }
    }
  )
  ;['styleVariant', 'colorVariant', 'color', 'variant'].forEach((prop) =>
    reportAttribute(
      sourceFile,
      legacyButtons,
      prop,
      'Button',
      `Legacy Button.${prop} does not have a one-to-one beta visual mapping.`,
      'Choose beta variant (filled/outlined/ghost) and semantic (primary/secondary/destructive) from intent.',
      diagnostics
    )
  )
  reportMappedAttributeRemainder(
    sourceFile,
    getJsxOpenings(
      sourceFile,
      localNamesForModule(
        bindings,
        [
          'Button',
          'AlphaButton',
          'AlphaFloatingButton',
          'AlphaIconButton',
          'AlphaFloatingIconButton',
        ],
        ROOT_MODULE
      )
    ),
    'size',
    ['xl'],
    'Button',
    'Legacy Button size is dynamic or uses the removed xl value.',
    'Use xs, s, m, or l and visually verify the result.',
    diagnostics
  )
}

function reportKnownIncompatibilities(
  sourceFile: SourceFile,
  bindings: ImportedBinding[],
  diagnostics: MigrationDiagnostic[]
) {
  const report = (
    exportedNames: string[],
    prop: string,
    component: string,
    message: string,
    suggestion: string
  ) =>
    reportAttribute(
      sourceFile,
      getJsxOpenings(sourceFile, localNamesFor(bindings, exportedNames)),
      prop,
      component,
      message,
      suggestion,
      diagnostics
    )

  const reportValues = (
    exportedNames: string[],
    prop: string,
    values: string[],
    component: string,
    message: string,
    suggestion: string,
    rootOnly = false
  ) =>
    reportMappedAttributeRemainder(
      sourceFile,
      getJsxOpenings(
        sourceFile,
        rootOnly
          ? localNamesForModule(bindings, exportedNames, ROOT_MODULE)
          : localNamesFor(bindings, exportedNames)
      ),
      prop,
      values,
      component,
      message,
      suggestion,
      diagnostics
    )

  reportValues(
    ['Banner'],
    'variant',
    ['alt'],
    'Banner',
    'Banner variant is dynamic or uses removed alt.',
    'Choose default, blue, cobalt, green, orange, or red; review alt visually.'
  )
  report(
    ['Banner'],
    'iconColor',
    'Banner',
    'beta Banner owns leading icon color through its variant.',
    'Remove iconColor and verify the selected Banner variant.'
  )
  report(
    ['Tooltip', 'Help'],
    'icon',
    'Tooltip',
    'beta Tooltip and Help do not render an icon inside the tooltip.',
    'Move essential meaning to the trigger or textual title/description, then remove icon.'
  )
  report(
    ['Emoji'],
    'imageUrl',
    'Emoji',
    'beta Emoji removes imageUrl.',
    'Use a supported emoji name or an app-owned image.'
  )
  report(
    ['Checkbox'],
    'size',
    'Checkbox',
    'beta Checkbox removes the size prop.',
    'Remove size and verify the fixed beta control size.'
  )
  report(
    ['Switch'],
    'size',
    'Switch',
    'beta Switch removes the size prop.',
    'Remove size and verify the fixed beta control size.'
  )
  ;['size', 'variant', 'color'].forEach((prop) =>
    report(
      ['AlphaLoader'],
      prop,
      'Spinner',
      `AlphaLoader.${prop} has no exact beta Spinner mapping.`,
      'Choose a beta source size and semantic color after visual review; legacy s is near 30 and m is near 48.'
    )
  )
  reportValues(
    ['ProgressBar'],
    'variant',
    ['green', 'green-alt', 'monochrome'],
    'ProgressBar',
    'ProgressBar variants changed from green/green-alt/monochrome to default/overlaid.',
    'Choose default or overlaid from the visual context.',
    true
  )
  reportValues(
    ['Tag'],
    'variant',
    ['monochrome-light', 'monochrome-dark'],
    'Tag',
    'beta Tag removes monochrome-light and monochrome-dark.',
    'Choose an available semantic color variant.',
    true
  )
  report(
    ['Toast'],
    'appearance',
    'Toast',
    'beta Toast removes appearance and uses preset.',
    'Map the semantic intent to info, success, or error preset.'
  )
  report(
    ['Toast'],
    'zIndex',
    'Toast',
    'beta Toast moves zIndex ownership to ToastProvider.',
    'Move a non-default stacking decision to ToastProvider.'
  )
  reportValues(
    ['AlphaAvatar'],
    'size',
    ['16'],
    'Avatar',
    'beta Avatar removes size 16.',
    'Choose size 20 or an app-owned compact avatar treatment.',
    true
  )
}

function addManualImportDiagnostics(
  sourceFile: SourceFile,
  bindings: ImportedBinding[],
  diagnostics: MigrationDiagnostic[]
) {
  bindings
    .filter(
      (binding) => binding.declaration.getModuleSpecifierValue() === ROOT_MODULE
    )
    .forEach((binding) => {
      const baseName = Object.keys(MANUAL_EXPORTS)
        .sort((left, right) => right.length - left.length)
        .find((name) => binding.exportedName.startsWith(name))
      if (!baseName) {
        return
      }
      diagnostics.push(
        createDiagnostic(sourceFile, binding.specifier, {
          code: 'manual-component-migration',
          component: baseName,
          message: `${binding.exportedName} requires usage-intent review during beta migration.`,
          suggestion: MANUAL_EXPORTS[baseName],
        })
      )
    })
}

function preserveProgressBarWidth(
  sourceFile: SourceFile,
  bindings: ImportedBinding[],
  changes: MigrationChange[]
) {
  getJsxOpenings(
    sourceFile,
    localNamesForModule(bindings, ['ProgressBar'], ROOT_MODULE)
  ).forEach((progressBar) => {
    if (!getAttribute(progressBar, 'width')) {
      changes.push(
        createChange(sourceFile, progressBar, {
          code: 'default-preserved',
          component: 'ProgressBar',
          message: 'Added width={36} to preserve the legacy default width.',
        })
      )
      progressBar.addAttribute({ name: 'width', initializer: '{36}' })
    }
  })
}

function moveImportsToBeta(
  sourceFile: SourceFile,
  diagnostics: MigrationDiagnostic[],
  changes: MigrationChange[]
) {
  const rootBindings = getBindings(sourceFile).filter(
    (binding) => binding.declaration.getModuleSpecifierValue() === ROOT_MODULE
  )

  rootBindings.forEach((binding) => {
    const target = EXPORT_MAP[binding.exportedName]
    if (!target) {
      return
    }
    const oldLocalName = binding.localName
    const existingTarget = getBindings(sourceFile).find(
      (candidate) =>
        candidate.declaration.getModuleSpecifierValue() === BETA_MODULE &&
        candidate.exportedName === target &&
        (isTypeOnlyBinding(binding) || !isTypeOnlyBinding(candidate))
    )
    let localName = binding.specifier.getAliasNode()?.getText() ?? target

    if (existingTarget) {
      localName = existingTarget.localName
    } else {
      const occupiedByOtherImport = sourceFile
        .getImportDeclarations()
        .flatMap((declaration) => declaration.getNamedImports())
        .some(
          (specifier) =>
            specifier !== binding.specifier &&
            (specifier.getAliasNode()?.getText() ?? specifier.getName()) ===
              localName
        )
      if (occupiedByOtherImport) {
        localName = oldLocalName
        diagnostics.push(
          createDiagnostic(sourceFile, binding.specifier, {
            code: 'import-name-collision',
            component: target,
            message: `Could not rename ${oldLocalName} to ${target} because that local name is occupied.`,
            suggestion: `The beta ${target} import keeps the local alias ${oldLocalName}; normalize it manually if desired.`,
          })
        )
      }
    }

    const bindingNode =
      binding.specifier.getAliasNode() ?? binding.specifier.getNameNode()
    if (oldLocalName !== localName && Node.isIdentifier(bindingNode)) {
      bindingNode.rename(localName)
    }

    if (!existingTarget) {
      const namedImport = {
        name: target,
        alias: localName === target ? undefined : localName,
        isTypeOnly:
          !binding.declaration.isTypeOnly() && binding.specifier.isTypeOnly(),
      }
      const betaDeclaration = sourceFile
        .getImportDeclarations()
        .find(
          (declaration) =>
            declaration.getModuleSpecifierValue() === BETA_MODULE &&
            declaration.isTypeOnly() === binding.declaration.isTypeOnly()
        )
      if (betaDeclaration) {
        betaDeclaration.addNamedImport(namedImport)
      } else {
        sourceFile.addImportDeclaration({
          isTypeOnly: binding.declaration.isTypeOnly(),
          moduleSpecifier: BETA_MODULE,
          namedImports: [namedImport],
        })
      }
    }
    changes.push(
      createChange(sourceFile, binding.specifier, {
        code: 'import-moved',
        component: target,
        message: `Moved ${binding.exportedName} from the root entrypoint to beta ${target}.`,
      })
    )
    binding.specifier.remove()
  })

  sourceFile
    .getImportDeclarations()
    .filter(
      (declaration) =>
        declaration.getModuleSpecifierValue() === ROOT_MODULE &&
        declaration.getNamedImports().length === 0 &&
        !declaration.getDefaultImport() &&
        !declaration.getNamespaceImport()
    )
    .forEach((declaration) => declaration.remove())
}

const transform = (sourceFile: SourceFile): BetaComponentMigrationResult => {
  const changes: MigrationChange[] = []
  const diagnostics: MigrationDiagnostic[] = []
  const beforeEnumTransform = sourceFile.getFullText()
  enumMemberToStringLiteral(sourceFile)
  if (sourceFile.getFullText() !== beforeEnumTransform) {
    changes.push(
      createChange(sourceFile, sourceFile, {
        code: 'legacy-enum-converted',
        message: 'Converted legacy Bezier enum members to string literals.',
      })
    )
  }
  const bindings = getBindings(sourceFile)

  transformMappedAttribute(
    sourceFile,
    getJsxOpenings(sourceFile, localNamesFor(bindings, ['Badge'])),
    'variant',
    BADGE_VARIANT_MAP,
    'Badge',
    diagnostics,
    changes
  )
  transformMappedAttribute(
    sourceFile,
    getJsxOpenings(sourceFile, localNamesFor(bindings, ['Icon'])),
    'size',
    ICON_SIZE_MAP,
    'Icon',
    diagnostics,
    changes
  )
  transformMappedAttribute(
    sourceFile,
    getJsxOpenings(sourceFile, localNamesFor(bindings, ['Spinner'])),
    'size',
    SPINNER_SIZE_MAP,
    'Spinner',
    diagnostics,
    changes
  )
  transformMappedAttribute(
    sourceFile,
    getJsxOpenings(
      sourceFile,
      localNamesFor(bindings, ['Avatar', 'AlphaAvatar'])
    ),
    'status',
    STATUS_MAP,
    'Avatar',
    diagnostics,
    changes
  )
  transformMappedAttribute(
    sourceFile,
    getJsxOpenings(sourceFile, localNamesFor(bindings, ['Status'])),
    'type',
    STATUS_MAP,
    'Status',
    diagnostics,
    changes
  )
  transformMappedAttribute(
    sourceFile,
    getJsxOpenings(sourceFile, localNamesFor(bindings, ['SegmentedControl'])),
    'size',
    SEGMENTED_CONTROL_SIZE_MAP,
    'SegmentedControl',
    diagnostics,
    changes
  )

  getJsxOpenings(sourceFile, localNamesFor(bindings, ['Banner'])).forEach(
    (banner) =>
      renameAttribute(
        sourceFile,
        banner,
        'icon',
        'leadingIcon',
        'Banner',
        diagnostics,
        changes
      )
  )
  getJsxOpenings(
    sourceFile,
    localNamesFor(bindings, ['SegmentedControlItem'])
  ).forEach((item) => {
    renameAttribute(
      sourceFile,
      item,
      'leftContent',
      'leadingContent',
      'SegmentedControlItem',
      diagnostics,
      changes
    )
    renameAttribute(
      sourceFile,
      item,
      'rightContent',
      'trailingContent',
      'SegmentedControlItem',
      diagnostics,
      changes
    )
  })

  transformButtons(sourceFile, bindings, diagnostics, changes)
  transformTabs(sourceFile, bindings, diagnostics, changes)
  transformForm(sourceFile, bindings, diagnostics, changes)
  transformTypedObjects(sourceFile, bindings, diagnostics, changes)
  preserveProgressBarWidth(sourceFile, bindings, changes)
  reportKnownIncompatibilities(sourceFile, bindings, diagnostics)
  addManualImportDiagnostics(sourceFile, bindings, diagnostics)
  moveImportsToBeta(sourceFile, diagnostics, changes)

  return { changes, diagnostics }
}

export default transform
