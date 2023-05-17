import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgMenuUnfold(props: SVGProps<SVGSVGElement>) {
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
        d="M3.01599 5.00009C3.01599 5.55238 3.46371 6.00009 4.01599 6.00009H20.016C20.5683 6.00009 21.016 5.55238 21.016 5.00009C21.016 4.44781 20.5683 4.00009 20.016 4.00009H4.01599C3.46371 4.00009 3.01599 4.44781 3.01599 5.00009Z"
      />
      <path
        fill="currentColor"
        d="M12 12.0001C12 12.5524 12.4477 13.0001 13 13.0001H20C20.5523 13.0001 21 12.5524 21 12.0001C21 11.4478 20.5523 11.0001 20 11.0001H13C12.4477 11.0001 12 11.4478 12 12.0001Z"
      />
      <path
        fill="currentColor"
        d="M21.016 19.0001C21.016 19.5524 20.5683 20.0001 20.016 20.0001H13.016C12.4637 20.0001 12.016 19.5524 12.016 19.0001C12.016 18.4478 12.4637 18.0001 13.016 18.0001H20.016C20.5683 18.0001 21.016 18.4478 21.016 19.0001Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgMenuUnfold)
