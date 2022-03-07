import React, { FC, memo } from "react";
import { NavLink } from "react-router-dom";
import { getCount, getSizeImage } from "@/utils/format";
import { CardWrapper } from "./style";

export interface Props {
  data: any;
  index: number;
}

const Card: FC<Props> = memo((props) => {
  const { data } = props;
  return (
    <CardWrapper>
      <div className="cover-top">
        <img src={getSizeImage(data?.picUrl, 140)} alt="" />
        <div className="cover sprite_covor">
          <div className="info sprite_covor">
            <span>
              <a
                href="#"
                onClick={(e) => {
                  console.log("play");
                }}
              >
                <i className="sprite_icon erji"></i>
              </a>
              {getCount(data?.playcount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom text-nowrap">
        <NavLink to={`/playlist?id=${data?.id}`} title={data?.name}>
          {data?.name}
        </NavLink>
      </div>
      <div className="cover-source text-nowrap">
        <span title={data?.copywriter || data?.creator.nickname}>
          {data?.copywriter || data?.creator.nickname}
        </span>
      </div>
    </CardWrapper>
  );
});

export default Card;
