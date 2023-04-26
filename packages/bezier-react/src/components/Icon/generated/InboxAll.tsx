import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgInboxAll')
function SvgInboxAll(props: SVGProps<SVGSVGElement>) {
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
        d="M19 7.5h-4.5a2.5 2.5 0 0 1-5 0H5V5h14v2.5Zm0 7h-4.5a2.5 2.5 0 0 1-5 0H5V12h14v2.5ZM19.5 3h-15C3.673 3 3 3.673 3 4.5v15c0 .827.673 1.5 1.5 1.5h15c.827 0 1.5-.673 1.5-1.5v-15c0-.827-.673-1.5-1.5-1.5Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgInboxAll)
