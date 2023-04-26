import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgGhost')
function SvgGhost(props: SVGProps<SVGSVGElement>) {
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
        d="M17.964 18.455c0 .193-.123.275-.226.31a.31.31 0 0 1-.371-.11 2.37 2.37 0 0 0-1.876-.906h-.001c-.739 0-1.422.33-1.874.905l-.716.911c-.434.554-1.366.552-1.8.001l-.715-.912a2.37 2.37 0 0 0-1.876-.905h-.001a2.37 2.37 0 0 0-1.875.905.311.311 0 0 1-.372.111c-.103-.035-.225-.117-.225-.31V9.86C6.036 6.63 8.711 4 12 4c3.289 0 5.964 2.63 5.964 5.86v8.595ZM12 2C7.589 2 4 5.525 4 9.86v8.595c0 1.012.63 1.876 1.604 2.203.977.324 2.012.02 2.641-.78.174-.224.354-.223.528-.002l.715.912A3.173 3.173 0 0 0 12.001 22a3.17 3.17 0 0 0 2.51-1.212l.716-.91c.174-.224.354-.223.528-.002a2.37 2.37 0 0 0 2.64.782c.975-.326 1.605-1.19 1.605-2.203V9.86C20 5.525 16.411 2 12 2ZM9.096 8.076c-.764 0-1.083.542-1.083 1.868 0 1.327.32 1.87 1.083 1.87.764 0 1.083-.543 1.083-1.87 0-1.326-.319-1.868-1.083-1.868Zm4.724 1.868c0-1.326.32-1.868 1.083-1.868.764 0 1.083.542 1.083 1.868 0 1.327-.319 1.87-1.083 1.87s-1.083-.543-1.083-1.87Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgGhost)
