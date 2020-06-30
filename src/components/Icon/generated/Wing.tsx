import React from 'react'

function SvgWing(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.22 8h-7v2h7c0 1.103-.897 2-2 2h-7v2h6c0 1.103-.897 2-2 2H9.128a3.99 3.99 0 00-2.22.672l-1.487.992c-.294.196-.63.31-.98.332l.205-1.027c.232-1.16.389-2.336.542-3.473l.133-.975C5.874 8.56 8.58 6 12.22 6h8c0 1.103-.897 2-2 2zm-6-4c-4.695 0-8.181 3.236-8.88 8.244l-.134.986c-.15 1.106-.302 2.249-.521 3.347L2 20h2.31c.794 0 1.56-.232 2.22-.672l1.489-.992A1.99 1.99 0 019.128 18h4.092c2.206 0 4-1.794 4-4v-.142c1.72-.447 3-2 3-3.858v-.557c1.19-.693 2-1.969 2-3.443V4h-10z"
      />
    </svg>
  )
}

export default SvgWing
