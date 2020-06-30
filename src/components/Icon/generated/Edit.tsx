import React from 'react'

function SvgEdit(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14 3v2H5v14h14v-9h2v10.5a.5.5 0 01-.5.5h-17a.5.5 0 01-.5-.5v-17a.5.5 0 01.5-.5H14zm3.757 1.829l1.414 1.414-8.485 8.485H9.272v-1.414l8.485-8.485zm3.536-2.122a1 1 0 010 1.414L19.88 5.536 18.465 4.12l1.414-1.414a1 1 0 011.414 0z"
      />
    </svg>
  )
}

export default SvgEdit
