import React from 'react'

import figma from '@figma/code-connect'

import { FloatingButton as AlphaFloatingButton } from './FloatingButton'

figma.connect(
  AlphaFloatingButton,
  'https://www.figma.com/design/8J76noM3T1Sp5cNPhnYQiG/Action?node-id=112%3A8172',
  {
    props: {
      size: figma.enum('size', {
        small: 's',
        xsmall: 'xs',
        'medium (default)': 'm',
        large: 'l',
        xlarge: 'xl',
      }),
      text: figma.string('🔄 text'),
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
      prefixContent: figma.instance('↪ 🔄 prefixContent'),
      suffixContent: figma.instance('↪ 🔄 suffixContent'),
    },
    example: (props) => (
      <AlphaFloatingButton
        size={props.size}
        text={props.text}
        variant={props.variant}
        color={props.color}
        prefixContent={props.prefixContent}
        suffixContent={props.suffixContent}
      />
    ),
  }
)
