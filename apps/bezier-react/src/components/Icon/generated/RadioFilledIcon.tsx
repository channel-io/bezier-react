import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgRadioFilledIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.667 8A5.34 5.34 0 0 0 8 13.333 5.34 5.34 0 0 0 13.334 8 5.34 5.34 0 0 0 8 2.667 5.34 5.34 0 0 0 2.667 8ZM1.334 8a6.667 6.667 0 1 1 13.333 0A6.667 6.667 0 0 1 1.334 8ZM8 11.333a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666Z"
      />
    </svg>
  )
}

export default createIcon(SvgRadioFilledIcon)
