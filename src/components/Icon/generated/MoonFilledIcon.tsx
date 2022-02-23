import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgMoonFilledIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        d="M21.206 15.91c.178-.416-.287-.793-.704-.617A9 9 0 0 1 8.707 3.498c.176-.417-.201-.882-.618-.704A10.003 10.003 0 0 0 2 12c0 5.523 4.477 10 10 10 4.135 0 7.684-2.51 9.206-6.09Z"
      />
    </svg>
  )
}

export default createIcon(SvgMoonFilledIcon)
