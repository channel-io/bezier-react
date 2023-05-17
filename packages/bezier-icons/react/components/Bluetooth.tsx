import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgBluetooth(props: SVGProps<SVGSVGElement>) {
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
        d="M11.5528 2.10558C11.8916 1.93619 12.297 1.97274 12.6 2.20001L18.6 6.70001C18.8518 6.88886 19 7.18525 19 7.50001C19 7.81476 18.8518 8.11115 18.6 8.30001L13.6667 12L18.6 15.7C18.8518 15.8889 19 16.1852 19 16.5C19 16.8148 18.8518 17.1112 18.6 17.3L12.6 21.8C12.297 22.0273 11.8916 22.0638 11.5528 21.8944C11.214 21.725 11 21.3788 11 21V14L6.6 17.3C6.15817 17.6314 5.53137 17.5418 5.2 17.1C4.86863 16.6582 4.95817 16.0314 5.4 15.7L10.3333 12L5.4 8.30001C4.95817 7.96863 4.86863 7.34183 5.2 6.90001C5.53137 6.45818 6.15817 6.36864 6.6 6.70001L11 10V3.00001C11 2.62123 11.214 2.27497 11.5528 2.10558ZM13 14L16.3333 16.5L13 19V14ZM13 10V5.00001L16.3333 7.50001L13 10Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgBluetooth)
