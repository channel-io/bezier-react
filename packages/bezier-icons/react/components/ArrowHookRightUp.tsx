import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgArrowHookRightUp(props: SVGProps<SVGSVGElement>) {
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
        d="M9.50046 8.00007H18.7935L15.5273 4.73311C15.1369 4.34261 15.137 3.70957 15.5274 3.31911C15.9179 2.92862 16.551 2.92862 16.9415 3.31911L21.5615 7.93907C22.1465 8.52407 22.1465 9.47607 21.5615 10.0611L16.9415 14.6802C16.551 15.0706 15.9179 15.0706 15.5275 14.6801C15.137 14.2896 15.137 13.6565 15.5275 13.266L18.7935 10.0001H9.50046C7.01946 10.0001 5.00046 12.0191 5.00046 14.5001C5.00046 16.9811 7.01946 19.0001 9.50046 19.0001H13.0005C13.5527 19.0001 14.0005 19.4478 14.0005 20.0001C14.0005 20.5524 13.5527 21.0001 13.0005 21.0001H9.50046C5.91646 21.0001 3.00046 18.0841 3.00046 14.5001C3.00046 10.9161 5.91646 8.00007 9.50046 8.00007Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgArrowHookRightUp)
