import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgOffice(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M7 6h2v2H7V6ZM13 6h-2v2h2V6ZM7 10h2v2H7v-2ZM13 10h-2v2h2v-2Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.222 2c.43 0 .778.448.778 1v7h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H3.778C3.348 21 3 20.552 3 20V3c0-.552.348-1 .778-1h12.444ZM15 19V4H5v15h3v-5h4v5h3Zm2 0h2v-7h-2v7Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgOffice)
