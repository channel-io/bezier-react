/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { render } from 'Utils/testUtils'
import FormGroup, { FORM_GROUP_TEST_ID } from './FormGroup'
import type FormGroupProps from './FormGroup.types'

describe('FormGroup >', () => {
  let props: FormGroupProps

  beforeEach(() => {
    props = {
      gap: 6,
      direction: 'column',
    }
  })

  const renderComponent = () => render(<FormGroup {...props} />)

  it('Snapshot >', () => {
    const { getByTestId } = renderComponent()
    const rendered = getByTestId(FORM_GROUP_TEST_ID)

    expect(rendered).toMatchSnapshot()
  })
})
