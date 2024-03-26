import React, { useCallback } from 'react'

import { HexahedronIcon } from '@channel.io/bezier-icons'
import { ListItem, VStack } from '@channel.io/bezier-react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  const handleClickExtract = useCallback(() => {
    navigate('extract')
  }, [navigate])

  return (
    <VStack align="stretch">
      <ListItem
        size="l"
        leftContent={HexahedronIcon}
        content="아이콘 추출"
        onClick={handleClickExtract}
      />
    </VStack>
  )
}

export default Home
