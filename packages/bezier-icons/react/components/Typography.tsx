import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgTypography(props: SVGProps<SVGSVGElement>) {
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
        d="M4.00024 3.00009C3.44796 3.00009 3.00024 3.44781 3.00024 4.00009V7.00009C3.00024 7.55238 3.44796 8.00009 4.00024 8.00009C4.55253 8.00009 5.00024 7.55238 5.00024 7.00009V6.00009C5.00024 5.44709 5.44824 5.00009 6.00024 5.00009H9.00024C9.55224 5.00009 10.0002 5.44709 10.0002 6.00009V18.0001C10.0002 18.5531 9.55224 19.0001 9.00024 19.0001H8.00024C7.44796 19.0001 7.00024 19.4478 7.00024 20.0001C7.00024 20.5524 7.44796 21.0001 8.00024 21.0001H16.0002C16.5525 21.0001 17.0002 20.5524 17.0002 20.0001C17.0002 19.4478 16.5525 19.0001 16.0002 19.0001H15.0002C14.4482 19.0001 14.0002 18.5531 14.0002 18.0001V6.00009C14.0002 5.44709 14.4482 5.00009 15.0002 5.00009H18.0002C18.5522 5.00009 19.0002 5.44709 19.0002 6.00009V7.00009C19.0002 7.55238 19.448 8.00009 20.0002 8.00009C20.5525 8.00009 21.0002 7.55238 21.0002 7.00009V4.00009C21.0002 3.44781 20.5525 3.00009 20.0002 3.00009H4.00024Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgTypography)
