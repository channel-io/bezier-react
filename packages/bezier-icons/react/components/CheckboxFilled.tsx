import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgCheckboxFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm-.414 9.14L8 10.724l2.86 2.861L17 7.446l1.414 1.414-7.554 7.555-4.274-4.276Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgCheckboxFilled)
