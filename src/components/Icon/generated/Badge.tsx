import * as React from 'react'
import { SVGProps } from 'react'

function SvgBadge(props: SVGProps<SVGSVGElement>) {
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
        d="M12 3a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13Zm4 14.002a8.5 8.5 0 1 0-8 0v5.16a.5.5 0 0 0 .737.441L12 20.846l3.263 1.757a.5.5 0 0 0 .737-.44v-5.161Zm-.303-9.72a1 1 0 0 1 .02 1.414l-3.882 4a1 1 0 0 1-1.435 0l-2.118-2.181a1 1 0 0 1 1.436-1.393l1.4 1.442 3.164-3.26a1 1 0 0 1 1.415-.022Z"
      />
    </svg>
  )
}

export default SvgBadge
