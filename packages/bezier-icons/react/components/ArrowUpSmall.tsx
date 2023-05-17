import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgArrowUpSmall(props: SVGProps<SVGSVGElement>) {
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
        d="M12 19C12.5523 19 13 18.5523 13 18L13 8.41421L16.7929 12.2071C17.1834 12.5976 17.8166 12.5976 18.2071 12.2071C18.5976 11.8166 18.5976 11.1834 18.2071 10.7929L12.7071 5.29289C12.3166 4.90237 11.6834 4.90237 11.2929 5.29289L5.79289 10.7929C5.40237 11.1834 5.40237 11.8166 5.79289 12.2071C6.18342 12.5976 6.81658 12.5976 7.20711 12.2071L11 8.41421L11 18C11 18.5523 11.4477 19 12 19Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgArrowUpSmall)
