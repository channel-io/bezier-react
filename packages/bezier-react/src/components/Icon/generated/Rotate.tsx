import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgRotate')
function SvgRotate(props: SVGProps<SVGSVGElement>) {
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
        d="M12.003 2.218a9.933 9.933 0 0 0-7.027 2.889l-2.119-2.12a.5.5 0 0 0-.854.354v5.627a.5.5 0 0 0 .5.5H8.13a.5.5 0 0 0 .353-.854L6.39 6.52a7.944 7.944 0 0 1 5.613-2.303c4.411 0 8 3.589 8 8 0 4.41-3.589 8-8 8-4.073 0-7.445-3.06-7.938-7.002-.068-.548-.51-.998-1.062-.998s-1.005.449-.95.998c.502 5.047 4.773 9.002 9.95 9.002 5.514 0 10-4.486 10-10s-4.486-10-10-10Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgRotate)
