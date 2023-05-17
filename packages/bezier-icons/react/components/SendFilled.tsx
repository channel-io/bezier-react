import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgSendFilled(props: SVGProps<SVGSVGElement>) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.3244 11.1163L5.73637 2.1163C5.38937 1.9153 4.95537 1.9413 4.63537 2.1833C4.31437 2.4243 4.16937 2.8333 4.26537 3.2223L6.18537 10.9963L17.3304 11.6323V12.3343L6.18237 12.9963L4.20637 20.7713C4.10737 21.1613 4.25137 21.5723 4.57237 21.8143C4.74937 21.9493 4.96237 22.0173 5.17537 22.0173C5.34737 22.0173 5.52037 21.9733 5.67537 21.8843L21.3244 12.8483C21.6344 12.6703 21.8244 12.3403 21.8244 11.9823C21.8244 11.6253 21.6344 11.2953 21.3244 11.1163Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgSendFilled)
