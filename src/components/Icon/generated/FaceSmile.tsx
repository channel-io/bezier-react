import React from 'react'

function SvgFaceSmile(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 2c5.522 0 10 4.478 10 10s-4.478 10-10 10C6.477 22 2 17.522 2 12S6.477 2 12 2zm0 2c-4.412 0-8 3.59-8 8 0 4.411 3.588 8 8 8 4.411 0 8-3.589 8-8 0-4.41-3.589-8-8-8zm4.911 8.84c.525.172.81.737.637 1.262-.048.147-1.237 3.606-5.554 3.606h-.004c-4.307-.004-5.49-3.46-5.539-3.607a1 1 0 011.898-.632c.034.1.82 2.237 3.642 2.24h.003c2.887 0 3.647-2.21 3.655-2.232a.998.998 0 011.262-.638zM8.786 7.613c.845 0 1.198.611 1.198 2.106 0 1.495-.353 2.105-1.198 2.105s-1.199-.61-1.199-2.105.354-2.106 1.2-2.106zm6.428 0c.845 0 1.198.611 1.198 2.106 0 1.495-.353 2.105-1.198 2.105-.846 0-1.199-.61-1.199-2.105s.353-2.106 1.199-2.106z"
      />
    </svg>
  )
}

export default SvgFaceSmile
