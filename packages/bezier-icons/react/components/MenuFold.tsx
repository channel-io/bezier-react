import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgMenuFold(props: SVGProps<SVGSVGElement>) {
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
        d="M3.016 5.00009C3.016 5.55238 3.46372 6.00009 4.016 6.00009H20.016C20.5683 6.00009 21.016 5.55238 21.016 5.00009C21.016 4.44781 20.5683 4.00009 20.016 4.00009H4.016C3.46372 4.00009 3.016 4.44781 3.016 5.00009Z"
      />
      <path
        fill="currentColor"
        d="M3 12.0001C3 12.5524 3.44772 13.0001 4 13.0001H11C11.5523 13.0001 12 12.5524 12 12.0001C12 11.4478 11.5523 11.0001 11 11.0001H4C3.44772 11.0001 3 11.4478 3 12.0001Z"
      />
      <path
        fill="currentColor"
        d="M12.016 19.0001C12.016 19.5524 11.5683 20.0001 11.016 20.0001H4.01599C3.46371 20.0001 3.01599 19.5524 3.01599 19.0001C3.01599 18.4478 3.46371 18.0001 4.01599 18.0001H11.016C11.5683 18.0001 12.016 18.4478 12.016 19.0001Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgMenuFold)
