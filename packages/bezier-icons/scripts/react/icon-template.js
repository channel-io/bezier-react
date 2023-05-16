function iconTemplate({ imports, componentName, props, interfaces, jsx }, { tpl }) {
  return tpl`
  ${imports}

  ${interfaces}

  import { createBezierIcon } from '../utils'

  function ${componentName}(${props}) {
    return (
      ${jsx}
    )
  }

  export default createBezierIcon(${componentName})
`
}

module.exports = iconTemplate
