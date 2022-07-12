/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { render } from 'Utils/testUtils'
import Button from 'Components/Button/Button'
import ButtonGroup from './ButtonGroup'
import ButtonGroupProps from './ButtonGroup.types'

describe('ButtonGroup', () => {
  let props: ButtonGroupProps

  it('creates a button group with gap', () => {
    const { getByTestId } = render(
      <ButtonGroup
        {...props}
        testId="button-group"
      >
        <Button text="button1" />
        <Button text="button2" />
      </ButtonGroup>)

    const buttonGroup = getByTestId('button-group')

    expect((buttonGroup.children[0] as HTMLElement).style.getPropertyValue('--margin-before')).toBe('0px')
    expect((buttonGroup.children[1] as HTMLElement).style.getPropertyValue('--margin-before')).toBe('6px')
  })

  it('creates a button group without gap', () => {
    const { getByTestId } = render(
      <ButtonGroup
        {...props}
        hasGap={false}
        testId="button-group"
      >
        <Button text="button1" />
        <Button text="button2" />
      </ButtonGroup>)

    const buttonGroup = getByTestId('button-group')

    expect((buttonGroup.children[0] as HTMLElement).style.getPropertyValue('--margin-before')).toBe('0px')
    expect((buttonGroup.children[1] as HTMLElement).style.getPropertyValue('--margin-before')).toBe('0px')
  })
})
