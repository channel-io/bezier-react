import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgView(props: SVGProps<SVGSVGElement>) {
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
        d="M4.39015 12.5139C4.09064 12.9779 3.48763 13.1675 3.00024 12.9077C2.51285 12.648 2.32572 12.0387 2.61929 11.5709C7.28056 4.14298 17.1609 4.14298 21.8222 11.5709C22.1157 12.0387 21.9286 12.648 21.4412 12.9077C20.9538 13.1675 20.3508 12.9779 20.0513 12.5139C16.1666 6.49533 8.27485 6.49533 4.39015 12.5139ZM12.2209 9.39692C14.4889 9.39692 16.3279 11.2359 16.3279 13.5039C16.3279 15.7729 14.4889 17.6109 12.2209 17.6109C9.9529 17.6109 8.1139 15.7729 8.1139 13.5039C8.1139 11.2359 9.9529 9.39692 12.2209 9.39692Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgView)
