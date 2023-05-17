import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgSearch(props: SVGProps<SVGSVGElement>) {
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
        d="M18.0002 10.0001C18.0002 5.58181 14.4185 2.00009 10.0002 2.00009C5.5819 2.00009 2.00018 5.58181 2.00018 10.0001C2.00018 14.4184 5.5819 18.0001 10.0002 18.0001C11.8489 18.0001 13.5511 17.373 14.9058 16.32L20.2931 21.7072C20.6836 22.0977 21.3168 22.0977 21.7073 21.7072C22.0978 21.3167 22.0978 20.6835 21.7073 20.293L16.32 14.9057C17.3731 13.5511 18.0002 11.8488 18.0002 10.0001ZM16.0002 10.0001C16.0002 13.3138 13.3139 16.0001 10.0002 16.0001C6.68647 16.0001 4.00018 13.3138 4.00018 10.0001C4.00018 6.68638 6.68647 4.00009 10.0002 4.00009C13.3139 4.00009 16.0002 6.68638 16.0002 10.0001Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgSearch)
