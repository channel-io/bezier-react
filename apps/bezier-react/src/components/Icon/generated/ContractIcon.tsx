import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgContractIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M19.94 4.057a1 1 0 0 0-1.415 0L14.793 7.79l-1.974-1.973c-.257-.257-.385-.386-.496-.394a.3.3 0 0 0-.251.104C12 5.61 12 5.792 12 6.156v5.04c0 .28 0 .42.055.527a.5.5 0 0 0 .218.219c.107.054.247.054.527.054h5.041c.364 0 .545 0 .63-.071a.3.3 0 0 0 .104-.252c-.009-.11-.137-.239-.394-.496l-1.974-1.973L19.94 5.47a1 1 0 0 0 0-1.414Zm-8.015 14.414c.071-.085.071-.266.071-.63V12.8c0-.28 0-.42-.054-.527a.5.5 0 0 0-.219-.218C11.616 12 11.476 12 11.196 12h-5.04c-.364 0-.546 0-.63.072a.3.3 0 0 0-.104.252c.008.11.137.238.394.495l1.973 1.974-3.732 3.732a1 1 0 1 0 1.414 1.414l3.733-3.732 1.973 1.974c.257.257.386.385.496.394a.3.3 0 0 0 .252-.104Z"
      />
    </svg>
  )
}

export default createIcon(SvgContractIcon)
