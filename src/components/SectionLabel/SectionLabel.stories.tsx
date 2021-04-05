/* External dependencies */
import React, { useState } from 'react'
import _ from 'lodash'
import base from 'paths.macro'

/* Internal dependencies */
import { Typography } from '../../foundation'
import { getTitle } from '../../utils/etcUtils'
import { ListItem } from '../List/ListItem'
import { Text } from '../Text'
import SectionLabel from './SectionLabel'

export default {
  title: getTitle(base),
  component: SectionLabel,
}

const Template = ({ listItemProps, wrapperWidth, ...otherSectionLabelProps }) => {
  const [open, setOpen] = useState(true)
  const toggle = () => setOpen(v => !v)

  return (
    <div style={{ width: wrapperWidth }}>
      <SectionLabel
        {...otherSectionLabelProps}
      />
      <SectionLabel
        rightIcon="plus-circle"
        rightIconColor="bgtxt-teal-normal"
        {...otherSectionLabelProps}
      />
      <SectionLabel
        rightContent={(
          <Text typo={Typography.Size13}>5</Text>
        )}
        {...otherSectionLabelProps}
      />
      <SectionLabel
        leftIcon="star-filled"
        {...otherSectionLabelProps}
      />
      <SectionLabel
        leftIcon="star-filled"
        leftIconColor="bgtxt-yellow-normal"
        {...otherSectionLabelProps}
      />
      <SectionLabel
        leftContent={(
          <div style={{ backgroundColor: 'red', width: 20, height: 20 }} />
        )}
        {...otherSectionLabelProps}
      />
      <SectionLabel
        leftIcon="star-filled"
        {...otherSectionLabelProps}
        content="Teams • 314159265358979"
      />
      <SectionLabel
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
        onClickRightContent={_.noop}
        {...otherSectionLabelProps}
      />
    </div>
  )
}

export const Primary = Template.bind({})

Primary.args = {
  content: 'Teams • 6',
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
