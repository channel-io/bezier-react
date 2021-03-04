import React from 'react'

function SvgCamera(props: React.SVGProps<SVGSVGElement>) {
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
        d="M6.5 13c0 3.032 2.467 5.5 5.5 5.5s5.5-2.468 5.5-5.5c0-3.033-2.467-5.5-5.5-5.5A5.506 5.506 0 006.5 13zM17 7h4.5a.5.5 0 01.5.5v12a.5.5 0 01-.5.5h-19a.5.5 0 01-.5-.5v-12a.5.5 0 01.5-.5H7l.862-1.724A.498.498 0 018.31 5h7.382c.19 0 .362.106.447.276L17 7zm-9 6a4 4 0 118 0 4 4 0 01-8 0z"
      />
    </svg>
  )
}

export default SvgCamera
