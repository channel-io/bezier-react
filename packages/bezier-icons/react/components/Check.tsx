import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgCheck(props: SVGProps<SVGSVGElement>) {
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
        d="M9.07097 16.142L4.12097 11.192C3.73051 10.8015 3.09744 10.8015 2.70697 11.192C2.31651 11.5825 2.31651 12.2155 2.70697 12.606L8.36386 18.2629C8.75439 18.6534 9.38756 18.6534 9.77808 18.2629L20.8464 7.19439C21.2369 6.80393 21.2369 6.17086 20.8464 5.7804C20.456 5.38993 19.8229 5.38993 19.4324 5.7804L9.07097 16.142Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgCheck)
