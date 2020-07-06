import React from 'react'

function SvgBreaktime(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20 6.996V7h3v4.244a3.758 3.758 0 01-3.07 3.687A6.978 6.978 0 0117.885 19H21v2H3v-2h3.115A6.975 6.975 0 014 13.996v-7h16zm-2 2H6v5c0 2.757 2.243 5 5 5h2c2.757 0 5-2.243 5-5v-5zM21 9h-1v3.822c.59-.284 1-.882 1-1.578V9zm-3.006-7v.308C17.994 3.793 16.65 5 14.997 5c-.53 0-.997.324-.997.692V6h-2v-.308C12 4.208 13.344 3 14.997 3c.531 0 .997-.324.997-.692V2h2z"
      />
    </svg>
  )
}

export default SvgBreaktime
