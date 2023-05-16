import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgMapPin(props: SVGProps<SVGSVGElement>) {
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
        d="M12 12.732a3.214 3.214 0 1 1 0-6.428 3.214 3.214 0 0 1 0 6.428Zm6.257-7.4a7.54 7.54 0 0 0-12.513 0c-1.761 2.573-1.597 6.013.146 8.599l5.667 8.408a.534.534 0 0 0 .888 0l5.666-8.408c1.743-2.586 1.908-6.026.146-8.599Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgMapPin)
