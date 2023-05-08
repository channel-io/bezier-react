import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgMessagingApp')
function SvgMessagingApp(props: SVGProps<SVGSVGElement>) {
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
        d="M6 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4H6Zm13 9.527c0 3.314-3.134 6-7 6-.58 0-1.145-.06-1.684-.175-1.122.88-2.382 1.258-3.09 1.412-.212.046-.358-.19-.242-.375.282-.45.687-1.18.934-1.987C6.151 15.313 5 13.535 5 11.527c0-3.313 3.134-6 7-6s7 2.687 7 6Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgMessagingApp)
