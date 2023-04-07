import React, {
  createContext,
  forwardRef,
  useContext,
  useMemo,
} from 'react'

import classNames from 'classnames'

import {
  type SegmentedControlProps,
  SegmentedControlSize,
  type SegmentedControlType,
} from './SegmentedControl.types'
import { SegmentedControlRadioGroup } from './SegmentedControlRadioGroup'
import { SegmentedControlTabs } from './SegmentedControlTabs'

import * as Styled from './SegmentedControl.styled'

type SegmentedControlContextValue = Required<Pick<SegmentedControlProps<SegmentedControlType, string>, 'type' | 'size'>>

const SegmentedControlContext = createContext<SegmentedControlContextValue | null>(null)

// TODO: (@ed) Evolve it into a commonly reusable hook
export function useSegmentedControlContext(consumerName: string) {
  const contextValue = useContext(SegmentedControlContext)

  if (!contextValue) {
    throw new Error(`\`${consumerName}\` must be used within \`SegmentedControl\``)
  }

  return contextValue
}

function SegmentedControlImpl<
  Type extends SegmentedControlType,
  Value extends string,
>({
  type = 'radiogroup' as Type,
  size = SegmentedControlSize.M,
  width = '100%',
  style: styleProp,
  className: classNameProp,
  onValueChange,
  children,
  ...rest
}: SegmentedControlProps<Type, Value>, forwardedRef: React.Ref<HTMLDivElement>) {
  const SegmentedControl = type === 'radiogroup'
    ? SegmentedControlRadioGroup
    : SegmentedControlTabs

  const contextValue = useMemo(() => ({
    type,
    size,
  }), [
    type,
    size,
  ])

  const style = useMemo(() => ({
    ...styleProp,
    '--bezier-react-segmented-control-width': width,
  }), [
    styleProp,
    width,
  ])

  const className = classNames(
    classNameProp,
    size,
  )

  return (
    <SegmentedControl
      ref={forwardedRef}
      style={style}
      className={className}
      size={size}
      onValueChange={onValueChange}
      {...rest}
    >
      <SegmentedControlContext.Provider value={contextValue}>
        { /* TODO: Conditional render */ }
        <Styled.Indicator />
        { children }
      </SegmentedControlContext.Provider>
    </SegmentedControl>
  )
}

export const SegmentedControl = forwardRef(SegmentedControlImpl) as <
  Type extends SegmentedControlType,
  Value extends string,
>(
  props: SegmentedControlProps<Type, Value> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => ReturnType<typeof SegmentedControlImpl<Type, Value>>
