import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgArrowHookLeftDown(props: SVGProps<SVGSVGElement>) {
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
        d="M14.5002 3.02649H11.0002C10.4479 3.02649 10.0002 3.4742 10.0002 4.02649C10.0002 4.57877 10.4479 5.02649 11.0002 5.02649H14.5002C16.9812 5.02649 19.0002 7.04549 19.0002 9.52649C19.0002 12.0075 16.9812 14.0265 14.5002 14.0265H5.18118L8.47331 10.7335C8.86372 10.343 8.86368 9.70999 8.47322 9.31953C8.08273 8.92904 7.44962 8.92904 7.05913 9.31953L2.43918 13.9395C1.85418 14.5245 1.85418 15.4755 2.43918 16.0605L7.05918 20.6805C7.44964 21.071 8.08271 21.071 8.47318 20.6805C8.86364 20.29 8.86364 19.657 8.47318 19.2665L5.23318 16.0265H14.5002C18.0842 16.0265 21.0002 13.1105 21.0002 9.52649C21.0002 5.94249 18.0842 3.02649 14.5002 3.02649Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgArrowHookLeftDown)
