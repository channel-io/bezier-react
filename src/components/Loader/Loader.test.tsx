/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { render } from '../../utils/testUtils'
import Loader, { LOADER_TEST_ID } from './Loader'
import LoaderProps from './Loader.types'

describe('Loader test >', () => {
  let props: LoaderProps

  beforeEach(() => {
    props = {
      isLoading: true,
    }
  })

  const renderLoader = (optionProps?: LoaderProps) => render(
    <Loader {...props} {...optionProps} />,
  )

  it('Loader has default style', () => {
    const { getByTestId } = renderLoader()

    const renderedLoader = getByTestId(LOADER_TEST_ID)

    expect(renderedLoader).toHaveStyle('width: 25px;')
  })
})
