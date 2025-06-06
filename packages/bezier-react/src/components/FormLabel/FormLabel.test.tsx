import { render } from '~/src/utils/test'

import { HELP_TEST_ID, Help } from '~/src/components/Help/Help'

import { FORM_LABEL_TEST_ID, FormLabel } from './FormLabel'
import { type FormLabelProps } from './FormLabel.types'

describe('FormLabel >', () => {
  let props: FormLabelProps

  beforeEach(() => {
    props = {
      help: '',
      children: 'label',
    }
  })

  const renderComponent = (otherProps?: Partial<FormLabelProps>) =>
    render(
      <FormLabel
        {...props}
        {...otherProps}
      />
    )

  it('renders text when children prop is not empty', () => {
    const { getByTestId } = renderComponent()
    const rendered = getByTestId(FORM_LABEL_TEST_ID)

    expect(rendered).toBeInTheDocument()
  })

  it('renders nothing when children prop is empty', () => {
    const { queryByTestId } = renderComponent({ children: '' })
    const rendered = queryByTestId(FORM_LABEL_TEST_ID)

    expect(rendered).toBeNull()
  })

  it('renders help icon when help prop is not empty', () => {
    const { getByTestId } = renderComponent({ help: 'test' })
    const rendered = getByTestId(HELP_TEST_ID)

    expect(rendered).toBeInTheDocument()
  })

  it('renders help component when HelpTooltip is not empty', () => {
    const { getByTestId } = renderComponent({
      help: <Help> test </Help>,
    })
    const rendered = getByTestId(HELP_TEST_ID)

    expect(rendered).toBeInTheDocument()
  })
})
