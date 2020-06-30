import React from 'react'

function SvgCallOff(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M23.325 12.196l-.404-.297a18.416 18.416 0 00-21.845.001l-.401.295a.43.43 0 00-.091.602l1.569 2.129c.555.754 1.58.982 2.403.534l2.297-1.251c.602-.328.977-.96.977-1.644v-1.847a16.37 16.37 0 018.34 0v1.847c0 .685.375 1.316.977 1.644l2.297 1.25c.822.448 1.848.22 2.403-.533l.157-.212 1.412-1.917a.432.432 0 00-.091-.602"
      />
    </svg>
  )
}

export default SvgCallOff
