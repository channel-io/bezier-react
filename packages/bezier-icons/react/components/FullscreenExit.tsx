import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgFullscreenExit(props: SVGProps<SVGSVGElement>) {
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
        d="M15.5002 10.0001H21.0002V8.00009H16.0002V3.00009H14.0002V8.50009C14.0002 9.32709 14.6732 10.0001 15.5002 10.0001ZM14.0002 21.0001H16.0002V16.0001H21.0002V14.0001H15.5002C14.6732 14.0001 14.0002 14.6731 14.0002 15.5001V21.0001ZM10.0002 21.0001H8.00018V16.0001H3.00018V14.0001H8.50018C9.32718 14.0001 10.0002 14.6731 10.0002 15.5001V21.0001ZM3.00018 10.0001H8.50018C9.32718 10.0001 10.0002 9.32709 10.0002 8.50009V3.00009H8.00018V8.00009H3.00018V10.0001Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgFullscreenExit)
