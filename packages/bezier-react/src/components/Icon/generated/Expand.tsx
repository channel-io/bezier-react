import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgExpand')
function SvgExpand(props: SVGProps<SVGSVGElement>) {
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
        d="M21 6.91c0 .97 0 1.454-.192 1.678a.8.8 0 0 1-.67.278c-.295-.023-.638-.366-1.323-1.051l-.608-.608-3.732 3.732a1 1 0 0 1-1.414-1.414l3.732-3.732-.608-.608c-.685-.685-1.028-1.028-1.051-1.322a.8.8 0 0 1 .278-.671C15.636 3 16.12 3 17.09 3h2.31c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C21 3.76 21 4.04 21 4.6v2.31ZM3 17.09c0-.97 0-1.454.192-1.678a.8.8 0 0 1 .67-.278c.295.023.638.366 1.323 1.051l.608.608 3.732-3.732a1 1 0 1 1 1.414 1.414l-3.732 3.732.608.608c.685.685 1.028 1.028 1.051 1.322a.8.8 0 0 1-.278.671C8.364 21 7.88 21 6.91 21H4.6c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C3 20.24 3 19.96 3 19.4v-2.31Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgExpand)
