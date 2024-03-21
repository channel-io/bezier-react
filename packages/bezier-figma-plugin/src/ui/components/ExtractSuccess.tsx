import React, { useCallback } from 'react'

import { Button, Text, VStack } from '@channel.io/bezier-react'
import { useLocation, useNavigate } from 'react-router-dom'

function ExtractSuccess() {
  const navigate = useNavigate()
  const location = useLocation()
  const url = (location.state as { url: string }).url

  const handleClickGoHome = useCallback(() => {
    navigate('/')
  }, [navigate])

  return (
    <VStack
      align="center"
      justify="center"
      spacing={2}
    >
      <Text typo="18">아이콘 추출 성공!</Text>
      {/* @ts-ignore */}
      <Text
        color="bgtxt-blue-normal"
        as="a"
        href={url}
        target="_blank"
      >
        PR 링크
      </Text>
      <Button
        styleVariant="secondary"
        colorVariant="monochrome-dark"
        text="선택 단계로"
        onClick={handleClickGoHome}
      />
    </VStack>
  )
}

export default ExtractSuccess
