import React from 'react'

function SvgTriangleUp(props: React.SVGProps<SVGSVGElement>) {
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
        d="M11.703 8.639L6.09 15.374a.387.387 0 00.297.635h11.226a.388.388 0 00.297-.635L12.297 8.64a.386.386 0 00-.594 0z"
      />
    </svg>
  )
}

export default SvgTriangleUp
