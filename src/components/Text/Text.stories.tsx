/* External dependencies */
import React from 'react'

/* Internal dependencies */
import Text from './Text'

export default {
  title: 'Text',
}

export const Primary = () => <Text content="hello" />

export const WithStyle = () => <Text content="hello" styles={{ color: 'green' }}/>
