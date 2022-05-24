import * as React from 'react'
import { SVGProps } from 'react'
import createBezierIcon from '../createBezierIcon'

function SvgFacebook(props: SVGProps<SVGSVGElement>) {
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
        d="M12 2C6.477 2 2 6.477 2 12c0 4.986 3.654 9.11 8.43 9.864v-6.998H7.881V12h2.547v-1.654c0-.297-.502-5.614 6.005-4.25v2.49h-1.473c-.769 0-1.392.622-1.392 1.391V12h2.76l-.404 2.866H13.57v7C18.345 21.11 22 16.986 22 12c0-5.523-4.478-10-10-10"
      />
    </svg>
  )
}

export default createBezierIcon(SvgFacebook)
