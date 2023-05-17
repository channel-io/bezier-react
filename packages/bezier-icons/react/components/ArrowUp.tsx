import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgArrowUp(props: SVGProps<SVGSVGElement>) {
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
        d="M3.28481 11.8367C3.66302 12.2391 4.29588 12.2588 4.69834 11.8806L11 5.95861V20C11 20.5523 11.4477 21 12 21C12.5523 21 13 20.5523 13 20V5.93318L19.3287 11.8806C19.7312 12.2588 20.364 12.2391 20.7422 11.8367C21.1205 11.4342 21.1008 10.8014 20.6983 10.4232L13.0408 3.22693C12.4634 2.68437 11.5637 2.68437 10.9863 3.22693L3.32872 10.4232C2.92626 10.8014 2.9066 11.4342 3.28481 11.8367Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgArrowUp)
