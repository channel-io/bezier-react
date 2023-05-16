import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgCartAbandoned(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 5h2.775l.935 8.44A4 4 0 0 0 9.686 17h6.629a4 4 0 0 0 3.976-3.558L20.45 12h-2.013l-.135 1.22A2 2 0 0 1 16.315 15H9.686a2 2 0 0 1-1.988-1.78L7.12 8H10V6H6.898l-.135-1.22A2 2 0 0 0 4.775 3H2v2Zm4 15c0-1.101.9-2 2-2s2 .899 2 2c0 1.1-.9 2-2 2s-2-.9-2-2Zm10 0c0-1.101.9-2 2-2s2 .899 2 2c0 1.1-.9 2-2 2s-2-.9-2-2Zm.3-8.401a.493.493 0 0 1-.664 0c-1.092-.986-2.89-2.664-3.951-3.94-.986-1.184-.961-2.822.116-3.898.203-.203.47-.366.758-.497 1.196-.54 2.76-.146 3.41 1.079.648-1.225 2.213-1.62 3.409-1.08.288.132.555.295.758.498 1.077 1.076 1.102 2.714.117 3.899-1.062 1.275-2.86 2.953-3.952 3.939Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgCartAbandoned)
