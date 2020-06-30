import React from 'react'

function SvgVolumeOff(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.88 7l2 2H4v6h4c.265 0 .52.106.707.293L13 19.586v-4.465l2 2V21a1 1 0 01-1 1h-1a.997.997 0 01-.707-.293L7.586 17H3a1 1 0 01-1-1V8a1 1 0 011-1h1.88zM3.867 1.747l4.486 4.486 3.94-3.94A1 1 0 0113 2h1a1 1 0 011 1v9.879l7.253 7.253-1.414 1.414L2.453 3.161l1.414-1.414zM13 4.414L9.768 7.647 13 10.879V4.414z"
      />
    </svg>
  )
}

export default SvgVolumeOff
