import React from 'react'

function SvgSettings(props: React.SVGProps<SVGSVGElement>) {
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
        d="M7 12a5 5 0 1110 0 5 5 0 01-10 0zm15 1.5v-3l-2.23-.372a7.94 7.94 0 00-.955-2.296l1.316-1.843-2.12-2.12-1.844 1.316a7.933 7.933 0 00-2.295-.955L13.5 2h-3l-.372 2.23a7.94 7.94 0 00-2.296.955L5.99 3.868 3.87 5.99l1.315 1.843a7.937 7.937 0 00-.954 2.296L2 10.5v3l2.23.372c.198.822.523 1.594.954 2.296l-1.316 1.843 2.121 2.121 1.843-1.317a7.967 7.967 0 002.296.955L10.5 22h3l.372-2.23a7.961 7.961 0 002.295-.955l1.843 1.317 2.121-2.12-1.316-1.844a7.94 7.94 0 00.955-2.296L22 13.5z"
      />
    </svg>
  )
}

export default SvgSettings
