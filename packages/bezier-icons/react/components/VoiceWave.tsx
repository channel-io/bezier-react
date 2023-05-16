import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgVoiceWave(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M13 7.5a1.5 1.5 0 0 1 3 0v9a1.5 1.5 0 0 1-3 0v-9ZM8 4.5a1.5 1.5 0 1 1 3 0v15a1.5 1.5 0 0 1-3 0v-15ZM3 9.5a1.5 1.5 0 1 1 3 0v5a1.5 1.5 0 0 1-3 0v-5ZM18 10.5a1.5 1.5 0 0 1 3 0v3a1.5 1.5 0 0 1-3 0v-3Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgVoiceWave)
