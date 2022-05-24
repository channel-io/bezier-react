import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgWeatherRainIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M6.019 15.007H16.92A4.084 4.084 0 0 0 21 10.927c0-2.25-1.83-4.08-4.08-4.08h-1.198l-.29-.494c-.72-1.23-1.984-1.963-3.383-1.963-1.933 0-3.6 1.451-3.877 3.375l-.123.857h-2.03a3.024 3.024 0 0 0-3.02 3.02v.344a3.024 3.024 0 0 0 3.02 3.021ZM16.92 4.847A6.086 6.086 0 0 1 23 10.927c0 3.226-2.527 5.866-5.705 6.061l-2.585 6.014-1.838-.789 2.237-5.206H8.558l-2.576 5.995-1.838-.789 2.237-5.206h-.362a5.026 5.026 0 0 1-5.02-5.021v-.344a5.026 5.026 0 0 1 5.02-5.02h.363c.743-2.465 3.042-4.232 5.667-4.232a5.95 5.95 0 0 1 4.786 2.457h.086ZM8.508 22.213l2.237-5.206h2.177l-2.577 5.995-1.837-.789Z"
      />
    </svg>
  )
}

export default createIcon(SvgWeatherRainIcon)
