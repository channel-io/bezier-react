import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgNote(props: SVGProps<SVGSVGElement>) {
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
        d="M4.50018 20.9998H11.7922C12.1898 20.9998 12.5723 20.8418 12.8533 20.5609L20.5613 12.8529C20.842 12.5721 21.0002 12.1907 21.0002 11.7928V4.49976C21.0002 3.67243 20.3284 2.99976 19.5002 2.99976H4.50018C3.67193 2.99976 3.00018 3.67243 3.00018 4.49976V19.4998C3.00018 20.328 3.6719 20.9998 4.50018 20.9998ZM5.00018 18.9998V4.99976H19.0002V10.9998H12.5002C11.6719 10.9998 11.0002 11.6724 11.0002 12.4998V18.9998H5.00018ZM13.0002 17.5855L17.586 12.9998H13.0002V17.5855Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgNote)
