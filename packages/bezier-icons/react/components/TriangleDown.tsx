import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgTriangleDown(props: SVGProps<SVGSVGElement>) {
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
        d="M11.703 16.3701L6.09041 9.63478C5.88053 9.38241 6.05951 9 6.38655 9H17.613C17.94 9 18.119 9.38241 17.9104 9.63478L12.2966 16.3701C12.1421 16.5555 11.8575 16.5555 11.703 16.3701Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgTriangleDown)
