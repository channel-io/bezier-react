import React from 'react'

function SvgBriefcase(props: React.SVGProps<SVGSVGElement>) {
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
        d="M20 14H4V8h16v6zm0 4H4v-2h16v2zM15 6H9V5h6v1zm2 0h3.5c.827 0 1.5.673 1.5 1.5v11c0 .827-.673 1.5-1.5 1.5h-17c-.827 0-1.5-.673-1.5-1.5v-11C2 6.673 2.673 6 3.5 6H7V4.5C7 3.673 7.673 3 8.5 3h7c.827 0 1.5.673 1.5 1.5V6zm-3 7h-4v-2h4v2z"
      />
    </svg>
  )
}

export default SvgBriefcase
