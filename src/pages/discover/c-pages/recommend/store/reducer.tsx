import { Map } from 'immutable'
import * as actionType from './constants'
import { ModifyAction } from './actionCreators';

const defaultState = Map<{}>({
  topBanners: [],
  recommend: [],
})

function reducer(state = defaultState, action: ModifyAction) {
  switch (action?.type) {
    case actionType?.CHANGE_TOP_BANNERS:
      return state?.set('topBanners', action?.topBanners)
    case actionType?.CHANGE_HOT_RECOMMEND:
      return state?.set('recommend', action?.recommend)
    default:
      return state
  }
}

export default reducer
