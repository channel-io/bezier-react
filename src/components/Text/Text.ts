/* Internal dependencies */
import Text from './Text.renderer'
import TextProps from './Text.types'
import createComponent from '../../foundation/componentFactory/createComponent'

export default createComponent<TextProps>({
  render: Text,
  displayName: 'ChannelText',
})
