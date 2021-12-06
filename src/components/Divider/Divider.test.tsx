/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { render } from 'Utils/testUtils'
import Divider, { DIVIDER_TEST_ID } from './Divider'
import type DividerProps from './Divider.types'

describe('Divider >', () => {
  let props: DividerProps

  beforeEach(() => {
    props = {
      orientation: 'horizontal',
      withoutSideIndent: false,
    }
  })

  const renderDivider = (otherProps?: Partial<DividerProps>) => render(<Divider {...props} {...otherProps} />)

  it('Snapshot >', () => {
    const { getByTestId } = renderDivider()
    const divider = getByTestId(DIVIDER_TEST_ID)

    expect(divider).toMatchSnapshot()
  })

  it('has reset css', () => {
    const { getByTestId } = renderDivider()
    const divider = getByTestId(DIVIDER_TEST_ID)

    expect(divider).toHaveStyle('box-sizing: content-box')
    expect(divider).toHaveStyle('border: 0')
    expect(divider).toHaveStyle('border-style: solid')
  })

  it('has margin', () => {
    const { getByTestId } = renderDivider()
    const divider = getByTestId(DIVIDER_TEST_ID)

    expect(divider).toHaveStyle('margin: 6px')
  })

  it('renders horizontal divider with correct style', () => {
    const { getByTestId } = renderDivider()
    const divider = getByTestId(DIVIDER_TEST_ID)

    expect(divider).toHaveStyle('width: calc(100% - 12px)')
    expect(divider).toHaveStyle('border-bottom-width: 1px')
  })

  it('renders vertical divider with correct style', () => {
    const { getByTestId } = renderDivider({ orientation: 'vertical' })
    const divider = getByTestId(DIVIDER_TEST_ID)

    expect(divider).toHaveStyle('height: calc(100% - 12px)')
    expect(divider).toHaveStyle('border-left-width: 1px')
  })

  it('renders horizontal divider has not side indent when withoutSideIndent option is true', () => {
    const { getByTestId } = renderDivider({ withoutSideIndent: true })
    const divider = getByTestId(DIVIDER_TEST_ID)

    expect(divider).toHaveStyle('margin-right: 0px')
    expect(divider).toHaveStyle('margin-left: 0px')
  })

  it('renders vertical divider has not side indent when withoutSideIndent option is true', () => {
    const { getByTestId } = renderDivider({ orientation: 'vertical', withoutSideIndent: true })
    const divider = getByTestId(DIVIDER_TEST_ID)

    expect(divider).toHaveStyle('margin-top: 0px')
    expect(divider).toHaveStyle('margin-bottom: 0px')
  })
})
