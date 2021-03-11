/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { styled } from '../../../foundation'
import { Text } from '../../../components/Text'
import useHeader from '../../../hooks/useHeader'
import LayoutHeaderType from '../../../constants/LayoutHeaderType'

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`

function ContentHeader({ children }) {
  useHeader(LayoutHeaderType.ContentHeader)

  return (
    <Div>
      <Text>{ children }</Text>
    </Div>
  )
}

export default ContentHeader
