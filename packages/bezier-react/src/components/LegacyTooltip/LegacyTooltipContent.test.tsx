import React from 'react'

import { fireEvent } from '@testing-library/dom'
import { act } from '@testing-library/react'

import { render } from '~/src/utils/testUtils'

import {
  LegacyTooltip,
  TOOLTIP_CONTENT_TEST_ID,
  TOOLTIP_TEST_ID,
} from './LegacyTooltip'
import { type LegacyTooltipProps } from './LegacyTooltip.types'

const RootTooltip: React.FC<LegacyTooltipProps> = ({ children, ...rests }) => (
  <LegacyTooltip {...rests}>
    { children }
  </LegacyTooltip>
)

describe('TooltipContent test >', () => {
  let props: LegacyTooltipProps

  const PLAIN_TEXT_CONTENT = 'plain text content'

  const ARRAY_TEXT_CONTENT_PREFIX = 'array text content'
  const ARRAY_TEXT_CONTENT = [
    `${ARRAY_TEXT_CONTENT_PREFIX} 1`,
    `${ARRAY_TEXT_CONTENT_PREFIX} 2`,
    `${ARRAY_TEXT_CONTENT_PREFIX} 3`,
  ]

  const LINEBREAK_TEXT_CONTENT_PREFIX = 'linebreak text content'
  const LINEBREAK_TEXT_CONTENT = 'linebreak text content 1 \n linebreak text content 2 \n linebreak text content 3'

  beforeEach(() => {
    props = {
      children: 'Text',
    }

    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  const renderTooltip = (optionProps?: LegacyTooltipProps) => render(
    <RootTooltip {...props} {...optionProps} />,
  )

  it('TooltipContent with plain text content >', () => {
    const { getByTestId, queryByText } = renderTooltip({ content: PLAIN_TEXT_CONTENT })

    act(() => {
      fireEvent.mouseOver(getByTestId(TOOLTIP_TEST_ID))

      jest.runAllTimers()
    })

    expect(getByTestId(TOOLTIP_CONTENT_TEST_ID)).toContainElement(queryByText(PLAIN_TEXT_CONTENT))
  })

  it('TooltipContent with array of text contents >', () => {
    const { getByTestId, queryAllByText } = renderTooltip({ content: ARRAY_TEXT_CONTENT })

    act(() => {
      fireEvent.mouseOver(getByTestId(TOOLTIP_TEST_ID))

      jest.runAllTimers()
    })

    expect(queryAllByText(ARRAY_TEXT_CONTENT_PREFIX, { exact: false }).length).toEqual(ARRAY_TEXT_CONTENT.length)
  })

  it('TooltipContent with linebreak text contents >', () => {
    const { getByTestId, queryAllByText } = renderTooltip({ content: LINEBREAK_TEXT_CONTENT })

    act(() => {
      fireEvent.mouseOver(getByTestId(TOOLTIP_TEST_ID))

      jest.runAllTimers()
    })

    const linebreakCount = LINEBREAK_TEXT_CONTENT.match(/\n/g)?.length ?? 0

    expect(queryAllByText(LINEBREAK_TEXT_CONTENT_PREFIX, { exact: false }).length).toEqual(linebreakCount + 1)
  })
})
