import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgCancelSmall(props: SVGProps<SVGSVGElement>) {
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
        d="M16.9499 8.46439C17.3404 8.07392 17.3404 7.44085 16.9499 7.05039C16.5594 6.65992 15.9264 6.65992 15.5359 7.05039L11.9999 10.5864L8.4649 7.05055C8.07445 6.66001 7.44131 6.65997 7.05081 7.05047C6.66038 7.4409 6.66034 8.07391 7.05073 8.46439L10.5859 12.0004L7.0509 15.5354C6.66043 15.9259 6.66043 16.5589 7.0509 16.9494C7.44136 17.3399 8.07443 17.3399 8.4649 16.9494L11.9999 13.4144L15.5359 16.9496C15.9264 17.3399 16.5594 17.3399 16.9498 16.9495C17.3403 16.559 17.3403 15.9258 16.9497 15.5354L13.4139 12.0004L16.9499 8.46439Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgCancelSmall)
