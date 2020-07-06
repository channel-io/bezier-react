import React from 'react'

function SvgTranslate(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15 3a1 1 0 011 1v4h4a1 1 0 011 1v11a1 1 0 01-1 1H9a1 1 0 01-1-1v-4H4a1 1 0 01-1-1V4a1 1 0 011-1zm-4.565 2h-1.58v1.813H6.232v1.58H10.1c-1.087.857-2.606 1.89-4.099 2.35l.465 1.51c1.017-.315 2.021-.84 2.92-1.413.188.144.397.297.615.45V19h9v-9h-8.082c-.055-.039-.108-.073-.164-.113 1.04-.79 1.78-1.496 1.97-1.682l.043-.043a.788.788 0 00-.557-1.349h-1.775V5zm4.691 6.012l3.034 6.975h-1.8l-.587-1.477h-2.604l-.567 1.477H10.84l3.016-6.975h1.271zm-.68 2.15l-.752 1.927h1.514l-.761-1.927z"
      />
    </svg>
  )
}

export default SvgTranslate
