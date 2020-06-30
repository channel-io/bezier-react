import React from 'react'

function SvgVolumeUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.96 2a1 1 0 011 1v18a1 1 0 01-1 1h-1c-.265 0-.52-.106-.707-.293l-4.708-4.708H2.96a1 1 0 01-.993-.883L1.96 16V8a1 1 0 011-1l4.585-.001 4.708-4.707c.156-.156.359-.255.576-.284L12.96 2zm-1 2.413L8.667 8.707A1.002 1.002 0 017.96 9l-4-.001v6h4a1 1 0 01.608.207l.1.086 4.292 4.293V4.413zm7.1 1.294c3.408 3.407 3.474 8.89.2 12.38l-.2.206-1.414-1.414a6.901 6.901 0 00.18-9.572l-.18-.186 1.414-1.414zm-2.416 2.416a5.484 5.484 0 01.173 7.572l-.173.182-1.414-1.415a3.485 3.485 0 00.14-4.776l-.14-.148 1.414-1.415z"
      />
    </svg>
  )
}

export default SvgVolumeUp
