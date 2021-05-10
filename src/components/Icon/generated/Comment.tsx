import React from 'react'

function SvgComment(props: React.SVGProps<SVGSVGElement>) {
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
        d="M8.276 17H19V5H5v14.73L8.276 17zM9 19h10.5a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0019.5 3h-15A1.5 1.5 0 003 4.5v17.365a1 1 0 001.64.768L9 19zM8 8h8v2H8V8zm8 4H8v2h8v-2z"
      />
    </svg>
  )
}

export default SvgComment
