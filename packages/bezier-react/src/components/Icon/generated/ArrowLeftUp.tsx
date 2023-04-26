import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgArrowLeftUp')
function SvgArrowLeftUp(props: SVGProps<SVGSVGElement>) {
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
        d="M20 20a1 1 0 0 0 0-1.414L7.414 6H19a1 1 0 1 0 0-2H5.5C4.673 4 4 4.673 4 5.5V19a1 1 0 1 0 2 0V7.414L18.586 20A1 1 0 0 0 20 20Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgArrowLeftUp)
