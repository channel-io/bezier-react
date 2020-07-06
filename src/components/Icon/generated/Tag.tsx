import React from 'react'

function SvgTag(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22 2v8.482L11.108 21.374c-.283.283-.66.44-1.06.44-.402 0-.778-.157-1.06-.44l-6.362-6.362a1.5 1.5 0 010-2.12L13.518 2H22zm-2 2h-5.654l-9.952 9.952 5.654 5.654L20 9.654V4zm-2.885 1.53a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"
      />
    </svg>
  )
}

export default SvgTag
