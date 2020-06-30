import React from 'react'

function SvgPause(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.5 3a.5.5 0 01.5.5v17a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5v-17a.5.5 0 01.5-.5h4zm-9 0a.5.5 0 01.5.5v17a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5v-17a.5.5 0 01.5-.5h4z"
      />
    </svg>
  )
}

export default SvgPause
