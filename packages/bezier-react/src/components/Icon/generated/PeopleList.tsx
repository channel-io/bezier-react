import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgPeopleList')
function SvgPeopleList(props: SVGProps<SVGSVGElement>) {
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
        d="M5 7A2 2 0 1 0 5 3 2 2 0 0 0 5 7Zm-2 9h1v4a1 1 0 1 0 2 0v-4h1V9a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v7Zm7-11a1 1 0 0 0 1 1h9a1 1 0 1 0 0-2h-9a1 1 0 0 0-1 1Zm0 7a1 1 0 0 0 1 1h9a1 1 0 1 0 0-2h-9a1 1 0 0 0-1 1Zm1 8a1 1 0 1 1 0-2h9a1 1 0 1 1 0 2h-9Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgPeopleList)
