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
  justify-self: stretch;
  align-self: stretch;
`

const HeaderWrapper = styled(Div)`
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  display: grid;
  grid-template-columns: 1fr 250px; // TODO: context 연동
  grid-template-rows: 1fr;
`

const LeftHeader = styled(Div)`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
`

const RightHeader = styled(Div)`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
`

function HeaderArea() {
  return (
    <HeaderWrapper>
      <LeftHeader>Header - Left</LeftHeader>
      <RightHeader>Header - Right</RightHeader>
    </HeaderWrapper>
  )
}

export default HeaderArea
