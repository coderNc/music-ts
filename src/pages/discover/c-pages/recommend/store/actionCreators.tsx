import { Dispatch } from 'redux';
import { CHANGE_TOP_BANNERS, CHANGE_TOP_BANNERS_TYPE, CHANGE_HOT_RECOMMEND, CHANGE_HOT_RECOMMEND_TYPE } from "./constants";

import { getTopBanners, getResource } from "@/services/recommend";

export interface ICHANGE_TOP_BANNERS_Action {
  type: CHANGE_TOP_BANNERS_TYPE
  topBanners: any[]
}
export interface CHANGE_HOT_RECOMMEND_Action {
  type: CHANGE_HOT_RECOMMEND_TYPE
  recommend: any[]
}

export type ModifyAction = ICHANGE_TOP_BANNERS_Action | CHANGE_HOT_RECOMMEND_Action

const changeTopBannersAction = (res: any): ICHANGE_TOP_BANNERS_Action => ({
  type: CHANGE_TOP_BANNERS,
  topBanners: res?.banners || [],
});
const changeHotRecommendAction = (res: any): CHANGE_HOT_RECOMMEND_Action => ({
  type: CHANGE_HOT_RECOMMEND,
  recommend: res?.recommend || [],
});

export const getTopBannersAction = () => {
  return async (dispatch: Dispatch<ModifyAction>) => {
    const res = await getTopBanners();
    dispatch(changeTopBannersAction(res));
  }
}

// 热门推荐
export const getHotRecommendAction = () => {
  return async (dispatch: Dispatch<ModifyAction>) => {
    const res = await getResource();
    dispatch(changeHotRecommendAction(res));
  }
}
