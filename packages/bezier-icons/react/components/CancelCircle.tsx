import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgCancelCircle(props: SVGProps<SVGSVGElement>) {
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
        d="M4.0002 12.0001C4.0002 16.4111 7.5892 20.0001 12.0002 20.0001C16.4112 20.0001 20.0002 16.4111 20.0002 12.0001C20.0002 7.58912 16.4112 4.00012 12.0002 4.00012C7.5892 4.00012 4.0002 7.58912 4.0002 12.0001ZM12.0002 22.0001C6.4772 22.0001 2.0002 17.5231 2.0002 12.0001C2.0002 6.47712 6.4772 2.00012 12.0002 2.00012C17.5232 2.00012 22.0002 6.47712 22.0002 12.0001C22.0002 17.5231 17.5232 22.0001 12.0002 22.0001ZM11.9996 13.4165L15.4406 16.8575L16.8566 15.4415L13.4156 12.0005L16.8566 8.55952L15.4406 7.14352L11.9996 10.5845L8.55861 7.14352L7.14261 8.55952L10.5836 12.0005L7.14361 15.4405L8.55961 16.8565L11.9996 13.4165Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgCancelCircle)
