import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgLandline(props: SVGProps<SVGSVGElement>) {
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
        d="M12 3c6.26 0 9 2.926 9 5.016 0 1.254-.699 2.34-1.565 2.507-.783.168-2.37-.024-3.13-.835-.459-.49-.515-1.272-.561-1.917-.033-.456-.06-.843-.222-1.01-.39-.4-1.808-1.014-3.522-1.014-1.714 0-3.131.614-3.522 1.015-.162.166-.19.553-.222 1.01-.046.644-.102 1.426-.56 1.915-.76.812-2.348 1.004-3.13.836C3.698 10.356 3 9.27 3 8.016 3 5.926 5.74 3 12 3ZM8.166 9.695A3 3 0 0 1 10.086 9h3.828a3 3 0 0 1 1.92.695l3.727 3.106A4 4 0 0 1 21 15.873V18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2.127a4 4 0 0 1 1.44-3.072l3.726-3.106ZM14.5 14.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgLandline)
