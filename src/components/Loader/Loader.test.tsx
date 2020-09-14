/* External dependencies */
import React from 'react'
import { render } from '@testing-library/react'

/* Internal dependencies */
import { ThemeProvider, LightTheme } from '../../styling/Theme'
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
    <ThemeProvider theme={LightTheme}>
      <Loader {...props} {...optionProps} />
    </ThemeProvider>,
  )

  it('Loader has default style', () => {
    const { getByTestId } = renderLoader()

    const renderedLoader = getByTestId(LOADER_TEST_ID)

    expect(renderedLoader).toHaveStyle('width: 25px;')
  })
})
