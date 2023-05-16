import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgInfoFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M12 9A1.5 1.5 0 1 1 12 6 1.5 1.5 0 0 1 12 9Zm-1 9h2v-8h-2v8Zm1-16C6.486 2 2 6.486 2 12s4.486 10 10 10c5.515 0 10-4.486 10-10S17.515 2 12 2Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgInfoFilled)
