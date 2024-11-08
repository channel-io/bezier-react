import React from 'react'

import figma from '@figma/code-connect'

import { FloatingIconButton as AlphaFloatingIconButton } from './FloatingIconButton'

figma.connect(
  AlphaFloatingIconButton,
  'https://www.figma.com/design/8J76noM3T1Sp5cNPhnYQiG/Action?node-id=112%3A9057',
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
      }),
      /**
       * TODO: Add Code Connect for Icon component
       * @see {@link https://github.com/figma/code-connect/blob/main/cli/scripts/README.md}
       */
      content: figma.instance('🔄 content'),
    },
    example: (props) => (
      <AlphaFloatingIconButton
        size={props.size}
        variant={props.variant}
        color={props.color}
        content={props.content}
      />
    ),
  }
)
