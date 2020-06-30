import React from 'react'

function SvgDragable(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8 17a2.5 2.5 0 11-.002 5.002A2.5 2.5 0 018 17zm8 0a2.5 2.5 0 11-.002 5.002A2.5 2.5 0 0116 17zM8 9.5a2.5 2.5 0 11-.002 5.002A2.5 2.5 0 018 9.5zm8 0a2.5 2.5 0 11-.002 5.002A2.5 2.5 0 0116 9.5zM8 2a2.5 2.5 0 11-.002 5.002A2.5 2.5 0 018 2zm8 0a2.5 2.5 0 11-.002 5.002A2.5 2.5 0 0116 2z"
      />
    </svg>
  )
}

export default SvgDragable
