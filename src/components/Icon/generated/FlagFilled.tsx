import React from 'react'

function SvgFlagFilled(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6 3v19H4V3h2zm15.191 0a.5.5 0 01.447.724L19 9l2.638 5.276a.5.5 0 01-.447.724H7V3h14.191z"
      />
    </svg>
  )
}

export default SvgFlagFilled
