import React from 'react'

function SvgTrendingDown(props: React.SVGProps<SVGSVGElement>) {
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
        d="M11.634 17.849l-5.166-5.167A.4.4 0 016.751 12H10V6.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5V12h3.25a.4.4 0 01.282.682l-5.165 5.167a.518.518 0 01-.732 0z"
      />
    </svg>
  )
}

export default SvgTrendingDown
