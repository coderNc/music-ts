import React, { FC, memo } from "react";
import { NavLink } from "react-router-dom";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { HeaderWrapper, HeaderLeft, HeaderRight } from "./style";
import { headerLinks } from "@/common/local-data";

const AppHeader: FC = () => {
  // 页面代码
  const showSelectItem = (item: { title: string, link: string }, index: number) => {
    const selectItem =
      index < 3 ? (
        <NavLink to={item.link}>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      ) : (
        <a href={item.link} target="_blank">
          {item.title}
        </a>
      );
    return selectItem;
  };
  return (
    <div>
      <HeaderWrapper>
        <div className="content wrap-v1">
          <HeaderLeft>
            <a href="#/" className="logo sprite_01" />
            <div className="select-list">
              {headerLinks.map((item, index) => {
                return (
                  <div key={index} className="select-item">
                    {showSelectItem(item, index)}
                  </div>
                );
              })}
            </div>
          </HeaderLeft>
          <HeaderRight>
            <Input
              className="serach"
              placeholder="音乐/视频/电台/用户"
              prefix={<SearchOutlined />}
            />
            <a
              className="center"
              href="https://music.163.com/#/creatorcenter?module=creatorcenter"
              target="_blank"
            >
              创作者中心
            </a>
            <div>登录</div>
          </HeaderRight>
        </div>
        <div className="divider"></div>
      </HeaderWrapper>
    </div>
  );
}

export default memo(AppHeader);
