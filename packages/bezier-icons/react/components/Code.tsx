import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgCode(props: SVGProps<SVGSVGElement>) {
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
        d="M15.394 4.08a1 1 0 0 1 .525 1.314l-6 14a1 1 0 1 1-1.838-.788l6-14a1 1 0 0 1 1.313-.525ZM8.207 4.293a1 1 0 0 1 0 1.414L4.914 9l3.293 3.293a1 1 0 1 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0ZM17.207 10.293a1 1 0 1 0-1.414 1.414L19.086 15l-3.293 3.293a1 1 0 0 0 1.414 1.414l4-4a1 1 0 0 0 0-1.414l-4-4Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgCode)
