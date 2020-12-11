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

const ContentWrapper = styled(Div)`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
`

function ContentArea() {
  return <ContentWrapper>Content</ContentWrapper>
}

const SidePanelWrapper = styled(Div)`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  z-index: 50;
`

function SidePanelArea() {
  return <SidePanelWrapper>SidePanel</SidePanelWrapper>
}

const SplitViewWrapper = styled(Div)`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  z-index: 40;
`

function SplitViewArea() {
  return <SplitViewWrapper>Split View</SplitViewWrapper>
}

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
  HeaderArea,
  ContentArea,
  SidePanelArea,
}
