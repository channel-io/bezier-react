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
import enumMemberToStringLiteral from './transforms/enum-member-to-string-literal.js'
import foundationToCssVariableBorder from './transforms/foundation-to-css-variable-border.js'
import foundationToCssVariableElevation from './transforms/foundation-to-css-variable-elevation.js'
import foundationToCssVariableRounding from './transforms/foundation-to-css-variable-rounding.js'
import foundationToCssVariableTheme from './transforms/foundation-to-css-variable-theme.js'
import foundationToCssVariableTransition from './transforms/foundation-to-css-variable-transition.js'
import foundationToCssVariable from './transforms/foundation-to-css-variable.js'
import iconNameToBezierIcon from './transforms/icon-name-to-bezier-icon.js'
import iconsToBezierIcons from './transforms/icons-to-bezier-icons.js'
import mixinToCssVariable from './transforms/mixin-to-css-variable.js'

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
  FoundationToCssVariableTheme = 'foundation-to-css-variable-theme',
  FoundationToCssVariableBorder = 'foundation-to-css-variable-border',
  FoundationToCssVariableElevation = 'foundation-to-css-variable-elevation',
  FoundationToCssVariableRounding = 'foundation-to-css-variable-rounding',
  FoundationToCssVariableTransition = 'foundation-to-css-variable-transition',
  FoundationToCssVariable = 'foundation-to-css-variable',
  MixinToCssVariable = 'mixin-to-css-variable',
  Exit = 'Exit',
}

type TransformName = Exclude<Option, Option.Exit>

const transformMap = {
  [Option.IconsToBezierIcons]: iconsToBezierIcons,
  [Option.IconNameToBezierIcon]: iconNameToBezierIcon,
  [Option.EnumMemberToStringLiteral]: enumMemberToStringLiteral,
  [Option.FoundationToCssVariableTheme]: foundationToCssVariableTheme,
  [Option.FoundationToCssVariableBorder]: foundationToCssVariableBorder,
  [Option.FoundationToCssVariableElevation]: foundationToCssVariableElevation,
  [Option.FoundationToCssVariableRounding]: foundationToCssVariableRounding,
  [Option.FoundationToCssVariableTransition]: foundationToCssVariableTransition,
  [Option.FoundationToCssVariable]: foundationToCssVariable,
  [Option.MixinToCssVariable]: mixinToCssVariable,
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
            const isTransformed = transform(sourceFile)
            if (isTransformed) {
              setTransformedFileNum(prev => prev + 1)
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
