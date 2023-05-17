import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgTriangleUp(props: SVGProps<SVGSVGElement>) {
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
        d="M11.703 8.63902L6.09041 15.3744C5.88053 15.6267 6.05951 16.0092 6.38655 16.0092H17.613C17.94 16.0092 18.119 15.6267 17.9104 15.3744L12.2966 8.63902C12.1421 8.45361 11.8575 8.45361 11.703 8.63902Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgTriangleUp)
