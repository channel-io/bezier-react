/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { render } from '~/src/utils/testUtils'

import FormGroup from './FormGroup'
import type FormGroupProps from './FormGroup.types'

describe('FormGroup >', () => {
  let props: FormGroupProps

  beforeEach(() => {
    props = {
      spacing: 6,
      direction: 'vertical',
    }
  })

  const renderComponent = () => render(<FormGroup {...props} />)

  it('Snapshot >', () => {
    const { getByRole } = renderComponent()
    const rendered = getByRole('group')

    expect(rendered).toMatchSnapshot()
  })
})
