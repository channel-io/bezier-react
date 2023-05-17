import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgApi(props: SVGProps<SVGSVGElement>) {
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
        d="M9.50021 17.0001C9.77621 17.0001 10.0002 16.7761 10.0002 16.5001V9.00012C10.0002 7.89612 9.10421 7.00012 8.00021 7.00012H6.00021C4.89621 7.00012 4.00021 7.89612 4.00021 9.00012V16.5001C4.00021 16.7761 4.22421 17.0001 4.50021 17.0001H5.50021C5.77621 17.0001 6.00021 16.7761 6.00021 16.5001V14.0001H8.00021V16.5001C8.00021 16.7761 8.22421 17.0001 8.50021 17.0001H9.50021ZM2.00021 7.00012C2.00021 5.89612 2.89621 5.00012 4.00021 5.00012H20.0002C21.1042 5.00012 22.0002 5.89612 22.0002 7.00012V17.0001C22.0002 18.1041 21.1042 19.0001 20.0002 19.0001H4.00021C2.89621 19.0001 2.00021 18.1041 2.00021 17.0001V7.00012ZM6.00021 9.50012C6.00021 9.22412 6.22421 9.00012 6.50021 9.00012H7.50021C7.77621 9.00012 8.00021 9.22412 8.00021 9.50012V12.0001H6.00021V9.50012ZM11 7.80012C11 7.5201 11 7.38008 11.0545 7.27313C11.1024 7.17905 11.1789 7.10256 11.273 7.05462C11.3733 7.00353 11.5026 7.00033 11.7491 7.00014L11.8 7.00012H11.8002H12.2002H13.8C14.9201 7.00012 15.4802 7.00012 15.908 7.21811C16.2843 7.40986 16.5903 7.71582 16.782 8.09214C17 8.51996 17 9.08002 17 10.2001V10.8001C17 11.9202 17 12.4803 16.782 12.9081C16.5903 13.2844 16.2843 13.5904 15.908 13.7821C15.4802 14.0001 14.9201 14.0001 13.8 14.0001H13.0002V16.2001C13.0002 16.4801 13.0002 16.6202 12.9457 16.7271C12.8978 16.8212 12.8213 16.8977 12.7272 16.9456C12.6202 17.0001 12.4802 17.0001 12.2002 17.0001H11.8002C11.5202 17.0001 11.3802 17.0001 11.2732 16.9456C11.1791 16.8977 11.1026 16.8212 11.0547 16.7271C11.0002 16.6202 11.0002 16.4801 11.0002 16.2001V13.3201C11 13.2832 11 13.2433 11 13.2001V7.80012ZM13.0002 12H14.2C14.48 12 14.62 12 14.727 11.9455C14.8211 11.8976 14.8976 11.8211 14.9455 11.727C15 11.62 15 11.48 15 11.2V9.8C15 9.51997 15 9.37996 14.9455 9.273C14.8976 9.17892 14.8211 9.10243 14.727 9.0545C14.62 9 14.48 9 14.2 9H13.0002V12ZM18.0545 7.27313C18 7.38008 18 7.5201 18 7.80012V16.2001C18 16.4801 18 16.6202 18.0545 16.7271C18.1024 16.8212 18.1789 16.8977 18.273 16.9456C18.38 17.0001 18.52 17.0001 18.8 17.0001H19.2C19.48 17.0001 19.62 17.0001 19.727 16.9456C19.8211 16.8977 19.8976 16.8212 19.9455 16.7271C20 16.6202 20 16.4801 20 16.2001V7.80012C20 7.5201 20 7.38008 19.9455 7.27313C19.8976 7.17905 19.8211 7.10256 19.727 7.05462C19.62 7.00012 19.48 7.00012 19.2 7.00012H18.8C18.52 7.00012 18.38 7.00012 18.273 7.05462C18.1789 7.10256 18.1024 7.17905 18.0545 7.27313Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgApi)
