import { render, waitFor } from '@testing-library/react'

import { useFormFieldLayout } from './useFormFieldLayout'

function Layout({ enabled = true, control = true, labelHeight = 18.5 }) {
  const ref = useFormFieldLayout(enabled)
  return (
    <div
      ref={ref}
      data-testid="field"
      style={{ display: 'grid' }}
    >
      <div style={{ gridColumnStart: '1', order: 0, height: labelHeight }} />
      <div
        data-testid="description"
        style={{ gridColumnStart: '1', order: 1, height: 90 }}
      />
      {control && (
        <div style={{ gridColumnStart: '2', order: 2, height: 36 }} />
      )}
      {control && (
        <div
          data-testid="error"
          style={{ gridColumnStart: '2', order: 3, height: 18 }}
        />
      )}
    </div>
  )
}

// JSDOM has no layout. Supply visibility, while dimensions come from the
// declared CSS heights; the browser comparison covers the actual grid layout.
beforeEach(() => {
  jest
    .spyOn(HTMLElement.prototype, 'getClientRects')
    .mockReturnValue({ length: 1 } as DOMRectList)
})

afterEach(() => {
  jest.restoreAllMocks()
})

it('keeps fractional label height and positions errors independently of long descriptions', () => {
  const { getByTestId } = render(<Layout />)
  expect(
    getByTestId('description').style.getPropertyValue('--b-form-offset')
  ).toBe('18.5px')
  expect(getByTestId('error').style.getPropertyValue('--b-form-offset')).toBe(
    '40px'
  )
  expect(getByTestId('field').style.getPropertyValue('--b-form-height')).toBe(
    '108.5px'
  )
})

it('restores the control column when controls are added after a label-only render', async () => {
  const { getByTestId, rerender } = render(<Layout control={false} />)
  expect(getByTestId('field')).toHaveAttribute('data-b-form-label-only')
  rerender(<Layout />)
  await waitFor(() =>
    expect(getByTestId('field')).not.toHaveAttribute('data-b-form-label-only')
  )
  expect(getByTestId('error').style.getPropertyValue('--b-form-offset')).toBe(
    '40px'
  )
  rerender(<Layout control={false} />)
  await waitFor(() =>
    expect(getByTestId('field')).toHaveAttribute('data-b-form-label-only')
  )
})

it('removes measured positions when switching out of the left layout', () => {
  const { getByTestId, rerender } = render(<Layout />)
  rerender(<Layout enabled={false} />)
  expect(getByTestId('field')).not.toHaveAttribute('data-b-form-layout')
  expect(getByTestId('field').style.getPropertyValue('--b-form-height')).toBe(
    ''
  )
  expect(
    getByTestId('description').style.getPropertyValue('--b-form-offset')
  ).toBe('')
})
