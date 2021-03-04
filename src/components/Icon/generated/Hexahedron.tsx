import React from 'react'

function SvgHexahedron(props: React.SVGProps<SVGSVGElement>) {
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
        d="M13 2.577a2 2 0 00-2 0L4 6.62A2 2 0 003 8.35v8.083a2 2 0 001 1.732l7 4.041a2 2 0 002 0l7-4.041a2 2 0 001-1.732V8.35a2 2 0 00-1-1.732l-7-4.042zM5.696 7.822L12 4.182l6.304 3.64L12 11.447 5.696 7.822zM4.89 9.665v6.833L11 20.026v-6.847L4.89 9.665zM13 20.025l6.11-3.527V9.665L13 13.178v6.847z"
      />
    </svg>
  )
}

export default SvgHexahedron
