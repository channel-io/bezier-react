import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgGoalOff')
function SvgGoalOff(props: SVGProps<SVGSVGElement>) {
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
        d="M12 20v2c1.96 0 3.79-.567 5.335-1.545l-1.458-1.458A7.95 7.95 0 0 1 12 20Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.646 18.438A9.956 9.956 0 0 0 22 12c0-5.514-4.486-10-10-10-2.45 0-4.697.886-6.438 2.354l-1.44-1.441a1 1 0 0 0-1.415 1.414l16.97 16.97a1 1 0 0 0 1.415-1.413l-1.445-1.446ZM6.982 5.774A7.962 7.962 0 0 1 12 4c4.411 0 8 3.59 8 8a7.962 7.962 0 0 1-1.774 5.018L6.982 5.774Z"
      />
      <path
        fill="currentColor"
        d="m3.545 6.665 1.459 1.459A7.95 7.95 0 0 0 4 12H2c0-1.96.567-3.79 1.545-5.335ZM8 17.414l3.147-3.147-1.414-1.414L6.586 16H4.914a1 1 0 0 0-.707.293l-2.28 2.28a.25.25 0 0 0 .177.427H5v2.896c0 .223.27.335.427.177l2.28-2.28A1 1 0 0 0 8 19.086v-1.672Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgGoalOff)
