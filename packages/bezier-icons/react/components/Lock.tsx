import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgLock(props: SVGProps<SVGSVGElement>) {
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
        d="M11.9984 18.0001C11.4461 18.0001 10.9984 17.5524 10.9984 17.0001V14.0001C10.9984 13.4478 11.4461 13.0001 11.9984 13.0001C12.5507 13.0001 12.9984 13.4478 12.9984 14.0001V17.0001C12.9984 17.5524 12.5507 18.0001 11.9984 18.0001Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.4998 9.0001H5.9998V7C5.9998 3.68603 8.6862 1 11.9998 1C15.3141 1 17.9998 3.68572 17.9998 7V9.0001H18.4998C19.3281 9.0001 19.9998 9.67181 19.9998 10.5001V20.5001C19.9998 21.3284 19.3281 22.0001 18.4998 22.0001H5.4998C4.67152 22.0001 3.9998 21.3284 3.9998 20.5001V10.5001C3.9998 9.67181 4.67152 9.0001 5.4998 9.0001ZM15.9998 7V9.0001H7.9998V7C7.9998 4.79066 9.79071 3 11.9998 3C14.2095 3 15.9998 4.79028 15.9998 7ZM17.9998 11.0001V20.0001H5.9998V11.0001H17.9998Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgLock)
