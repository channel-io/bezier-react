
import styles from '~/src/beta/BaseStack/BaseStack.module.scss'
import { render } from '~/src/utils/test'

import { HStack } from './HStack'


describe('HStack', () => {
  it('should render horizontal stack', () => {
    const { getByText } = render(<HStack>Hello, Channel!</HStack>)
    const rendered = getByText('Hello, Channel!')

    expect(rendered).toHaveClass(styles.BaseStack)
    expect(rendered).toHaveClass(styles['direction-horizontal'])
  })
})
