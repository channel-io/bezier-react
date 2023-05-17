import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgArrowDown(props: SVGProps<SVGSVGElement>) {
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
        d="M3.28482 12.1633C3.66303 11.7609 4.29589 11.7412 4.69835 12.1194L11.0009 18.0422C11.0003 18.0282 11 18.0142 11 18V4.00003C11 3.44774 11.4477 3.00003 12 3.00003C12.5523 3.00003 13 3.44774 13 4.00003V18C13 18.0232 12.9992 18.0462 12.9977 18.069L19.3287 12.1194C19.7312 11.7412 20.364 11.7609 20.7423 12.1633C21.1205 12.5658 21.1008 13.1986 20.6984 13.5768L13.0408 20.7731C12.4634 21.3156 11.5637 21.3156 10.9863 20.7731L3.32872 13.5768C2.92626 13.1986 2.90661 12.5658 3.28482 12.1633Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgArrowDown)
