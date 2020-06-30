import React from 'react'

function SvgErrorFilled(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 2c5.515 0 10 4.486 10 10s-4.485 10-10 10C6.486 22 2 17.514 2 12S6.486 2 12 2zm-.067 13.595a1.322 1.322 0 100 2.645 1.322 1.322 0 000-2.645zm1.214-9.615H10.72l.132 8.007h2.162l.133-8.007z"
      />
    </svg>
  )
}

export default SvgErrorFilled
