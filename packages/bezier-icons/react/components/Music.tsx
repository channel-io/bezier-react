import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgMusic(props: SVGProps<SVGSVGElement>) {
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
        d="M7.84794 3.70415C7.36011 3.7792 7 4.19895 7 4.69252V5.8346V7.8346V15.1708C6.68722 15.0602 6.35064 15.0001 6 15.0001C4.34315 15.0001 3 16.3432 3 18.0001C3 19.6569 4.34315 21.0001 6 21.0001C7.65685 21.0001 9 19.6569 9 18.0001C9 17.9445 8.99849 17.8894 8.99551 17.8346H9V7.52691L18 6.1423V13.1708C17.6872 13.0602 17.3506 13.0001 17 13.0001C15.3431 13.0001 14 14.3432 14 16.0001C14 17.6569 15.3431 19.0001 17 19.0001C18.6569 19.0001 20 17.6569 20 16.0001C20 15.9445 19.9985 15.8894 19.9955 15.8346H20V5.8346V3.8346V3.00021C20 2.38733 19.4537 1.91865 18.8479 2.01184L7.84794 3.70415Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgMusic)
