import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgPageDownload(props: SVGProps<SVGSVGElement>) {
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
        d="M7.00024 4.00012V20.0001H12.0002V22.0001H6.50024C5.67196 22.0001 5.00024 21.3284 5.00024 20.5001V3.50012C5.00024 2.67184 5.67196 2.00012 6.50024 2.00012H11.7702C12.2107 2.00012 12.6305 2.19298 12.9085 2.52427L18.6296 9.19809C18.7446 9.32866 18.8331 9.47664 18.8952 9.63503C19.1524 10.291 18.6688 11.0001 17.9642 11.0001H12.3852C11.6199 11.0001 11.0002 10.3794 11.0002 9.61512V4.00012H7.00024ZM13.0002 9.00014H15.8257L13.0002 5.70422V9.00014ZM19.0002 18.7179V12.9998H17.0002V18.726L14.6291 16.5392L13.2732 18.0095L17.9894 22.3589L22.7271 18.0133L21.3752 16.5394L19.0002 18.7179Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgPageDownload)
