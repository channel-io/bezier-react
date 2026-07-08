import { useCallback, useEffect, useState } from 'react'

import {
  Select,
  type SelectProps,
  Spinner,
  StatusMessage,
  TextInput,
} from '@inkjs/ui'
import { Box, Text, useApp } from 'ink'

import {
  Option,
  type TransformName,
  runTransform,
  transformOptions,
} from './transformers.js'

enum Step {
  SelectTransformer,
  InputFiles,
  Transforming,
  Done,
}

function formatExecutionTime(executionTime: number) {
  const seconds = Math.round((executionTime / 1000) * 1000) / 1000
  return `${seconds.toFixed(3)}s`
}

function App() {
  const { exit } = useApp()

  const [step, setStep] = useState(Step.SelectTransformer)
  const [transformName, setTransformName] = useState<TransformName | null>(null)
  const [filePath, setFilePath] = useState('')
  const [executionTime, setExecutionTime] = useState(0)
  const [transformedFileNum, setTransformedFileNum] = useState(0)

  const onSelectTransform = useCallback(
    (value: Option) => {
      if (value === Option.Exit) {
        exit()
        return
      }
      setTransformName(value)
      setStep(Step.InputFiles)
    },
    [exit]
  )

  const onSubmitFilePath = useCallback(
    (value: string) => {
      if (!transformName) {
        return
      }
      setFilePath(value)
      setStep(Step.Transforming)
    },
    [transformName]
  )

  useEffect(
    function main() {
      if (step !== Step.Transforming) {
        return
      }

      /**
       * FIXME: This timeout is a hack to make sure the UI is updated before the transform starts.
       * Otherwise, the UI will be stuck on the previous step.
       */
      setTimeout(() => {
        const startTime = performance.now()

        async function transformSourceFiles() {
          if (!transformName) {
            return
          }

          const { errors } = await runTransform({
            transformName,
            filePath,
            onFileTransformed: () => {
              setTransformedFileNum((prev) => prev + 1)
            },
          })

          errors.forEach(({ error, filePath: errorFilePath }) => {
            /* eslint-disable no-console */
            console.log(error)
            console.log(errorFilePath)
            /* eslint-enable no-console */
          })

          const endTime = performance.now()
          const totalExecutionTime = endTime - startTime
          setExecutionTime(totalExecutionTime)
          setStep(Step.Done)
        }

        transformSourceFiles()
      }, 100)
    },
    [step, transformName, filePath]
  )

  return (
    <Box flexDirection="column">
      {step === Step.SelectTransformer && (
        <>
          <Text bold>💬 Please select the transformer:</Text>
          <Select
            options={transformOptions}
            onChange={onSelectTransform as SelectProps['onChange']}
          />
        </>
      )}

      {step === Step.InputFiles && (
        <>
          <Text bold>
            💬 Please input the file path. You can use a glob pattern:
          </Text>
          <TextInput
            placeholder="**/*{.ts,.tsx}"
            onSubmit={onSubmitFilePath}
          />
        </>
      )}

      {step === Step.Transforming && (
        <Box marginTop={1}>
          <Spinner label="Transforming" />
        </Box>
      )}

      {step === Step.Done && (
        <Box
          marginTop={1}
          paddingLeft={1}
          borderStyle="round"
          borderColor="green"
          flexDirection="column"
        >
          <StatusMessage variant="success">
            <Text bold>Transformation complete</Text>
          </StatusMessage>
          <Box
            paddingLeft={2}
            flexDirection="column"
          >
            <Text>Number of transformed files: {transformedFileNum}</Text>
            <Text>Execution time: {formatExecutionTime(executionTime)}</Text>
          </Box>
        </Box>
      )}
    </Box>
  )
}

export default App
