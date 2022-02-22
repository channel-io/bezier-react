import * as React from 'react'
import { SVGProps } from 'react'

function SvgClockIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M20.049 11.999c0 4.438-3.611 8.049-8.049 8.049-4.438 0-8.049-3.611-8.049-8.049 0-4.437 3.611-8.048 8.049-8.048 4.438 0 8.049 3.611 8.049 8.048ZM2 11.999c0 5.515 4.485 10 10 10s10-4.485 10-10S17.515 2 12 2 2 6.484 2 11.999Zm9 .54V6h2v5.316l3.53 1.807-.912 1.78L11 12.538Z"
      />
    </svg>
  )
}

export default SvgClockIcon
