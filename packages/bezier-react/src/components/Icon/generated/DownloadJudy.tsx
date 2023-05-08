import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgDownloadJudy')
function SvgDownloadJudy(props: SVGProps<SVGSVGElement>) {
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
        d="M9 4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5h2.586c.89 0 1.337 1.077.707 1.707l-5.586 5.586a1 1 0 0 1-1.414 0l-5.586-5.586C5.077 10.077 5.523 9 6.414 9H9V4ZM4.889 18C4.398 18 4 18.448 4 19v1c0 .552.398 1 .889 1H19.11c.491 0 .889-.448.889-1v-1c0-.552-.398-1-.889-1H4.89Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgDownloadJudy)
