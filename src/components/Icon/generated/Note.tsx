import React from 'react'

function SvgNote(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.5 3A1.5 1.5 0 0121 4.5v7.293c0 .398-.158.78-.439 1.06l-7.708 7.708c-.28.28-.663.439-1.06.439H4.5A1.5 1.5 0 013 19.5v-15A1.5 1.5 0 014.5 3zM19 5H5v14h6v-6.5a1.5 1.5 0 011.356-1.493L12.5 11l6.5-.001v-6zm-1.414 7.999H13v4.586l4.586-4.586z"
      />
    </svg>
  )
}

export default SvgNote
