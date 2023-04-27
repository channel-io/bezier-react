import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgWeatherSun')
function SvgWeatherSun(props: SVGProps<SVGSVGElement>) {
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
        d="M11 6h2V2h-2v4ZM5.636 4.222 8.463 7.05 7.051 8.464 4.22 5.636l1.415-1.414ZM12 14.5A2.503 2.503 0 0 1 9.5 12c0-1.379 1.122-2.5 2.5-2.5s2.5 1.121 2.5 2.5c0 1.38-1.122 2.5-2.5 2.5Zm0-7A4.505 4.505 0 0 0 7.5 12c0 2.481 2.02 4.5 4.5 4.5 2.481 0 4.5-2.019 4.5-4.5 0-2.48-2.019-4.5-4.5-4.5ZM2 13h4v-2H2v2Zm16.364-8.778 1.414 1.414-2.828 2.828-1.414-1.414 2.828-2.828ZM18 13h4v-2h-4v2Zm.364 6.778-2.828-2.829 1.414-1.414 2.828 2.83-1.414 1.413ZM11 22h2v-4h-2v4Zm-5.364-2.222-1.414-1.414 2.829-2.829 1.414 1.414-2.83 2.83Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgWeatherSun)
