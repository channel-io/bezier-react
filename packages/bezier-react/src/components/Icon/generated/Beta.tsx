import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgBeta(props: SVGProps<SVGSVGElement>) {
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
        d="M7.5 7.722a4.222 4.222 0 1 1 8.444 0V7.8a4.28 4.28 0 0 1-.54 2.087A4.7 4.7 0 0 1 12.8 18.5h-2.299V20a1.5 1.5 0 0 1-3 0V7.722Zm3 7.778h2.3a1.7 1.7 0 1 0 0-3.4h-2.3v3.4Zm0-6.4h1.144a1.3 1.3 0 0 0 1.3-1.3v-.078a1.222 1.222 0 1 0-2.444 0V9.1Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgBeta)
