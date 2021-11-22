import React from 'react'

function SvgPersonCheck(props: React.SVGProps<SVGSVGElement>) {
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
        d="M9.484 11a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM9.652 12.007a8.002 8.002 0 016.892 4.57L15.5 17.62l-2.243-2.242-2.828 2.828L12.222 20H2.007a.503.503 0 01-.506-.524 8.001 8.001 0 017.452-7.458 3.609 3.609 0 01.45-.018h.081c.057 0 .113.002.168.007z"
      />
      <path
        fill="currentColor"
        d="M19.743 14.793L15.5 19.035l-2.243-2.242-1.414 1.414 3.657 3.657 5.657-5.657-1.414-1.414z"
      />
    </svg>
  )
}

export default SvgPersonCheck
