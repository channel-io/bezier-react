import React from 'react'

function SvgOpenInNew(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="currentColor">
        <path
          fill="currentColor"
          d="M5 5v14h14v-7h2v7.5c0 .827-.673 1.5-1.5 1.5h-15c-.827 0-1.5-.673-1.5-1.5v-15C3 3.673 3.673 3 4.5 3H12v2H5z"
        />
        <path
          fill="currentColor"
          d="M21 8.841c0 .364 0 .545-.072.63a.3.3 0 01-.252.104c-.11-.009-.238-.137-.495-.394l-1.944-1.944-5.823 5.824L11 11.646l5.823-5.823L14.82 3.82c-.257-.257-.385-.385-.394-.495a.3.3 0 01.104-.252C14.615 3 14.796 3 15.16 3H20.2c.28 0 .42 0 .527.054a.5.5 0 01.218.219C21 3.38 21 3.52 21 3.8v5.041z"
        />
      </g>
    </svg>
  )
}

export default SvgOpenInNew
