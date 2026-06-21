import { renderHook, waitFor } from '@testing-library/react'

import { type ToastType } from './Toast.types'
import useToastContextValues from './useToastContextValues'

const UUID_V4_REGEX =
  /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i

describe('useToastContextValues', () => {
  it('initializes toasts', () => {
    const { result } = renderHook(() => useToastContextValues())

    expect(result.current.leftToasts).toStrictEqual([])
    expect(result.current.rightToasts).toStrictEqual([])
  })

  it('adds a left toast', async () => {
    const { result } = renderHook(() => useToastContextValues())

    await waitFor(() => {
      result.current.add('0')

      expect(result.current.leftToasts).toStrictEqual([
        expect.objectContaining({
          autoDismiss: false,
          rightSide: false,
          id: expect.stringMatching(UUID_V4_REGEX),
          content: '0',
          version: 0,
        }),
      ])
    })
  })

  it('adds a right toast', async () => {
    const { result } = renderHook(() => useToastContextValues())

    await waitFor(() => {
      result.current.add('0', { rightSide: true })

      expect(result.current.rightToasts).toStrictEqual([
        expect.objectContaining({
          rightSide: true,
          id: expect.stringMatching(UUID_V4_REGEX),
          content: '0',
          version: 0,
        }),
      ])
    })
  })

  it('returns empty string when update target is not found', async () => {
    const { result } = renderHook(() => useToastContextValues())

    await waitFor(() => {
      expect(result.current.update('0', 'Not found')).toBe('')
    })
  })

  it('updates a toast', async () => {
    const { result } = renderHook(() => useToastContextValues())

    await waitFor(() => {
      result.current.add('0')
    })

    const targetIndex = 0
    const targetToast = result.current.leftToasts[targetIndex]
    const updateTargetToast: ToastType = {
      ...targetToast,
      content: 'New Toast',
    }

    await waitFor(() => {
      expect(
        result.current.update(updateTargetToast.id, updateTargetToast.content)
      ).toBe(updateTargetToast.id)
    })

    expect(result.current.leftToasts[targetIndex]).toStrictEqual({
      ...updateTargetToast,
      version: 1,
    })
    expect(result.current.rightToasts).toStrictEqual([])
  })

  it('removes a toast', async () => {
    const { result } = renderHook(() => useToastContextValues())

    let toastId: string
    await waitFor(() => {
      toastId = result.current.add('0')
    })

    await waitFor(() => {
      result.current.remove(toastId)
    })

    expect(result.current.leftToasts).toStrictEqual([])
    expect(result.current.rightToasts).toStrictEqual([])
  })

  it('removes all toasts', async () => {
    const { result } = renderHook(() => useToastContextValues())

    await waitFor(() => {
      result.current.add('0')
    })

    await waitFor(() => {
      result.current.removeAll()
    })

    expect(result.current.leftToasts).toStrictEqual([])
    expect(result.current.rightToasts).toStrictEqual([])
  })

  it('dismisses a toast', async () => {
    const onDismiss = jest.fn()
    const { result } = renderHook(() => useToastContextValues())

    let toastId: string
    await waitFor(() => {
      toastId = result.current.add('0')
    })

    await waitFor(() => {
      result.current.dismiss(toastId, onDismiss)
    })

    expect(onDismiss).toHaveBeenCalledTimes(1)
    expect(result.current.leftToasts).toStrictEqual([])
    expect(result.current.rightToasts).toStrictEqual([])
  })
})
