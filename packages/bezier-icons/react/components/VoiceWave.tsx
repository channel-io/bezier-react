import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgVoiceWave(props: SVGProps<SVGSVGElement>) {
  return (
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
        d="M13 7.5C13 6.67157 13.6716 6 14.5 6C15.3284 6 16 6.67157 16 7.5V16.5C16 17.3284 15.3284 18 14.5 18C13.6716 18 13 17.3284 13 16.5V7.5Z"
      />
      <path
        fill="currentColor"
        d="M8 4.5C8 3.67157 8.67157 3 9.5 3C10.3284 3 11 3.67157 11 4.5V19.5C11 20.3284 10.3284 21 9.5 21C8.67157 21 8 20.3284 8 19.5V4.5Z"
      />
      <path
        fill="currentColor"
        d="M3 9.5C3 8.67157 3.67157 8 4.5 8C5.32843 8 6 8.67157 6 9.5V14.5C6 15.3284 5.32843 16 4.5 16C3.67157 16 3 15.3284 3 14.5V9.5Z"
      />
      <path
        fill="currentColor"
        d="M18 10.5C18 9.67157 18.6716 9 19.5 9C20.3284 9 21 9.67157 21 10.5V13.5C21 14.3284 20.3284 15 19.5 15C18.6716 15 18 14.3284 18 13.5V10.5Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgVoiceWave)
