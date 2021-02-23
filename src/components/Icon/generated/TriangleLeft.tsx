import React from 'react'

function SvgTriangleLeft(props: React.SVGProps<SVGSVGElement>) {
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
        d="M7.63 11.923l6.735 5.612c.253.21.635.031.635-.296V6.013a.388.388 0 00-.635-.298L7.63 11.33a.386.386 0 000 .594z"
      />
    </svg>
  )
}

export default SvgTriangleLeft
