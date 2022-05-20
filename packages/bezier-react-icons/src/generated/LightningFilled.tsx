import * as React from 'react'
import { SVGProps } from 'react'
import createBezierIcon from '../createBezierIcon'

function SvgLightningFilled(props: SVGProps<SVGSVGElement>) {
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
        d="m18.54 10.226-4.319-1 2.082-7.083c.146-.496-.468-.86-.833-.493L5.146 12.002a.5.5 0 0 0 .242.84l4.32 1-2.084 7.082c-.146.498.468.861.834.494l10.323-10.352a.5.5 0 0 0-.24-.84"
      />
    </svg>
  )
}

export default createBezierIcon(SvgLightningFilled)
