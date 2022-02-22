import * as React from 'react'
import { SVGProps } from 'react'

function SvgExpand(props: SVGProps<SVGSVGElement>) {
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
        d="M20.928 9.47C21 9.387 21 9.206 21 8.842V3.8c0-.28 0-.42-.055-.527a.5.5 0 0 0-.218-.219C20.62 3 20.48 3 20.2 3h-5.041c-.364 0-.545 0-.63.072a.3.3 0 0 0-.104.252c.009.11.137.238.394.495l1.974 1.974-4.44 4.44 1.415 1.413 4.44-4.439 1.973 1.974c.257.257.385.385.495.394a.3.3 0 0 0 .252-.104ZM3.072 14.53C3 14.613 3 14.794 3 15.158V20.2c0 .28 0 .42.054.527a.5.5 0 0 0 .219.218C3.38 21 3.52 21 3.8 21h5.041c.364 0 .545 0 .63-.072a.3.3 0 0 0 .104-.252c-.009-.11-.137-.238-.394-.495l-1.974-1.974 4.44-4.44-1.415-1.413-4.44 4.439-1.973-1.974c-.257-.257-.385-.385-.495-.394a.3.3 0 0 0-.252.104Z"
      />
    </svg>
  )
}

export default SvgExpand
