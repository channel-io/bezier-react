import React, {
  useCallback,
  useEffect,
  useState,
} from 'react'

import {
  Select,
  type SelectProps,
  Spinner,
  StatusMessage,
  TextInput,
} from '@inkjs/ui'
import {
  Box,
  Text,
  useApp,
} from 'ink'

import project from './project.js'
import enumMemberToStringLiteral from './transforms/enum-member-to-string-literal/transform.js'
import iconNameToBezierIcon from './transforms/icon-name-to-bezier-icons/transform.js'
import iconsToBezierIcons from './transforms/icons-to-bezier-icons/transform.js'
import foundationToCssVariableBorder from './transforms/v2-foundation-to-css-variable/border.js'
import foundationToCssVariableElevation from './transforms/v2-foundation-to-css-variable/elevation.js'
import foundationToCssVariableRounding from './transforms/v2-foundation-to-css-variable/rounding.js'
import foundationToCssVariableSpacing from './transforms/v2-foundation-to-css-variable/spacing.js'
import foundationToCssVariableTheme from './transforms/v2-foundation-to-css-variable/theme.js'
import foundationToCssVariable from './transforms/v2-foundation-to-css-variable/transform.js'
import foundationToCssVariableTransition from './transforms/v2-foundation-to-css-variable/transition.js'
import importFromBezierToStyledComponents from './transforms/v2-import-from-bezier-to-styled-components/transform.js'
import inputInterpolationToCssVariable from './transforms/v2-input-interpolation-to-css-variable/transform.js'
import removeAlphaFromAlphaComponents from './transforms/v2-remove-alpha-from-alpha-components/transform.js'
import textComponentInterface from './transforms/v2-text-component-interface/transform.js'
import typographyInterpolationToCssVariable from './transforms/v2-typography-interpolation-to-css-variable/transform.js'
import zIndexInterpolationToCssVariable from './transforms/v2-z-index-interpolation-to-css-variable/transform.js'

enum Step {
  SelectTransformer,
  InputFiles,
  Transforming,
  Done,
}

enum Option {
  IconsToBezierIcons = 'icons-to-bezier-icons',
  IconNameToBezierIcon = 'icon-name-to-bezier-icon',
  EnumMemberToStringLiteral = 'enum-member-to-string-literal',
  V2FoundationToCssVariableTheme = 'v2-foundation-to-css-variable-theme',
  V2FoundationToCssVariableBorder = 'v2-foundation-to-css-variable-border',
  V2FoundationToCssVariableElevation = 'v2-foundation-to-css-variable-elevation',
  V2FoundationToCssVariableRounding = 'v2-foundation-to-css-variable-rounding',
  V2FoundationToCssVariableTransition = 'v2-foundation-to-css-variable-transition',
  V2FoundationToCssVariableSpacing = 'v2-foundation-to-css-variable-spacing',
  V2FoundationToCssVariable = 'v2-foundation-to-css-variable',
  V2InputInterpolationToCssVariable = 'v2-input-interpolation-to-css-variable',
  V2TypographyInterpolationToCssVariable = 'v2-typography-interpolation-to-css-variable',
  V2RemoveAlphaFromAlphaComponents = 'v2-remove-alpha-from-alpha-components',
  V2ZIndexInterpolationToCssVariable = 'v2-z-index-interpolation-to-css-variable',
  V2TextComponentInterface = 'v2-text-component-interface',
  V2ImportFromBezierToStyledComponents = 'v2-import-from-bezier-to-styled-components',
  Exit = 'Exit',
}

type TransformName = Exclude<Option, Option.Exit>

const transformMap = {
  [Option.IconsToBezierIcons]: iconsToBezierIcons,
  [Option.IconNameToBezierIcon]: iconNameToBezierIcon,
  [Option.EnumMemberToStringLiteral]: enumMemberToStringLiteral,
  [Option.V2FoundationToCssVariableTheme]: foundationToCssVariableTheme,
  [Option.V2FoundationToCssVariableBorder]: foundationToCssVariableBorder,
  [Option.V2FoundationToCssVariableElevation]: foundationToCssVariableElevation,
  [Option.V2FoundationToCssVariableRounding]: foundationToCssVariableRounding,
  [Option.V2FoundationToCssVariableTransition]: foundationToCssVariableTransition,
  [Option.V2FoundationToCssVariableSpacing]: foundationToCssVariableSpacing,
  [Option.V2FoundationToCssVariable]: foundationToCssVariable,
  [Option.V2InputInterpolationToCssVariable]: inputInterpolationToCssVariable,
  [Option.V2TypographyInterpolationToCssVariable]: typographyInterpolationToCssVariable,
  [Option.V2ImportFromBezierToStyledComponents]: importFromBezierToStyledComponents,
  [Option.V2RemoveAlphaFromAlphaComponents]: removeAlphaFromAlphaComponents,
  [Option.V2ZIndexInterpolationToCssVariable]: zIndexInterpolationToCssVariable,
  [Option.V2TextComponentInterface]: textComponentInterface,
}

