import {
  act,
  renderHook,
} from '@testing-library/react'

import {
  ToastAppearance,
  type ToastType,
} from './Toast.types'
import useToastContextValues from './useToastContextValues'

const UUID_V4_REGEX = /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i

describe('ToastService', () => {
  it('leftToasts', () => {
    const { result } = renderHook(() => useToastContextValues())

    expect(result.current.leftToasts).toStrictEqual([])
  })

  it('rightToasts', () => {
    const { result } = renderHook(() => useToastContextValues())

    expect(result.current.rightToasts).toStrictEqual([])
  })

  it('add()', () => {
    const { result } = renderHook(() => useToastContextValues())

    act(() => {
      result.current.add('0')
    })

    expect(result.current.leftToasts).toStrictEqual([
      expect.objectContaining({
        id: expect.stringMatching(UUID_V4_REGEX),
        content: '0',
        iconName: 'info-filled',
        appearance: ToastAppearance.Info,
        autoDismiss: false,
        rightSide: false,
        version: 0,
      }),
    ])
  })

  describe('update()', () => {
    it('not found', () => {
      const { result } = renderHook(() => useToastContextValues())

      act(() => {
        expect(result.current.update('0', 'Not found')).toBe('')
      })
    })

    it('updated', () => {
      const { result } = renderHook(() => useToastContextValues())

      act(() => {
        result.current.add('0')
      })
      const targetIndex = 0
      const targetToast = result.current.leftToasts[targetIndex]
      const updateTargetToast: ToastType = {
        ...targetToast,
        content: 'New Toast',
      }
      act(() => {
        expect(result.current.update(updateTargetToast.id, updateTargetToast.content)).toBe(updateTargetToast.id)
      })
      expect(result.current.leftToasts[targetIndex]).toStrictEqual({
        ...updateTargetToast,
        version: 1,
      })
      expect(result.current.rightToasts).toStrictEqual([])
    })
  })

  it('remove()', () => {
    const { result } = renderHook(() => useToastContextValues())

    let toastId
    act(() => {
      toastId = result.current.add('0')
    })
    expect(result.current.leftToasts).toStrictEqual([
      expect.objectContaining({
        id: expect.stringMatching(UUID_V4_REGEX),
        content: '0',
        iconName: 'info-filled',
        appearance: ToastAppearance.Info,
        autoDismiss: false,
        rightSide: false,
        version: 0,
      }),
    ])
    act(() => {
      result.current.remove(toastId)
    })
    expect(result.current.leftToasts).toStrictEqual([])
    expect(result.current.rightToasts).toStrictEqual([])
  })

  it('removeAll()', () => {
    const { result } = renderHook(() => useToastContextValues())

    act(() => {
      result.current.add('0')
    })

    expect(result.current.leftToasts).toStrictEqual([
      expect.objectContaining({
        id: expect.stringMatching(UUID_V4_REGEX),
        content: '0',
        iconName: 'info-filled',
        appearance: ToastAppearance.Info,
        autoDismiss: false,
        rightSide: false,
        version: 0,
      }),
    ])

    act(() => {
      result.current.removeAll()
    })
    expect(result.current.leftToasts).toStrictEqual([])
    expect(result.current.rightToasts).toStrictEqual([])
  })

  it('dismiss()', () => {
    const onDismiss = jest.fn()
    const { result } = renderHook(() => useToastContextValues())

    let toastId
    act(() => {
      toastId = result.current.add('0')
    })
    expect(result.current.leftToasts).toStrictEqual([
      expect.objectContaining({
        id: expect.stringMatching(UUID_V4_REGEX),
        content: '0',
        iconName: 'info-filled',
        appearance: ToastAppearance.Info,
        autoDismiss: false,
        rightSide: false,
        version: 0,
      }),
    ])
    act(() => {
      result.current.dismiss(toastId, onDismiss)
    })
    expect(onDismiss).toBeCalledTimes(1)
    expect(result.current.leftToasts).toStrictEqual([])
    expect(result.current.rightToasts).toStrictEqual([])
  })
})
