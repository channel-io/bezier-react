import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgPlane(props: SVGProps<SVGSVGElement>) {
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
        d="M10.5 3.5C10.5 2.67157 11.1716 2 12 2C12.8284 2 13.5 2.67157 13.5 3.5V9.33333L21.5547 14.7031C21.8329 14.8886 22 15.2008 22 15.5352V16.6531C22 16.8238 21.8328 16.9443 21.6709 16.8903L13.5 14.1667V18.5L14.8536 19.8536C14.9473 19.9473 15 20.0745 15 20.2071V22L12 21L9 22V20.2071C9 20.0745 9.05268 19.9473 9.14645 19.8536L10.5 18.5V14.1667L2.32906 16.8903C2.16717 16.9443 2 16.8238 2 16.6531V15.5352C2 15.2008 2.1671 14.8886 2.4453 14.7031L10.5 9.33333V3.5Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgPlane)
