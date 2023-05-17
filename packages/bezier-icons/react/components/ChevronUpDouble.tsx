import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgChevronUpDouble(props: SVGProps<SVGSVGElement>) {
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
        d="M4.3492 17.2408C3.92987 17.6002 3.88131 18.2315 4.24073 18.6508C4.60015 19.0702 5.23145 19.1187 5.65078 18.7593L12 13.3171L18.3492 18.7593C18.7685 19.1187 19.3998 19.0702 19.7592 18.6508C20.1187 18.2315 20.0701 17.6002 19.6508 17.2408L12.6508 11.2408C12.2763 10.9198 11.7237 10.9198 11.3492 11.2408L4.3492 17.2408Z"
      />
      <path
        fill="currentColor"
        d="M4.3492 9.24079C3.92987 9.60021 3.88131 10.2315 4.24073 10.6508C4.60015 11.0702 5.23145 11.1187 5.65078 10.7593L12 5.31712L18.3492 10.7593C18.7685 11.1187 19.3998 11.0702 19.7592 10.6508C20.1187 10.2315 20.0701 9.60021 19.6508 9.24079L12.6508 3.24079C12.2763 2.9198 11.7237 2.9198 11.3492 3.24079L4.3492 9.24079Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgChevronUpDouble)
