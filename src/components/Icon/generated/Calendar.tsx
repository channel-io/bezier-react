import React from 'react'

function SvgCalendar(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.5 21h15a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0019.5 3h-15A1.5 1.5 0 003 4.5v15A1.5 1.5 0 004.5 21zM5 8v11h14V8H5zm1.628 3.81a1.237 1.237 0 112.473 0 1.237 1.237 0 01-2.473 0zm4.129 0a1.237 1.237 0 112.474 0 1.237 1.237 0 01-2.474 0zm5.366-1.237a1.237 1.237 0 100 2.475 1.237 1.237 0 000-2.475zm-9.495 5.19a1.237 1.237 0 112.473-.001 1.237 1.237 0 01-2.473 0zm5.366-1.238a1.237 1.237 0 100 2.475 1.237 1.237 0 000-2.475zm2.891 1.237a1.237 1.237 0 112.475.001 1.237 1.237 0 01-2.475 0z"
      />
    </svg>
  )
}

export default SvgCalendar
