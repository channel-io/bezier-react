import React from 'react'

function SvgCookie(props: React.SVGProps<SVGSVGElement>) {
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
        d="M4.005 12c0 4.41 3.589 8 8 8 4.41 0 8-3.59 8-8 0-.23-.011-.461-.033-.697a8.216 8.216 0 01-7.27-7.27A7.47 7.47 0 0012.005 4c-4.411 0-8 3.589-8 8zm17.673-2.65l.15.817c.119.635.177 1.235.177 1.833 0 5.514-4.486 10-10 10s-10-4.486-10-10 4.486-10 10-10c.59 0 1.208.06 1.833.175l.817.152v.83a6.207 6.207 0 006.192 6.193h.83zM10 7a1.75 1.75 0 110 3.5A1.75 1.75 0 0110 7zm5 4.5A1.75 1.75 0 1015 15 1.75 1.75 0 0015 11.5zm-4.75 5.25a1.75 1.75 0 113.499-.001 1.75 1.75 0 01-3.499.001z"
      />
    </svg>
  )
}

export default SvgCookie
