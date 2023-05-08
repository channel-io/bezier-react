import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgContactFilled')
function SvgContactFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M3.006 7.006c.018-1.354.096-2.166.43-2.822a4 4 0 0 1 1.748-1.748C6.04 2 7.16 2 9.4 2h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 5.04 21 6.16 21 8.4v7.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 22 16.84 22 14.6 22H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748c-.334-.656-.412-1.468-.43-2.822a1.146 1.146 0 0 1-.389-.07 1 1 0 0 1-.54-.541C2 16.199 2 15.966 2 15.5s0-.699.076-.883a1 1 0 0 1 .541-.54c.102-.043.22-.062.383-.07V9.993a1.133 1.133 0 0 1-.383-.07 1 1 0 0 1-.54-.54C2 9.199 2 8.966 2 8.5s0-.699.076-.883a1 1 0 0 1 .541-.54c.103-.044.222-.062.389-.07ZM12 11.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm4.214 5.5H7.786a.284.284 0 0 1-.285-.294 4.51 4.51 0 0 1 8.999 0 .284.284 0 0 1-.286.294Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgContactFilled)
