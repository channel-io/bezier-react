function iconTemplate(
  { template },
  options,
  { componentName, props, jsx },
) {
  return template.ast`
import React from 'react'

function ${componentName}(${props}) {
  return (
    ${jsx}
  )
}

export default ${componentName}
`
}

module.exports = iconTemplate
