/* External dependencies */
import React from 'react'
import { render } from '@testing-library/react'

/* Internal dependencies */
import Colors from '../../styling/Colors'
import { ThemeProvider, LightTheme } from '../../styling/Theme'
import Radio, { RADIO_TEST_ID } from './Radio'
import RadioProps from './Radio.types'

const value = 'text'

describe('Radio test >', () => {
  let props: RadioProps

  beforeEach(() => {
    props = {
      disabled: false,
      value,
      watchingValue: '',
    }
  })

  const renderRadio = (optionProps?: RadioProps) => render(
    <ThemeProvider theme={LightTheme}>
      <Radio {...props} {...optionProps}/>
    </ThemeProvider>,
  )

  it('RadioInput has default style', () => {
    const { getByTestId } = renderRadio()

    const renderedRadio = getByTestId(RADIO_TEST_ID)

    expect(renderedRadio).toHaveStyle('width: 18px;')
    expect(renderedRadio).toHaveStyle('height: 18px;')
    expect(renderedRadio).toHaveStyle('border-radius: 50%;')
    expect(renderedRadio).toHaveStyle(`background-color: ${Colors.Light.background0};`)
  })

  it('RadioInput has success background, and no border when clicked', () => {
    const { getByTestId } = renderRadio({ watchingValue: value })

    const renderedRadio = getByTestId(RADIO_TEST_ID)

    expect(renderedRadio).toHaveStyle(`background-color: ${Colors.Light.success1};`)
    expect(renderedRadio).toHaveStyle('border: none;')
  })

  it('RadioInput has disable background when disabled', () => {
    const { getByTestId } = renderRadio({ disabled: true })

    const renderedRadio = getByTestId(RADIO_TEST_ID)

    expect(renderedRadio).toHaveStyle(`background-color: ${Colors.Light.background3};`)
  })
})
