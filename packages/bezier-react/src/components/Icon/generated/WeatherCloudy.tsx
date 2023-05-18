import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgWeatherCloudy(props: SVGProps<SVGSVGElement>) {
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
        d="M11 4.953H9v-2.5h2v2.5Zm-4.535 1.05L4.708 4.246 3.294 5.66 5.05 7.417l1.414-1.414ZM1.5 11.953H4v-2H1.5v2ZM16.707 5.66l-1.414-1.414-1.757 1.757 1.414 1.414 1.757-1.757ZM8.216 19h8.72A3.067 3.067 0 0 0 20 15.936a3.067 3.067 0 0 0-3.063-3.064h-1.073l-.29-.495a2.918 2.918 0 0 0-2.534-1.47c-1.448 0-2.696 1.086-2.904 2.528l-.123.857H8.216A2.218 2.218 0 0 0 6 16.508v.276C6 18.006 6.994 19 8.216 19ZM10 8.453a2.503 2.503 0 0 0-2.5 2.5c0 .491.145.962.414 1.37.042-.004.083-.01.123-.015.059-.008.117-.016.179-.016h.144a4.982 4.982 0 0 1 3.323-3.18A2.501 2.501 0 0 0 10 8.452Zm4.15.584a4.98 4.98 0 0 1 2.819 1.835 5.069 5.069 0 0 1 5.03 5.064A5.069 5.069 0 0 1 16.938 21H8.216A4.222 4.222 0 0 1 4 16.784v-.276a4.21 4.21 0 0 1 1.97-3.555 4.486 4.486 0 0 1-.47-2c0-2.48 2.019-4.5 4.5-4.5 1.47 0 2.85.721 3.693 1.928l.458.656Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgWeatherCloudy)
