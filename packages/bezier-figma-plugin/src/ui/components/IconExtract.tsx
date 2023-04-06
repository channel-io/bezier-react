/* External dependencies */
import React, {
  useCallback,
  useEffect,
  useState,
} from 'react'

import { useNavigate } from 'react-router-dom'

import {
  Button,
  ButtonColorVariant,
  ButtonStyleVariant,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  HStack,
  ProgressBar,
  Spacer,
  StackItem,
  Text,
  TextField,
  TextFieldType,
  VStack,
} from '@channel.io/bezier-react'

/* Internal dependencies */
import config from '../../config'
import type { PluginMessage } from '../../types/Message'
import useFigmaAPI from '../hooks/useFigmaAPI'
import useGithubAPI from '../hooks/useGithubAPI'
import { createSvgGitBlob } from '../utils'

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

function Progress({
  figmaToken,
  githubToken,
  onError,
}: ProgressProps) {
  const navigate = useNavigate()

  const [progressValue, setProgressValue] = useState(0)
  const [progressText, setProgressText] = useState('')

  const figmaAPI = useFigmaAPI({ token: figmaToken })

  const githubAPI = useGithubAPI({
    auth: githubToken,
    owner: config.repository.owner,
    repo: config.repository.name,
  })

  useEffect(function bindOnMessageHandler() {
    window.onmessage = async (event: MessageEvent<PluginMessage>) => {
      const { type, payload } = event.data.pluginMessage

      if (type === 'extractIcon') {
        try {
          const { fileKey, ids, nodes } = payload

          setProgressText('🚚 피그마에서 svg를 가져오는 중...')
          const { images } = await figmaAPI.getSvg({ fileKey, ids })
          if (!images) {
            throw new Error('선택된 아이콘이 없거나 잘못된 피그마 토큰입니다.')
          }
          setProgressValue(prev => prev + 0.2)

          setProgressText('📦 svg를 파일로 만드는 중...')
          const svgBlobs = await Promise.all(
            nodes.map(({ id, name }) => fetch(images[id])
              .then(response => response.text())
              .then(svg => githubAPI
                .createGitBlob(svg)
                .then(({ sha }) => ({ name, sha })),
              )),
          )

          const svgBlobsMap = svgBlobs.reduce((acc, { name, sha }) => {
            const path = `${name}.svg`
            return { ...acc, [path]: createSvgGitBlob(path, sha) }
          }, {} as { [path: string]: ReturnType<typeof createSvgGitBlob> })

          const newSvgBlobs = Object.values(svgBlobsMap)
          setProgressValue(prev => prev + 0.3)

          setProgressText('📦 svg 파일을 변환하는 중...')
          const baseRef = await githubAPI.getGitRef(config.repository.baseBranchName)
          const headCommit = await githubAPI.getGitCommit(baseRef.sha)
          const headTree = await githubAPI.getGitTree(headCommit.sha)

          const splittedPaths = config.repository.iconExtractPath.split('/')

          const parentTrees: Awaited<ReturnType<typeof githubAPI['getGitTree']>>[] = []

          const prevSvgBlobsTree = await splittedPaths.reduce(async (parentTreePromise, splittedPath) => {
            const parentTree = await parentTreePromise
            const targetTree = parentTree.find(({ path }) => path === splittedPath)
            if (!targetTree || !targetTree.sha) {
              throw new Error(`${splittedPath} 경로가 없습니다. 올바른 경로를 입력했는지 확인해주세요.`)
            }
            parentTrees.push(parentTree)
            return githubAPI.getGitTree(targetTree.sha)
          }, Promise.resolve(headTree))

          const newSvgBlobsTree = [
            ...prevSvgBlobsTree.map((blob) => {
              const overridedBlob = svgBlobsMap[blob.path as string]
              if (overridedBlob) {
                delete svgBlobsMap[blob.path as string]
                return { ...blob, ...overridedBlob }
              }
              return null
            }).filter(Boolean),
            ...newSvgBlobs,
          ]

          const newGitSvgTree = await githubAPI.createGitTree({
            // @ts-ignore
            tree: newSvgBlobsTree,
          })

          const newRootGitTree = await splittedPaths.reduceRight(async (prevTreePromise, cur, index) => {
            const parentTree = parentTrees[index]
            const targetTree = parentTree.find(({ path }) => path === cur)
            const { sha } = await prevTreePromise
            return githubAPI.createGitTree({
              tree: [
                // @ts-ignore
                ...parentTree.filter(({ path }) => path !== cur), { ...targetTree, sha },
              ],
            })
          }, Promise.resolve(newGitSvgTree))
          setProgressValue(prev => prev + 0.3)

          setProgressText('🚚 PR을 업로드하는 중...')
          const now = new Date()

          const newCommit = await githubAPI.createGitCommit({
            message: config.commit.message,
            author: {
              ...config.commit.author,
              date: now.toISOString(),
            },
            parents: [headCommit.sha],
            tree: newRootGitTree.sha,
          })

          const newBranchName = `update-icons-${now.valueOf()}`

          await githubAPI.createGitRef({
            branchName: newBranchName,
            sha: newCommit.sha,
          })
          setProgressValue(prev => prev + 0.2)

          const { html_url } = await githubAPI.createPullRequest({
            ...config.pr,
            head: newBranchName,
            base: config.repository.baseBranchName,
          })

          parent.postMessage({
            pluginMessage: {
              type: 'setToken',
              payload: { figmaToken, githubToken },
            },
          }, '*')

          navigate('../extract_success', { state: { url: html_url } })
        } catch (e: any) {
          onError(e?.message)
        }
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <VStack align="stretch" spacing={6}>
      <StackItem>
        <ProgressBar
          width="100%"
          value={progressValue}
        />
      </StackItem>
      <StackItem>
        <Text>{ progressText }</Text>
      </StackItem>
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

  const handleChangeFigmaToken = useCallback<React.ChangeEventHandler<HTMLInputElement>>((event) => {
    setFigmaToken(event.currentTarget.value)
  }, [])

  const handleChangeGithubToken = useCallback<React.ChangeEventHandler<HTMLInputElement>>((event) => {
    setGithubToken(event.currentTarget.value)
  }, [])

  const handleSubmit = useCallback<React.FormEventHandler<HTMLFormElement>>((event) => {
    setErrorMessage('')
    event.preventDefault()
    setStep(Step.Processing)
    parent.postMessage({ pluginMessage: { type: 'extract' } }, '*')
  }, [])

  const handleClickCancel = useCallback(() => {
    navigate('/')
  }, [navigate])

  const handleExtractError = useCallback((msg: string) => {
    setStep(Step.Pending)
    setErrorMessage(msg)
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <VStack align="stretch">
        <StackItem>
          <VStack align="stretch" spacing={12}>
            <StackItem>
              <FormControl required readOnly={step !== Step.Pending}>
                <FormLabel help="좌측 상단 Figma 로고 > Help and account > Account settings 에서 발급 받을 수 있습니다.">
                  Figma personal access token
                </FormLabel>
                <TextField
                  type={TextFieldType.Password}
                  name="figmaToken"
                  placeholder="figd_..."
                  value={figmaToken}
                  onChange={handleChangeFigmaToken}
                />
              </FormControl>
            </StackItem>
            <StackItem>
              <FormControl required readOnly={step !== Step.Pending}>
                <FormLabel help="Github Repository 쓰기 권한이 있는 토큰을 사용해주세요.">
                  Github personal access token
                </FormLabel>
                <TextField
                  type={TextFieldType.Password}
                  name="githubToken"
                  placeholder="ghp_..."
                  value={githubToken}
                  onChange={handleChangeGithubToken}
                />
              </FormControl>
            </StackItem>
            <StackItem>
              <FormControl readOnly>
                <FormLabel>추출할 경로 (루트 기준)</FormLabel>
                <TextField value={config.repository.iconExtractPath} />
              </FormControl>
            </StackItem>
            <StackItem marginBefore={4}>
              { errorMessage
                ? <FormErrorMessage>{ errorMessage }</FormErrorMessage>
                : <FormHelperText>토큰은 추출 성공 시 로컬 스토리지에 저장됩니다.</FormHelperText> }
            </StackItem>
          </VStack>
        </StackItem>

        <Spacer />

        <StackItem>
          { step === Step.Pending && (
            <HStack justify="end" spacing={6}>
              <StackItem>
                <Button
                  type="submit"
                  styleVariant={ButtonStyleVariant.Primary}
                  colorVariant={ButtonColorVariant.Blue}
                  text="아이콘 추출"
                />
              </StackItem>
              <StackItem>
                <Button
                  styleVariant={ButtonStyleVariant.Secondary}
                  colorVariant={ButtonColorVariant.MonochromeDark}
                  text="선택 단계로"
                  onClick={handleClickCancel}
                />
              </StackItem>
            </HStack>
          ) }

          { step === Step.Processing && (
            <Progress
              figmaToken={figmaToken}
              githubToken={githubToken}
              onError={handleExtractError}
            />
          ) }
        </StackItem>
      </VStack>
    </form>
  )
}

export default IconExtract
