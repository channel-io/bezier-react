import React from 'react'

function SvgNumber(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 7a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V7zm14 0h-.5a3 3 0 00-3 3v.5a3 3 0 003 3h.5c.311 0 .611-.047.894-.135A2.334 2.334 0 0114.667 15H13v2h1.667l.21-.005A4.334 4.334 0 0019 12.667V10a3 3 0 00-3-3zm0 4.5a1 1 0 001-1V10a1 1 0 00-1-1h-.5a1 1 0 00-1 1v.5a1 1 0 001 1h.5zM8.25 7a3.25 3.25 0 013.25 3.25v3.5a3.25 3.25 0 01-6.5 0v-3.5A3.25 3.25 0 018.25 7zm0 2a1.25 1.25 0 00-1.244 1.122L7 10.25v3.5a1.25 1.25 0 002.494.128l.006-.128v-3.5C9.5 9.56 8.94 9 8.25 9z"
      />
    </svg>
  )
}

export default SvgNumber
