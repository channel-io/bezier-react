import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgVoiceWave')
function SvgVoiceWave(props: SVGProps<SVGSVGElement>) {
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
        d="M13 7.5a1.5 1.5 0 0 1 3 0v9a1.5 1.5 0 0 1-3 0v-9ZM8 4.5a1.5 1.5 0 1 1 3 0v15a1.5 1.5 0 0 1-3 0v-15ZM3 9.5a1.5 1.5 0 1 1 3 0v5a1.5 1.5 0 0 1-3 0v-5ZM18 10.5a1.5 1.5 0 0 1 3 0v3a1.5 1.5 0 0 1-3 0v-3Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgVoiceWave)
