import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgPersonCircle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 12.296c2.918 0 5.474 1.784 6.466 4.395A7.949 7.949 0 0 0 20 12c0-4.411-3.588-8-8-8-4.41 0-8 3.589-8 8 0 1.753.573 3.371 1.533 4.691.994-2.612 3.55-4.395 6.468-4.395Zm-4.762 5.537-.13.483a7.946 7.946 0 0 0 9.783 0l-.13-.483c-.558-2.082-2.516-3.537-4.76-3.537-2.246 0-4.204 1.455-4.763 3.537ZM2 12C2 6.486 6.486 2 12 2c5.515 0 10 4.486 10 10s-4.485 10-10 10C6.487 22 2 17.514 2 12Zm9-3c0 .551.45 1 1 1 .551 0 1-.449 1-1 0-.55-.449-1-1-1-.55 0-1 .45-1 1ZM9 9c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgPersonCircle)
