import React from 'react'

function SvgCode(props: React.SVGProps<SVGSVGElement>) {
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
        d="M15.394 4.08a1 1 0 01.525 1.314l-6 14a1 1 0 11-1.838-.788l6-14a1 1 0 011.313-.525zM8.207 4.293a1 1 0 010 1.414L4.914 9l3.293 3.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0zM17.207 10.293a1 1 0 10-1.414 1.414L19.086 15l-3.293 3.293a1 1 0 001.414 1.414l4-4a1 1 0 000-1.414l-4-4z"
      />
    </svg>
  )
}

export default SvgCode
