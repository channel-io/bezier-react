import React from 'react'

function SvgBank(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <g fill="currentColor">
        <path
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21 6l-9-4-9 4v3h18V6zM5.673 7L12 4.188 18.326 7H5.673z"
        />
        <path
          fill="currentColor"
          d="M5 10h2v8H5v-8zM19 10h-2v8h2v-8zM3 19v2h18v-2H3zM12.325 13.296l.743.296c.736.296 1.175.791 1.175 1.631 0 .818-.573 1.546-1.58 1.779V18H11.33v-.983a3.282 3.282 0 01-1.58-.786l.807-.984c.424.36.976.608 1.448.608.528 0 .775-.2.775-.52s-.285-.44-.738-.63a23.405 23.405 0 01-.101-.042l-.76-.32c-.624-.247-1.207-.767-1.207-1.63 0-.77.535-1.418 1.356-1.676V10h1.333v.966c.516.1 1.018.344 1.405.731l-.712.896c-.392-.296-.76-.456-1.223-.456-.44 0-.712.176-.712.496 0 .31.336.441.819.63l.085.033z"
        />
      </g>
    </svg>
  )
}

export default SvgBank
