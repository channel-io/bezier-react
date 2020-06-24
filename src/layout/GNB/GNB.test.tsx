/* External dependencies */
import React from 'react'
import { render } from '@testing-library/react'

/* Internal dependencies */
import GNB from './GNB'
import GNBProps from './GNB.types'

const GNB_TEST_ID = 'gnb-test'

describe('GNB Test >', () => {
  let props: GNBProps

  beforeEach(() => {
    props = {
      testId: GNB_TEST_ID,
    }
  })

  const renderGNB = () => render(<GNB {...props} />)

  it('GNB has 68px width', () => {
    const { getByTestId } = renderGNB()
    const renderedGNB = getByTestId(GNB_TEST_ID)

    expect(renderedGNB).toHaveStyle('width: 68px')
  })

  it('GNB has 100% height', () => {
    const { getByTestId } = renderGNB()
    const renderedGNB = getByTestId(GNB_TEST_ID)

    expect(renderedGNB).toHaveStyle('height: 100%')
  })
})
