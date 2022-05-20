import * as React from 'react'
import { SVGProps } from 'react'
import createBezierIcon from '../createBezierIcon'

function SvgTranslate(props: SVGProps<SVGSVGElement>) {
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
        d="M10 19h9v-9h-8.082a4.474 4.474 0 0 0-.164-.113 21.41 21.41 0 0 0 2.013-1.725.789.789 0 0 0-.557-1.349h-1.775V5h-1.58v1.813H6.232v1.58H10.1c-1.087.857-2.606 1.89-4.099 2.35l.465 1.51c1.017-.315 2.021-.84 2.92-1.413.188.144.397.297.615.45V19Zm6-11h4a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-4H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v4Zm-1.553 5.162-.753 1.927h1.514l-.761-1.927Zm-3.607 4.825 3.015-6.975h1.271l3.034 6.975h-1.8l-.587-1.477h-2.604l-.567 1.477H10.84Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgTranslate)
