import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgStarFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M12.0002 17.7598L16.7852 21.2358C17.8922 22.0398 19.3802 20.9578 18.9582 19.6568L17.1302 14.0318L21.9152 10.5558C23.0212 9.75177 22.4532 8.00077 21.0852 8.00077H15.1712L13.3432 2.37577C12.9202 1.07477 11.0802 1.07477 10.6572 2.37577L8.82921 8.00077H2.91521C1.54721 8.00077 0.978212 9.75177 2.08421 10.5558L6.86921 14.0318L5.04221 19.6568C4.61921 20.9578 6.10821 22.0398 7.21521 21.2358L12.0002 17.7598Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgStarFilled)
