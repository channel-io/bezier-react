import React from 'react'

function SvgGroupFilled(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.484 13.5a6.501 6.501 0 016.48 5.977.499.499 0 01-.503.523h-3.997a.497.497 0 01-.493-.48 8.974 8.974 0 00-2.657-5.909c.38-.069.77-.11 1.17-.11zm-7.5-1.5a8 8 0 017.983 7.476.503.503 0 01-.506.524H1.507a.504.504 0 01-.506-.524A8 8 0 018.984 12zm7.5-5a2.926 2.926 0 110 5.852 2.926 2.926 0 010-5.852zm-7.5-3a3.6 3.6 0 110 7.2 3.6 3.6 0 010-7.2z"
      />
    </svg>
  )
}

export default SvgGroupFilled
