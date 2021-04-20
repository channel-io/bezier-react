import React from 'react'

function SvgGoal(props: React.SVGProps<SVGSVGElement>) {
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
          d="M12 20v2c5.514 0 10-4.486 10-10S17.514 2 12 2 2 6.486 2 12h2c0-4.41 3.59-8 8-8 4.411 0 8 3.59 8 8 0 4.411-3.589 8-8 8z"
        />
        <path
          fill="currentColor"
          d="M12 10a2 2 0 00-1.932 2.518L6.586 16H4.914a1 1 0 00-.707.293l-2.28 2.28a.25.25 0 00.177.427H5v2.896c0 .223.27.335.427.177l2.28-2.28A1 1 0 008 19.086v-1.672l3.483-3.483A2.003 2.003 0 0014 12a2 2 0 00-2-2z"
        />
      </g>
    </svg>
  )
}

export default SvgGoal
