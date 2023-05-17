import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgZoomOut(props: SVGProps<SVGSVGElement>) {
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
        d="M4.00027 10.0001C4.00027 13.3091 6.69127 16.0001 10.0003 16.0001C13.3093 16.0001 16.0003 13.3091 16.0003 10.0001C16.0003 6.69108 13.3093 4.00008 10.0003 4.00008C6.69127 4.00008 4.00027 6.69108 4.00027 10.0001ZM21.7073 20.293C22.0977 20.6835 22.0977 21.3166 21.7072 21.7071C21.3168 22.0976 20.6837 22.0976 20.2932 21.7071L14.8972 16.3121C13.5422 17.3661 11.8462 18.0001 10.0002 18.0001C5.58924 18.0001 2.00024 14.4111 2.00024 10.0001C2.00024 5.58909 5.58924 2.00009 10.0002 2.00009C14.4112 2.00009 18.0002 5.58909 18.0002 10.0001C18.0002 11.8461 17.3662 13.5421 16.3122 14.8971L21.7073 20.293ZM14 11H6.00003V8.99999H14V11Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgZoomOut)
