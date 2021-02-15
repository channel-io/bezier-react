import React from 'react'

function SvgEdit(props: React.SVGProps<SVGSVGElement>) {
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
        d="M18.465 4.12l1.414 1.416 1.415-1.415a1 1 0 000-1.414h-.001a1 1 0 00-1.414 0L18.465 4.12zM20.5 21h-17a.5.5 0 01-.5-.5v-17a.5.5 0 01.5-.5H14v2H5v14h14v-9h2v10.5a.5.5 0 01-.5.5zm-9.814-6.272H9.272v-1.414l8.485-8.485 1.414 1.414-8.485 8.485z"
      />
    </svg>
  )
}

export default SvgEdit
