/* External dependencies */
import React, { useRef, useState, useCallback } from 'react'
import { action } from '@storybook/addon-actions'
import { boolean, select, withKnobs } from '@storybook/addon-knobs'
import { random } from 'lodash-es'

/* Internal dependencies */
import { styled, LightTheme, ThemeProvider } from '../../styling/Theme'
import Checkbox from './Checkbox'
import CheckType from './CheckType'

const checkOptions = {
  False: CheckType.False,
  True: CheckType.True,
  Partial: CheckType.Partial,
}

function randomRGB() {
  return `rgb(${random(255)}, ${random(255)}, ${random(255)})`
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  max-width: 200px;
`

export default {
  title: 'Checkbox',
  decorators: [withKnobs],
}

export const Primary = () => (
  <ThemeProvider theme={LightTheme}>
    <Checkbox
      disabled={boolean('disabled', false)}
      checked={select('checked', checkOptions, CheckType.True)}
      onClick={action('onClick')}
    >
      Check Me!
    </Checkbox>
  </ThemeProvider>
)

export const Controlled = () => {
  const [checked, setChecked] = useState<CheckType>(CheckType.True)
  const handleClick = useCallback(() => {
    switch (checked) {
      case CheckType.False:
        setChecked(CheckType.True)
        break
      case CheckType.True:
        setChecked(CheckType.Partial)
        break
      case CheckType.Partial:
        setChecked(CheckType.False)
        break
    }
  }, [
    checked,
  ])
  return (
    <ThemeProvider theme={LightTheme}>
      <Checkbox
        disabled={boolean('disabled', false)}
        checked={checked}
        onClick={handleClick}
      >
        Check Me!
      </Checkbox>
    </ThemeProvider>
  )
}

export const WithRef = () => {
  const checkboxRef = useRef<HTMLDivElement | null>(null)
  const handleClickButton = useCallback(() => {
    checkboxRef.current?.setAttribute('style', `
      background-color: ${randomRGB()};
      color: ${randomRGB()};
      transition: background-color .15s ease-in-out;
    `)
  }, [])
  return (
    <ThemeProvider theme={LightTheme}>
      <Wrapper>
        <Checkbox
          ref={checkboxRef}
          disabled={boolean('disabled', false)}
          checked={select('checked', checkOptions, CheckType.True)}
          onClick={action('onClick')}
        >
          Check Me!
        </Checkbox>
        <button
          type="button"
          onClick={handleClickButton}
        >
          Change Color!
        </button>
      </Wrapper>
    </ThemeProvider>
  )
}
