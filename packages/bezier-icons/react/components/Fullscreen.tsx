import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgFullscreen(props: SVGProps<SVGSVGElement>) {
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
        d="M19.0002 10.0001H21.0002V4.50009C21.0002 3.67309 20.3272 3.00009 19.5002 3.00009H14.0002V5.00009H19.0002V10.0001ZM14.0002 21.0001H19.5002C20.3272 21.0001 21.0002 20.3271 21.0002 19.5001V14.0001H19.0002V19.0001H14.0002V21.0001ZM10.0002 21.0001H4.50018C3.67318 21.0001 3.00018 20.3271 3.00018 19.5001V14.0001H5.00018V19.0001H10.0002V21.0001ZM3.00018 10.0001H5.00018V5.00009H10.0002V3.00009H4.50018C3.67318 3.00009 3.00018 3.67309 3.00018 4.50009V10.0001Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgFullscreen)
