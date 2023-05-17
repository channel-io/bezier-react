import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgWater(props: SVGProps<SVGSVGElement>) {
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
        d="M18.1106 10.0649L12.4446 1.65592C12.3386 1.49892 12.1696 1.41992 12.0006 1.41992C11.8316 1.41992 11.6626 1.49892 11.5566 1.65592L5.88957 10.0649C4.14657 12.6509 3.98257 16.0909 5.74357 18.6639C7.26357 20.8849 9.63257 21.9959 12.0006 21.9959C14.3686 21.9959 16.7366 20.8849 18.2566 18.6639C20.0186 16.0909 19.8536 12.6509 18.1106 10.0649Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgWater)
