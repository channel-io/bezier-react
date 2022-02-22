import * as React from 'react'
import { SVGProps } from 'react'

function SvgCallPullIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M10.964 8.414a2 2 0 0 1-.101-2.719l.101-.11L14.5 2.05l1.414 1.414L13.378 6H19a3 3 0 0 1 2.995 2.824L22 9v3.5h-2V9a1 1 0 0 0-.883-.993L19 8h-5.621l2.535 2.535L14.5 11.95l-3.536-3.536Zm8.544 12.5.527.08a.458.458 0 0 0 .52-.384l.38-2.502.043-.279a1.992 1.992 0 0 0-1.406-2.208l-2.667-.786a1.993 1.993 0 0 0-1.971.502l-1.388 1.388a17.412 17.412 0 0 1-6.271-6.27l1.387-1.389a1.989 1.989 0 0 0 .502-1.97l-.786-2.668A1.99 1.99 0 0 0 6.17 3.022l-2.781.422a.456.456 0 0 0-.383.521l.079.523a19.58 19.58 0 0 0 16.423 16.426Z"
      />
    </svg>
  )
}

export default SvgCallPullIcon
