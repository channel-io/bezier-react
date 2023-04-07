import React, { useCallback } from 'react'

import { useNavigate } from 'react-router-dom'

import {
  ListItem,
  ListItemSize,
  StackItem,
  VStack,
} from '@channel.io/bezier-react'

function Home() {
  const navigate = useNavigate()

  const handleClickExtract = useCallback(() => {
    navigate('extract')
  }, [navigate])

  return (
    <VStack align="stretch">
      <StackItem>
        <ListItem
          size={ListItemSize.XL}
          leftIcon="hexahedron"
          content="아이콘 추출"
          onClick={handleClickExtract}
        />
      </StackItem>
    </VStack>
  )
}

export default Home
