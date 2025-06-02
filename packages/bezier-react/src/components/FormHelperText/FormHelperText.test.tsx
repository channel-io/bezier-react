import { render } from '~/src/utils/test'

import { FormErrorMessage, FormHelperText } from './FormHelperText'
import type {
  FormErrorMessageProps,
  FormHelperTextProps,
} from './FormHelperText.types'

describe('FormHelperText >', () => {
  let props: FormHelperTextProps
  const text = 'Lorem ipsum'

  beforeEach(() => {
    props = {
      id: 'test',
      children: text,
    }
  })

  const renderFormHelperText = (otherProps?: Partial<FormHelperTextProps>) =>
    render(
      <FormHelperText
        {...props}
        {...otherProps}
      />
    )

  it('renders text when children prop is not empty', () => {
    const { getByText } = renderFormHelperText()
    const helperText = getByText(text)

    expect(helperText).toBeInTheDocument()
  })

  it('renders nothing when children prop is empty', () => {
    const { queryByText } = renderFormHelperText({ children: '' })
    const helperText = queryByText(text)

    expect(helperText).toBeNull()
  })
})

describe('FormErrorMessage >', () => {
  let props: FormErrorMessageProps
  const text = 'Lorem ipsum'

  beforeEach(() => {
    props = {
      id: 'test',
      children: text,
    }
  })

  const renderFormHelperText = (otherProps?: Partial<FormErrorMessageProps>) =>
    render(
      <FormErrorMessage
        {...props}
        {...otherProps}
      />
    )

  it('renders text when children prop is not empty', () => {
    const { getByText } = renderFormHelperText()
    const rendered = getByText(text)

    expect(rendered).toBeInTheDocument()
  })

  it('renders nothing when children prop is empty', () => {
    const { queryByText } = renderFormHelperText({ children: '' })
    const rendered = queryByText(text)

    expect(rendered).toBeNull()
  })

  it('should have aria-live="polite" attribute', () => {
    const { getByText } = renderFormHelperText()
    const rendered = getByText(text)

    expect(rendered).toHaveAttribute('aria-live', 'polite')
  })
})
