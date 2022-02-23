import * as React from 'react'
import { SVGProps } from 'react'
import createIcon from 'Components/Icon/createIcon'

function SvgCloudUploadIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M16.835 6.837h.086A6.087 6.087 0 0 1 23 12.917a6.086 6.086 0 0 1-6.08 6.08h-.916v-2h.917A4.084 4.084 0 0 0 21 12.917c0-2.25-1.83-4.08-4.08-4.08h-1.198l-.29-.494c-.72-1.23-1.984-1.963-3.383-1.963-1.932 0-3.6 1.451-3.877 3.375l-.123.857h-2.03A3.024 3.024 0 0 0 3 13.632v.345a3.024 3.024 0 0 0 3.02 3.02h1.985v2H6.02A5.026 5.026 0 0 1 1 13.977v-.345a5.026 5.026 0 0 1 5.02-5.02h.363c.743-2.464 3.042-4.232 5.666-4.232a5.95 5.95 0 0 1 4.786 2.457Zm-4.572 3.78 3.657 3.657a.283.283 0 0 1-.2.484h-2.3v3.884a.355.355 0 0 1-.354.355H10.94a.355.355 0 0 1-.354-.355v-3.884h-2.3a.283.283 0 0 1-.2-.483l3.657-3.658a.366.366 0 0 1 .519 0Z"
      />
    </svg>
  )
}

export default createIcon(SvgCloudUploadIcon)
