import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { DiscoverWrapper, TopMenu } from "./style";
import { dicoverMenu } from "@/common/local-data";

export default memo(function Discover(props) {
  const { route } = props;
  return (
    <div>
      <DiscoverWrapper>
        <div className="top">
          <TopMenu className="wrap-v1">
            {dicoverMenu.map((item) => {
              return (
                <div className="item" key={item.link}>
                  <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              );
            })}
          </TopMenu>
        </div>
        {renderRoutes(route.routes)}
      </DiscoverWrapper>
    </div>
  );
});
