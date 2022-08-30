import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'

function SvgEmailForward(props: SVGProps<SVGSVGElement>) {
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
        d="M12 19H3.5A1.5 1.5 0 0 1 2 17.5v-11A1.5 1.5 0 0 1 3.5 5h17A1.5 1.5 0 0 1 22 6.5v2.56l-.468.287-.01.006-8.608 5.26a1.748 1.748 0 0 1-1.826.001L4 10.284V17h8v2Zm0-6.172 8-4.889V7H4v.94l8 4.888Zm8 4.947V16h-1.1a2.9 2.9 0 0 0-2.9 2.9v.1a1 1 0 1 1-2 0v-.1a4.9 4.9 0 0 1 4.9-4.9H20v-1.775c0-.645.752-.967 1.191-.512l2.553 2.648c.341.353.341.925 0 1.278l-2.553 2.648c-.44.455-1.191.133-1.191-.512Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgEmailForward)
