import React from 'react'

function SvgWeatherCloud(props: React.SVGProps<SVGSVGElement>) {
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
        d="M6.019 10.232A3.022 3.022 0 003 13.252v.344a3.024 3.024 0 003.019 3.021h10.902A4.084 4.084 0 0021 12.537c0-2.25-1.83-4.08-4.079-4.08h-1.199l-.289-.495C14.713 6.733 13.448 6 12.049 6 10.116 6 8.45 7.451 8.172 9.375l-.123.857h-2.03zm10.902 8.385H6.019A5.025 5.025 0 011 13.597v-.345a5.025 5.025 0 015.019-5.02h.363C7.125 5.767 9.424 4 12.049 4c1.889 0 3.674.928 4.785 2.457h.087A6.086 6.086 0 0123 12.537a6.087 6.087 0 01-6.079 6.08z"
      />
    </svg>
  )
}

export default SvgWeatherCloud
