import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgCallFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M4.69998 4.45491C3.08593 6.06896 3.08593 10.5883 8.25088 15.7532C13.4158 20.9182 17.9352 20.9182 19.5492 19.3042C20.5176 18.3357 20.7804 16.9199 20.1948 16.0761C19.6783 15.3013 18.2207 14.1392 16.9667 14.1392C15.6755 14.1392 14.6931 15.7658 14.0615 15.7532C13.4298 15.7407 11.7864 15.0461 10.3722 13.6319C8.95799 12.2177 8.26339 10.5743 8.25088 9.94267C8.23837 9.31101 9.86493 8.32862 9.86493 7.03739C9.86494 5.78347 8.70282 4.32579 7.92807 3.80928C7.08425 3.22371 5.66841 3.48648 4.69998 4.45491Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgCallFilled)
