import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgTablet(props: SVGProps<SVGSVGElement>) {
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
        d="M7 2C5.89543 2 5 2.89543 5 4V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V12L17 14V19H7V5H19V4C19 2.89543 18.1046 2 17 2H7Z"
      />
      <path
        fill="currentColor"
        d="M10.4124 16.9995H9V15.5871L16.4754 8.11169L17.8878 9.52409L10.4124 16.9995Z"
      />
      <path
        fill="currentColor"
        d="M17.182 7.40459L18.5944 8.81799L20.0078 7.40459C20.3974 7.01503 20.3974 6.38274 20.0078 5.99218C19.6183 5.60262 18.985 5.60262 18.5944 5.99218L17.182 7.40459Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgTablet)
