import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgArrowHookLeftUp(props: SVGProps<SVGSVGElement>) {
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
        d="M14.5002 8.00013H5.20721L8.47334 4.73317C8.86375 4.34267 8.86371 3.70963 8.47325 3.31917C8.08276 2.92868 7.44965 2.92868 7.05916 3.31917L2.43921 7.93913C1.85421 8.52413 1.85421 9.47613 2.43921 10.0611L7.05917 14.6802C7.44967 15.0706 8.08272 15.0706 8.47317 14.6802C8.86366 14.2897 8.86366 13.6566 8.47317 13.2661L5.20721 10.0001H14.5002C16.9812 10.0001 19.0002 12.0191 19.0002 14.5001C19.0002 16.9811 16.9812 19.0001 14.5002 19.0001H11.0002C10.4479 19.0001 10.0002 19.4478 10.0002 20.0001C10.0002 20.5524 10.4479 21.0001 11.0002 21.0001H14.5002C18.0842 21.0001 21.0002 18.0841 21.0002 14.5001C21.0002 10.9161 18.0842 8.00013 14.5002 8.00013Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgArrowHookLeftUp)
