import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgArrowLeftDownSmall(props: SVGProps<SVGSVGElement>) {
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
        d="M16.9498 7.05034C16.5592 6.65982 15.9261 6.65982 15.5356 7.05034L8.75738 13.8285L8.75739 8.46455C8.75739 7.91227 8.30967 7.46455 7.75738 7.46455C7.2051 7.46455 6.75738 7.91227 6.75739 8.46455L6.75739 16.2427C6.75738 16.795 7.2051 17.2427 7.75739 17.2427H15.5356C16.0878 17.2427 16.5356 16.795 16.5356 16.2427C16.5356 15.6904 16.0878 15.2427 15.5356 15.2427H10.1716L16.9498 8.46455C17.3403 8.07403 17.3403 7.44086 16.9498 7.05034Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgArrowLeftDownSmall)
