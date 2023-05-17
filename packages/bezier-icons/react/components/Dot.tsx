import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgDot(props: SVGProps<SVGSVGElement>) {
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
        d="M17.0002 12.0001C17.0002 14.7613 14.7615 17.0001 12.0002 17.0001C9.23896 17.0001 7.00021 14.7613 7.00021 12.0001C7.00021 9.23884 9.23896 7.00009 12.0002 7.00009C14.7615 7.00009 17.0002 9.23884 17.0002 12.0001Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgDot)
