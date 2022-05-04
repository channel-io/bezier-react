import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgBreaktimeIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M14.997 5c-.53 0-.997.323-.997.692V6h-2v-.308C12 4.208 13.344 3 14.997 3c.531 0 .997-.324.997-.693V2h2v.307C17.994 3.792 16.65 5 14.997 5ZM20 12.822c.59-.284 1-.882 1-1.578V9h-1v3.822Zm-7 6.174c2.757 0 5-2.243 5-5v-5H6v5c0 2.757 2.243 5 5 5h2Zm7-12V7h3v4.244a3.758 3.758 0 0 1-3.07 3.687A6.978 6.978 0 0 1 17.885 19H21v2H3v-2h3.115A6.975 6.975 0 0 1 4 13.996v-7h16Z"
      />
    </svg>
  )
}

export default createIcon(SvgBreaktimeIcon)
