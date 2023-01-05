/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { Typography } from '~/src/foundation'
import { FormControl } from '~/src/components/Forms/FormControl'
import { FormGroup } from '~/src/components/Forms/FormGroup'
import { FormLabel } from '~/src/components/Forms/FormLabel'
import { TextField } from '~/src/components/Forms/Inputs/TextField'
import { FormHelperText, FormErrorMessage } from '~/src/components/Forms/FormHelperText'

export const MOCK_CONSTS = {
  LABEL_TEXT: 'Label',
  HELPER_TEXT_TEXT: 'Description',
  ERROR_MESSAGE_TEXT: 'Error!',

  FIRST_FIELD_LABEL_TEXT: 'First Inner Label',
  SECOND_FIELD_LABEL_TEXT: 'Second Inner Label',
}

export const SingleFieldForm = (
  <>
    <FormLabel>{ MOCK_CONSTS.LABEL_TEXT }</FormLabel>
    <TextField />
    <FormHelperText>{ MOCK_CONSTS.HELPER_TEXT_TEXT }</FormHelperText>
    <FormErrorMessage>{ MOCK_CONSTS.ERROR_MESSAGE_TEXT }</FormErrorMessage>
  </>
)

export const SingleFieldFormWithLabelFont = (
  <>
    <FormLabel typo={Typography.Size18}>{ MOCK_CONSTS.LABEL_TEXT }</FormLabel>
    <TextField />
    <FormHelperText>{ MOCK_CONSTS.HELPER_TEXT_TEXT }</FormHelperText>
    <FormErrorMessage>{ MOCK_CONSTS.ERROR_MESSAGE_TEXT }</FormErrorMessage>
  </>
)

export const MultipleFieldForm = (
  <>
    <FormLabel>
      { MOCK_CONSTS.LABEL_TEXT }
    </FormLabel>
    <FormGroup>
      <FormControl>
        <FormLabel>{ MOCK_CONSTS.FIRST_FIELD_LABEL_TEXT }</FormLabel>
        <TextField />
      </FormControl>
      <FormControl hasError>
        <FormLabel>{ MOCK_CONSTS.SECOND_FIELD_LABEL_TEXT }</FormLabel>
        <TextField />
      </FormControl>
    </FormGroup>
    <FormHelperText>{ MOCK_CONSTS.HELPER_TEXT_TEXT }</FormHelperText>
    <FormErrorMessage>{ MOCK_CONSTS.ERROR_MESSAGE_TEXT }</FormErrorMessage>
  </>
)
