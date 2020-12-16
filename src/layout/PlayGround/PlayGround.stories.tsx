/* External dependencies */
import React, { useState } from 'react'
import { base } from 'paths.macro'

/* Internal dependencies */
import { getTitle } from '../../utils/utils'
import { styled } from '../../styling/Theme'
import Navigations from '../Navigations/Navigations'
import PlayGround from './PlayGround'

export default {
  title: getTitle(base),
  component: Navigations,
}

const Container = styled.div`
  display: flex;
  width: 1400px;
  height: 800px;
  margin: 0 auto;
  padding: 2px;
  border: 2px solid grey;
  border-radius: 10px;
`

const Template = () => {
  // will be provider
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showSidebar, setShowSidebar] = useState(true)

  return (
    <>
      <button type="button" onClick={() => setShowSidebar(true)}>사이드바 열기</button>
      <Container>
        <PlayGround.Container />
      </Container>
    </>
  )
}

export const Primary = Template.bind({})

Primary.args = {}
