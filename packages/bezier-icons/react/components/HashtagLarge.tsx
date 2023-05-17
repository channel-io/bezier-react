import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgHashtagLarge(props: SVGProps<SVGSVGElement>) {
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
        d="M10.1843 3.01712C10.7271 3.1189 11.0847 3.64146 10.9829 4.18429L10.4549 7H15.4201L16.0171 3.81571C16.1189 3.27288 16.6415 2.91534 17.1843 3.01712C17.7271 3.1189 18.0847 3.64146 17.9829 4.18429L17.4549 7H20C20.5523 7 21 7.44771 21 8C21 8.55228 20.5523 9 20 9H17.0799L15.9549 15H19C19.5523 15 20 15.4477 20 16C20 16.5523 19.5523 17 19 17H15.5799L14.9829 20.1843C14.8811 20.7271 14.3585 21.0846 13.8157 20.9829C13.2729 20.8811 12.9153 20.3585 13.0171 19.8157L13.5451 17H8.57993L7.98287 20.1843C7.88109 20.7271 7.35854 21.0846 6.81571 20.9829C6.27289 20.8811 5.91535 20.3585 6.01713 19.8157L6.54507 17H4C3.44772 17 3 16.5523 3 16C3 15.4477 3.44772 15 4 15H6.92007L8.04507 9H5C4.44772 9 4 8.55228 4 8C4 7.44771 4.44772 7 5 7H8.42007L9.01713 3.81571C9.11891 3.27288 9.64146 2.91534 10.1843 3.01712ZM13.9201 15L15.0451 9H10.0799L8.95493 15H13.9201Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgHashtagLarge)
