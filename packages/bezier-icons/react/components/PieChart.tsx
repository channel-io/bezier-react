import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgPieChart(props: SVGProps<SVGSVGElement>) {
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
        d="M13.0003 11.9999C12.448 11.9999 12.0003 11.5522 12.0003 10.9999V2.99994C12.0003 2.44766 12.4493 1.99468 12.9989 2.04941C17.7173 2.51935 21.4809 6.28291 21.9508 11.0014C22.0056 11.5509 21.5526 11.9999 21.0003 11.9999H13.0003ZM12 20.0002C15.625 20.0002 18.841 17.4852 19.742 13.9932H21.79C21.7834 14.0268 21.7783 14.0609 21.7732 14.0948C21.7668 14.1376 21.7605 14.1804 21.751 14.2222C20.725 18.7282 16.624 22.0002 12 22.0002C6.486 22.0002 2 17.5142 2 12.0002C2 7.37718 5.271 3.27518 9.778 2.24918C9.81763 2.23955 9.85823 2.23409 9.89888 2.22863C9.93002 2.22444 9.9612 2.22025 9.992 2.21418V4.26218C6.508 5.16918 4 8.38118 4 12.0002C4 16.4112 7.589 20.0002 12 20.0002Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgPieChart)
