import React from 'react'

function SvgMarkerPen(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.322 17v3H9.344l1.733-3h8.245zM11.085 3l-4.333 7.505a.803.803 0 000 .811c.523.901.714 1.952.193 2.854l-.52.902 1.732 1 .44-.764a2.793 2.793 0 012.635-1.397c.294.021.568-.15.716-.406L18.013 3h2.31L13.68 14.505a2.793 2.793 0 01-2.634 1.397c-.294-.02-.57.151-.717.406l-1.441 2.496-.401.696c-.18.31-.51.5-.867.5H3.002a1 1 0 01-.866-1.5l2.056-3.562.942-1.63a.805.805 0 00-.002-.812c-.524-.897-.717-1.944-.197-2.844L8.775 3h2.31z"
      />
    </svg>
  )
}

export default SvgMarkerPen
