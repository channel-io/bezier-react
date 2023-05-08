import React from 'react'

import { Themes } from '~/src/foundation'

import { render } from '~/src/utils/testUtils'

import {
  LegacyRadio,
  RADIO_HANDLE_TEST_ID,
  RADIO_TEST_ID,
} from './LegacyRadio'
import { type LegacyRadioProps } from './LegacyRadio.types'

const value = 'text'

describe('Radio test >', () => {
  let props: LegacyRadioProps

  beforeEach(() => {
    props = {
      disabled: false,
      value,
      watchingValue: '',
    }
  })

  const renderRadio = (optionProps?: LegacyRadioProps) => render(
    <LegacyRadio {...props} {...optionProps} />,
  )

  it('RadioInput has default style', () => {
    const { getByTestId } = renderRadio()

    const renderedRadio = getByTestId(RADIO_HANDLE_TEST_ID)

    expect(renderedRadio).toHaveStyle('width: 18px;')
    expect(renderedRadio).toHaveStyle('height: 18px;')
    expect(renderedRadio).toHaveStyle('border-radius: 50%;')
    expect(renderedRadio).toHaveStyle(`background-color: ${Themes.LightTheme['bg-black-lightest']};`)
  })

  it('RadioInput has success background, and no border when clicked', () => {
    const { getByTestId } = renderRadio({ watchingValue: value })

    const renderedRadio = getByTestId(RADIO_HANDLE_TEST_ID)

    expect(renderedRadio).toHaveStyle(`background-color: ${Themes.LightTheme['bgtxt-green-normal']};`)
    expect(renderedRadio).toHaveStyle('border: none;')
  })

  it('RadioInput has 40% opacity when disabled', () => {
    const { getByTestId } = renderRadio({ disabled: true })

    const renderedRadio = getByTestId(RADIO_TEST_ID)

    expect(renderedRadio).toHaveStyle('opacity: 0.4;')
  })
})
