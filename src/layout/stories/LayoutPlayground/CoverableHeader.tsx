/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { styled } from 'Foundation'
import { Text } from 'Components/Text'
import useHeader from 'Layout/hooks/useHeader'
import LayoutHeaderType from 'Layout/types/LayoutHeaderType'

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`

function CoverableHeader({ children }) {
  useHeader(LayoutHeaderType.CoverableHeader)

  return (
    <Div>
      <Text>{ children }</Text>
    </Div>
  )
}

export default CoverableHeader
