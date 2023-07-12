import React from 'react'

import { render } from '~/src/utils/testUtils'

import Spinner, { SPINNER_TEST_ID } from './Spinner'
import type SpinnerProps from './Spinner.types'

describe('Spinner >', () => {
  let props: SpinnerProps

  beforeEach(() => {
    props = {}
  })

  const renderSpinner = (optionProps?: SpinnerProps) => render(
    <Spinner {...props} {...optionProps} />,
  )

  it('should render', () => {
    const { getByTestId } = renderSpinner()
    const renderedSpinner = getByTestId(SPINNER_TEST_ID)

    expect(renderedSpinner).toBeInTheDocument()
  })
})
