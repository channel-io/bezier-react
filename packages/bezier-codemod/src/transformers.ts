import { existsSync, statSync } from 'node:fs'
import path from 'node:path'

import { type SourceFile } from 'ts-morph'

import project from './project.js'
import iconNameToBezierIcon from './transforms/icon-name-to-bezier-icons/transform.js'
import iconsToBezierIcons from './transforms/icons-to-bezier-icons/transform.js'
import enumMemberToStringLiteral from './transforms/v2-enum-member-to-string-literal/transform.js'
import foundationToCssVariableBorder from './transforms/v2-foundation-to-css-variable/border.js'
import foundationToCssVariableElevation from './transforms/v2-foundation-to-css-variable/elevation.js'
import foundationToCssVariableRounding from './transforms/v2-foundation-to-css-variable/rounding.js'
import foundationToCssVariableSpacing from './transforms/v2-foundation-to-css-variable/spacing.js'
import foundationToCssVariableTheme from './transforms/v2-foundation-to-css-variable/theme.js'
import foundationToCssVariable from './transforms/v2-foundation-to-css-variable/transform.js'
import foundationToCssVariableTransition from './transforms/v2-foundation-to-css-variable/transition.js'
import importFromBezierToStyledComponents from './transforms/v2-import-from-bezier-to-styled-components/transform.js'
import interpolationToCssVariableInput from './transforms/v2-interpolation-to-css-variable/input.js'
import interpolationToCssVariableRounding from './transforms/v2-interpolation-to-css-variable/rounding.js'
import interpolationToCssVariable from './transforms/v2-interpolation-to-css-variable/transform.js'
import interpolationToCssVariableTypography from './transforms/v2-interpolation-to-css-variable/typography.js'
import interpolationToCssVariableZIndex from './transforms/v2-interpolation-to-css-variable/zIndex.js'
import removeAlphaFromAlphaComponents from './transforms/v2-remove-alpha-from-alpha-components/transform.js'
import textComponentInterface from './transforms/v2-text-component-interface/transform.js'
import betaTokenToStableToken from './transforms/v3-beta-token-to-stable-token/transform.js'

export enum Option {
  IconsToBezierIcons = 'icons-to-bezier-icons',
  IconNameToBezierIcon = 'icon-name-to-bezier-icon',

  V2EnumMemberToStringLiteral = 'v2-enum-member-to-string-literal',

  V2FoundationToCssVariable = 'v2-foundation-to-css-variable',
  V2FoundationToCssVariableTheme = 'v2-foundation-to-css-variable-theme',
  V2FoundationToCssVariableBorder = 'v2-foundation-to-css-variable-border',
  V2FoundationToCssVariableElevation = 'v2-foundation-to-css-variable-elevation',
  V2FoundationToCssVariableRounding = 'v2-foundation-to-css-variable-rounding',
  V2FoundationToCssVariableTransition = 'v2-foundation-to-css-variable-transition',
  V2FoundationToCssVariableSpacing = 'v2-foundation-to-css-variable-spacing',

  V2InterpolationToCssVariable = 'v2-interpolation-to-css-variable',
  V2InterpolationToCssVariableInput = 'v2-interpolation-to-css-variable-input',
  V2InterpolationToCssVariableTypography = 'v2-interpolation-to-css-variable-typography',
  V2InterpolationToCssVariableZIndex = 'v2-interpolation-to-css-variable-z-index',
  V2InterpolationToCssVariableRounding = 'v2-interpolation-to-css-variable-rounding',

  V2RemoveAlphaFromAlphaComponents = 'v2-remove-alpha-from-alpha-components',
  V2TextComponentInterface = 'v2-text-component-interface',
  V2ImportFromBezierToStyledComponents = 'v2-import-from-bezier-to-styled-components',

  V3BetaTokenToStableToken = 'v3-beta-token-to-stable-token',
  Exit = 'Exit',
}

export type TransformName = Exclude<Option, Option.Exit>

type Transform = (sourceFile: SourceFile) => void

export const transformMap: Record<TransformName, Transform> = {
  [Option.IconsToBezierIcons]: iconsToBezierIcons,
  [Option.IconNameToBezierIcon]: iconNameToBezierIcon,

  [Option.V2EnumMemberToStringLiteral]: enumMemberToStringLiteral,

  [Option.V2FoundationToCssVariableTheme]: foundationToCssVariableTheme,
  [Option.V2FoundationToCssVariableBorder]: foundationToCssVariableBorder,
  [Option.V2FoundationToCssVariableElevation]: foundationToCssVariableElevation,
  [Option.V2FoundationToCssVariableRounding]: foundationToCssVariableRounding,
  [Option.V2FoundationToCssVariableTransition]:
    foundationToCssVariableTransition,
  [Option.V2FoundationToCssVariableSpacing]: foundationToCssVariableSpacing,
  [Option.V2FoundationToCssVariable]: foundationToCssVariable,

  [Option.V2InterpolationToCssVariable]: interpolationToCssVariable,
  [Option.V2InterpolationToCssVariableInput]: interpolationToCssVariableInput,
  [Option.V2InterpolationToCssVariableTypography]:
    interpolationToCssVariableTypography,
  [Option.V2InterpolationToCssVariableRounding]:
    interpolationToCssVariableRounding,
  [Option.V2InterpolationToCssVariableZIndex]: interpolationToCssVariableZIndex,

  [Option.V2ImportFromBezierToStyledComponents]:
    importFromBezierToStyledComponents,
  [Option.V2RemoveAlphaFromAlphaComponents]: removeAlphaFromAlphaComponents,
  [Option.V2TextComponentInterface]: textComponentInterface,

  [Option.V3BetaTokenToStableToken]: betaTokenToStableToken,
}

export const transformOptions: Array<{ label: Option; value: Option }> = [
  ...(Object.keys(transformMap) as TransformName[]).map((transformName) => ({
    label: transformName,
    value: transformName,
  })),
  {
    label: Option.Exit,
    value: Option.Exit,
  },
]

export function isTransformName(value: string): value is TransformName {
  return Object.prototype.hasOwnProperty.call(transformMap, value)
}

interface RunTransformOptions {
  transformName: TransformName
  filePath: string
  onFileTransformed?: () => void
}

interface TransformError {
  filePath: string
  error: unknown
}

interface RunTransformResult {
  totalFileNum: number
  transformedFileNum: number
  errors: TransformError[]
}

function getSourceFilesAtPath(filePath: string) {
  if (existsSync(filePath) && statSync(filePath).isFile()) {
    return [project.addSourceFileAtPath(filePath)]
  }

  if (path.isAbsolute(filePath)) {
    throw new Error(
      'Absolute glob patterns are not supported. Run the codemod from your project root and pass a relative glob pattern.'
    )
  }

  return project.addSourceFilesAtPaths(filePath)
}

export async function runTransform({
  transformName,
  filePath,
  onFileTransformed,
}: RunTransformOptions): Promise<RunTransformResult> {
  const sourceFiles = getSourceFilesAtPath(filePath)
  const errors: TransformError[] = []
  let transformedFileNum = 0

  await Promise.all(
    sourceFiles.map(async (sourceFile) => {
      const oldSourceFileText = sourceFile.getText()

      try {
        transformMap[transformName](sourceFile)

        if (sourceFile.getText() !== oldSourceFileText) {
          transformedFileNum += 1
          onFileTransformed?.()
        }
      } catch (error) {
        errors.push({
          filePath: sourceFile.getFilePath(),
          error,
        })
      }

      await sourceFile.save()
    })
  )

  return {
    totalFileNum: sourceFiles.length,
    transformedFileNum,
    errors,
  }
}
