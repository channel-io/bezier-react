import React from 'react'

function SvgBullet(props: React.SVGProps<SVGSVGElement>) {
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
        d="M14 12a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  )
}

export default SvgBullet
