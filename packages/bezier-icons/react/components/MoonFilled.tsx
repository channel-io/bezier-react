import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgMoonFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M20.6408 17.0367C21.0976 16.2548 20.1855 15.4689 19.3101 15.7007C18.5729 15.896 17.7986 16 17 16C12.0294 16 8 11.9705 8 6.99996C8 6.20138 8.10401 5.4271 8.29922 4.68991C8.53103 3.8145 7.74515 2.90239 6.96321 3.35917C3.9945 5.09339 2 8.31376 2 12C2 17.5228 6.47715 22 12 22C15.6862 22 18.9066 20.0055 20.6408 17.0367Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgMoonFilled)
