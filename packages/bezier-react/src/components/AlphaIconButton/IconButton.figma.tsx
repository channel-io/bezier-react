import React from 'react'

import figma from '@figma/code-connect'

import { IconButton as AlphaIconButton } from './IconButton'

figma.connect(
  AlphaIconButton,
  'https://www.figma.com/design/8J76noM3T1Sp5cNPhnYQiG/Action?node-id=112%3A6652',
  {
    props: {
      size: figma.enum('size', {
        small: 's',
        xsmall: 'xs',
        'medium (default)': 'm',
        large: 'l',
        xlarge: 'xl',
      }),
      variant: figma.enum('variant', {
        primary: 'primary',
        secondary: 'secondary',
        tertiary: 'tertiary',
      }),
      color: figma.enum('color', {
        blue: 'blue',
        cobalt: 'cobalt',
        red: 'red',
        orange: 'orange',
        green: 'green',
        pink: 'pink',
        purple: 'purple',
        darkGrey: 'dark-grey',
        lightGrey: 'light-grey',
        'white (absolute)': 'white-absolute',
      }),
      shape: figma.enum('shape', {
        circle: 'circle',
        rectangle: 'rectangle',
      }),
      /**
       * TODO: Add Code Connect for Icon component
       * @see {@link https://github.com/figma/code-connect/blob/main/cli/scripts/README.md}
       */
      content: figma.instance('🔄 content'),
    },
    example: (props) => (
      <AlphaIconButton
        size={props.size}
        variant={props.variant}
        color={props.color}
        content={props.content}
        shape={props.shape}
      />
    ),
  }
)
