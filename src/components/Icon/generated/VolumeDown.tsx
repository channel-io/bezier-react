import React from 'react'

function SvgVolumeDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14 2a1 1 0 011 1v18a1 1 0 01-1 1h-1a.997.997 0 01-.707-.293L7.586 17H3a1 1 0 01-.993-.883L2 16V8a1 1 0 011-1h4.585l4.708-4.707c.156-.156.36-.255.576-.284L13 2zm-1 2.414L8.707 8.707A.997.997 0 018 9H4v6h4c.221 0 .435.073.608.206l.1.087L13 19.585V4.414zm6.241 3.341a6.003 6.003 0 01.176 8.307l-.176.183-1.414-1.414a4.002 4.002 0 00.151-5.502l-.15-.16 1.413-1.414z"
      />
    </svg>
  )
}

export default SvgVolumeDown
