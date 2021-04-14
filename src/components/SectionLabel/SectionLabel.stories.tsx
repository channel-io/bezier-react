/* External dependencies */
import React, { useState } from 'react'
import base from 'paths.macro'
import _ from 'lodash-es'

/* Internal dependencies */
import { css, Typography } from '../../foundation'
import { getTitle } from '../../utils/etcUtils'
import { ListItem } from '../List/ListItem'
import { Text } from '../Text'
import SectionLabel from './SectionLabel'

export default {
  title: getTitle(base),
  component: SectionLabel,
}

const testNumberLabel = (
  <div
    style={{
      width: '30px',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.05)',
      borderRadius: 6,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Text typo={Typography.Size13}>1</Text>
  </div>
)

const testWrapperInterpolation = css`
  background-color: red;
`

const Template = ({ listItemProps, wrapperWidth, ...otherSectionLabelProps }) => {
  const [open, setOpen] = useState(true)
  const toggle = () => setOpen(v => !v)

  return (
    <div style={{ width: wrapperWidth }}>
      <SectionLabel
        {...otherSectionLabelProps}
      />
      <SectionLabel
        right={{
          icon: 'plus-circle',
          iconColor: 'bgtxt-teal-normal',
          onClick: _.noop,
        }}
        {...otherSectionLabelProps}
      />
      <SectionLabel
        right={{
          content: (
            <Text typo={Typography.Size13}>5</Text>
          ),
        }}
        {...otherSectionLabelProps}
      />
      <SectionLabel
        left={{ icon: 'star-filled' }}
        {...otherSectionLabelProps}
      />
      <SectionLabel
        left={{
          icon: 'star-filled',
          iconColor: 'bgtxt-yellow-normal',
          onClick: _.noop,
        }}
        {...otherSectionLabelProps}
      />
      <SectionLabel
        left={{
          content: (
            <div style={{ backgroundColor: 'red', width: 20, height: 20 }} />
          ),
        }}
        {...otherSectionLabelProps}
      />
      <SectionLabel
        left={{ icon: 'star-filled' }}
        {...otherSectionLabelProps}
        content="Teams • 3141592653589794626"
      />
      <SectionLabel
        left={{ icon: 'star-filled' }}
        right={[
          { content: testNumberLabel },
          { icon: 'plus-circle-filled', onClick: _.noop },
          { icon: 'chevron-up', iconColor: 'txt-black-darkest', onClick: _.noop },
        ]}
        {...otherSectionLabelProps}
        content="Teams • 3141592653589794626"
      />
      <SectionLabel
        right={{ icon: open ? 'chevron-down' : 'chevron-right' }}
        {...otherSectionLabelProps}
        open={open}
        onClick={toggle}
      >
        <ListItem
          leftIcon="star-filled"
          content="안 읽은 메시지"
          {...listItemProps}
        />
        <ListItem
          leftIcon="view"
          content="팔로잉"
          {...listItemProps}
        />
      </SectionLabel>
      <SectionLabel
        help={{ tooltipContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }}
        right={{ icon: open ? 'chevron-down' : 'chevron-right' }}
        {...otherSectionLabelProps}
      />
      <SectionLabel
        right={{ icon: open ? 'chevron-down' : 'chevron-right' }}
        wrapperInterpolation={testWrapperInterpolation}
        {...otherSectionLabelProps}
      />
    </div>
  )
}

export const Primary = Template.bind({})

Primary.args = {
  content: 'Teams • 6',
  divider: false,
  listItemProps: {
    paddingLeft: 6,
  },
  wrapperWidth: 200,
}

Primary.argTypes = {
  wrapperWidth: {
    control: {
      type: 'range',
      min: 100,
      max: 300,
    },
  },
}
