import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgWeatherThunderIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M23 10.927a6.087 6.087 0 0 1-6.08 6.08v-2a4.084 4.084 0 0 0 4.08-4.08c0-2.25-1.83-4.08-4.08-4.08h-1.198l-.29-.494c-.72-1.23-1.984-1.963-3.383-1.963-1.932 0-3.6 1.451-3.877 3.375l-.123.857h-2.03A3.024 3.024 0 0 0 3 11.642v.344a3.024 3.024 0 0 0 3.02 3.021h1.985v2H6.02A5.026 5.026 0 0 1 1 11.986v-.344a5.026 5.026 0 0 1 5.02-5.02h.363c.743-2.465 3.042-4.232 5.666-4.232a5.95 5.95 0 0 1 4.786 2.457h.086A6.086 6.086 0 0 1 23 10.927Zm-9.455 5.065 2.542.588a.295.295 0 0 1 .142.495l-6.076 6.093c-.215.216-.576.002-.49-.29l1.225-4.169-2.542-.588a.295.295 0 0 1-.142-.495l6.076-6.093c.215-.216.577-.002.491.291l-1.226 4.168Z"
      />
    </svg>
  )
}

export default createIcon(SvgWeatherThunderIcon)