const options = (Object.keys(transformMap) as Option[]).map((transformName) => ({
  label: transformName,
  value: transformName,
})).concat({
  label: Option.Exit,
  value: Option.Exit,
})

function formatExecutionTime(executionTime: number) {
  const seconds = Math.round(executionTime / 1000 * 1000) / 1000
  return `${seconds.toFixed(3)}s`
}

function App() {
  const { exit } = useApp()

  const [step, setStep] = useState(Step.SelectTransformer)
  const [transformName, setTransformName] = useState<TransformName | null>(null)
  const [filePath, setFilePath] = useState('')
  const [executionTime, setExecutionTime] = useState(0)
  const [transformedFileNum, setTransformedFileNum] = useState(0)

  const onSelectTransform = useCallback((value: Option) => {
    if (value === Option.Exit) {
      exit()
      return
    }
    setTransformName(value)
    setStep(Step.InputFiles)
  }, [exit])

  const onSubmitFilePath = useCallback((value: string) => {
    if (!transformName) { return }
    setFilePath(value)
    setStep(Step.Transforming)
  }, [transformName])

  useEffect(function main() {
    if (step !== Step.Transforming) { return }

    /**
     * FIXME: This timeout is a hack to make sure the UI is updated before the transform starts.
     * Otherwise, the UI will be stuck on the previous step.
     */
    setTimeout(() => {
      const startTime = performance.now()

      async function transformSourceFiles() {
        const sourceFiles = project.addSourceFilesAtPaths(filePath)

        await Promise.all(
          sourceFiles.map(async (sourceFile) => {
            if (!transformName) { return }
            const transform = transformMap[transformName]
            try {
              const isTransformed = transform(sourceFile)
              if (isTransformed) {
                setTransformedFileNum(prev => prev + 1)
              }
            } catch (e) {
              /* eslint-disable no-console */
              console.log(e)
              console.log(sourceFile.getFilePath())
              /* eslint-enable no-console */
            }
            await sourceFile.save()
          }),
        )

        const endTime = performance.now()
        const totalExecutionTime = endTime - startTime
        setExecutionTime(totalExecutionTime)
        setStep(Step.Done)
      }

      transformSourceFiles()
    }, 100)
  }, [
    step,
    transformName,
    filePath,
  ])

  return (
    <Box flexDirection="column">
      { step === Step.SelectTransformer && (
        <>
          <Text bold>
            💬 Please select the transformer:
          </Text>
          <Select
            options={options}
            onChange={onSelectTransform as SelectProps['onChange']}
          />
        </>
      ) }

      { step === Step.InputFiles && (
        <>
          <Text bold>
            💬 Please input the file path. You can use a glob pattern:
          </Text>
          <TextInput
            placeholder="**/*{.ts,.tsx}"
            onSubmit={onSubmitFilePath}
          />
        </>
      ) }

      { step === Step.Transforming && (
        <Box marginTop={1}>
          <Spinner label="Transforming" />
        </Box>
      ) }

      { step === Step.Done && (
        <Box
          marginTop={1}
          paddingLeft={1}
          borderStyle="round"
          borderColor="green"
          flexDirection="column"
        >
          <StatusMessage variant="success">
            <Text bold>
              Transformation complete
            </Text>
          </StatusMessage>
          <Box
            paddingLeft={2}
            flexDirection="column"
          >
            <Text>
              Number of transformed files: { transformedFileNum }
            </Text>
            <Text>
              Execution time: { formatExecutionTime(executionTime) }
            </Text>
          </Box>
        </Box>
      ) }
    </Box>
  )
}

export default App
