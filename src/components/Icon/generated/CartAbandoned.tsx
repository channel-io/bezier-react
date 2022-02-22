import * as React from 'react'
import { SVGProps } from 'react'

function SvgCartAbandoned(props: SVGProps<SVGSVGElement>) {
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
        d="M18.105 15H7.895l-.778-7H10V6H6.895l-.284-2.556A.5.5 0 0 0 6.114 3H2v2h2.772l1.283 11.555a.5.5 0 0 0 .497.445h12.895a.5.5 0 0 0 .497-.445L20.45 12h-2.012l-.333 3ZM6 20c0-1.101.9-2 2-2s2 .899 2 2c0 1.1-.9 2-2 2s-2-.9-2-2Zm10 0c0-1.101.9-2 2-2s2 .899 2 2c0 1.1-.9 2-2 2s-2-.9-2-2Zm.3-8.401a.493.493 0 0 1-.664 0c-1.092-.986-2.89-2.664-3.951-3.94-.986-1.184-.961-2.822.116-3.898.203-.203.47-.366.758-.497 1.196-.54 2.76-.146 3.41 1.079.648-1.225 2.213-1.62 3.409-1.08.288.132.555.295.758.498 1.077 1.076 1.102 2.714.117 3.899-1.062 1.275-2.86 2.953-3.952 3.939Z"
      />
    </svg>
  )
}

export default SvgCartAbandoned
