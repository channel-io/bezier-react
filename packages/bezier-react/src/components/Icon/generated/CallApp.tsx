import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgCallApp(props: SVGProps<SVGSVGElement>) {
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
        d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0ZM9.224 14.776c-3.7-3.7-3.7-6.936-2.544-8.092.694-.694 1.708-.882 2.313-.462.554.37 1.387 1.414 1.387 2.312 0 .541-.4 1.007-.73 1.39-.232.273-.43.503-.426.69.009.453.506 1.63 1.52 2.643 1.012 1.013 2.19 1.51 2.642 1.52.187.003.418-.195.69-.428.383-.33.849-.729 1.39-.729.899 0 1.943.833 2.313 1.388.419.604.23 1.618-.463 2.312-1.156 1.156-4.393 1.156-8.092-2.544Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgCallApp)
