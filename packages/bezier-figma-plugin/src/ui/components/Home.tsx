import React, { useCallback } from 'react'

import { useNavigate } from 'react-router-dom'

import { HexahedronIcon } from '@channel.io/bezier-icons'
import {
  ListItem,
  ListItemSize,
  VStack,
} from '@channel.io/bezier-react'

function Home() {
  const navigate = useNavigate()

  const handleClickExtract = useCallback(() => {
    navigate('extract')
  }, [navigate])

  return (
    <VStack align="stretch">
      <ListItem
        size={ListItemSize.L}
        leftContent={HexahedronIcon}
        content="아이콘 추출"
        onClick={handleClickExtract}
      />
    </VStack>
  )
}

export default Home
