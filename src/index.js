import React from "react";
import ReactDOM from "react-dom";

import {
  HashRouter,
  Redirect,
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom";

import AuthLayout from "layouts/Auth.js";
import AdminLayout from "layouts/Admin.js";
import RTLLayout from "layouts/RTL.js";
import PageNotFound from "views/404/PageNotFound";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path={`/auth`} component={AuthLayout} />
      <Route path={`/admin`} component={AdminLayout} />
      <Route path={`/rtl`} component={RTLLayout} />
      <Redirect from="/" to="/admin/dashboard" />
      <Route path="*" element={<PageNotFound />} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
