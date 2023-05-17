import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgEducation(props: SVGProps<SVGSVGElement>) {
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
        d="M11.1056 2.21115C11.6686 1.92962 12.3314 1.92962 12.8944 2.21115L22.0161 6.772C22.7497 7.13878 23.0777 7.88158 23 8.58458V14C23 14.5523 22.5523 15 22 15C21.4477 15 21 14.5523 21 14V10.5L20 11V16.9387C20 17.6906 19.5783 18.379 18.9084 18.7205L12.9084 21.7794C12.3377 22.0703 11.6623 22.0703 11.0916 21.7794L5.09163 18.7205C4.42174 18.379 4 17.6906 4 16.9387V11L1.98388 9.99194C0.657192 9.32859 0.657186 7.43534 1.98388 6.772L11.1056 2.21115ZM12.8944 14.5528L18 12V16.9387L12 19.9975L6 16.9387V12L11.1056 14.5528C11.6686 14.8343 12.3314 14.8343 12.8944 14.5528ZM20.7639 8.38197L12 4L3.23607 8.38197L12 12.7639L20.7639 8.38197Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgEducation)
