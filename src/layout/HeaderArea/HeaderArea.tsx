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

const HeaderWrapper = styled(Div)`
  grid-column: 1 / 3;
  grid-row: 1 / 2;
`

function HeaderArea() {
  return <HeaderWrapper>Header</HeaderWrapper>
}

export default HeaderArea
