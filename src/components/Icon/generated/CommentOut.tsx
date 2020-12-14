import React from 'react'

function SvgCommentOut(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 17H8.276L5 19.73V5h14v12zm.5 2H9l-4.36 3.633A1 1 0 013 21.865V4.5A1.5 1.5 0 014.5 3h15A1.5 1.5 0 0121 4.5v13a1.5 1.5 0 01-1.5 1.5zM14.828 6.757l1.415 1.415L13.414 11l2.829 2.828-1.415 1.415L12 12.414l-2.828 2.829-1.415-1.415L10.586 11 7.757 8.172l1.415-1.415L12 9.586l2.828-2.829z"
      />
    </svg>
  )
}

export default SvgCommentOut
