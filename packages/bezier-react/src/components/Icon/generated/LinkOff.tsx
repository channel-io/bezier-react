import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgLinkOff')
function SvgLinkOff(props: SVGProps<SVGSVGElement>) {
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
        d="M13.963 14.111a1 1 0 0 0 1.414 0l3.24-3.241a5.274 5.274 0 0 0 0-7.45 5.272 5.272 0 0 0-7.45 0L9.546 5.04a1 1 0 0 0 1.414 1.414l1.62-1.62c1.236-1.235 3.387-1.235 4.624 0 .617.617.957 1.438.957 2.311s-.34 1.694-.957 2.311l-3.241 3.241a1 1 0 0 0 0 1.414ZM5.303 20.58a5.248 5.248 0 0 0 3.726 1.541 5.248 5.248 0 0 0 3.725-1.54l1.62-1.62a1 1 0 0 0-1.413-1.415l-1.621 1.62c-1.236 1.234-3.388 1.234-4.623 0a3.247 3.247 0 0 1-.957-2.31c0-.874.34-1.694.957-2.312l3.241-3.24a1 1 0 1 0-1.414-1.415L5.303 13.13a5.274 5.274 0 0 0 0 7.45ZM18 15a1 1 0 0 0 1 1h2a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1ZM18.707 21.121a1 1 0 0 0 1.414-1.414l-1.414-1.414a1 1 0 1 0-1.414 1.414l1.414 1.414ZM6.707 5.707a1 1 0 0 1-1.414 0L3.878 4.293A1 1 0 1 1 5.292 2.88l1.415 1.414a1 1 0 0 1 0 1.414ZM3 10a1 1 0 1 1 0-2h2a1 1 0 0 1 0 2H3Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgLinkOff)
