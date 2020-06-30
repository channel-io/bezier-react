import React from 'react'

function SvgNotificationImportant(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 2a6.152 6.152 0 016.145 6.145c0 1.557.435 3.078 1.258 4.4l2.35 3.773A1.098 1.098 0 0120.82 18H16c0 2.206-1.794 4-4 4-2.205 0-4-1.794-4-4H3.18a1.1 1.1 0 01-.933-1.682l2.35-3.774a8.31 8.31 0 001.258-4.399A6.152 6.152 0 0112 2zm2 16h-4c0 1.103.897 2 2 2s2-.897 2-2zM12 4a4.15 4.15 0 00-4.145 4.145c0 1.93-.54 3.817-1.56 5.457L4.8 16h14.398l-1.493-2.398a10.302 10.302 0 01-1.561-5.457A4.149 4.149 0 0012 4zm9 4.5a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4zM22 0v7h-2V0h2z"
      />
    </svg>
  )
}

export default SvgNotificationImportant
