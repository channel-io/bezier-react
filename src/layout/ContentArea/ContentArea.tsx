/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { styled } from '../../styling/Theme'

const Div = styled.div`
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 30px;
`

const ContentWrapper = styled(Div)`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  position: relative;
`

function ContentArea() {
  return (
    <ContentWrapper>
      Content
    </ContentWrapper>
  )
}

export default ContentArea
