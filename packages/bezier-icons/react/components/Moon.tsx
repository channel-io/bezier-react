import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgMoon(props: SVGProps<SVGSVGElement>) {
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
        d="M9.778 2.899a1.56 1.56 0 0 1 .26 1.605 7.255 7.255 0 0 0 9.459 9.459 1.56 1.56 0 0 1 1.604.259c.43.37.682 1.024.39 1.69A10.174 10.174 0 0 1 12.171 22C6.554 22 2 17.446 2 11.828 2 7.661 4.505 4.082 8.087 2.51a1.444 1.444 0 0 1 1.691.389ZM7.796 4.925a8.172 8.172 0 1 0 11.28 11.28 9.255 9.255 0 0 1-11.28-11.28Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgMoon)
