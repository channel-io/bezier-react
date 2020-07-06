import React from 'react'

function SvgFlush(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7 6v14h10V6h2v14.5c0 .827-.656 1.5-1.462 1.5H6.461c-.805 0-1.46-.673-1.46-1.5V6h2zm7.122-3.536l1.414 1.414L13.415 6l2.12 2.122-1.413 1.414L12 7.413 9.879 9.535 8.465 8.121 10.587 6 8.465 3.88l1.414-1.415L12 4.585l2.12-2.12z"
      />
    </svg>
  )
}

export default SvgFlush
