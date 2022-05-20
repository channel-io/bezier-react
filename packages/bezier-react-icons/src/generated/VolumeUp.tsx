import * as React from 'react'
import { SVGProps } from 'react'
import createBezierIcon from '../createBezierIcon'

function SvgVolumeUp(props: SVGProps<SVGSVGElement>) {
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
        d="m12.96 2-.131.008a1 1 0 0 0-.576.284L7.545 7H2.96a1 1 0 0 0-1 1v8l.007.117A1 1 0 0 0 2.96 17l4.585-.001 4.708 4.708a1 1 0 0 0 .707.293h1a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-1Zm0 2.413v15.172l-4.293-4.293-.099-.086a1 1 0 0 0-.608-.207h-4v-6h4a1 1 0 0 0 .707-.292l4.293-4.294Zm7.1 1.294a8.9 8.9 0 0 1 .2 12.38l-.2.206-1.414-1.414a6.9 6.9 0 0 0 .18-9.572l-.18-.186 1.414-1.414Zm-2.416 2.416a5.483 5.483 0 0 1 .173 7.572l-.173.181-1.414-1.414a3.483 3.483 0 0 0 .14-4.776l-.14-.149 1.414-1.414Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgVolumeUp)
