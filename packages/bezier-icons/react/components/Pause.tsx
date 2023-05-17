import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgPause(props: SVGProps<SVGSVGElement>) {
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
        d="M5.50024 21.0001H9.50024C9.77624 21.0001 10.0002 20.7761 10.0002 20.5001V3.50012C10.0002 3.22412 9.77624 3.00012 9.50024 3.00012H5.50024C5.22424 3.00012 5.00024 3.22412 5.00024 3.50012V20.5001C5.00024 20.7761 5.22424 21.0001 5.50024 21.0001ZM14.5002 21.0001H18.5002C18.7762 21.0001 19.0002 20.7761 19.0002 20.5001V3.50012C19.0002 3.22412 18.7762 3.00012 18.5002 3.00012H14.5002C14.2242 3.00012 14.0002 3.22412 14.0002 3.50012V20.5001C14.0002 20.7761 14.2242 21.0001 14.5002 21.0001Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgPause)
