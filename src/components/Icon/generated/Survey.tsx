import React from 'react'

function SvgSurvey(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15 2v1h2.5c.827 0 1.5.673 1.5 1.5v16c0 .827-.673 1.5-1.5 1.5h-11c-.827 0-1.5-.673-1.5-1.5v-16C5 3.673 5.673 3 6.5 3H9V2h6zM9 5H7v15h10V5h-2v1H9V5zm6 9v2H9v-2h6zm0-4v2H9v-2h6z"
      />
    </svg>
  )
}

export default SvgSurvey
