import { fireEvent } from '@testing-library/react'

import { render } from '~/src/utils/test'

import { BaseTextInput } from './BaseTextInput'

describe('BaseTextInput scrolling', () => {
  it.each([
    ['ltr', 120],
    ['rtl', -120],
  ] as const)(
    'preserves native scrolling and selection in %s inputs',
    (dir, scrollLeft) => {
      const onScroll = jest.fn()
      const onChange = jest.fn()
      const { getByRole } = render(
        <BaseTextInput
          dir={dir}
          defaultValue="A long input value"
          onScroll={onScroll}
          onChange={onChange}
        />
      )
      const input = getByRole('textbox') as HTMLInputElement
      input.setSelectionRange(2, 6)

      expect(input).toHaveAttribute('data-scrolled', 'false')

      fireEvent.scroll(input, { target: { scrollLeft } })

      expect(input).toHaveAttribute('data-scrolled', 'true')
      expect(input.scrollLeft).toBe(scrollLeft)
      expect(input.value).toBe('A long input value')
      expect([input.selectionStart, input.selectionEnd]).toEqual([2, 6])
      expect(input).not.toHaveFocus()
      expect(onChange).not.toHaveBeenCalled()
      expect(onScroll).toHaveBeenCalledTimes(1)
      expect(onScroll.mock.calls[0][0].target).toBe(input)

      fireEvent.scroll(input, { target: { scrollLeft: 0 } })

      expect(input).toHaveAttribute('data-scrolled', 'false')
      expect(onScroll).toHaveBeenCalledTimes(2)
    }
  )

  it.each([-1, -0.56, 0, 0.56, 1])(
    'restores ellipsis near the start at %s CSS pixels',
    (scrollLeft) => {
      const { getByRole } = render(<BaseTextInput />)
      const input = getByRole('textbox')

      fireEvent.scroll(input, { target: { scrollLeft: 120 } })
      fireEvent.scroll(input, { target: { scrollLeft } })

      expect(input).toHaveAttribute('data-scrolled', 'false')
    }
  )

  it('handles read-only scrolling and uses the latest consumer callback', () => {
    const onScroll = jest.fn()
    const nextOnScroll = jest.fn()
    const { getByRole, rerender } = render(
      <BaseTextInput
        readOnly
        value="Read-only text"
        onScroll={onScroll}
      />
    )
    const input = getByRole('textbox')
    fireEvent.scroll(input, { target: { scrollLeft: 120 } })

    expect(input).toHaveAttribute('data-scrolled', 'true')
    expect(onScroll).toHaveBeenCalledTimes(1)

    rerender(
      <BaseTextInput
        readOnly
        value="Read-only text"
        onScroll={nextOnScroll}
        inputStyle={{ textOverflow: 'clip' }}
      />
    )

    expect(input).toHaveAttribute('data-scrolled', 'true')
    expect(input).toHaveStyle({ textOverflow: 'clip' })

    fireEvent.scroll(input, { target: { scrollLeft: 0 } })

    expect(input).toHaveAttribute('data-scrolled', 'false')
    expect(onScroll).toHaveBeenCalledTimes(1)
    expect(nextOnScroll).toHaveBeenCalledTimes(1)
    expect(input).toHaveStyle({ textOverflow: 'clip' })
  })
})
