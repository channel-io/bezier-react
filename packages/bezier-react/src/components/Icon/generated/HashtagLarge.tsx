import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgHashtagLarge')
function SvgHashtagLarge(props: SVGProps<SVGSVGElement>) {
  const Svg = (
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
        d="M10.184 3.017a1 1 0 0 1 .799 1.167L10.455 7h4.965l.597-3.184a1 1 0 0 1 1.966.368L17.455 7H20a1 1 0 1 1 0 2h-2.92l-1.125 6H19a1 1 0 1 1 0 2h-3.42l-.597 3.184a1 1 0 0 1-1.966-.368L13.545 17H8.58l-.597 3.184a1 1 0 0 1-1.966-.368L6.545 17H4a1 1 0 1 1 0-2h2.92l1.125-6H5a1 1 0 0 1 0-2h3.42l.597-3.184a1 1 0 0 1 1.167-.799ZM13.92 15l1.125-6H10.08l-1.125 6h4.965Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgHashtagLarge)
