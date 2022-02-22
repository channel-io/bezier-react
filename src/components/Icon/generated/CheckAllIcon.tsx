import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgCheckAllIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M22.595 5 11.367 16.228 6.37 11.232l-1.405 1.404 6.402 6.402L24 6.406 22.595 5Zm-4.966 0-7.67 7.67 1.405 1.406 7.671-7.67L17.63 5ZM6.402 19.038 0 12.636l1.405-1.405 6.402 6.402-1.405 1.405Z"
      />
    </svg>
  )
}

export default createIcon(SvgCheckAllIcon)
