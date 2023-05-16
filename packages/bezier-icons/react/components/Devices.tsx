import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgDevices(props: SVGProps<SVGSVGElement>) {
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
        d="M3.5 5h17c.827 0 1.5.673 1.5 1.5V9h-2V7H4v10h10v2H1a1 1 0 0 1 0-2h1V6.5C2 5.673 2.673 5 3.5 5Zm16.506 15h-3v-8h3v8Zm-4.5-10h6a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgDevices)
