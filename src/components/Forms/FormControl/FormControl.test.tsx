/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { render } from 'Utils/testUtils'
import { FormLabel } from 'Components/Forms/FormLabel'
import { TextField } from 'Components/Forms/Inputs/TextField'
import { FormHelperText, FormErrorMessage } from 'Components/Forms/FormHelperText'
import FormControl, { FORM_CONTROL_TEST_ID } from './FormControl'
import type FormControlProps from './FormControl.types'

// TODO: 테스트 보강
describe('FormControl >', () => {
  let props: FormControlProps

  beforeEach(() => {
    props = {
      id: 'form',
      labelPosition: 'top',
      leftLabelWrapperHeight: undefined,
      hasError: false,
      disabled: false,
      readOnly: false,
    }
  })

  const renderComponent = ({ children, ...rest }: FormControlProps) => render(
    <FormControl {...props} {...rest}>
      { children }
    </FormControl>,
  )

  const defaultChildren = (
    <>
      <FormLabel help="Lorem Ipsum">Label</FormLabel>
      <TextField placeholder="Placeholder" />
      <FormHelperText>Description</FormHelperText>
      <FormErrorMessage>Error!</FormErrorMessage>
    </>
  )

  it('Snapshot >', () => {
    const { getByTestId } = renderComponent({
      children: defaultChildren,
    })

    const rendered = getByTestId(FORM_CONTROL_TEST_ID)

    expect(rendered).toMatchSnapshot()
  })
})
