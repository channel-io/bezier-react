import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgCallPull')
function SvgCallPull(props: SVGProps<SVGSVGElement>) {
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
        d="M12.414 8.364a2 2 0 0 1-.101-2.719l.101-.11 2.829-2.828a1 1 0 1 1 1.414 1.414L14.778 6H19a3 3 0 0 1 2.995 2.824L22 9v2.5a1 1 0 1 1-2 0V9a1 1 0 0 0-.883-.993L19 8h-4.121l1.778 1.778a1 1 0 1 1-1.414 1.414l-2.829-2.828Zm-4.663 7.89C2.586 11.087 2.586 6.568 4.2 4.953c.968-.968 2.384-1.23 3.228-.645.775.517 1.937 1.974 1.937 3.228 0 .757-.558 1.407-1.018 1.943-.325.379-.601.701-.596.963.012.631.707 2.275 2.121 3.689 1.414 1.414 3.058 2.109 3.69 2.121.261.005.583-.27.962-.596.536-.46 1.187-1.018 1.943-1.018 1.254 0 2.711 1.162 3.228 1.937.585.844.323 2.26-.646 3.228-1.614 1.614-6.133 1.614-11.298-3.55Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgCallPull)
