import LayoutReducer, { defaultState } from './LayoutReducer'
import AT from './LayoutActionTypes'

describe('LayoutReducer 함수 테스트', () => {
  it('setShowingHidableNavigations 정상 작동 테스트', () => {
    expect(
      LayoutReducer(
        defaultState,
        {
          type: AT.SET_SHOWING_HIDABLE_NAVIGATIONS,
          payload: new Set(['userChat', 'teamChat']),
        },
      ),
    ).toEqual({
      ...defaultState,
      showingHidableNavigations: new Set(['userChat', 'teamChat']),
    })
  })

  it('addShowingHidableNavigation 정상 작동 테스트', () => {
    expect(
      LayoutReducer(
        defaultState,
        {
          type: AT.ADD_SHOWING_HIDABLE_NAVIGATION,
          payload: 'userChat',
        },
      ),
    ).toEqual({
      ...defaultState,
      showingHidableNavigations: new Set(['userChat']),
    })
  })

  it('addShowingHidableNavigation 중복값 추가 정상 작동 테스트', () => {
    const presetState = {
      ...defaultState,
      showingHidableNavigations: new Set(['userChat']),
    }

    expect(
      LayoutReducer(
        presetState,
        {
          type: AT.ADD_SHOWING_HIDABLE_NAVIGATION,
          payload: 'userChat',
        },
      ),
    ).toEqual({
      ...defaultState,
      showingHidableNavigations: new Set(['userChat']),
    })
  })

  it('removeShowingHidableNavigation 정상 작동 테스트', () => {
    const presetState = {
      ...defaultState,
      showingHidableNavigations: new Set(['teamChat', 'userChat']),
    }

    expect(
      LayoutReducer(
        presetState,
        {
          type: AT.REMOVE_SHOWING_HIDABLE_NAVIGATION,
          payload: 'userChat',
        },
      ),
    ).toEqual({
      ...defaultState,
      showingHidableNavigations: new Set(['teamChat']),
    })
  })
})
