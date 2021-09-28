/* External dependencies */
import React from 'react'
import { getWindow } from 'ssr-window'

/* Internal dependencies */
import { render } from '../../utils/testUtils'
import OverlayProps from './Overlay.types'
import Overlay, { OVERLAY_TEST_ID } from './Overlay'

describe('Overlay test >', () => {
  let props: OverlayProps

  beforeEach(() => {
    props = {
      container: getWindow().document.body,
      show: true,
    }
  })

  const renderOverlay = (optionProps?: OverlayProps) => render(
    <div>
      <div />
      <Overlay {...props} {...optionProps}>
        <div>
          test
        </div>
      </Overlay>
    </div>,
  )

  it('Snapshot >', () => {
    // const { getByTestId: getContainerTestId } = renderContainer()
    // const renderedContainer = getContainerTestId('container')

    const { getByTestId } = renderOverlay()
    const rendered = getByTestId(OVERLAY_TEST_ID)
    expect(rendered).toMatchSnapshot()
  })
})
