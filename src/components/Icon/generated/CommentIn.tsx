import React from 'react'

function SvgCommentIn(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 17H8.276L5 19.73V5h14v12zm.5 2H9l-4.36 3.633A1 1 0 013 21.865V4.5A1.5 1.5 0 014.5 3h15A1.5 1.5 0 0121 4.5v13a1.5 1.5 0 01-1.5 1.5zM11 14.414l5.707-5.707-1.414-1.414L11 11.586 8.707 9.293l-1.414 1.414L11 14.414z"
      />
    </svg>
  )
}

export default SvgCommentIn
