import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgFaceWithTears(props: SVGProps<SVGSVGElement>) {
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
        d="M14.015 9.72c0 1.495.353 2.105 1.199 2.105.845 0 1.198-.61 1.198-2.105s-.353-2.106-1.198-2.106c-.846 0-1.199.611-1.199 2.106Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.478 2 12s4.477 10 10 10c5.522 0 10-4.478 10-10S17.522 2 12 2Zm0 2c4.411 0 8 3.59 8 8 0 4.411-3.589 8-8 8a7.986 7.986 0 0 1-2.033-.262 3.065 3.065 0 0 0 1.085-1.978 4.503 4.503 0 0 0 3.904-1.005 1 1 0 0 0-1.312-1.51 2.505 2.505 0 0 1-3.26.025l-1.733-3.45c.044.003.089.005.135.005.845 0 1.198-.61 1.198-2.105s-.353-2.106-1.198-2.106-1.199.611-1.199 2.106c0 .562.05.998.157 1.325l-2.487 4.95a3.09 3.09 0 0 0-.081.176A7.953 7.953 0 0 1 4 12c0-4.412 3.588-8 8-8ZM6.885 16.863l1.117-2.225 1.119 2.225a1.251 1.251 0 1 1-2.236 0Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgFaceWithTears)
