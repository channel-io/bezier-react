import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgTransferDisabled(props: SVGProps<SVGSVGElement>) {
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
        d="M2.8077 4.21482C2.4237 3.8238 2.42587 3.19552 2.81421 2.80718C3.20473 2.41665 3.8379 2.41665 4.22842 2.80718L7.42128 6.00003H17V3.9314C17 3.21867 17.8617 2.86174 18.3657 3.36571L21.2929 6.29292C21.6834 6.68344 21.6834 7.31661 21.2929 7.70713L18.3657 10.6343C17.8617 11.1383 17 10.7814 17 10.0687V8.00003H9.42128L21.199 19.7777C21.5895 20.1683 21.5895 20.8014 21.199 21.192C20.8106 21.5803 20.1824 21.5825 19.7913 21.1985L2.8077 4.21482ZM13.1787 16H7V13.9312C7 13.2184 6.13829 12.8615 5.63432 13.3655L2.70711 16.2927C2.31658 16.6832 2.31658 17.3164 2.70711 17.7069L5.63432 20.6341C6.13829 21.1381 7 20.7812 7 20.0684V18H15.1787L13.1787 16Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgTransferDisabled)
