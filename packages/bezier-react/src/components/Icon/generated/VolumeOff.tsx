import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgVolumeOff')
function SvgVolumeOff(props: SVGProps<SVGSVGElement>) {
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
        d="M9.768 7.647 13 10.879V4.414L9.768 7.647Zm11.778 11.778a1 1 0 0 1-1.415 1.414L3.161 3.868a1 1 0 0 1 1.414-1.414l3.78 3.779 3.938-3.94C12.48 2.106 12.735 2 13 2h1a1 1 0 0 1 1 1v9.879l6.546 6.546ZM8.707 15.293 13 19.586v-4.465l2 2v3.88a1 1 0 0 1-1 1h-1a.997.997 0 0 1-.707-.294L7.586 17H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1.88l2 2H4v6h4c.265 0 .52.106.707.293Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgVolumeOff)
