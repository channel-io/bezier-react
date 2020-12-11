/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { styled } from '../../styling/Theme'
import { ContentArea } from '../ContentArea'
import { HeaderArea } from '../HeaderArea'
import { SidePanelArea } from '../SidePanelArea'
import { SplitViewArea } from '../SplitViewArea'

const ContainerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 250px; // 가변
  grid-template-rows: 70px 1fr;
  /* gap: 6px; */
  width: 100%;
  height: 100%;
`

function Container() {
  return (
    <ContainerWrapper>
      <HeaderArea />
      <ContentArea />
      <SidePanelArea />
      <SplitViewArea />
    </ContainerWrapper>
  )
}

export default {
  Container,
}
