import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgPin')
function SvgPin(props: SVGProps<SVGSVGElement>) {
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
        d="M20.52 7.483c1.063 1.061.62 2.87-.812 3.322l-1.74.548a1.998 1.998 0 0 0-.814.493l-1.568 1.568A2 2 0 0 0 15 14.828v3.882a2 2 0 0 1-.54 1.367l-.113.12a1 1 0 0 1-1.436.023l-3.845-3.844-5.213 5.212a1 1 0 0 1-1.414-1.414l5.213-5.213-3.808-3.808a1 1 0 0 1-.04-1.372l.1-.11A2 2 0 0 1 5.396 9h3.775a2 2 0 0 0 1.414-.586l1.572-1.572a2 2 0 0 0 .49-.802l.562-1.748c.458-1.424 2.26-1.86 3.319-.802l3.992 3.993Zm-1.413 1.414-3.993-3.992-.562 1.748a3.999 3.999 0 0 1-.98 1.603L12 9.828A4 4 0 0 1 9.172 11H6.519L13 17.482v-2.654A4 4 0 0 1 14.172 12l1.567-1.568a4 4 0 0 1 1.627-.987l1.74-.548Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgPin)
