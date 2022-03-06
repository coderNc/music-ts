import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";
// 为了使浏览器插件生效
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// createStore: 第一个参数： reducer, 第二个参数： 合并中间件
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
