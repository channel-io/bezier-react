import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgHexahedronFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M13 2.57734C12.3812 2.22007 11.6188 2.22007 11 2.57734L4 6.61879C3.3812 6.97605 3 7.63631 3 8.35084V16.4337C3 17.1483 3.3812 17.8085 4 18.1658L11 22.2072C11.6188 22.5645 12.3812 22.5645 13 22.2072L20 18.1658C20.6188 17.8085 21 17.1483 21 16.4337V8.35084C21 7.63631 20.6188 6.97605 20 6.61879L13 2.57734ZM10.4935 12.8952C10.8067 13.0728 11.0002 13.405 11.0002 13.765V19.0003C11.0002 19.5526 11.4479 20.0003 12.0002 20.0003C12.5525 20.0003 13.0002 19.5526 13.0002 19.0003V13.7649C13.0002 13.4048 13.1937 13.0726 13.5069 12.895L18.5262 10.0485C19.0103 9.77398 19.177 9.15705 18.8972 8.67606C18.6217 8.20254 18.0164 8.03894 17.5399 8.30919L12.4934 11.1711C12.1874 11.3446 11.8127 11.3446 11.5067 11.1711L6.45537 8.30622C5.97882 8.03595 5.37352 8.19955 5.09801 8.6731C4.81817 9.15408 4.98491 9.77098 5.46895 10.0455L10.4935 12.8952Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgHexahedronFilled)
