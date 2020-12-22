import React from 'react'

function SvgCallOff(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.325 12.196l-.404-.297a18.414 18.414 0 00-21.845.002l-.401.295a.431.431 0 00-.091.602l1.569 2.129a1.871 1.871 0 002.403.534l2.297-1.251c.602-.328.977-.96.977-1.644v-1.847a16.386 16.386 0 018.34 0v1.847c0 .685.375 1.316.977 1.644l2.297 1.25c.822.448 1.848.22 2.403-.533l.157-.212 1.412-1.917a.43.43 0 00-.091-.602z"
      />
    </svg>
  )
}

export default SvgCallOff
