import figma from '@figma/code-connect'

import { Button as AlphaButton } from './Button'

figma.connect(
  AlphaButton,
  'https://www.figma.com/design/8J76noM3T1Sp5cNPhnYQiG/Action?node-id=112%3A5533',
  {
    props: {
      size: figma.enum('size', {
        small: 's',
        xsmall: 'xs',
        'medium (default)': 'm',
        large: 'l',
        xlarge: 'xl',
      } as const),
      text: figma.string('🔄 text'),
      variant: figma.enum('variant', {
        primary: 'primary',
        secondary: 'secondary',
        tertiary: 'tertiary',
      } as const),
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
      } as const),
      /**
       * TODO: Add Code Connect for Icon component
       * @see {@link https://github.com/figma/code-connect/blob/main/cli/scripts/README.md}
       */
      prefixContent: figma.instance('↪ 🔄 prefixContent'),
      suffixContent: figma.instance('↪ 🔄 suffixContent'),
    },
    example: (props) => (
      <AlphaButton
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
