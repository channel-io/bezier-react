import React from 'react'

function SvgTriangleRight(props: React.SVGProps<SVGSVGElement>) {
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
        d="M16.37 11.923l-6.735 5.612A.387.387 0 019 17.24V6.013c0-.327.382-.506.635-.298l6.735 5.614a.386.386 0 010 .594z"
      />
    </svg>
  )
}

export default SvgTriangleRight
