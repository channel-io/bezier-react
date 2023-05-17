import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgArrowRightUp(props: SVGProps<SVGSVGElement>) {
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
        d="M17.9971 6.00016V6.00012H17.9971C17.9971 6.00013 17.9971 6.00013 17.9971 6.00014C17.9971 6.00014 17.9971 6.00015 17.9971 6.00016ZM17.9971 7.41433C17.9971 7.41434 17.9971 7.41434 17.9971 7.41435L5.4113 20.0001C5.02078 20.3907 4.38761 20.3907 3.99709 20.0001C3.60656 19.6096 3.60656 18.9764 3.99709 18.5859L16.5829 6.00014C16.5829 6.00013 16.5829 6.00013 16.5829 6.00012H4.99711C4.44482 6.00012 3.99711 5.55241 3.99711 5.00012C3.99711 4.44784 4.44482 4.00012 4.99711 4.00012H18.4971C19.3255 4.00012 19.9971 4.67169 19.9971 5.50012V19.0001C19.9971 19.5524 19.5494 20.0001 18.9971 20.0001C18.4448 20.0001 17.9971 19.5524 17.9971 19.0001V7.41433Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgArrowRightUp)
