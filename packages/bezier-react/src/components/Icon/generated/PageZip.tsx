import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'

function SvgPageZip(props: SVGProps<SVGSVGElement>) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 20h10v-9.63l-4-4.666V10h-2V4H7v16Zm5.911-17.474L18.64 9.21c.233.272.361.62.361.976V20.5c0 .827-.673 1.5-1.5 1.5h-11c-.827 0-1.5-.673-1.5-1.5v-17C5 2.673 5.673 2 6.5 2h5.27c.44 0 .856.192 1.141.526ZM11 14h2v-2h-2v2Zm0 4h2v-2h-2v2Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgPageZip)
