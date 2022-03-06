import React, { FC, memo, useEffect } from "react";
import BlockHeader from "@/components/block-header";
import { HotRecommendWrapper } from "./style";
import { getResource } from '@/services/recommend'

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
    moreData: { title: '更多', link: '/discover/playlist/' }
  };
  useEffect(() => {
    getResource();
  }, [])
  return (
    <HotRecommendWrapper>
      <BlockHeader { ...params }></BlockHeader>
      HELLO
    </HotRecommendWrapper>
  );
});

export default HotRecommend;
