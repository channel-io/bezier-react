import React from 'react'

function SvgCheckAll(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22.595 5L24 6.406 11.367 19.038l-6.402-6.402 1.405-1.404 4.997 4.996L22.593 5zM1.404 11.23l6.402 6.402-1.405 1.405L0 12.636l1.405-1.405zM17.629 5l1.406 1.406-7.67 7.67-1.406-1.405L17.63 5z"
      />
    </svg>
  )
}

export default SvgCheckAll
