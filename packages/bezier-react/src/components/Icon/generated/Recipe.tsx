import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgRecipe(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="currentColor" d="M17 15H7v2h10v-2Z" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.5 2C3.673 2 3 2.673 3 3.5v17c0 .827.673 1.5 1.5 1.5h15c.827 0 1.5-.673 1.5-1.5v-17c0-.827-.673-1.5-1.5-1.5h-15ZM19 20H5V4h2v8l3-2.183L13 12V4h6v16Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgRecipe)
