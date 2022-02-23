import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgPeopleListIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M5 7A2 2 0 1 0 5 3 2 2 0 0 0 5 7Zm-2 9h1v5h2v-5h1V8H3v8ZM21 6H10V4h11v2Zm-11 7h11v-2H10v2Zm11 7H10v-2h11v2Z"
      />
    </svg>
  )
}

export default createIcon(SvgPeopleListIcon)
