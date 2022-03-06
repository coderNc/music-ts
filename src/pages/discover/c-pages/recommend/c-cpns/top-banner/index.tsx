import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Carousel } from "antd";
import { CarouselRef } from "antd/lib/carousel";
import { getTopBannersAction } from "../../store/actionCreators";
import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from "./style";

const TopBanner = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const bannerRef = useRef<CarouselRef>(null);


  // useSelector 取出state的hooks --- 第一个参数：回调 state => {}
  // 第二个参数 equalityFn 是否进行浅层比较（性能优化）， 默认是需要的
  const { topBanners } = useSelector(
    (state) => ({
      // 当数据转换为immutable时， 需要使用get获取数据
      // topBanners: state?.get('recommend')?.get('topBanners')
      topBanners: state?.getIn?.(["recommend", "topBanners"]),
    }),
    shallowEqual
  );
  // useDispatch  生成dispatch的hooks
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopBannersAction());
  }, [dispatch]);




  const bannerChange = useCallback((from, to) => {
    setTimeout(() => {
      setCurrentIndex(to);
    }, 0);
  }, []);

  const bgImage = topBanners?.[currentIndex]?.imageUrl && topBanners?.[currentIndex]?.imageUrl + '?imageView&blur=40x20'
  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            effect="fade"
            autoplay
            ref={bannerRef}
            beforeChange={bannerChange}
          >
            {topBanners.map((item: any, index: number) => {
              return (
                <div className="banner-item" key={item?.imageUrl}>
                  <img
                    className="image"
                    src={item?.imageUrl}
                    alt={item?.typeTitle}
                  />
                </div>
              );
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight />
        <BannerControl>
          <button className="btn left" onClick={e => bannerRef?.current?.prev()} />
          <button className="btn right" onClick={e => bannerRef?.current?.next()} />
        </BannerControl>
      </div>
    </BannerWrapper>
  );
});

export default TopBanner;
