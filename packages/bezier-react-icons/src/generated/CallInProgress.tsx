import * as React from 'react'
import { SVGProps } from 'react'
import createBezierIcon from '../createBezierIcon'

function SvgCallInProgress(props: SVGProps<SVGSVGElement>) {
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
        d="M14 2a1 1 0 1 0 0 2 6 6 0 0 1 6 6 1 1 0 1 0 2 0 8 8 0 0 0-8-8ZM4.2 4.955c-1.614 1.614-1.614 6.133 3.55 11.298 5.166 5.165 9.685 5.165 11.3 3.551.968-.968 1.23-2.384.645-3.228-.517-.775-1.974-1.937-3.228-1.937-.756 0-1.407.558-1.943 1.018-.379.325-.7.601-.962.596-.632-.012-2.276-.707-3.69-2.121-1.414-1.414-2.109-3.058-2.121-3.69-.005-.261.27-.583.596-.962.46-.536 1.018-1.186 1.018-1.943 0-1.254-1.162-2.711-1.937-3.228-.844-.585-2.26-.323-3.228.646ZM13 7a1 1 0 0 1 1-1 4 4 0 0 1 4 4 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 0 1-1-1Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgCallInProgress)
