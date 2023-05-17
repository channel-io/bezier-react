import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgArrowDownSmall(props: SVGProps<SVGSVGElement>) {
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
        d="M12 5C11.4477 5 11 5.44772 11 6V15.5858L7.20711 11.7929C6.81658 11.4024 6.18342 11.4024 5.79289 11.7929C5.40237 12.1834 5.40237 12.8166 5.79289 13.2071L11.2929 18.7071C11.6834 19.0976 12.3166 19.0976 12.7071 18.7071L18.2071 13.2071C18.5976 12.8166 18.5976 12.1834 18.2071 11.7929C17.8166 11.4024 17.1834 11.4024 16.7929 11.7929L13 15.5858V6C13 5.44772 12.5523 5 12 5Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgArrowDownSmall)
