import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgRuler(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m7.757 20.485-4.243-4.243 1.415-1.414L7.05 16.95l1.414-1.414-2.12-2.12L7.756 12l1.414 1.414L10.586 12 9.17 10.586l1.415-1.415 1.415 1.414 1.414-1.414L12 7.757l1.414-1.415 2.12 2.122L16.95 7.05l-2.121-2.122 1.413-1.414 4.243 4.243L7.757 20.485ZM22.253 6.696l-4.95-4.949a1.492 1.492 0 0 0-1.06-.44h-.002a1.49 1.49 0 0 0-1.059.44L1.747 15.182a1.501 1.501 0 0 0 0 2.121l4.95 4.95c.292.292.676.438 1.06.438s.768-.146 1.061-.438L22.253 8.818a1.502 1.502 0 0 0 0-2.122Z"
        clipRule="evenodd"
      />
    </svg>
  )
}
export default createBezierIcon(SvgRuler)
