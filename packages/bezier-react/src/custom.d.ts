declare module '*.module.scss' {
  const classes: { [className: string]: string }
  export default classes
}

declare module '*.svg' {
  import React = require('react')

  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>
  const src: string
  export default src
}

declare module '*.mdx' {
  const content: string
  export default content
}
