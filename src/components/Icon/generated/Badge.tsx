import React from 'react'

function SvgBadge(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3a6.5 6.5 0 100 13 6.5 6.5 0 000-13zm4 14.002a8.5 8.5 0 10-8 0v5.16a.5.5 0 00.737.441L12 20.846l3.263 1.757a.5.5 0 00.737-.44v-5.161zm-.303-9.72a1 1 0 01.02 1.414l-3.882 4a1 1 0 01-1.435 0l-2.118-2.181a1 1 0 011.436-1.393l1.4 1.442 3.164-3.26a1 1 0 011.415-.022z"
      />
    </svg>
  )
}

export default SvgBadge
