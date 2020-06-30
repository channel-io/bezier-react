import React from 'react'

function SvgContact(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.5 2c.827 0 1.5.673 1.5 1.5v17c0 .827-.673 1.5-1.5 1.5h-15c-.827 0-1.5-.673-1.5-1.5v-17C3 2.673 3.673 2 4.5 2zM19 4H9v16h10V4zM7 4H5v16h2V4zm7 7.507a3.508 3.508 0 013.5 3.278.222.222 0 01-.223.229h-6.555a.22.22 0 01-.222-.23 3.507 3.507 0 013.5-3.277zM14 8a1.534 1.534 0 110 3.069A1.534 1.534 0 0114 8z"
      />
    </svg>
  )
}

export default SvgContact
