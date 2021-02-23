import React from 'react'

function SvgGoal(props: React.SVGProps<SVGSVGElement>) {
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
        d="M12 20v2c5.514 0 10-4.486 10-10S17.514 2 12 2 2 6.486 2 12h2c0-4.41 3.59-8 8-8 4.411 0 8 3.59 8 8 0 4.411-3.589 8-8 8zm-1.422-9.277c.413-.455.982-.769 1.594-.717a2 2 0 011.821 1.831c.05.61-.265 1.177-.719 1.587-.715.646-1.275.636-1.785.501L8 17.415v1.382c0 .13-.051.255-.141.348l-2.908 3a.2.2 0 01-.343-.139l-.001-2.614H1.994a.2.2 0 01-.139-.344l3-2.907a.495.495 0 01.348-.14h1.383l3.488-3.49c-.136-.51-.146-1.073.504-1.788z"
      />
    </svg>
  )
}

export default SvgGoal
