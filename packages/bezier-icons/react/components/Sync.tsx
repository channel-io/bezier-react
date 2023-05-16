import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgSync(props: SVGProps<SVGSVGElement>) {
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
        d="M15.873 9.25H21.5a.5.5 0 0 0 .5-.5V3.123a.5.5 0 0 0-.854-.353l-2.119 2.119A9.933 9.933 0 0 0 12 2c-5.177 0-9.448 3.954-9.95 9.001-.055.55.398.999.95.999.552 0 .994-.45 1.062-.998C4.555 7.06 7.927 4 12 4c2.117 0 4.106.819 5.613 2.303L15.52 8.396a.5.5 0 0 0 .353.854ZM8.127 14.75H2.5a.5.5 0 0 0-.5.5v5.627a.5.5 0 0 0 .854.353l2.12-2.119A9.93 9.93 0 0 0 12 22c5.177 0 9.448-3.954 9.95-9.001.055-.55-.398-.999-.95-.999-.552 0-.993.45-1.062.998C19.446 16.94 16.073 20 12 20a7.946 7.946 0 0 1-5.613-2.303l2.093-2.093a.5.5 0 0 0-.353-.854Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgSync)
