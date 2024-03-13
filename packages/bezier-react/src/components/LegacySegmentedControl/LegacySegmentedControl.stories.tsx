import React, {
  useCallback,
  useRef,
  useState,
} from 'react'

import {
  CancelIcon,
  PlusIcon,
} from '@channel.io/bezier-icons'
import {
  type Meta,
  type StoryFn,
} from '@storybook/react'

import { styled } from '~/src/foundation'

import { range } from '~/src/utils/number'
import { isEmpty } from '~/src/utils/type'

import { Icon } from '~/src/components/Icon'
import { Text } from '~/src/components/Text'

import LegacySegmentedControl from './LegacySegmentedControl'
import type LegacySegmentedControlProps from './LegacySegmentedControl.types'
import { LegacySegmentedControlSize } from './LegacySegmentedControl.types'

export default {
  component: LegacySegmentedControl,
  argTypes: {
    width: {
      control: {
        type: 'text',
      },
    },
    size: {
      control: {
        type: 'radio',
      },
      options: [...Object.values(LegacySegmentedControlSize)],
    },
  },
} as Meta

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const ItemList = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: column;
`

const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  height: 38px;
  padding: 6px 6px 6px 12px;
  background-color: lightpink;

  &:first-child {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  &:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  &:not(first-child) {
    margin-top: 4px;
  }

  &:nth-child(even) {
    background-color: skyblue;
  }
`

const InputItem = styled(Item)`
  background-color: lightgrey !important;
`

const CurrentItem = styled.div<{ selected: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 30px;
  padding: 0 4px;

  ${props => (props.selected ? `
    &::after {
      display: block;
      content: '👉'
    }
  ` : '')}
`

const ItemText = styled(Text)`
  flex: 1 0 auto;
`

const ItemIcon = styled(Icon)<{ disabled?: boolean }>`
  cursor: ${props => (!props.disabled ? 'pointer' : 'not-allowed')};
`

const Input = styled.input`
  margin: 0 8px 0 0;
  padding: 0;
  flex: 1 0 auto;
  border: none;
  background-color: transparent;

  &:active, &:focus {
    border: none;
    outline: none;
  }
`

const PrimaryStory: StoryFn<LegacySegmentedControlProps> = ({
  size,
  width,
  selectedOptionIndex,
  ...otherProps
}) => (
  <LegacySegmentedControl
    size={size}
    width={width}
    selectedOptionIndex={selectedOptionIndex}
    {...otherProps}
  >
    { ['Open', 'Snoozed', 'Closed'] }
  </LegacySegmentedControl>
)

const PlaygroundStory: StoryFn<LegacySegmentedControlProps> = ({
  size,
  width,
  ...otherProps
}) => {
  const inputWrapper = useRef<HTMLInputElement>(null)

  const [items, setItems] = useState<any>(range(0, 5) as any[])
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const clickRemoveIconHandlerFactory = useCallback((index) => (
    () => {
      if (items.length > 1) {
        setItems(prev => prev.filter((e, i) => (i !== index)))
        setCurrentIndex(Math.min(items.length - 2, currentIndex))
      }
    }
  ), [
    items,
    currentIndex,
  ])

  const handleClickAddIcon = useCallback(() => {
    if (inputWrapper.current && inputWrapper.current.value) {
      setItems((prev) => [...prev, inputWrapper.current!.value])
      inputWrapper.current.value = ''
    }
  }, [])

  const handleDownEnter = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.stopPropagation()
      const value = e.currentTarget.value
      if (!isEmpty(value.trim())) {
        setItems(prev => [...prev, value])
        e.currentTarget.value = ''
      }
    }
  }, [])

  const handleChangeOption = useCallback((index) => {
    setCurrentIndex(index)
  }, [])

  return (
    <Wrapper>
      <LegacySegmentedControl
        size={size}
        width={width}
        selectedOptionIndex={currentIndex}
        onChangeOption={handleChangeOption}
        {...otherProps}
      >
        { items }
      </LegacySegmentedControl>

      <ItemList>
        { items.map((item, index, allItems) => (
          <Item key={index}>
            <CurrentItem selected={currentIndex === index} />
            <ItemText>{ item }</ItemText>
            <ItemIcon
              source={CancelIcon}
              color="txt-white-normal"
              disabled={allItems.length === 1}
              onClick={clickRemoveIconHandlerFactory(index)}
            />
          </Item>
        )) }

        <InputItem>
          <Input
            ref={inputWrapper}
            placeholder="Input new value"
            onKeyUp={handleDownEnter}
          />
          <ItemIcon
            source={PlusIcon}
            color="txt-white-normal"
            onClick={handleClickAddIcon}
          />
        </InputItem>
      </ItemList>
    </Wrapper>
  )
}

export const Primary = {
  render: PrimaryStory,

  args: {
    disabled: false,
    size: LegacySegmentedControlSize.M,
    width: '400px',
    selectedOptionIndex: 0,
  },
}

export const Playground = {
  render: PlaygroundStory,

  args: {
    disabled: false,
    size: LegacySegmentedControlSize.M,
    width: '400px',
  },
}