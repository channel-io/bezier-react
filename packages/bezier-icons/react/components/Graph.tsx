import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgGraph(props: SVGProps<SVGSVGElement>) {
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
        d="M8.25 4a2 2 0 0 1 2-2h3.5a2 2 0 0 1 2 2v3h3.5a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4.75a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h3.5V4Zm2 0v15h3.5V4h-3.5Zm-5.5 10v5h3.5v-5h-3.5Zm14.5 5h-3.5V9h3.5v10Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgGraph)
