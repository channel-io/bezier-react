import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgClock(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.049 11.999c0 4.438-3.611 8.049-8.049 8.049-4.438 0-8.049-3.611-8.049-8.049 0-4.437 3.611-8.048 8.049-8.048 4.438 0 8.049 3.611 8.049 8.048ZM2 11.999c0 5.515 4.485 10 10 10s10-4.485 10-10S17.515 2 12 2 2 6.484 2 11.999Zm10-5.978a1 1 0 0 1 1 1v4.315l2.64 1.352a1 1 0 0 1-.912 1.78l-3.184-1.63a1 1 0 0 1-.544-.89V7.02a1 1 0 0 1 1-1Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgClock)
