import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgMobileMessaging')
function SvgMobileMessaging(props: SVGProps<SVGSVGElement>) {
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
        d="M16.25 13.187c3.452 0 6.25-2.398 6.25-5.357s-2.798-5.357-6.25-5.357S10 4.87 10 7.83c0 1.793 1.028 3.38 2.605 4.352-.21.69-.552 1.317-.802 1.723-.114.185.032.421.244.373.64-.145 1.728-.486 2.7-1.247.48.102.985.156 1.503.156Zm0-4.464a.896.896 0 0 1-.893-.893c0-.491.402-.893.893-.893.492 0 .893.402.893.893a.895.895 0 0 1-.893.893Zm-2.678 0a.896.896 0 0 1-.893-.893c0-.491.402-.893.893-.893s.893.402.893.893a.895.895 0 0 1-.893.893Zm4.464-.893c0 .491.402.893.893.893a.895.895 0 0 0 .893-.893.895.895 0 0 0-.893-.893.896.896 0 0 0-.893.893ZM5.76 18.239c-4.316-4.316-4.316-8.092-2.967-9.441.809-.81 1.992-1.029 2.697-.54.648.432 1.619 1.65 1.619 2.698 0 .632-.466 1.175-.85 1.623-.273.317-.503.586-.499.805.01.527.59 1.9 1.773 3.082 1.181 1.182 2.555 1.762 3.082 1.773.22.004.488-.227.805-.498.448-.384.991-.85 1.623-.85 1.048 0 2.266.97 2.698 1.618.489.705.27 1.888-.54 2.697-1.349 1.349-5.125 1.349-9.441-2.967Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgMobileMessaging)
