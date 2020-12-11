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

const SplitViewWrapper = styled(Div)`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  z-index: 40;
`

function SplitViewArea() {
  return <SplitViewWrapper>Split View</SplitViewWrapper>
}

export default SplitViewArea
