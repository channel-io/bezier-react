import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgFullscreen')
function SvgFullscreen(props: SVGProps<SVGSVGElement>) {
  const Svg = (
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
        d="M19 10h2V4.5c0-.827-.673-1.5-1.5-1.5H14v2h5v5Zm-5 11h5.5c.827 0 1.5-.673 1.5-1.5V14h-2v5h-5v2Zm-4 0H4.5c-.827 0-1.5-.673-1.5-1.5V14h2v5h5v2ZM3 10h2V5h5V3H4.5C3.673 3 3 3.673 3 4.5V10Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgFullscreen)
