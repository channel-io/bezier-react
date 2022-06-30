import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'

function SvgShuffle(props: SVGProps<SVGSVGElement>) {
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
        d="M15.041 8h3.752l-1.122 1.122a1 1 0 0 0 1.414 1.414l2.476-2.475a1.504 1.504 0 0 0 0-2.122l-2.476-2.475a1 1 0 0 0-1.414 1.414L18.793 6h-3.752c-.978 0-1.897.48-2.458 1.28l-5.805 8.293a1.002 1.002 0 0 1-.82.427H3a1 1 0 1 0 0 2h2.958a3 3 0 0 0 2.458-1.28l5.806-8.294a1 1 0 0 1 .82-.426ZM6.778 8.426l1.586 2.266 1.221-1.744L8.416 7.28A3.001 3.001 0 0 0 5.959 6H3a1 1 0 1 0 0 2h2.959a1 1 0 0 1 .819.426Z"
      />
      <path
        fill="currentColor"
        d="M17.672 13.464a1 1 0 0 1 1.414 0l2.475 2.475a1.501 1.501 0 0 1 0 2.121l-2.476 2.476a1 1 0 1 1-1.413-1.415l1.122-1.12h-3.752a3.004 3.004 0 0 1-2.458-1.28l-1.168-1.67 1.22-1.744 1.587 2.266a1 1 0 0 0 .819.427h3.752l-1.122-1.122a1 1 0 0 1 0-1.414Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgShuffle)
