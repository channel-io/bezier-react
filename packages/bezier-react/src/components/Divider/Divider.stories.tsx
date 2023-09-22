import React from 'react'

import type {
  Meta,
  StoryFn,
  StoryObj,
} from '@storybook/react'

import { styled } from '~/src/foundation'

import { ListItem } from '~/src/components/ListItem'

import Divider from './Divider'
import type DividerProps from './Divider.types'

export default {
  component: Divider,
  argTypes: {
    orientation: {
      control: {
        type: 'radio',
        options: ['horizontal', 'vertical'],
      },
    },
    withoutSideIndent: {
      control: {
        type: 'boolean',
      },
    },
    withoutParallelIndent: {
      control: {
        type: 'boolean',
      },
    },
    withoutIndent: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta

interface WrapperProps {
  direction?: 'column' | 'row'
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ direction = 'column' }) => direction};
  width: 200px;
  height: 200px;
`

const Template: StoryFn<DividerProps> = (props) => (
  <Wrapper>
    <Divider {...props} />
  </Wrapper>
)

export const Primary: StoryObj<DividerProps> = {
  render: Template,

  args: {
    orientation: 'horizontal',
  },
}

const CompositionTemplate: StoryFn<DividerProps> = ({
  orientation,
  ...rest
}) => (
  <Wrapper direction={orientation === 'horizontal' ? 'column' : 'row'}>
    <ListItem content="Channel" />
    <Divider orientation={orientation} {...rest} />
    <ListItem content="Bezier" />
  </Wrapper>
)

export const Composition: StoryObj<DividerProps> = {
  render: CompositionTemplate,

  args: {
    orientation: 'horizontal',
  },
}
