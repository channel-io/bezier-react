import React from 'react'

function SvgCamera(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.691 5c.19 0 .362.106.447.276L17 7h4.5a.5.5 0 01.5.5v12a.5.5 0 01-.5.5h-19a.5.5 0 01-.5-.5v-12a.5.5 0 01.5-.5H7l.862-1.724A.498.498 0 018.31 5zm-3.69 2.5a5.505 5.505 0 00-5.5 5.5c0 3.032 2.466 5.5 5.5 5.5 3.032 0 5.5-2.468 5.5-5.5 0-3.033-2.468-5.5-5.5-5.5zM12 9a4 4 0 11-.002 8.002A4 4 0 0112 9z"
      />
    </svg>
  )
}

export default SvgCamera
