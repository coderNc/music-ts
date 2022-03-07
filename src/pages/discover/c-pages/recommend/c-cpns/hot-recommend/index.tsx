import React, { FC, memo, useEffect } from "react";
import BlockHeader from "@/components/block-header";
import Card from "@/components/card";
import { HotRecommendWrapper } from "./style";
import { getHotRecommendAction } from "../../store/actionCreators";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

const HotRecommend: FC = memo(() => {
  const params = {
    title: "热门推荐",
    keyWord: [
      { title: "华语", link: "/discover/playlist/?cat=华语" },
      { title: "流行", link: "/discover/playlist/?cat=流行" },
      { title: "民谣", link: "/discover/playlist/?cat=民谣" },
      { title: "摇滚", link: "/discover/playlist/?cat=摇滚" },
      { title: "电子", link: "/discover/playlist/?cat=电子" },
    ],
    hasMore: true,
    moreData: { title: "更多", link: "/discover/playlist/" },
  };
  const { recommend } = useSelector(
    (state) => ({
      recommend: state?.getIn(["recommend", "recommend"]),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHotRecommendAction());
  }, [dispatch]);

  return (
    <HotRecommendWrapper>
      <BlockHeader {...params}></BlockHeader>
      <div className="recommend-list">
        {recommend?.map?.((item: any, index: number) => {
          return <Card key={index} data={item} index={index} />;
        })}
      </div>
    </HotRecommendWrapper>
  );
});

export default HotRecommend;
