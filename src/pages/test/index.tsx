import { Button } from "antd";
import { loginByPassword } from "@/services/user";
import React, { memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { getUserInfoAction } from "../user/store/actionCreators";

const Test = memo((props) => {
  const dispatch = useDispatch();
  const params = {
    phone: 13279124396,
    password: "niuchaoasd00...",
  };
  const login = () => {
    dispatch(getUserInfoAction(params));
  };

  return (
    <div>
      <Button onClick={login}>登录</Button>
    </div>
  );
});

export default Test;
