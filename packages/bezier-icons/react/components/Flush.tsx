import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgFlush(props: SVGProps<SVGSVGElement>) {
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
        d="M12.0006 7.4132L9.87858 9.5352L8.46458 8.1212L10.5866 5.9992L8.46458 3.8782L9.87858 2.4642L12.0006 4.5852L14.1216 2.4642L15.5356 3.8782L13.4146 5.9992L15.5356 8.1212L14.1216 9.5352L12.0006 7.4132ZM7 7C7 6.44772 6.55228 6 6 6C5.44772 6 5 6.44772 5 7V18C5 20.2091 6.79086 22 9 22H15C17.2091 22 19 20.2091 19 18V7C19 6.44772 18.5523 6 18 6C17.4477 6 17 6.44772 17 7V18C17 19.1046 16.1046 20 15 20H9C7.89543 20 7 19.1046 7 18V7Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgFlush)
