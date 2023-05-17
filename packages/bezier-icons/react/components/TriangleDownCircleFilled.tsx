import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgTriangleDownCircleFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M12.2116 15.8311C12.1266 15.8311 12.0416 15.7951 11.9816 15.7231L7.62163 10.4921C7.45963 10.2961 7.59763 10.0001 7.85263 10.0001H16.5716C16.8256 10.0001 16.9646 10.2961 16.8016 10.4921L12.4416 15.7231C12.3826 15.7951 12.2966 15.8311 12.2116 15.8311ZM12.0006 2.00012C6.47761 2.00012 2.00061 6.47712 2.00061 12.0001C2.00061 17.5231 6.47761 22.0001 12.0006 22.0001C17.5226 22.0001 22.0006 17.5231 22.0006 12.0001C22.0006 6.47712 17.5226 2.00012 12.0006 2.00012Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgTriangleDownCircleFilled)
