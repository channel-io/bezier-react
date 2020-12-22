import React from 'react'

function SvgHashtag(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.469 2l-1.25 4.999h-3.938L12.531 2h-2.062l-1.25 4.999h-3.22V9h2.72l-1.5 6H4v2h2.718l-1.25 5H7.53l1.25-5h3.939l-1.25 5h2.062l1.25-5H18v-2h-2.72l1.5-6H20V6.999h-2.72L18.531 2h-2.062zM10.78 9h3.938l-1.499 6H9.28l1.5-6z"
      />
    </svg>
  )
}

export default SvgHashtag
