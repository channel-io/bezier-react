import React from 'react'

function SvgEvent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.243 5.332a7.54 7.54 0 0112.513 0c1.762 2.573 1.597 6.013-.146 8.599l-5.666 8.408a.534.534 0 01-.888 0L6.39 13.931c-1.743-2.586-1.907-6.026-.146-8.599zm5.618-.367l-.87 2.678H8.173c-.652 0-.922.834-.396 1.217l2.279 1.655-.87 2.679c-.202.62.507 1.135 1.035.752L12.5 12.29l2.279 1.656c.527.383 1.235-.133 1.035-.752l-.87-2.679 2.278-1.655c.526-.383.256-1.217-.396-1.217H14.01l-.87-2.678c-.202-.62-1.078-.62-1.28 0z"
      />
    </svg>
  )
}

export default SvgEvent
