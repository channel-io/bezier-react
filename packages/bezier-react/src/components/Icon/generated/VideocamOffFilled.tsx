import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgVideocamOffFilled')
function SvgVideocamOffFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M15.998 8v5.877l6.255 6.255-1.414 1.414L2.454 3.161l1.414-1.414L8.121 6h5.877a2 2 0 0 1 2 2ZM2.002 8v8a2 2 0 0 0 2 2h9.996c.522 0 .993-.205 1.35-.532L3.89 6.011a1.994 1.994 0 0 0-1.888 1.99Zm19.186 9.35a.5.5 0 0 0 .812-.39V7.04a.5.5 0 0 0-.812-.39l-4 3.2a.498.498 0 0 0-.187.39v3.52a.5.5 0 0 0 .187.39l4 3.2Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgVideocamOffFilled)
