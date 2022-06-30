function iconTemplate({ imports, componentName, props, jsx }, { tpl }) {
  return tpl`
  ${imports}
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
