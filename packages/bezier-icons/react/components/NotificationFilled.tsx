import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgNotificationFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M5.857 8.144c0 1.555-.436 3.08-1.258 4.401l-2.35 3.771A1.1 1.1 0 0 0 3.182 18h17.641a1.1 1.1 0 0 0 .935-1.68l-2.352-3.776a8.324 8.324 0 0 1-1.259-4.4 6.144 6.144 0 0 0-12.289 0ZM12 22a4.002 4.002 0 0 1-3.874-3h7.748A4.002 4.002 0 0 1 12 22Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgNotificationFilled)
