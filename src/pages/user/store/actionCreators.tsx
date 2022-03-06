import { Dispatch } from 'redux';
import { CHANGE_USER_INFO, CHANGE_USER_INFO_TYPE } from "./constants";

import { loginByPassword } from "@/services/user";

export interface ICHANGE_USER_INFO_Action {
  type: CHANGE_USER_INFO_TYPE
  userInfo: any
}

export type ModifyAction = ICHANGE_USER_INFO_Action

const changeUserInfoAction = (res: any): ICHANGE_USER_INFO_Action => ({
  type: CHANGE_USER_INFO,
  userInfo: res,
});

export const getUserInfoAction = (params: any) => {
  return async (dispatch: Dispatch<ModifyAction>) => {
    const res = await loginByPassword(params);
    console.log(res, 'res');
    
    dispatch(changeUserInfoAction(res));
  }
}
