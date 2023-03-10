/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { render } from 'Utils/testUtils'
import { VisuallyHidden } from './VisuallyHidden'

const INPUT_ID = 'foo'
const TEXT = 'This is a visually hidden text.'

describe('VisuallyHidden', () => {
  const renderVisuallyHidden = () => render(
    <div>
      <VisuallyHidden>
        <label htmlFor={INPUT_ID}>{ TEXT }</label>
      </VisuallyHidden>
      <input id={INPUT_ID} />
    </div>,
  )

  it('should hide the content visually', () => {
    const { getByText } = renderVisuallyHidden()
    /**
     * @see https://www.a11yproject.com/posts/how-to-hide-content/
     */
    const rendered = getByText(TEXT)
    expect(rendered).toHaveStyle('position: absolute')
    expect(rendered).toHaveStyle('width: 1px')
    expect(rendered).toHaveStyle('height: 1px')
    expect(rendered).toHaveStyle('margin: -1px')
    expect(rendered).toHaveStyle('padding: 0')
    expect(rendered).toHaveStyle('overflow: hidden')
    expect(rendered).toHaveStyle('clip: rect(0, 0, 0, 0)')
    expect(rendered).toHaveStyle('white-space: nowrap')
    expect(rendered).toHaveStyle('border-width: 0')
  })

  it('should be accessible to screen readers', () => {
    const { getByLabelText } = renderVisuallyHidden()
    expect(getByLabelText(TEXT)).toBeInTheDocument()
  })
})
