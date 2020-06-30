import React from 'react'

function SvgPersonFilled(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.987 12c5.348 0 9.715 4.198 9.987 9.478a.507.507 0 01-.507.522H2.507a.506.506 0 01-.506-.522C2.27 16.198 6.64 12 11.987 12zm0-10a4.5 4.5 0 110 9 4.5 4.5 0 010-9z"
      />
    </svg>
  )
}

export default SvgPersonFilled
