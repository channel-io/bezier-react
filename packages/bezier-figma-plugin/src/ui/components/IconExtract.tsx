import React, { useCallback, useEffect, useState } from 'react'

import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  HStack,
  ProgressBar,
  Text,
  TextField,
  VStack,
} from '@channel.io/bezier-react'
import { useNavigate } from 'react-router-dom'

import config from '../../config'
import type { PluginMessage } from '../../types/Message'
import { useCreatePRWithSvgMap } from '../hooks/useCreatePRWithSvgMap'

enum Step {
  Pending,
  Processing,
  Resolved,
}

interface ProgressProps {
  figmaToken: string
  githubToken: string
  onError: (msg: string) => void
}

export function useProgress() {
  const [progressTitle, setProgressTitle] = useState('')
  const [progressValue, setProgressValue] = useState(0)

  const progress = useCallback(
    async <Fn extends () => Promise<any>>({
      callback,
      title,
      successValueOffset,
    }: {
      callback: Fn
      title?: string
      successValueOffset?: number
    }) => {
      if (title) {
        setProgressTitle(title)
      }
      const result = await callback()
      if (successValueOffset) {
        setProgressValue((prev) => Math.min(prev + successValueOffset, 1))
      }
      return result as ReturnType<Fn>
    },
    []
  )

  return {
    progress,
    progressTitle,
    progressValue,
  }
}

function Progress({ figmaToken, githubToken, onError }: ProgressProps) {
  const navigate = useNavigate()

  const { progress, progressTitle, progressValue } = useProgress()

  const createPr = useCreatePRWithSvgMap({ progress, githubToken })

  useEffect(function bindOnMessageHandler() {
    window.onmessage = async (event: MessageEvent<PluginMessage>) => {
      const { type, payload } = event.data.pluginMessage

      if (type === 'extractIcon') {
        try {
          const { svgByName } = payload

          const prUrl = await createPr(svgByName)

          parent.postMessage(
            {
              pluginMessage: {
                type: 'setToken',
                payload: { figmaToken, githubToken },
              },
            },
            '*'
          )

          navigate('../extract_success', { state: { url: prUrl } })
        } catch (e: any) {
          onError(e?.message)
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <VStack spacing={6}>
      <ProgressBar
        width="100%"
        value={progressValue}
      />
      <Text>{progressTitle}</Text>
    </VStack>
  )
}

function IconExtract() {
  const navigate = useNavigate()

  const [figmaToken, setFigmaToken] = useState('')
  const [githubToken, setGithubToken] = useState('')

  const [errorMessage, setErrorMessage] = useState('')

  const [step, setStep] = useState(Step.Pending)

  useEffect(function getTokenFromLocalStorage() {
    parent.postMessage({ pluginMessage: { type: 'getToken' } }, '*')
  }, [])

  useEffect(function bindOnMessageHandler() {
    window.onmessage = async (event: MessageEvent<PluginMessage>) => {
      const { type, payload } = event.data.pluginMessage

      if (type === 'getToken') {
        setFigmaToken(payload?.figmaToken ?? '')
        setGithubToken(payload?.githubToken ?? '')
      }
    }
  }, [])

  const handleChangeFigmaToken = useCallback<
    React.ChangeEventHandler<HTMLInputElement>
  >((event) => {
    setFigmaToken(event.currentTarget.value)
  }, [])

  const handleChangeGithubToken = useCallback<
    React.ChangeEventHandler<HTMLInputElement>
  >((event) => {
    setGithubToken(event.currentTarget.value)
  }, [])

  const handleSubmit = useCallback<React.FormEventHandler<HTMLFormElement>>(
    (event) => {
      setErrorMessage('')
      event.preventDefault()
      setStep(Step.Processing)
      parent.postMessage({ pluginMessage: { type: 'extract' } }, '*')
    },
    []
  )

  const handleClickCancel = useCallback(() => {
    navigate('/')
  }, [navigate])

  const handleExtractError = useCallback((msg: string) => {
    setStep(Step.Pending)
    setErrorMessage(msg)
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <VStack justify="between">
        <VStack spacing={12}>
          <FormControl
            required
            readOnly={step !== Step.Pending}
          >
            <FormLabel help="좌측 상단 Figma 로고 > Help and account > Account settings 에서 발급 받을 수 있습니다.">
              Figma personal access token
            </FormLabel>
            <TextField
              type="password"
              name="figmaToken"
              placeholder="figd_..."
              value={figmaToken}
              onChange={handleChangeFigmaToken}
            />
          </FormControl>
          <FormControl
            required
            readOnly={step !== Step.Pending}
          >
            <FormLabel help="Github Repository 쓰기 권한이 있는 토큰을 사용해주세요.">
              Github personal access token
            </FormLabel>
            <TextField
              type="password"
              name="githubToken"
              placeholder="ghp_..."
              value={githubToken}
              onChange={handleChangeGithubToken}
            />
          </FormControl>
          <FormControl readOnly>
            <FormLabel>추출할 경로 (루트 기준)</FormLabel>
            <TextField value={config.repository.iconExtractPath} />
          </FormControl>
          {errorMessage ? (
            <FormErrorMessage>{errorMessage}</FormErrorMessage>
          ) : (
            <FormHelperText>
              토큰은 추출 성공 시 로컬 스토리지에 저장됩니다.
            </FormHelperText>
          )}
        </VStack>

        {step === Step.Pending && (
          <HStack
            justify="end"
            spacing={6}
          >
            <Button
              type="submit"
              styleVariant="primary"
              colorVariant="blue"
              text="아이콘 추출"
            />
            <Button
              styleVariant="secondary"
              colorVariant="monochrome-dark"
              text="선택 단계로"
              onClick={handleClickCancel}
            />
          </HStack>
        )}

        {step === Step.Processing && (
          <Progress
            figmaToken={figmaToken}
            githubToken={githubToken}
            onError={handleExtractError}
          />
        )}
      </VStack>
    </form>
  )
}

export default IconExtract
