import React from 'react'

function SvgNumber(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20 5a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V7a2 2 0 012-2h16zm-4 2h-.5l-.176.005A3 3 0 0012.5 10v.5l.005.176A3 3 0 0015.5 13.5h.5l.231-.009c.229-.017.45-.06.663-.126A2.334 2.334 0 0114.667 15H13v2h1.667l.21-.005A4.334 4.334 0 0019 12.667V10l-.005-.176A3 3 0 0016 7zM8.25 7A3.25 3.25 0 005 10.25v3.5a3.25 3.25 0 106.5 0v-3.5A3.25 3.25 0 008.25 7zm0 2c.69 0 1.25.56 1.25 1.25v3.5l-.006.128A1.25 1.25 0 017 13.75v-3.5l.006-.128A1.25 1.25 0 018.25 9zM16 9a1 1 0 011 1v.5l-.007.117A1 1 0 0116 11.5h-.5l-.117-.007a1 1 0 01-.883-.993V10l.007-.117A1 1 0 0115.5 9z"
      />
    </svg>
  )
}

export default SvgNumber
