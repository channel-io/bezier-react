import React, { useCallback } from 'react'

import {
  useLocation,
  useNavigate,
} from 'react-router-dom'

import {
  Button,
  ButtonColorVariant,
  ButtonStyleVariant,
  StackItem,
  Text,
  Typography,
  VStack,
} from '@channel.io/bezier-react'

function ExtractSuccess() {
  const navigate = useNavigate()
  const location = useLocation()
  const url = (location.state as { url: string }).url

  const handleClickGoHome = useCallback(() => {
    navigate('/')
  }, [navigate])

  return (
    <VStack align="center" justify="center" spacing={2}>
      <StackItem>
        <Text typo={Typography.Size18}>아이콘 추출 성공!</Text>
      </StackItem>
      <StackItem>
        { /* @ts-ignore */ }
        <Text color="bgtxt-blue-normal" as="a" href={url} target="_blank">PR 링크</Text>
      </StackItem>
      <StackItem marginBefore={40}>
        <Button
          styleVariant={ButtonStyleVariant.Secondary}
          colorVariant={ButtonColorVariant.MonochromeDark}
          text="선택 단계로"
          onClick={handleClickGoHome}
        />
      </StackItem>
    </VStack>
  )
}

export default ExtractSuccess
