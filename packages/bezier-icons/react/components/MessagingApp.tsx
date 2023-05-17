import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgMessagingApp(props: SVGProps<SVGSVGElement>) {
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
        d="M6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6ZM19 11.5274C19 14.8411 15.866 17.5274 12 17.5274C11.4194 17.5274 10.8552 17.4668 10.3158 17.3525C9.19433 18.2321 7.93415 18.6104 7.22682 18.7641C7.01411 18.8103 6.86812 18.5737 6.98357 18.3891C7.26573 17.9381 7.67103 17.2089 7.91819 16.4022C6.15091 15.3132 5 13.5355 5 11.5274C5 8.21364 8.13401 5.52735 12 5.52735C15.866 5.52735 19 8.21364 19 11.5274Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgMessagingApp)
