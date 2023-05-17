import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgContact(props: SVGProps<SVGSVGElement>) {
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
        d="M9.4 4H14.6C15.7531 4 16.4977 4.00156 17.0643 4.04785C17.6077 4.09225 17.8091 4.1676 17.908 4.21799C18.2843 4.40973 18.5903 4.71569 18.782 5.09202C18.8324 5.19091 18.9078 5.39235 18.9521 5.93567C18.9984 6.50235 19 7.24689 19 8.4V15.6C19 16.7531 18.9984 17.4977 18.9521 18.0643C18.9078 18.6077 18.8324 18.8091 18.782 18.908C18.5903 19.2843 18.2843 19.5903 17.908 19.782C17.8091 19.8324 17.6077 19.9078 17.0643 19.9521C16.4977 19.9984 15.7531 20 14.6 20H9.4C8.24689 20 7.50235 19.9984 6.93567 19.9521C6.39235 19.9078 6.19091 19.8324 6.09202 19.782C5.71569 19.5903 5.40973 19.2843 5.21799 18.908C5.1676 18.8091 5.09225 18.6077 5.04785 18.0643C5.00156 17.4977 5 16.7531 5 15.6V15.5V8.5V8.4C5 7.24689 5.00156 6.50235 5.04785 5.93567C5.09225 5.39235 5.1676 5.19091 5.21799 5.09202C5.40973 4.71569 5.71569 4.40973 6.09202 4.21799C6.19091 4.1676 6.39235 4.09225 6.93567 4.04785C7.50235 4.00156 8.24689 4 9.4 4ZM3.0055 16.9936C3.02364 18.3475 3.10152 19.1596 3.43597 19.816C3.81947 20.5686 4.43139 21.1805 5.18404 21.564C6.03969 22 7.15979 22 9.4 22H14.6C16.8402 22 17.9603 22 18.816 21.564C19.5686 21.1805 20.1805 20.5686 20.564 19.816C21 18.9603 21 17.8402 21 15.6V8.4C21 6.15979 21 5.03969 20.564 4.18404C20.1805 3.43139 19.5686 2.81947 18.816 2.43597C17.9603 2 16.8402 2 14.6 2H9.4C7.15979 2 6.03969 2 5.18404 2.43597C4.43139 2.81947 3.81947 3.43139 3.43597 4.18404C3.10152 4.84044 3.02364 5.65248 3.0055 7.00644C2.83899 7.01467 2.72041 7.03342 2.61732 7.07612C2.37229 7.17761 2.17761 7.37229 2.07612 7.61732C2 7.80109 2 8.03406 2 8.5C2 8.96594 2 9.19891 2.07612 9.38268C2.17761 9.62771 2.37229 9.82239 2.61732 9.92388C2.71927 9.96611 2.83637 9.98491 3 9.99328V14.0067C2.83637 14.0151 2.71927 14.0339 2.61732 14.0761C2.37229 14.1776 2.17761 14.3723 2.07612 14.6173C2 14.8011 2 15.0341 2 15.5C2 15.9659 2 16.1989 2.07612 16.3827C2.17761 16.6277 2.37229 16.8224 2.61732 16.9239C2.72041 16.9666 2.83899 16.9853 3.0055 16.9936ZM14 9.5C14 10.6046 13.1046 11.5 12 11.5C10.8954 11.5 10 10.6046 10 9.5C10 8.39543 10.8954 7.5 12 7.5C13.1046 7.5 14 8.39543 14 9.5ZM7.786 17H16.2144C16.3751 17 16.5101 16.865 16.4999 16.7056C16.3481 14.3513 14.3911 12.4907 12.0008 12.4907C9.60926 12.4907 7.65228 14.3513 7.50055 16.7056C7.49027 16.865 7.62527 17 7.786 17Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgContact)
