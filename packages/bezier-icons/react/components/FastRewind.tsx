import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgFastRewind(props: SVGProps<SVGSVGElement>) {
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
        d="M11.9987 13.0336L20.8329 18.9187C21.3314 19.2508 21.9987 18.8934 21.9987 18.2945V5.70563C21.9987 5.10672 21.3314 4.7494 20.8329 5.08145L11.9987 10.9666V5.70563C11.9987 5.10672 11.3314 4.7494 10.8329 5.08145L1.38428 11.3759C0.938704 11.6727 0.938702 12.3274 1.38428 12.6243L10.8329 18.9187C11.3314 19.2508 11.9987 18.8934 11.9987 18.2945V13.0336Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgFastRewind)
