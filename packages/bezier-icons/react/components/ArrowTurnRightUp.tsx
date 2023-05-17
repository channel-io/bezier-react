import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgArrowTurnRightUp(props: SVGProps<SVGSVGElement>) {
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
        d="M17.2071 14.2071C16.8166 14.5976 16.1834 14.5976 15.7929 14.2071C15.4024 13.8166 15.4024 13.1834 15.7929 12.7929L18.5858 10L10 10C7.23858 10 5 12.2386 5 15V19C5 19.5523 4.55228 20 4 20C3.44772 20 3 19.5523 3 19V15C3 11.134 6.13401 8 10 8L18.5858 8L15.7929 5.20711C15.4024 4.81658 15.4024 4.18342 15.7929 3.79289C16.1834 3.40237 16.8166 3.40237 17.2071 3.79289L21.7071 8.29289C22.0976 8.68342 22.0976 9.31658 21.7071 9.70711L17.2071 14.2071Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgArrowTurnRightUp)
