import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgBeta(props: SVGProps<SVGSVGElement>) {
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
        d="M7.5 7.72222C7.5 5.39035 9.39035 3.5 11.7222 3.5C14.0541 3.5 15.9444 5.39035 15.9444 7.72222V7.8C15.9444 8.55744 15.7486 9.26914 15.4048 9.88723C16.6679 10.7298 17.5 12.1677 17.5 13.8C17.5 16.3957 15.3957 18.5 12.8 18.5H10.5V20C10.5 20.8284 9.82843 21.5 9 21.5C8.17157 21.5 7.5 20.8284 7.5 20V7.72222ZM10.5 15.5H12.8C13.7389 15.5 14.5 14.7389 14.5 13.8C14.5 12.8611 13.7389 12.1 12.8 12.1H10.5V15.5ZM10.5 9.1H11.6444C12.3624 9.1 12.9444 8.51797 12.9444 7.8V7.72222C12.9444 7.04721 12.3972 6.5 11.7222 6.5C11.0472 6.5 10.5 7.04721 10.5 7.72222V9.1Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgBeta)
