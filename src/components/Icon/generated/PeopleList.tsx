import React from 'react'

function SvgPeopleList(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7 8v8H6v5H4v-5H3V8h4zm14 10v2H10v-2h11zm0-7v2H10v-2h11zM5 3a2 2 0 11-.001 4.001A2 2 0 015 3zm16 1v2H10V4h11z"
      />
    </svg>
  )
}

export default SvgPeopleList
