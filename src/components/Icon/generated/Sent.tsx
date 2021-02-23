import React from 'react'

function SvgSent(props: React.SVGProps<SVGSVGElement>) {
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
        d="M9.621 10.443L5.35 6h11.934L9.62 10.443zM20.988 4H3c-.881 0-1.332 1.058-.72 1.693l6.27 6.521 2.453 8.706c.24.852 1.386.995 1.828.23l9.03-15.64.017-.031A1 1 0 0020.988 4zM18.26 7.745l-7.644 4.433 1.668 5.918L18.26 7.745z"
      />
    </svg>
  )
}

export default SvgSent
