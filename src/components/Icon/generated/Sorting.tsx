import React from 'react'

function SvgSorting(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.019 10h2l-.004 7.792 2.535-2.535 1.414 1.414-3.89 3.89a1.493 1.493 0 01-1.06.438c-.384 0-.768-.146-1.06-.439l-3.89-3.889 1.415-1.414 2.536 2.537.004-7.795zm-7.003 8v2h-7v-2h7zM14 11v2H3v-2h11zm7.016-7v2h-18V4h18z"
      />
    </svg>
  )
}

export default SvgSorting
