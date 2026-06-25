import * as React from 'react'


import { Button } from '~/src/beta/Button'
import { render } from '~/src/utils/test'

import { ButtonGroup } from './ButtonGroup'
import type { ButtonGroupProps } from './ButtonGroup.types'


describe('ButtonGroup', () => {
  const props: ButtonGroupProps = {}

  it('should render a button group with spacing', () => {
    const { getByRole } = render(
      <ButtonGroup {...props}>
        <Button label="button1" />
        <Button label="button2" />
      </ButtonGroup>
    )

    const buttonGroup = getByRole('group')

    expect(buttonGroup).toHaveStyle('--b-stack-spacing: 6px')
  })

  it('should render a button group without spacing', () => {
    const { getByRole } = render(
      <ButtonGroup
        {...props}
        withoutSpacing
      >
        <Button label="button1" />
        <Button label="button2" />
      </ButtonGroup>
    )

    const buttonGroup = getByRole('group')

    expect(buttonGroup).toHaveStyle('--b-stack-spacing: 0')
  })

  it('should set center justification by default', () => {
    const { getByRole } = render(
      <ButtonGroup>
        <Button label="button1" />
      </ButtonGroup>
    )

    expect(getByRole('group')).toHaveClass('justify-center')
  })

  it('should forward ref', () => {
    const ref = React.createRef<HTMLDivElement>()

    render(<ButtonGroup ref={ref} />)

    expect(ref.current).toBeInTheDocument()
  })
})
