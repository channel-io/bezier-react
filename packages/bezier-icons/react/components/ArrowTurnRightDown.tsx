import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgArrowTurnRightDown(props: SVGProps<SVGSVGElement>) {
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
        d="M16.2071 9.79289C15.8166 9.40237 15.1834 9.40237 14.7929 9.79289C14.4024 10.1834 14.4024 10.8166 14.7929 11.2071L17.5858 14L9 14C6.23858 14 4 11.7614 4 9V5C4 4.44772 3.55229 4 3 4C2.44772 4 2 4.44772 2 5V9C2 12.866 5.13401 16 9 16L17.5858 16L14.7929 18.7929C14.4024 19.1834 14.4024 19.8166 14.7929 20.2071C15.1834 20.5976 15.8166 20.5976 16.2071 20.2071L20.7071 15.7071C21.0976 15.3166 21.0976 14.6834 20.7071 14.2929L16.2071 9.79289Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgArrowTurnRightDown)
