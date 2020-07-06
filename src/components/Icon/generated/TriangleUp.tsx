import React from 'react'

function SvgTriangleUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.703 8.64L6.09 15.373a.387.387 0 00.297.635h11.226a.388.388 0 00.297-.635L12.297 8.64a.387.387 0 00-.594 0"
      />
    </svg>
  )
}

export default SvgTriangleUp
