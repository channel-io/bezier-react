import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgPlay(props: SVGProps<SVGSVGElement>) {
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
        d="M20.1456 11.3897C20.5643 11.6888 20.5643 12.3112 20.1456 12.6103L8.18593 21.1529C7.68953 21.5075 7 21.1526 7 20.5426L7 3.45739C7 2.84736 7.68953 2.49252 8.18593 2.84709L20.1456 11.3897Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgPlay)
