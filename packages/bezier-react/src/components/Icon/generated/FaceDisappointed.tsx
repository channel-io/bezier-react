import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgFaceDisappointed')
function SvgFaceDisappointed(props: SVGProps<SVGSVGElement>) {
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
        d="m12.911 17.296.063.058h-.02c-.192-.063-.502-.107-.951-.107-.387 0-.671.032-.867.08l-.09.026c-.032.01-.025.005.008-.025l.046-.042a1 1 0 0 1-1.372-1.455c.151-.143.382-.276.698-.38.407-.132.927-.205 1.578-.204.648 0 1.166.073 1.571.205.317.103.547.237.699.38a1 1 0 0 1-1.363 1.464ZM9.449 5.886l-.026.05c-.064.11-.208.3-.446.499-.496.418-1.18.673-2.123.673a1 1 0 1 0 0 2c1.42 0 2.559-.425 3.411-1.143.532-.448.853-.91 1.011-1.267a1 1 0 1 0-1.827-.812ZM8.786 13.93c-.845 0-1.199-.61-1.199-2.104 0-1.496.354-2.106 1.2-2.106.844 0 1.197.61 1.197 2.106 0 1.495-.353 2.105-1.198 2.105ZM14.015 11.826c0 1.495.353 2.105 1.199 2.105.845 0 1.198-.61 1.198-2.105 0-1.496-.353-2.106-1.198-2.106-.846 0-1.199.61-1.199 2.106Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="m19.448 1.683 2.746 5.465a3.074 3.074 0 0 1-.32 3.265C21.958 10.93 22 11.46 22 12c0 5.522-4.478 10-10 10-5.523 0-10-4.478-10-10S6.477 2 12 2c2.344 0 4.5.807 6.204 2.158l1.244-2.475Zm.54 9.869c.008.148.012.298.012.448 0 4.411-3.589 8-8 8-4.412 0-8-3.589-8-8 0-4.41 3.588-8 8-8 2.022 0 3.871.754 5.28 1.996l-.549 1.094c-.728-.066-1.28-.303-1.697-.655-.277-.233-.428-.45-.472-.549l-.053-.104a1 1 0 0 0-1.774.916c.158.356.479.82 1.011 1.267.7.59 1.593.982 2.677 1.103a3.073 3.073 0 0 0 3.565 2.484Zm-.541-5.811L18.33 7.966a1.251 1.251 0 1 0 2.236 0l-1.119-2.225Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgFaceDisappointed)
