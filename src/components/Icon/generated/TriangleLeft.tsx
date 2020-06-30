import React from 'react'

function SvgTriangleLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.26 11.923l6.734 5.612c.253.21.635.031.635-.296V6.013a.388.388 0 00-.635-.298L7.26 11.33a.387.387 0 000 .594"
      />
    </svg>
  )
}

export default SvgTriangleLeft
