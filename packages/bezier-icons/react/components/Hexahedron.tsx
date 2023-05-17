import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgHexahedron(props: SVGProps<SVGSVGElement>) {
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
        d="M13 2.57734C12.3812 2.22007 11.6188 2.22007 11 2.57734L4 6.61879C3.3812 6.97605 3 7.63631 3 8.35084V16.4337C3 17.1483 3.3812 17.8085 4 18.1658L11 22.2072C11.6188 22.5645 12.3812 22.5645 13 22.2072L20 18.1658C20.6188 17.8085 21 17.1483 21 16.4337V8.35084C21 7.63631 20.6188 6.97605 20 6.61879L13 2.57734ZM5.6958 7.82153L12 4.18179L18.3042 7.82152L12 11.4464L5.6958 7.82153ZM4.88951 9.66496V16.4975L11.0002 20.0255V13.1786L4.88951 9.66496ZM13.0002 20.0253L19.1105 16.4975V9.66496L13.0002 13.1784V20.0253Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgHexahedron)
