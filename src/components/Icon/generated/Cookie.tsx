import React from 'react'

function SvgCookie(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.005 2c.59 0 1.208.06 1.833.175l.817.152v.83a6.207 6.207 0 006.192 6.193h.83l.152.817c.118.635.176 1.235.176 1.833 0 5.514-4.486 10-10 10s-10-4.486-10-10 4.486-10 10-10zm0 2c-4.411 0-8 3.589-8 8 0 4.41 3.589 8 8 8 4.41 0 8-3.59 8-8 0-.23-.011-.461-.033-.697a8.216 8.216 0 01-7.27-7.27A7.47 7.47 0 0012.005 4zM12 15a1.75 1.75 0 110 3.5 1.75 1.75 0 010-3.5zm3-3.5a1.75 1.75 0 110 3.5 1.75 1.75 0 010-3.5zM10 7a1.75 1.75 0 110 3.5A1.75 1.75 0 0110 7z"
      />
    </svg>
  )
}

export default SvgCookie
