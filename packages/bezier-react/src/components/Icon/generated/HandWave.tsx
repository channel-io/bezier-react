import * as React from 'react'
import { SVGProps } from 'react'
import * as AccessibleIcon from '@radix-ui/react-accessible-icon'
import { createIconLabel, createBezierIcon } from '../utils'
const label = createIconLabel('SvgHandWave')
function SvgHandWave(props: SVGProps<SVGSVGElement>) {
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
        d="M18 3V1c2.757 0 5 2.24 5 4.992h-2A3 3 0 0 0 18 3Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.721 4.748c-.472.472-.73 1.1-.729 1.767v1.017L9.925 2.465a2.502 2.502 0 0 0-3.535 0 2.455 2.455 0 0 0-.51.752A2.49 2.49 0 0 0 2.83 5.65c0 .188.026.371.066.55a2.478 2.478 0 0 0-.749.508 2.506 2.506 0 0 0 .003 3.54l.38.38a2.498 2.498 0 0 0-1.115 2.083c0 .67.26 1.301.734 1.776l5.073 5.074a7.826 7.826 0 0 0 2.464 1.668 6.966 6.966 0 0 0 7.707-1.484l.552-.55a6.953 6.953 0 0 0 2.05-4.946L20 6.475c0-.659-.255-1.277-.72-1.743-.916-.916-2.596-.948-3.559.016Zm2.274 9.5a4.97 4.97 0 0 1-1.464 3.532l-.552.551a4.978 4.978 0 0 1-5.505 1.061 5.821 5.821 0 0 1-1.837-1.245l-5.073-5.073a.512.512 0 0 1 .002-.724.478.478 0 0 1 .676 0l2.498 2.487.71.71 1.414-1.414-5.299-5.3a.503.503 0 0 1-.004-.71.497.497 0 0 1 .711.003l5.3 5.3 1.414-1.414L4.98 6.005a.504.504 0 0 1-.004-.71.505.505 0 0 1 .711.002l.702.701.002.003 5.303 5.303 1.414-1.414-5.304-5.305a.5.5 0 0 1 .708-.706l6.607 6.608c.317.315.787.408 1.2.235.41-.17.675-.57.675-1.015V6.512c0-.133.05-.257.143-.35.187-.188.624-.119.73-.016.05.051.134.161.134.327l-.005 7.774Z"
      />
      <path
        fill="currentColor"
        d="M3 17.004H1a4.997 4.997 0 0 0 4.992 4.992v-2A2.996 2.996 0 0 1 3 17.004Z"
      />
    </svg>
  )
  return <AccessibleIcon.Root label={label}>{Svg}</AccessibleIcon.Root>
}
export default createBezierIcon(SvgHandWave)
