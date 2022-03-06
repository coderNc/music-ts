import React, { memo, Suspense } from "react";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";
import routes from "./router";
import store from "./store";
import { HashRouter } from "react-router-dom";
import AppFooter from "@/components/app-footer";
import AppHeader from "@/components/app-header";
import Test from '@/pages/test'

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <AppHeader />
        <Test />
        <Suspense fallback={<div>page loading</div>}>
          {renderRoutes(routes)}
        </Suspense>
        <AppFooter />
      </HashRouter>
    </Provider>
  );
}

export default memo(App);
