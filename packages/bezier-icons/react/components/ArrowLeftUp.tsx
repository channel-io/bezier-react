import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgArrowLeftUp(props: SVGProps<SVGSVGElement>) {
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
        d="M20.0002 20.0001C20.3906 19.6097 20.3906 18.9766 20.0002 18.5861L7.41418 6.00012H19.0002C19.5525 6.00012 20.0002 5.55241 20.0002 5.00012C20.0002 4.44784 19.5525 4.00012 19.0002 4.00012H5.50018C4.67318 4.00012 4.00018 4.67312 4.00018 5.50012V19.0001C4.00018 19.5524 4.4479 20.0001 5.00018 20.0001C5.55247 20.0001 6.00018 19.5524 6.00018 19.0001V7.41412L18.5862 20.0001C18.9766 20.3906 19.6097 20.3906 20.0002 20.0001Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgArrowLeftUp)
