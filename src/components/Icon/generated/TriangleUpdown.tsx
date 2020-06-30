import React from 'react'

function SvgTriangleUpdown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.613 14c.327 0 .506.382.297.635l-5.613 6.735a.386.386 0 01-.594 0L6.09 14.635A.387.387 0 016.387 14h11.226zm-5.91-11.37a.386.386 0 01.594 0l5.613 6.734a.388.388 0 01-.297.635H6.387a.388.388 0 01-.297-.635z"
      />
    </svg>
  )
}

export default SvgTriangleUpdown
