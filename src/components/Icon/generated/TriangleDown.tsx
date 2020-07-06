import React from 'react'

function SvgTriangleDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.703 16.37L6.09 9.635A.387.387 0 016.387 9h11.226c.327 0 .506.382.297.635l-5.613 6.735a.386.386 0 01-.594 0"
      />
    </svg>
  )
}

export default SvgTriangleDown
