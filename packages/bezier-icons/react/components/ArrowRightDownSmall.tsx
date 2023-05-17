import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgArrowRightDownSmall(props: SVGProps<SVGSVGElement>) {
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
        d="M7.05028 7.05028C6.65975 7.4408 6.65975 8.07397 7.05028 8.46449L13.8285 15.2427H8.46449C7.91221 15.2427 7.46449 15.6904 7.46449 16.2427C7.46449 16.795 7.91221 17.2427 8.46449 17.2427L16.2427 17.2427C16.795 17.2427 17.2427 16.795 17.2427 16.2427L17.2427 8.46449C17.2427 7.91221 16.795 7.46449 16.2427 7.46449C15.6904 7.46449 15.2427 7.91221 15.2427 8.46449V13.8285L8.46449 7.05028C8.07397 6.65975 7.4408 6.65975 7.05028 7.05028Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgArrowRightDownSmall)
