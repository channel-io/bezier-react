import React from 'react'

function SvgWeatherSun(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 18v4h-2v-4h2zm3.95-2.465l2.828 2.83-1.414 1.413-2.828-2.829 1.414-1.414zm-9.9 0l1.415 1.414-2.83 2.83-1.413-1.415 2.829-2.829zM12 7.5c2.481 0 4.5 2.02 4.5 4.5 0 2.481-2.019 4.5-4.5 4.5-2.48 0-4.5-2.019-4.5-4.5 0-2.48 2.02-4.5 4.5-4.5zm0 2A2.503 2.503 0 009.5 12c0 1.38 1.122 2.5 2.5 2.5s2.5-1.12 2.5-2.5c0-1.379-1.122-2.5-2.5-2.5zM6 11v2H2v-2h4zm16 0v2h-4v-2h4zM5.636 4.222L8.463 7.05 7.051 8.464 4.22 5.636l1.415-1.414zm12.728 0l1.414 1.414-2.828 2.828-1.414-1.414 2.828-2.828zM13 2v4h-2V2h2z"
      />
    </svg>
  )
}

export default SvgWeatherSun
