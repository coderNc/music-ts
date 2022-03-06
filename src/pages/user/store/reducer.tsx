import { Map } from 'immutable'
import * as actionType from './constants'
import { ModifyAction } from './actionCreators';

const defaultState = Map<{}>({
  userInfo: {}
})

function reducer(state = defaultState, action: ModifyAction) {
  console.log(action, '=======');
  switch (action?.type) {
    case actionType?.CHANGE_USER_INFO:
      
      
      return state?.set('userInfo', action?.userInfo)
    default:
      return state
  }
}

export default reducer
