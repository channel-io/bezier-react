import * as React from 'react'
import { SVGProps } from 'react'

function SvgLinkIcon(props: SVGProps<SVGSVGElement>) {
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
        d="m14.627 4.981-2.359 2.36-1.414-1.415 2.36-2.359a5.351 5.351 0 0 1 7.566 7.567l-3.304 3.304a5.351 5.351 0 0 1-7.567 0l-.707-.707 1.414-1.414.707.707a3.351 3.351 0 0 0 4.74 0l3.303-3.304a3.351 3.351 0 0 0-4.739-4.739ZM9.72 19.366l2.36-2.359 1.413 1.415-2.359 2.359a5.351 5.351 0 0 1-7.567-7.568L6.871 9.91a5.351 5.351 0 0 1 7.567 0l.707.707-1.414 1.415-.707-.707a3.351 3.351 0 0 0-4.739 0l-3.304 3.304a3.351 3.351 0 0 0 4.74 4.738Z"
      />
    </svg>
  )
}

export default SvgLinkIcon
