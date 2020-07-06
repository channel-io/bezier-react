import React from 'react'

function SvgEmail(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.5 5A1.5 1.5 0 0122 6.5v11a1.5 1.5 0 01-1.5 1.5h-17A1.5 1.5 0 012 17.5v-11A1.5 1.5 0 013.5 5h17zm-.5 5.282l-7.086 4.332a1.749 1.749 0 01-1.826 0L4 10.284V17h16v-6.718zM20 7H4v.94l8 4.888 8-4.89V7z"
      />
    </svg>
  )
}

export default SvgEmail
