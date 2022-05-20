import * as React from 'react'
import { SVGProps } from 'react'
import createBezierIcon from '../createBezierIcon'

function SvgStrikethrough(props: SVGProps<SVGSVGElement>) {
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
        d="M17.207 5.29c-2.29-2.618-6.257-2.931-8.959-.77A4.786 4.786 0 0 0 6.7 6.738 4.728 4.728 0 0 0 7.337 11H4a1 1 0 1 0 0 2h8.785a2.758 2.758 0 0 1 1.717 4.918c-1.88 1.504-4.63 1.274-6.204-.525l-.045-.052a1 1 0 0 0-1.506 1.317l.046.052c2.29 2.618 6.256 2.931 8.959.77a4.786 4.786 0 0 0 1.548-2.217A4.728 4.728 0 0 0 16.663 13H20a1 1 0 1 0 0-2h-8.785a2.758 2.758 0 0 1-1.717-4.918c1.88-1.504 4.63-1.274 6.204.525l.045.051a1 1 0 0 0 1.506-1.317l-.046-.051Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgStrikethrough)
