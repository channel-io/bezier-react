import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgFunnel(props: SVGProps<SVGSVGElement>) {
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
        d="M20 2C20.5523 2 21 2.44772 21 3V5.17157C21 5.70201 20.7893 6.21071 20.4142 6.58579L15.5858 11.4142C15.2107 11.7893 15 12.298 15 12.8284V19.382C15 19.7607 14.786 20.107 14.4472 20.2764L10.4472 22.2764C9.95324 22.5234 9.35256 22.3232 9.10557 21.8292C9.03615 21.6903 9 21.5372 9 21.382V12.8284C9 12.298 8.78929 11.7893 8.41421 11.4142L3.58579 6.58579C3.21071 6.21071 3 5.70201 3 5.17157V3C3 2.44772 3.44772 2 4 2H20ZM19 4H5V5.17157L9.82843 10C10.1247 10.2962 10.3697 10.6342 10.5577 11H13.4423C13.5963 10.7003 13.7886 10.4194 14.0159 10.1648L14.1716 10L19 5.17157V4ZM13 13H11V19.763L13 18.763V13Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgFunnel)
