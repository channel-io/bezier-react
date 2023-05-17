import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgArrowHookRightDown(props: SVGProps<SVGSVGElement>) {
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
        d="M9.50046 3.02649H13.0005C13.5527 3.02649 14.0005 3.4742 14.0005 4.02649C14.0005 4.57877 13.5527 5.02649 13.0005 5.02649H9.50046C7.01946 5.02649 5.00046 7.04549 5.00046 9.52649C5.00046 12.0075 7.01946 14.0265 9.50046 14.0265H18.8195L15.5273 10.7335C15.1369 10.343 15.137 9.70999 15.5274 9.31953C15.9179 8.92904 16.551 8.92904 16.9415 9.31953L21.5615 13.9395C22.1465 14.5245 22.1465 15.4755 21.5615 16.0605L16.9415 20.6805C16.551 21.071 15.9179 21.071 15.5275 20.6805C15.137 20.29 15.137 19.657 15.5275 19.2665L18.7675 16.0265H9.50046C5.91646 16.0265 3.00046 13.1105 3.00046 9.52649C3.00046 5.94249 5.91646 3.02649 9.50046 3.02649Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgArrowHookRightDown)
