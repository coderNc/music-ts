import React, { FC, memo } from "react";
import { NavLink } from "react-router-dom";

import { BlockHeaderWrapper } from "./style";

type keyWord = {
  title: string;
  link: string;
};

type AppProps = {
  title: string;
  keyWord?: keyWord[];
  hasMore?: boolean;
  moreData?: keyWord;
};

const BlockHeader: FC<AppProps> = memo((props) => {
  const { title, keyWord, hasMore, moreData } = props;

  const renderTab = () => {
    return keyWord && keyWord?.length ? (
      <div className="keyword">
        {keyWord.map((item, index) => {
          return (
            <div key={index} className="item">
              <NavLink to={item?.link}>{item?.title}</NavLink>
              <span className="divider">|</span>
            </div>
          );
        })}
      </div>
    ) : null;
  };

  const renderRight = () => {
    return hasMore && moreData ? (
      <div className="right">
        <NavLink to={moreData?.link}>{moreData?.title}</NavLink>
        <i className="icon sprite_02"></i>
      </div>
    ) : null;
  };

  return (
    <BlockHeaderWrapper className="sprite_02">
      <div className="left">
        <h2 className="title">{title}</h2>
        {renderTab()}
      </div>
      {renderRight()}
    </BlockHeaderWrapper>
  );
});

export default BlockHeader;
