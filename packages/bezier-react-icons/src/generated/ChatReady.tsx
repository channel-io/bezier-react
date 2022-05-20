import * as React from 'react'
import { SVGProps } from 'react'
import createBezierIcon from '../createBezierIcon'

function SvgChatReady(props: SVGProps<SVGSVGElement>) {
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
        d="m12 4 .266.004.059-1.999L12 2c-1.01 0-2.005.15-2.959.446l.591 1.91A8.006 8.006 0 0 1 12 4Zm-5.922-.058 1.186 1.61a8.035 8.035 0 0 0-1.85 1.905L3.768 6.32a10.028 10.028 0 0 1 2.31-2.378Zm14.746 12.746c-.048.09-.12.266-.06.442l.867 2.605c.181.542.042 1.13-.362 1.535a1.497 1.497 0 0 1-1.535.362l-2.604-.868c-.175-.06-.351.012-.44.06A9.917 9.917 0 0 1 11.999 22c-.485 0-.974-.036-1.464-.106-.05-.008-.1-.02-.15-.031-.043-.01-.086-.02-.13-.027l-.002.013a9.99 9.99 0 0 1-.862-.194l-.013-.004a9.862 9.862 0 0 1-.97-.323c-.077-.03-.152-.061-.227-.092a9.762 9.762 0 0 1-.812-.38l-.074-.038a2.259 2.259 0 0 1-.092-.046c-.011-.007-.024-.013-.036-.019l-.042-.021.004-.007a9.76 9.76 0 0 1-.877-.543l1.151-1.635a8.2 8.2 0 0 0 .747.462c.34.188.693.345 1.051.479.069.025.137.048.206.07l.107.035c.296.097.596.177.901.237l.136.03c.09.02.18.041.271.054a7.967 7.967 0 0 0 4.926-.854 2.543 2.543 0 0 1 2.015-.194l1.655.553-.552-1.656c-.218-.656-.15-1.372.194-2.017.883-1.654 1.15-3.518.772-5.392a7.717 7.717 0 0 0-.957-2.465l1.715-1.03c.58.968.984 2.01 1.203 3.1.47 2.334.135 4.661-.969 6.729ZM15.581 2.65c1.038.398 2 .965 2.857 1.687l-1.287 1.53a7.978 7.978 0 0 0-2.285-1.348l.715-1.87ZM4 12c0-.73.098-1.45.29-2.142l-1.928-.534a10.058 10.058 0 0 0-.343 3.297l1.996-.12A8.43 8.43 0 0 1 4 12Zm.539 6.658a9.998 9.998 0 0 1-1.775-2.801l1.845-.773a7.96 7.96 0 0 0 1.42 2.24l-1.49 1.334Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgChatReady)
