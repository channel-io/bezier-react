import React from 'react'

function SvgPage(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.77 2c.44 0 .86.193 1.138.524l5.73 6.684c.234.272.362.618.362.977V20.5a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 015 20.5v-17A1.5 1.5 0 016.5 2h5.27zM11 4H7v16h10v-9h-4.615c-.72 0-1.311-.55-1.378-1.252L11 9.615V4zm4.825 5L13 5.703V9h2.825z"
      />
    </svg>
  )
}

export default SvgPage
