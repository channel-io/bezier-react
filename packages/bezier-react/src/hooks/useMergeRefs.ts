import { useMemo } from 'react'

type ReactRef<Node> = React.RefCallback<Node> | React.MutableRefObject<Node | null>

type Ref<Node> = ReactRef<Node> | null | undefined
type Refs<Node> = Array<Ref<Node>>

function assignRef<Node>(
  ref: Ref<Node>,
  value: Node | null,
) {
  if (ref === null || ref === undefined) { return }

  if (typeof ref === 'function') {
    ref(value)
    return
  }

  try {
    ref.current = value
  } catch (error) {
    throw new Error(`Cannot assign value '${value}' to ref '${ref}'`)
  }
}

function mergeRefs<Node>(...refs: Refs<Node>) {
  return (node: Node | null) => {
    refs.forEach((ref) => {
      assignRef(ref, node)
    })
  }
}

export default function useMergeRefs<Node>(...refs: Refs<Node>) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => mergeRefs(...refs), refs)
}
