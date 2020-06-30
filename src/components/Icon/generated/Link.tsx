import React from 'react'

function SvgLink(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.871 9.91a5.35 5.35 0 017.567 0l.708.707-1.415 1.414-.707-.707a3.35 3.35 0 00-4.739 0l-3.304 3.304a3.35 3.35 0 104.74 4.738l2.358-2.359 1.415 1.415-2.36 2.359a5.351 5.351 0 01-7.567-7.568zm6.342-6.343a5.35 5.35 0 017.567 0 5.35 5.35 0 010 7.567l-3.304 3.304a5.35 5.35 0 01-7.567 0l-.707-.707 1.414-1.414.707.707a3.352 3.352 0 004.74 0l3.303-3.304a3.35 3.35 0 10-4.739-4.739l-2.359 2.36-1.414-1.415z"
      />
    </svg>
  )
}

export default SvgLink
