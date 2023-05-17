import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgMapPin(props: SVGProps<SVGSVGElement>) {
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
        d="M12.0006 12.732C10.2256 12.732 8.78656 11.293 8.78656 9.51798C8.78656 7.74198 10.2256 6.30298 12.0006 6.30298C13.7756 6.30298 15.2146 7.74198 15.2146 9.51798C15.2146 11.293 13.7756 12.732 12.0006 12.732ZM18.2566 5.33201C15.2166 0.889006 8.78457 0.889006 5.74357 5.33201C3.98257 7.90501 4.14657 11.345 5.88957 13.931L11.5566 22.339C11.7686 22.655 12.2326 22.655 12.4446 22.339L18.1106 13.931C19.8536 11.345 20.0186 7.90501 18.2566 5.33201Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgMapPin)
