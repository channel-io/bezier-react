import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgPinOff')
function SvgPinOff(props: SVGProps<SVGSVGElement>) {
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
        d="M3 2.5a1 1 0 0 0 0 1.414L20.086 21a1 1 0 0 0 1.414-1.414l-6.037-6.037a1.97 1.97 0 0 1 .123-.135l1.568-1.568a2 2 0 0 1 .813-.493l1.74-.548c1.433-.451 1.875-2.26.814-3.322L16.528 3.49c-1.057-1.057-2.86-.622-3.318.802l-.562 1.748a2 2 0 0 1-.49.802l-1.572 1.572a2.017 2.017 0 0 1-.135.123L4.414 2.5A1 1 0 0 0 3 2.5ZM5.397 9h.689L15 17.914v.796a2 2 0 0 1-.54 1.367l-.113.12a1 1 0 0 1-1.436.023l-3.845-3.844-5.213 5.212a1 1 0 0 1-1.414-1.414l5.213-5.213-3.808-3.808a1 1 0 0 1-.04-1.372l.1-.11A2 2 0 0 1 5.396 9Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgPinOff)
