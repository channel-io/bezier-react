
import styles from '~/src/beta/BaseStack/BaseStack.module.scss'
import { render } from '~/src/utils/test'

import { VStack } from './VStack'


describe('VStack', () => {
  it('should render vertical stack', () => {
    const { getByText } = render(<VStack>Hello, Channel!</VStack>)
    const rendered = getByText('Hello, Channel!')

    expect(rendered).toHaveClass(styles.BaseStack)
    expect(rendered).toHaveClass(styles['direction-vertical'])
  })
})
