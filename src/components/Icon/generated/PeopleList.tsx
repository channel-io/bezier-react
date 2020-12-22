import React from 'react'

function SvgPeopleList(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 7A2 2 0 105 3 2 2 0 005 7zm-2 9h1v5h2v-5h1V8H3v8zM21 6H10V4h11v2zm-11 7h11v-2H10v2zm11 7H10v-2h11v2z"
      />
    </svg>
  )
}

export default SvgPeopleList
