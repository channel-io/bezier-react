import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgVideocamFilled')
function SvgVideocamFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M13.998 6H4.002a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.996a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Zm7.19 11.35-4-3.2a.5.5 0 0 1-.187-.39v-3.52a.5.5 0 0 1 .187-.39l4-3.2a.5.5 0 0 1 .812.39v9.92a.5.5 0 0 1-.812.39Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgVideocamFilled)
