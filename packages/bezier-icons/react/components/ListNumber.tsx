import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgListNumber(props: SVGProps<SVGSVGElement>) {
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
        d="M4.60397 3.08875C4.84784 3.21926 5.00008 3.4734 5.00008 3.75V8.75C5.00008 9.16421 4.66429 9.5 4.25008 9.5C3.83587 9.5 3.50008 9.16421 3.50008 8.75V5.15139L3.1661 5.37404C2.82146 5.6038 2.35581 5.51067 2.12604 5.16603C1.89628 4.82138 1.98941 4.35573 2.33405 4.12596L3.83405 3.12596C4.0642 2.97254 4.36011 2.95823 4.60397 3.08875ZM8 5C8 5.55228 8.44772 6 9 6H20C20.5523 6 21 5.55228 21 5C21 4.44772 20.5523 4 20 4H9C8.44772 4 8 4.44772 8 5ZM9 13C8.44772 13 8 12.5523 8 12C8 11.4477 8.44772 11 9 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H9ZM9 20C8.44772 20 8 19.5523 8 19C8 18.4477 8.44772 18 9 18H20C20.5523 18 21 18.4477 21 19C21 19.5523 20.5523 20 20 20H9ZM3.68395 16.7473C3.84825 16.5009 4.17714 16.4269 4.43112 16.5793C4.74066 16.765 4.79325 17.1922 4.53799 17.4475L2.21975 19.7657C2.00525 19.9802 1.94108 20.3028 2.05717 20.5831C2.17326 20.8633 2.44673 21.046 2.75008 21.046H5.75008C6.16429 21.046 6.50008 20.7103 6.50008 20.296C6.50008 19.8818 6.16429 19.546 5.75008 19.546H4.56074L5.59865 18.5081C6.54394 17.5628 6.3492 15.9809 5.20286 15.2931C4.2623 14.7287 3.04431 15.0026 2.43587 15.9153L2.12604 16.38C1.89628 16.7247 1.98941 17.1903 2.33405 17.4201C2.6787 17.6498 3.14435 17.5567 3.37412 17.2121L3.68395 16.7473Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgListNumber)
