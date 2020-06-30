import React from 'react'

function SvgAssignee(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.5 13.487a6.514 6.514 0 016.5 6.086.41.41 0 01-.413.427H2.413A.411.411 0 012 19.573a6.514 6.514 0 016.5-6.086zM21.715 2c.157 0 .285.127.285.284v10.747a.284.284 0 01-.47.215L18 10.182l-3.53 3.064a.284.284 0 01-.47-.215V2.284c0-.157.127-.284.284-.284zM8.5 6.974a2.85 2.85 0 110 5.702 2.85 2.85 0 010-5.703z"
      />
    </svg>
  )
}

export default SvgAssignee
