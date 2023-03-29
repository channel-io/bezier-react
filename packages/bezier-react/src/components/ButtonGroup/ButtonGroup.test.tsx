/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { render } from '~/src/utils/testUtils'
import { Button } from '~/src/components/Button'
import { ButtonGroup } from './ButtonGroup'
import type ButtonGroupProps from './ButtonGroup.types'

describe('ButtonGroup', () => {
  let props: ButtonGroupProps

  it('creates a button group with spacing', () => {
    const { getByRole } = render(
      <ButtonGroup
        {...props}
      >
        <Button text="button1" />
        <Button text="button2" />
      </ButtonGroup>)

    const buttonGroup = getByRole('group')

    expect((buttonGroup.children[0] as HTMLElement).style.getPropertyValue('--margin-before')).toBe('0px')
    expect((buttonGroup.children[1] as HTMLElement).style.getPropertyValue('--margin-before')).toBe('6px')
  })

  it('creates a button group without spacing', () => {
    const { getByRole } = render(
      <ButtonGroup
        {...props}
        withoutSpacing
        testId="button-group"
      >
        <Button text="button1" />
        <Button text="button2" />
      </ButtonGroup>)

    const buttonGroup = getByRole('group')

    expect((buttonGroup.children[0] as HTMLElement).style.getPropertyValue('--margin-before')).toBe('0px')
    expect((buttonGroup.children[1] as HTMLElement).style.getPropertyValue('--margin-before')).toBe('0px')
  })
})
