import { Dispatch } from 'redux';
import { CHANGE_TOP_BANNERS, CHANGE_TOP_BANNERS_TYPE } from "./constants";

import { getTopBanners } from "@/services/recommend";

export interface ICHANGE_TOP_BANNERS_Action {
  type: CHANGE_TOP_BANNERS_TYPE
  topBanners: any[]
}

export type ModifyAction = ICHANGE_TOP_BANNERS_Action

const changeTopBannersAction = (res: any): ICHANGE_TOP_BANNERS_Action => ({
  type: CHANGE_TOP_BANNERS,
  topBanners: res?.banners,
});

export const getTopBannersAction = () => {
  return async (dispatch: Dispatch) => {
    const res = await getTopBanners();
    dispatch(changeTopBannersAction(res));
  }
}
