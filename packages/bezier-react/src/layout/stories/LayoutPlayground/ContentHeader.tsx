/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { styled } from '~/src/foundation'
import { Text } from '~/src/components/Text'
import useHeader from '~/src/layout/hooks/useHeader'
import LayoutHeaderType from '~/src/layout/types/LayoutHeaderType'

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
