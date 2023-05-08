import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgMoonFilled')
function SvgMoonFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M20.64 17.037c.458-.782-.454-1.568-1.33-1.336A9 9 0 0 1 8.3 4.69c.231-.877-.555-1.789-1.337-1.332A9.996 9.996 0 0 0 2 12c0 5.523 4.477 10 10 10a9.996 9.996 0 0 0 8.64-4.963Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgMoonFilled)
