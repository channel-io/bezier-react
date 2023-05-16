import type { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgHandThumbdown(props: SVGProps<SVGSVGElement>) {
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
        d="M18.25 18a4.001 4.001 0 0 0 3.745-5.405l-2.25-6A4.018 4.018 0 0 0 16 4h-2.677c-1.005 0-1.988.19-2.923.563a6.967 6.967 0 0 0-4.4 6.5v.776c0 1.869.728 3.628 2.05 4.95l5.47 5.469c.944.945 2.591.945 3.535 0a2.504 2.504 0 0 0 0-3.535L16.332 18h1.918Zm-.378-10.703 2.25 6.001a1.973 1.973 0 0 1-.229 1.842c-.378.547-.978.86-1.643.86h-4.09a1.098 1.098 0 0 0-.78 1.875l2.261 2.262a.502.502 0 0 1 0 .707.498.498 0 0 1-.707 0l-5.47-5.469A4.968 4.968 0 0 1 8 11.839v-.776a4.977 4.977 0 0 1 3.143-4.643 5.858 5.858 0 0 1 2.18-.42H16a2.01 2.01 0 0 1 1.872 1.297Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2.054 14.727C2 14.62 2 14.48 2 14.2V5.8c0-.28 0-.42.054-.527a.5.5 0 0 1 .219-.218C2.38 5 2.52 5 2.8 5h1.4c.28 0 .42 0 .527.055a.5.5 0 0 1 .218.218C5 5.38 5 5.52 5 5.8v8.4c0 .28 0 .42-.055.527a.5.5 0 0 1-.218.218C4.62 15 4.48 15 4.2 15H2.8c-.28 0-.42 0-.527-.055a.5.5 0 0 1-.219-.218Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgHandThumbdown)
