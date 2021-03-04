import React from 'react'

function SvgWeatherSun(props: React.SVGProps<SVGSVGElement>) {
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
        d="M11 6h2V2h-2v4zM5.636 4.222L8.463 7.05 7.051 8.464 4.22 5.636l1.415-1.414zM12 14.5A2.503 2.503 0 019.5 12c0-1.379 1.122-2.5 2.5-2.5s2.5 1.121 2.5 2.5c0 1.38-1.122 2.5-2.5 2.5zm0-7A4.505 4.505 0 007.5 12c0 2.481 2.02 4.5 4.5 4.5 2.481 0 4.5-2.019 4.5-4.5 0-2.48-2.019-4.5-4.5-4.5zM2 13h4v-2H2v2zm16.364-8.778l1.414 1.414-2.828 2.828-1.414-1.414 2.828-2.828zM18 13h4v-2h-4v2zm.364 6.778l-2.828-2.829 1.414-1.414 2.828 2.83-1.414 1.413zM11 22h2v-4h-2v4zm-5.364-2.222l-1.414-1.414 2.829-2.829 1.414 1.414-2.83 2.83z"
      />
    </svg>
  )
}

export default SvgWeatherSun
