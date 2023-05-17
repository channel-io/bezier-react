import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgFastForward(props: SVGProps<SVGSVGElement>) {
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
        d="M12 13.0336L3.16581 18.9187C2.66738 19.2507 2 18.8934 2 18.2945V5.70561C2 5.1067 2.66738 4.74938 3.16581 5.08143L12 10.9665V5.70561C12 5.1067 12.6674 4.74938 13.1658 5.08143L22.6144 11.3759C23.06 11.6727 23.06 12.3274 22.6144 12.6242L13.1658 18.9187C12.6674 19.2507 12 18.8934 12 18.2945V13.0336Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgFastForward)
