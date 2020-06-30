import React from 'react'

function SvgTriangleRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.744 11.923l-6.735 5.612a.387.387 0 01-.635-.296V6.013c0-.327.383-.506.635-.298l6.735 5.614a.386.386 0 010 .594"
      />
    </svg>
  )
}

export default SvgTriangleRight
