import React from 'react'

function SvgSurvey(props: React.SVGProps<SVGSVGElement>) {
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
        d="M17 20H7V5h2v1h6V5h2v15zm.5-17H15V2H9v1H6.5C5.673 3 5 3.673 5 4.5v16c0 .827.673 1.5 1.5 1.5h11c.827 0 1.5-.673 1.5-1.5v-16c0-.827-.673-1.5-1.5-1.5zM9 12h6v-2H9v2zm6 4H9v-2h6v2z"
      />
    </svg>
  )
}

export default SvgSurvey
