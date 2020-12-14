import React from 'react'

function SvgBaseball(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.479 2 2 6.477 2 12s4.478 10 10 10c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 2a7.964 7.964 0 00-4.728 1.546A8.973 8.973 0 0110 12a8.973 8.973 0 01-2.727 6.454A7.964 7.964 0 0012 20a7.964 7.964 0 004.727-1.546A8.973 8.973 0 0114 12a8.973 8.973 0 012.728-6.455A7.964 7.964 0 0012 4zm6.182 2.922A6.98 6.98 0 0016 12c0 2 .838 3.803 2.182 5.078A7.967 7.967 0 0020.001 12a7.967 7.967 0 00-1.819-5.078zM4 12c0-1.928.682-3.697 1.818-5.078A6.98 6.98 0 018 12a6.98 6.98 0 01-2.182 5.078A7.967 7.967 0 014 12z"
      />
    </svg>
  )
}

export default SvgBaseball
