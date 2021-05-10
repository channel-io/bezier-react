/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { render } from '../../utils/testUtils'
import Spinner, { LOADER_TEST_ID } from './Spinner'
import SpinnerProps from './Spinner.types'

describe('Spinner test >', () => {
  let props: SpinnerProps

  beforeEach(() => {
    props = {
      isLoading: true,
    }
  })

  const renderSpinner = (optionProps?: SpinnerProps) => render(
    <Spinner {...props} {...optionProps} />,
  )

  it('Spinner has default style', () => {
    const { getByTestId } = renderSpinner()

    const renderedLoader = getByTestId(LOADER_TEST_ID)

    expect(renderedLoader).toHaveStyle('width: 20px;')
  })
})
