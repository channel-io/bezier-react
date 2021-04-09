/* External dependencies */
import React from 'react'
import { base } from 'paths.macro'

/* Internal depependencies */
import { styled } from '../../foundation'
import { getTitle } from '../../utils/etcUtils'
import { iconList } from '../Icon/Icon.stories'
import Toast from './Toast'
import ToastProps, { Appearance, Placement } from './Toast.types'

export default {
  title: getTitle(base),
  component: Toast,
  argTypes: {
    content: {
      control: {
        type: 'text',
      },
    },
    appearance: {
      control: {
        type: 'radio',
        options: [
          Appearance.Succes,
          Appearance.Warning,
          Appearance.Error,
          Appearance.Info,
        ],
      },
    },
    placement: {
      control: {
        type: 'radio',
        options: [
          Placement.TopCenter,
          Placement.TopLeft,
          Placement.TopRight,
          Placement.BottomCenter,
          Placement.BottomLeft,
          Placement.BottomRight,
        ],
      },
    },
    iconName: {
      control: {
        type: 'select',
        options: iconList,
      },
    },
  },
}

const Container = styled.div`
  position: relative;
  width: 600px;
  height: 500px;
  border: 1px solid grey;
`

const Template = ({ ...otherProps }) => (
  <Container>
    <Toast
      {...otherProps}
    />
  </Container>
)

export const Primary: ToastProps = Template.bind({})

Primary.args = {
  appearance: Appearance.Info,
  placement: Placement.BottomLeft,
  content: '안내문구입니다.',
  iconName: 'info-filled',
}
