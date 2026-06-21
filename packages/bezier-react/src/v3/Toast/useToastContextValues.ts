import { useCallback, useMemo, useState } from 'react'

import { noop } from '~/src/utils/function'

import {
  type OnDismissCallback,
  type ToastContent,
  type ToastContextValue,
  type ToastId,
  type ToastOptions,
  type ToastType,
} from './Toast.types'
import ToastService from './ToastService'

interface UseToastContextValuesReturns extends ToastContextValue {
  leftToasts: ToastType[]
  rightToasts: ToastType[]
  dismiss: (id: ToastId, callback?: OnDismissCallback) => void
}

function useToastContextValues(): UseToastContextValuesReturns {
  const leftToastService = useMemo(() => new ToastService(), [])
  const rightToastService = useMemo(() => new ToastService(), [])
  const [leftToasts, setLeftToasts] = useState<ToastType[]>([])
  const [rightToasts, setRightToasts] = useState<ToastType[]>([])

  const add = useCallback(
    (content: ToastContent, options?: ToastOptions) => {
      let result = ''

      if (options?.rightSide) {
        result = rightToastService.add(content, options)
        setRightToasts(rightToastService.getToasts())
      } else {
        result = leftToastService.add(content, options)
        setLeftToasts(leftToastService.getToasts())
      }

      return result
    },
    [leftToastService, rightToastService]
  )

  const update = useCallback(
    (toastId: ToastId, content: ToastContent, options?: ToastOptions) => {
      let result = ''

      if (options?.rightSide) {
        result = rightToastService.update(toastId, content, options)
        setRightToasts(rightToastService.getToasts())
      } else {
        result = leftToastService.update(toastId, content, options)
        setLeftToasts(leftToastService.getToasts())
      }

      return result
    },
    [leftToastService, rightToastService]
  )

  const remove = useCallback(
    (toastId: ToastId) => {
      if (leftToastService.remove(toastId)) {
        setLeftToasts(leftToastService.getToasts())
      }

      if (rightToastService.remove(toastId)) {
        setRightToasts(rightToastService.getToasts())
      }
    },
    [leftToastService, rightToastService]
  )

  const removeAll = useCallback(() => {
    leftToastService.removeAll()
    rightToastService.removeAll()
    setLeftToasts(leftToastService.getToasts())
    setRightToasts(rightToastService.getToasts())
  }, [leftToastService, rightToastService])

  const dismiss = useCallback(
    (toastId: ToastId, callback: OnDismissCallback = noop) => {
      callback(toastId)
      remove(toastId)
    },
    [remove]
  )

  return useMemo<UseToastContextValuesReturns>(
    () => ({
      add,
      update,
      remove,
      removeAll,
      leftToasts,
      rightToasts,
      dismiss,
    }),
    [add, update, remove, removeAll, leftToasts, rightToasts, dismiss]
  )
}

export default useToastContextValues
