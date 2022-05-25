import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgViewIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M4.39 12.514c-.3.464-.902.654-1.39.394-.487-.26-.674-.87-.38-1.337 4.66-7.428 14.54-7.428 19.202 0 .294.468.107 1.077-.38 1.337-.488.26-1.091.07-1.39-.394-3.885-6.019-11.777-6.019-15.662 0Zm7.83-3.117a4.107 4.107 0 1 1 0 8.214 4.107 4.107 0 0 1 0-8.214Z"
      />
    </svg>
  )
}

export default createIcon(SvgViewIcon)
