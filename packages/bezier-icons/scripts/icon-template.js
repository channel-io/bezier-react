function iconTemplate({ imports, componentName, props, interfaces, jsx }, { tpl }) {
  return tpl`
  ${imports}

  ${interfaces}

  import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

  import { createIconLabel, createBezierIcon } from '../utils'

  const label = createIconLabel('${componentName}')

  function ${componentName}(${props}) {
    const Svg = ${jsx}

    return (
      <AccessibleIcon.Root label={label}>
        { Svg }
      </AccessibleIcon.Root>
    )
  }

  export default createBezierIcon(${componentName})
`
}

module.exports = iconTemplate
