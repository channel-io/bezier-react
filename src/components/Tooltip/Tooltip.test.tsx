/* External dependencies */
import React from 'react'
import { fireEvent } from '@testing-library/dom'

/* Internal dependencies */
import { css } from 'Foundation'
import { render } from 'Utils/testUtils'
import Tooltip, { TOOLTIP_TEST_ID } from './Tooltip'
import TooltipProps from './Tooltip.types'

const ROOT_TESTID = 'container'

const RootTooltip: React.FC<TooltipProps> = ({ children, ...rests }) => (
  <div id="main" data-testid={ROOT_TESTID}>
    <Tooltip {...rests}>
      { children }
    </Tooltip>
  </div>
)

describe('Tooltip test >', () => {
  let props: TooltipProps

  const content = 'Hovered'

  beforeEach(() => {
    props = {
      children: 'Text',
      content,
    }

    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  const renderTooltip = (optionProps?: TooltipProps) => render(
    <RootTooltip {...props} {...optionProps} />,
  )

  it('Tooltip with default props', () => {
    const { getByTestId } = renderTooltip()
    const rendered = getByTestId(ROOT_TESTID)

    fireEvent.mouseOver(getByTestId(TOOLTIP_TEST_ID))

    jest.runAllTimers()

    expect(rendered).toMatchSnapshot()
  })

  it('Tooltip with contentInterpolation prop', async () => {
    const { getByTestId } = renderTooltip({
      contentInterpolation: css`background-color: black;`,
    })
    const rendered = getByTestId(ROOT_TESTID)

    fireEvent.mouseOver(getByTestId(TOOLTIP_TEST_ID))

    jest.runAllTimers()

    expect(rendered).toMatchSnapshot()
  })
})
