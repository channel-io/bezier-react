import React from 'react'

function SvgGroupFilled(props: React.SVGProps<SVGSVGElement>) {
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
        d="M8.984 11.2a3.6 3.6 0 100-7.2 3.6 3.6 0 000 7.2zM19.41 9.925a2.926 2.926 0 11-5.85 0 2.926 2.926 0 015.85 0zm-4.095 3.686c.38-.069.77-.11 1.17-.11a6.5 6.5 0 016.48 5.976.497.497 0 01-.503.523h-3.997a.497.497 0 01-.493-.48 8.974 8.974 0 00-2.657-5.909zM1.001 19.476a8 8 0 0115.966 0 .504.504 0 01-.506.524H1.507a.504.504 0 01-.506-.524z"
      />
    </svg>
  )
}

export default SvgGroupFilled
