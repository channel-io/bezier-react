import { HELP_TEST_ID } from '~/src/beta/Help/Help'
import { render } from '~/src/utils/test'

import { BaseGroupLabel } from './BaseGroupLabel'

import styles from './BaseGroupLabel.module.scss'

describe('BaseGroupLabel', () => {
  it('renders neutral-dark variant by default', () => {
    const { getByText } = render(<BaseGroupLabel content="General" />)

    expect(getByText('General').parentElement?.parentElement).toHaveClass(
      styles['variant-neutral-dark']
    )
  })

  it('renders neutral-light variant', () => {
    const { getByText } = render(
      <BaseGroupLabel
        content="General"
        variant="neutral-light"
      />
    )

    expect(getByText('General').parentElement?.parentElement).toHaveClass(
      styles['variant-neutral-light']
    )
  })

  it('renders help and trailing content', () => {
    const { getByTestId, getByText } = render(
      <BaseGroupLabel
        content="General"
        help="Help content"
        trailingContent="Optional"
      />
    )

    expect(getByText('General')).toBeInTheDocument()
    expect(getByText('Optional')).toBeInTheDocument()
    expect(getByTestId(HELP_TEST_ID)).toBeInTheDocument()
  })

  it('forwards root props and content id', () => {
    const ref = jest.fn()
    const { getByTestId, getByText } = render(
      <BaseGroupLabel
        ref={ref}
        data-testid="group-label"
        className="custom-class"
        content="General"
        contentId="group-label-content"
      />
    )

    expect(getByTestId('group-label')).toHaveClass('custom-class')
    expect(getByText('General')).toHaveAttribute('id', 'group-label-content')
    expect(ref).toHaveBeenCalled()
  })
})
